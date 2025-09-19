# 🚀 Space Economy

The global space economy is projected to soar from **US $630 billion in 2023 to ≈ $1.8 trillion by 2035** :contentReference[oaicite:0]{index=0}. Commercial launch cadence, satellite mega‑constellations, in‑orbit servicing, and lunar infrastructure all drive new workforce demand. A UK “Space‑Skills Roadmap 2030” highlights urgent pipeline gaps in spacecraft systems, AI ops, and space sustainability :contentReference[oaicite:1]{index=1}.

## Core sub‑domains
| ID | Sub‑domain | Illustrative KSAs |
|----|------------|-------------------|
| Spacecraft_Engineering | Avionics Integration, Radiation‑Hardened Design |
| Mission_Operations | Telemetry, Tracking & Command (TT&C), Fault‑Management |
| Space_Data_Analytics | EO Data Fusion, Space Situational Awareness AI |
| Launch_Services | Propellant Handling, Range‑Safety, Re‑usable Booster Refurb |
| In‑Space_Infrastructure | Orbital Debris Removal, ISRU, Lunar Surface Construction |

## KSA YAML template
```yaml
---
ksa_id: tt_and_c_operations
label: Telemetry, Tracking & Command Operations
sector: Space_Economy
sub_domain: Mission_Operations
horizon: core_2025
description: Configures, monitors and troubleshoots TT&C links for LEO‑to‑GEO spacecraft.
source_frameworks: ["esco:3114.1","iso:22684"]
proficiency_levels:
  - level: Awareness
    indicator: Performs scripted pass‑support under supervision.
  - level: Basic
    indicator: Analyzes link budgets, identifies signal anomalies.
  - level: Intermediate
    indicator: Optimizes station schedules; mitigates RF interference events.
  - level: Advanced
    indicator: Leads contingency ops for launch & early‑orbit phase (LEOP).
  - level: Expert
    indicator: Designs autonomous TT&C architectures for mega‑constellations.
cluster_tags: ["Ground Segment","RF Engineering"]
---
## References
  - McKinsey Space‑Economy $1.8 T forecast (2023) 
  - Space Skills Alliance – Space Skills Roadmap 2030 
  - ISO 22684 Ground systems & operations
  - ESA/JAXA orbital‑debris mitigation guidelines
  - NASA APPEL. *Mission Operations Curriculum*
  - CCSDS. *Space Data Link Protocols*
  - NASA SE Handbook Rev3
  - ECSS‑E‑ST‑10C. *Systems Engineering General*
  - ITU. *Radio Regulations 2024*
  - UNOOSA. *Space Law Treaties*
  - FAA 14 CFR Part 450. *Launch & Reentry Licensing*
  - ISO 24113:2021. *Space Debris Mitigation*
  - NIST SP 800‑160. *Systems Security Engineering*
  - NASA HIDH Rev2. *Human Integration Design Handbook*