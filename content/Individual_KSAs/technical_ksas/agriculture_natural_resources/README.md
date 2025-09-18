# 🌾 Agriculture & Natural Resources

Food‑system resilience, sustainable land stewardship, and climate‑smart production will dominate talent demand this decade.  
The U.S. ag sector alone faces a short‑fall of **2.4 million workers by 2025** :contentReference[oaicite:0]{index=0}, while USDA projects **~59 000 bachelor‑level openings each year through 2030** across food, agriculture and natural‑resources careers :contentReference[oaicite:1]{index=1}.  
Automation, climate‑smart practices, and regenerative models therefore shape the KSAs curated for this sector.

## Core sub‑domains (scaffold v1)

| ID | Sub‑domain | Illustrative KSAs |
|----|------------|-------------------|
| Precision_Farming | GNSS Machine Guidance, Variable‑Rate Application, Drone Crop‑Scouting |
| Climate_Smart_Ag | GHG Accounting, Drought‑Resilient Cultivar Selection, Soil‑Carbon Practices |
| Natural_Resource_Management | Watershed Analysis, Wildlife Habitat Planning, Forestry Operations |
| Agri_Supply_Chain | Post‑Harvest Handling, Cold‑Chain Logistics, Traceability Tech |
| Extension_Education | Farmer Needs Assessment, Participatory Training, Digital Advisory Apps |
| Agri_Robotics| design and upkeep of in‑field robotic platforms |

*(Rename / split as your SMEs refine.)*

## KSA file conventions

* **Folder** `content/technical_KSAs/Agriculture_Natural_Resources/`
* **Filename** `<ksa_id>.md` (lower snake‑case)
* **Required YAML keys**

```yaml
---
ksa_id: drone_crop_scouting
label: Drone‑Based Crop Scouting
category: Technical
sector: Agriculture_Natural_Resources
sub_domain: Precision_Farming
horizon: core_2025      # or emerging / watch_2030 / perennial / peripheral
description: Uses UAS platforms and spectral imagery to detect crop stress and optimise input use.
source_frameworks: ["esco:A2.2.3", "fao:CSA_Sourcebook"]
proficiency_levels:
  - level: Awareness
    indicator: Operates basic quad‑copter and captures RGB images.
  - level: Basic
    indicator: Executes flight plans and interprets NDVI heat‑maps.
  - level: Intermediate
    indicator: Integrates multispectral data with variable‑rate scripts.
  - level: Advanced
    indicator: Advises on ROI and compliance (FAA Part 107 or local regs).
  - level: Expert
    indicator: Designs enterprise UAS programmes and trains agronomists.
cluster_tags: ["Remote Sensing","Sustainability"]
---
## Authoritative references
  - CREO (2025). *Agricultural Robotics Landscape*.
  - Fiveable Study Guide on precision‑farming swarms.
  - USDA–NIFA Employment Projections 2025‑2030** ([NIFA Reporting Portal][1]) | Quantifies degree demand & job growth                        |
  - FAO Climate‑Smart Agriculture Sourcebook** ([FAOHome][2]) | Competency basis for CSA KSAs                                |
  - World Bank Climate‑Smart Agriculture Brief** ([World Bank][3]) | Global skills & investment gaps                              |
  - ILO Rural Youth Skills Reports** ([International Labour Organization][4]) | Highlights training needs in informal / smallholder contexts |
  - ESCO “Agriculture, Forestry & Fishery” skills taxonomy** ([ESCo][5]) | Open skills framework for mapping                            |
  - FAO Extension Training Guides** ([Open Knowledge FAO][6]) | Standards for advisory/extension KSAs                        |
  - USDA Agricultural Baseline to 2030** ([USDA][7]) | Macro‑trends shaping commodity & resource needs              |
  - AgritechTomorrow labour‑shortage article (2025)** ([agritechtomorrow.com][8]) | Illustrates automation drivers                               |
  - Fresh Consulting Ag‑Robotics Market Outlook** ([Fresh Consulting][9]) | Market growth for precision‑ag tech talent                   |
  - AP News robotics & farm‑labour feature** ([AP News][10]) | Worker‑impact context & ethical considerations               |

[1]: https://portal.nifa.usda.gov/web/crisprojectpages/1032289-employment-opportunities-for-college-graduates-in-food-agriculture-renewable-natural-resources-and-the-environment-united-states-2025--2030.html?utm_source=chatgpt.com "Employment Opportunities for College Graduates in Food ..."
[2]: https://www.fao.org/3/i3325e/i3325e.pdf?utm_source=chatgpt.com "[PDF] Climate-Smart Agriculture Sourcebook"
[3]: https://www.worldbank.org/en/topic/climate-smart-agriculture?utm_source=chatgpt.com "Climate-Smart Agriculture - World Bank"
[4]: https://www.ilo.org/publications/elevating-potential-rural-youth-paths-decent-jobs-and-sustainable-futures-1?utm_source=chatgpt.com "Elevating the potential of rural youth: Paths to Decent Jobs and ..."
[5]: https://esco.ec.europa.eu/en/about-esco/data-science-and-esco/esco-skill-occupation-matrix-tables-linking-occupation-and-skill-groups?utm_source=chatgpt.com "ESCO Skill-Occupation Matrix Tables: linking occupation and skill ..."
[6]: https://openknowledge.fao.org/server/api/core/bitstreams/72985d26-76ff-4ecc-b0e7-c7607fc86408/content?utm_source=chatgpt.com "[PDF] Guide to extension training - FAO Knowledge Repository"
[7]: https://www.usda.gov/sites/default/files/documents/USDA-Agricultural-Projections-to-2030.pdf?utm_source=chatgpt.com "[PDF] USDA Agricultural Projections to 2030"
[8]: https://www.agritechtomorrow.com/story/2025/01/the-agriculture-labor-shortage-challenges-and-solutions-through-automation/16272/?utm_source=chatgpt.com "The Agriculture Labor Shortage: Challenges and Solutions Through ..."
[9]: https://www.freshconsulting.com/insights/blog/robots-in-agriculture-transforming-the-future-of-farming/?utm_source=chatgpt.com "Robots in Agriculture: Transforming the Future of Farming"
[10]: https://apnews.com/article/df6087837925c14cfdd7ad2f80410a54?utm_source=chatgpt.com "Autonomous tech is coming to farming. What will it mean for crops and workers who harvest them?"
