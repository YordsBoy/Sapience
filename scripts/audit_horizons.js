#!/usr/bin/env node
// scripts/audit_horizons.js
//
// Scans content/Individual_KSAs/**/*.md (skipping README.md files),
// extracts the `horizon` YAML field, and reports any non-standard values.
//
// Valid horizon values:
//   core | emerging | watch_2030 | perennial | peripheral
//
// Outputs:
//   reports/horizon_issues.json  — files with invalid/missing horizon values
//
// Usage:
//   node scripts/audit_horizons.js          # audit only
//   node scripts/audit_horizons.js --fix    # audit + auto-fix known mappings

const fs   = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

// ── Config ────────────────────────────────────────────────────────────────────
const ROOT        = path.resolve(__dirname, "..");
const SRC_GLOB    = "content/Individual_KSAs/**/*.md";
const REPORTS_DIR = path.join(ROOT, "reports");
const OUTPUT_FILE = path.join(REPORTS_DIR, "horizon_issues.json");

const VALID_HORIZONS = new Set(["core", "emerging", "watch_2030", "perennial", "peripheral"]);

// Known bad → good mappings for --fix mode
const AUTO_FIX_MAP = {
  "core_2025":   "core",
  "core_2026":   "core",
  "future":      "watch_2030",
  "watch2030":   "watch_2030",
  "watch_2030s": "watch_2030",
  "foundational": "core",
  "advanced":    "emerging",
};

const FIX_MODE = process.argv.includes("--fix");

// ── Setup ─────────────────────────────────────────────────────────────────────
fs.mkdirSync(REPORTS_DIR, { recursive: true });

// ── Scan ──────────────────────────────────────────────────────────────────────
const allFiles = glob.sync(SRC_GLOB, { cwd: ROOT, absolute: true });
const ksaFiles = allFiles.filter(f => path.basename(f).toLowerCase() !== "readme.md");

const issues   = [];
let fixedCount = 0;

for (const filePath of ksaFiles) {
  let raw;
  try {
    raw = fs.readFileSync(filePath, "utf8");
  } catch (e) {
    issues.push({ file: path.relative(ROOT, filePath), issue: "unreadable", current_value: null, suggested_fix: null });
    continue;
  }

  let parsed;
  try {
    parsed = matter(raw);
  } catch (e) {
    issues.push({ file: path.relative(ROOT, filePath), issue: "yaml_parse_error", current_value: null, suggested_fix: null });
    continue;
  }

  const horizon = parsed.data.horizon;

  if (horizon === undefined || horizon === null || horizon === "") {
    issues.push({
      file: path.relative(ROOT, filePath),
      issue: "missing",
      current_value: horizon ?? null,
      suggested_fix: null,
    });
    continue;
  }

  const horizonStr = String(horizon).trim();

  if (!VALID_HORIZONS.has(horizonStr)) {
    const suggested = AUTO_FIX_MAP[horizonStr] ?? null;
    issues.push({
      file: path.relative(ROOT, filePath),
      issue: "invalid",
      current_value: horizonStr,
      suggested_fix: suggested,
    });

    if (FIX_MODE && suggested) {
      // Replace the exact `horizon: <value>` line in the raw file
      const fixed = raw.replace(
        /^(horizon:\s*).*$/m,
        `$1${suggested}`
      );
      if (fixed !== raw) {
        fs.writeFileSync(filePath, fixed, "utf8");
        fixedCount++;
        console.log(`  FIXED  ${path.relative(ROOT, filePath)}  ${horizonStr} → ${suggested}`);
      }
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────
const fixable   = issues.filter(i => i.suggested_fix !== null);
const unfixable = issues.filter(i => i.suggested_fix === null && i.issue === "invalid");
const missing   = issues.filter(i => i.issue === "missing");

const report = {
  generated: new Date().toUTCString(),
  mode: FIX_MODE ? "audit+fix" : "audit",
  summary: {
    total_scanned: ksaFiles.length,
    total_issues:  issues.length,
    invalid_value: issues.filter(i => i.issue === "invalid").length,
    missing_value: missing.length,
    auto_fixable:  fixable.length,
    no_suggested_fix: unfixable.length,
    files_fixed:   fixedCount,
  },
  valid_horizons: [...VALID_HORIZONS],
  auto_fix_map:   AUTO_FIX_MAP,
  issues,
};

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(report, null, 2), "utf8");

// ── Console summary ───────────────────────────────────────────────────────────
console.log("\n" + "═".repeat(60));
console.log("  Horizon Audit" + (FIX_MODE ? " + Fix" : ""));
console.log("═".repeat(60));
console.log(`  Files scanned   : ${ksaFiles.length}`);
console.log(`  Total issues    : ${issues.length}`);
if (issues.length > 0) {
  console.log(`    Invalid value : ${issues.filter(i => i.issue === "invalid").length}`);
  console.log(`    Missing value : ${missing.length}`);
  console.log(`    Auto-fixable  : ${fixable.length}`);
  console.log(`    No fix mapped : ${unfixable.length}`);
}
if (FIX_MODE) {
  console.log(`  Files fixed     : ${fixedCount}`);
}
console.log("─".repeat(60));

if (issues.length === 0) {
  console.log("  All horizon values are valid.");
} else {
  if (!FIX_MODE && fixable.length > 0) {
    console.log(`\n  Re-run with --fix to auto-correct ${fixable.length} fixable issue(s):`);
    console.log("    node scripts/audit_horizons.js --fix");
  }
  console.log("\n  Issues:");
  for (const i of issues) {
    const fix = i.suggested_fix ? ` → "${i.suggested_fix}"` : " (no mapping — manual fix required)";
    const tag = i.issue === "missing" ? "[MISSING]" : "[INVALID]";
    console.log(`    ${tag} ${i.file}`);
    if (i.current_value !== null) console.log(`           current: "${i.current_value}"${fix}`);
  }
}

console.log("─".repeat(60));
console.log(`  Report written to reports/horizon_issues.json`);
console.log("═".repeat(60) + "\n");
