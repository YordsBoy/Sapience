#!/usr/bin/env node
// scripts/fix_ksa_bulk.js
//
// Bulk-fixes three systematic KSA authoring errors:
//   1. Wrong sector enum values  → correct schema values
//   2. Wrong horizon enum values → correct schema values
//   3. proficiency_levels items not indented (- level: at col 0 → 2-space indent)
//   4. Closing `---` of front-matter indented (strip leading whitespace)
//
// Safe to re-run: only writes files that actually change.

const fs   = require("fs");
const path = require("path");
const glob = require("glob");

const ROOT     = path.resolve(__dirname, "..");
const SRC_GLOB = "content/Individual_KSAs/**/*.md";

// ── Sector remapping ──────────────────────────────────────────────────────────
// Keys are wrong values found in files; values are the correct schema enum values.
const SECTOR_MAP = {
  Maker_Economy_Creative_Crafts:       "Maker_Creative_Crafts",
  Biotechnology_Synthetic_Biology:     "Biotechnology_SynBio",
  Mining_Extraction_OilGas:            "Mining_Extraction",
  Mining_Extraction_Minerals:          "Mining_Extraction",
  Government_Public_Administration:    "Government_Public_Admin",
  immersive_media_ARVR:                "Immersive_Media_ARVR",
  Immersive_Media_AR_VR_Metaverse:     "Immersive_Media_ARVR",
  healthcare_social_assistance:        "Healthcare_Social_Assistance",
  Unpaid_Caregiving_Domestic_Work:     "Unpaid_Caregiving",
  Space_Economy_Aerospace:             "Space_Economy",
  hospitality_tourism:                 "Hospitality_Tourism",
  finance_insurance:                   "Finance_Insurance",
  personal_other_services:             "Personal_Other_Services",
  nonprofit_ngos:                      "Nonprofit_NGO",
  Nonprofit_NGOs:                      "Nonprofit_NGO",
  media_arts_entertainment:            "Media_Arts_Entertainment",
  Environmental_Advanced_Energy:       "Env_Energy_Advanced",
  Environmental_Energy_Advanced:       "Env_Energy_Advanced",
  core_it_cloud:                       "Core_IT_Cloud",
  government_public_admin:             "Government_Public_Admin",
  informal_gray_economy:               "Informal_Gray_Economy",
  Administrative_Support_Services:     "Administrative_Support",
  administrative_support_services:     "Administrative_Support",
  ai_data_quantum:                     "AI_Data_Quantum",
  CrossSector_Leadership:              "cross_sector",
  Leadership_Influence:                "cross_sector",
  Digital_Content_Creation_Creator_Economy: "Digital_Content_Creator_Economy",
};

// ── Horizon remapping ─────────────────────────────────────────────────────────
const HORIZON_MAP = {
  core_2025: "core",
  future:    "watch_2030",
};

// ── Helpers ───────────────────────────────────────────────────────────────────

/**
 * Replace `sector: <wrong>` with `sector: <correct>` in the YAML front-matter.
 * Uses a regex anchored to line-start to avoid false positives in descriptions.
 */
function fixSectors(content) {
  let out = content;
  for (const [wrong, correct] of Object.entries(SECTOR_MAP)) {
    // Match `sector: VALUE` with optional trailing whitespace/comment
    const re = new RegExp(`^(sector:\\s*)${escapeRe(wrong)}(\\s*)$`, "m");
    out = out.replace(re, `$1${correct}$2`);
  }
  return out;
}

/**
 * Replace `horizon: <wrong>` in front-matter.
 */
function fixHorizons(content) {
  let out = content;
  for (const [wrong, correct] of Object.entries(HORIZON_MAP)) {
    const re = new RegExp(`^(horizon:\\s*)${escapeRe(wrong)}(\\s*)$`, "m");
    out = out.replace(re, `$1${correct}$2`);
  }
  return out;
}

/**
 * Fix proficiency_levels items that start at column 0.
 * Pattern:   `- level: X\nindicator: Y`
 * Fixed:     `  - level: X\n    indicator: Y`
 *
 * Only applied inside the YAML front-matter block.
 */
function fixProficiencyIndent(content) {
  const lines = content.split("\n");
  let inFrontMatter = false;
  let inProfBlock   = false;
  const out = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Opening delimiter
    if (i === 0 && line.trim() === "---") {
      inFrontMatter = true;
      out.push(line);
      continue;
    }

    if (!inFrontMatter) { out.push(line); continue; }

    // Closing delimiter — must be at column 0; indented variants handled below
    if (line === "---") {
      inFrontMatter = false;
      inProfBlock   = false;
      out.push(line);
      continue;
    }

    // Indented closing delimiter — strip indent, close front-matter
    if (/^\s+---\s*$/.test(line)) {
      inFrontMatter = false;
      inProfBlock   = false;
      out.push("---");
      continue;
    }

    // Entering proficiency_levels block
    if (/^proficiency_levels\s*:/.test(line)) {
      inProfBlock = true;
      out.push(line);
      continue;
    }

    // Inside proficiency block: fix unindented list items
    if (inProfBlock) {
      // `- level:` at column 0 → add 2-space indent
      if (/^- level\s*:/.test(line)) {
        out.push("  " + line);
        continue;
      }
      // `indicator:` at column 0 → add 4-space indent
      if (/^indicator\s*:/.test(line)) {
        out.push("    " + line);
        continue;
      }
    }

    out.push(line);
  }

  return out.join("\n");
}

function escapeRe(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// ── Main ──────────────────────────────────────────────────────────────────────
const files = glob.sync(SRC_GLOB, { cwd: ROOT })
  .filter(f => path.basename(f).toLowerCase() !== "readme.md");

let changed = 0;
let unchanged = 0;

for (const relPath of files) {
  const absPath = path.join(ROOT, relPath);
  const original = fs.readFileSync(absPath, "utf8");

  let updated = original;
  updated = fixSectors(updated);
  updated = fixHorizons(updated);
  updated = fixProficiencyIndent(updated);

  if (updated !== original) {
    fs.writeFileSync(absPath, updated, "utf8");
    console.log("  Fixed:", relPath);
    changed++;
  } else {
    unchanged++;
  }
}

console.log(`\nDone. ${changed} file(s) updated, ${unchanged} unchanged.`);
