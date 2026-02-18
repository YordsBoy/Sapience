#!/usr/bin/env node
// scripts/fix_sector_casing.js
//
// Standardizes `sector:` field values in all KSA markdown files to
// lowercase_with_underscores, matching the updated schema enum.
//
// Uses line-level string replacement to avoid YAML reformatting.
// Run after updating schemas/ksa.schema.json enum to lowercase values.

const fs   = require("fs");
const path = require("path");
const glob = require("glob");

// ── Config ────────────────────────────────────────────────────────────────────
const ROOT     = path.resolve(__dirname, "..");
const SRC_GLOB = "content/Individual_KSAs/**/*.md";

// Complete mapping: every current sector value → its target lowercase form.
// Keys include PascalCase, Title_Case, trailing-space variants, and
// abbreviated names that differ from the new full lowercase name.
const SECTOR_MAP = {
  // Exact renames (abbreviated → full lowercase)
  "Administrative_Support":          "administrative_support_services",
  "Arts_Recreation":                 "arts_recreation_services",
  "Unpaid_Caregiving":               "unpaid_caregiving_domestic_work",
  "Space_Economy":                   "space_economy_aerospace",
  "Maker_Creative_Crafts":           "maker_economy_creative_crafts",
  "Nonprofit_NGO":                   "nonprofit_ngos",

  // Pure lowercase conversions
  "Agriculture_Natural_Resources":   "agriculture_natural_resources",
  "Mining_Extraction":               "mining_extraction",
  "Energy_Utilities":                "energy_utilities",
  "Construction_Infrastructure":     "construction_infrastructure",
  "Manufacturing":                   "manufacturing",
  "Wholesale_Retail_Trade":          "wholesale_retail_trade",
  "Transportation_Logistics":        "transportation_logistics",
  "Core_IT_Cloud":                   "core_it_cloud",
  "AI_Data_Quantum":                 "ai_data_quantum",
  "Media_Arts_Entertainment":        "media_arts_entertainment",
  "Telecommunications":              "telecommunications",
  "Finance_Insurance":               "finance_insurance",
  "Real_Estate_Property":            "real_estate_property",
  "Professional_Scientific_Services":"professional_scientific_services",
  "Education_Training":              "education_training",
  "Healthcare_Social_Assistance":    "healthcare_social_assistance",
  "Government_Public_Admin":         "government_public_admin",
  "Public_Safety_Security":          "public_safety_security",
  "Hospitality_Tourism":             "hospitality_tourism",
  "Personal_Other_Services":         "personal_other_services",
  "Skilled_Trades":                  "skilled_trades",
  "Creative_Cultural_Industries":    "creative_cultural_industries",
  "Customer_Experience_Service":     "customer_experience_service",
  "Env_Energy_Advanced":             "env_energy_advanced",
  "Biotechnology_SynBio":            "biotechnology_synbio",
  "Gig_Platform_Economy":            "gig_platform_economy",
  "Blockchain_Web3":                 "blockchain_web3",
  "Immersive_Media_ARVR":            "immersive_media_arvr",
  "Informal_Gray_Economy":           "informal_gray_economy",
  "Digital_Content_Creator_Economy": "digital_content_creator_economy",

  // Legacy names that may still exist in some files
  "Maker_Economy_Creative_Crafts":   "maker_economy_creative_crafts",
  "Unpaid_Caregiving_Domestic_Work": "unpaid_caregiving_domestic_work",
};

// ── Scan + Fix ────────────────────────────────────────────────────────────────
const allFiles = glob.sync(SRC_GLOB, { cwd: ROOT, absolute: true });
const ksaFiles = allFiles.filter(f => path.basename(f).toLowerCase() !== "readme.md");

let fixedCount    = 0;
let skippedCount  = 0;
let alreadyValid  = 0;
const unknownValues = new Set();

for (const filePath of ksaFiles) {
  const raw = fs.readFileSync(filePath, "utf8");
  const lines = raw.split("\n");
  let changed = false;

  const newLines = lines.map(line => {
    // Match `sector: SomeValue` with optional trailing whitespace
    const m = line.match(/^(sector:\s*)(\S.*?)(\s*)$/);
    if (!m) return line;

    const prefix  = m[1];  // "sector: "
    const current = m[2].trim();
    const trail   = m[3];

    if (SECTOR_MAP[current] !== undefined) {
      const replacement = SECTOR_MAP[current];
      if (replacement !== current) {
        changed = true;
        return `${prefix}${replacement}`;  // strip trailing spaces too
      }
      // already the target value (shouldn't happen but safe)
      return `${prefix}${current}`;
    }

    // Value not in map — check if it's already a valid lowercase target
    const validTargets = new Set(Object.values(SECTOR_MAP));
    if (validTargets.has(current) || current === "cross_sector") {
      alreadyValid++;
      return line.trimEnd(); // strip trailing spaces only
    }

    // Unknown value — log but don't touch
    unknownValues.add(`${path.relative(ROOT, filePath)}: "${current}"`);
    return line;
  });

  if (changed) {
    fs.writeFileSync(filePath, newLines.join("\n"), "utf8");
    fixedCount++;
    const rel = path.relative(ROOT, filePath);
    const oldVal = lines.find(l => /^sector:/.test(l))?.replace(/^sector:\s*/, "").trim();
    const newVal = newLines.find(l => /^sector:/.test(l))?.replace(/^sector:\s*/, "").trim();
    console.log(`  FIXED  ${rel}`);
    console.log(`         ${oldVal} → ${newVal}`);
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log("\n" + "═".repeat(60));
console.log("  Sector Casing Fix Complete");
console.log("═".repeat(60));
console.log(`  Files scanned : ${ksaFiles.length}`);
console.log(`  Files fixed   : ${fixedCount}`);
if (unknownValues.size > 0) {
  console.log(`\n  ⚠  Unknown sector values (manual fix required):`);
  for (const v of unknownValues) console.log(`     ${v}`);
}
console.log("═".repeat(60) + "\n");
