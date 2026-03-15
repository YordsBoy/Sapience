# CaliberPath — Sector Crosswalk Architecture
**Stream:** 3.8 — Cross-Sector Transferability Architecture
**Authorized:** Strategist — 2026-03-15
**Status:** Directory initialized 2026-03-15. Content sessions pending.

## Purpose
This directory is the cross-sector transferability data layer for CaliberPath's KSA repository. It supports three downstream products:

1. **Career Compass coaching (Phase 1):** Human-readable sector pathway reference for coaches working with career changers, military transitioners, and career explorers
2. **Newsletter Stream 6 (Phase 1):** Transfer pathway content for subscriber segments — "your background bridges to these sectors"
3. **Learning Path Generator + Gap Analysis Visualizer (Phase 2):** Computational adjacency scoring that automates the pathway recommendations coaches currently do manually

## Directory Contents

| File | Purpose | Status |
|---|---|---|
| `sector_adjacency_matrix.md` | 35-sector adjacency matrix scored by shared cluster_tags | Pending T-CROSSWALK-01 |
| `population_pathways/military_to_civilian.md` | MOS-to-civilian sector mapping for Fort Gordon population | Pending T-CROSSWALK-02 |
| `population_pathways/career_transition_explorer.md` | General transfer pathway guide by cluster_tag domain | Pending T-CROSSWALK-02 |

## How the Adjacency Matrix Works
Two sectors are adjacent when their KSA files share cluster_tags. The matrix scores every sector-pair by the number of shared tags, weighted by each tag's cross-sector coverage (backbone tags with 8+ sector presence carry higher weight than singleton tags). Adjacency score tiers: HIGH (≥5 shared backbone-weighted tags), MEDIUM (3–4), LOW (1–2), NONE (0).

## Review Cadence
- **Adjacency matrix:** Annual — after BLS Employment Projections release (typically fall)
- **Population pathway documents:** Semi-annual
- **Immediate update trigger:** BLS occupational projection or WEF Future of Jobs signals a meaningful sector labor market shift

## Downstream Consumers
This directory is referenced by:
- `[OPSDIR]\01_Strategic_Documents\Market_Analyses\2026-03-05_CaliberPath_Source_Authority_Taxonomy_v2.md` (Section 5b)
- `[OPSDIR]\07_AI_Learning\Prompts\` (T-CROSSWALK-01 through T-CROSSWALK-04 session prompts)
- All 35 sector README Transfer Pathways sections (populated by T-CROSSWALK-03)

## Schema Support
The `ksa.schema.json` supports this architecture via two optional fields added 2026-03-15:
- `adjacent_sectors`: Lists sector enum values where a KSA has demonstrated transferability
- `transfer_populations`: Identifies client populations most likely to need this KSA in a transition
