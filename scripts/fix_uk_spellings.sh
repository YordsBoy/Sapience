#!/bin/bash
# scripts/fix_uk_spellings.sh
#
# Converts UK English spellings to American English across all content .md files.
# Uses GNU sed word-boundary (\b) — requires GNU sed (Linux default).
# Each replacement is a whole-word match to avoid partial-word collisions.
#
# Usage: bash scripts/fix_uk_spellings.sh

CONTENT_DIR="/workspaces/Sapience/content"
FIXED=0

fix() {
  local uk="$1"
  local us="$2"
  local count
  count=$(grep -rl --include="*.md" "\b${uk}\b" "$CONTENT_DIR" 2>/dev/null | wc -l)
  if [ "$count" -gt 0 ]; then
    grep -rl --include="*.md" "\b${uk}\b" "$CONTENT_DIR" | \
      xargs sed -i "s/\b${uk}\b/${us}/g"
    echo "  $uk → $us  ($count file(s))"
    FIXED=$((FIXED + count))
  fi
}

echo ""
echo "════════════════════════════════════════════════════"
echo "  UK → US English Spelling Conversion"
echo "════════════════════════════════════════════════════"

# Behaviour / behavior
fix "behaviour"        "behavior"
fix "behaviours"       "behaviors"
fix "behavioural"      "behavioral"

# Organisation / organization
fix "organisation"     "organization"
fix "organisations"    "organizations"
fix "organisational"   "organizational"

# Optimise / optimize
fix "optimise"         "optimize"
fix "optimised"        "optimized"
fix "optimises"        "optimizes"
fix "optimising"       "optimizing"
fix "optimisation"     "optimization"

# Summarise / summarize
fix "summarise"        "summarize"
fix "summarised"       "summarized"
fix "summarises"       "summarizes"
fix "summarising"      "summarizing"
fix "summarisation"    "summarization"

# Analyse / analyze
fix "analyse"          "analyze"
fix "analysed"         "analyzed"
fix "analysing"        "analyzing"
# Note: "analyses" is also the plural noun of "analysis" in both dialects.
# Only convert when it's clearly the verb form — skip to avoid false positives.

# Utilise / utilize
fix "utilise"          "utilize"
fix "utilised"         "utilized"
fix "utilises"         "utilizes"
fix "utilising"        "utilizing"
fix "utilisation"      "utilization"

# Recognise / recognize
fix "recognise"        "recognize"
fix "recognised"       "recognized"
fix "recognises"       "recognizes"
fix "recognising"      "recognizing"

# Colour / color
fix "colour"           "color"
fix "colours"          "colors"

# Favour / favor
fix "favour"           "favor"
fix "favoured"         "favored"
fix "favours"          "favors"

# Honour / honor
fix "honour"           "honor"
fix "honoured"         "honored"

# Labour / labor
fix "labour"           "labor"
fix "labours"          "labors"

# Centre / center
fix "centre"           "center"
fix "centres"          "centers"

# Programme / program
fix "programme"        "program"
fix "programmes"       "programs"

# Licence → license (US uses "license" for both noun and verb)
fix "licence"          "license"
fix "licenced"         "licensed"
fix "licences"         "licenses"

# Practise → practice (US uses "practice" for both noun and verb)
fix "practise"         "practice"
fix "practised"        "practiced"
fix "practises"        "practices"

# Defence / defense
fix "defence"          "defense"
fix "defences"         "defenses"

# Offence / offense
fix "offence"          "offense"
fix "offences"         "offenses"

# Acknowledgement / acknowledgment
fix "acknowledgement"  "acknowledgment"
fix "acknowledgements" "acknowledgments"

# Judgement / judgment
fix "judgement"        "judgment"
fix "judgements"       "judgments"

# Cancelled / canceled
fix "cancelled"        "canceled"
fix "cancelling"       "canceling"

# Modelling / modeling
fix "modelling"        "modeling"
fix "modelled"         "modeled"

# Signalling / signaling
fix "signalling"       "signaling"
fix "signalled"        "signaled"

# Travelling / traveling
fix "travelling"       "traveling"
fix "travelled"        "traveled"

# Labelling / labeling
fix "labelling"        "labeling"
fix "labelled"         "labeled"

# Fulfilment / fulfillment
fix "fulfilment"       "fulfillment"
fix "fulfil"           "fulfill"
fix "fulfils"          "fulfills"
fix "fulfilled"        "fulfilled"

# Enrol / enroll
fix "enrol"            "enroll"
fix "enrolment"        "enrollment"
fix "enrols"           "enrolls"
fix "enrolled"         "enrolled"

# Catalogue / catalog
fix "catalogue"        "catalog"
fix "catalogues"       "catalogs"

# Dialogue / dialog
fix "dialogue"         "dialog"
fix "dialogues"        "dialogs"

# Analogue / analog
fix "analogue"         "analog"
fix "analogues"        "analogs"

echo "────────────────────────────────────────────────────"
echo "  Conversion complete."
echo "════════════════════════════════════════════════════"
echo ""
