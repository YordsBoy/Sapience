# 📡 Telecommunications

Global ICT jobs will reach **5.4 million by 2025**, driven by 5G/6G roll‑outs and fibre densification :contentReference[oaicite:0]{index=0}.  
Cisco’s Internet Report forecasts **30 billion networked devices by 2026**, demanding expertise in automation and secured edge :contentReference[oaicite:1]{index=1}.

## Sub‑domains & illustrative KSAs
| ID | Sub‑domain | Sample KSAs |
|----|------------|-------------|
| Net_Infrastructure | *5G RAN Optimisation*, *Fibre Splicing Precision* |
| Core_Networking | *SD‑WAN Orchestration*, *Network Slicing Design* |
| Edge_Services | *MEC Application Deployment*, *Low‑Latency QoS Tuning* |
| Telco_Cloud | *NFV Lifecycle Management*, *Kubernetes for CNFs* |
| Telecom_Security | *SS7/Diameter Threat Mitigation*, *Zero‑Trust Telco* |

## YAML template
```yaml
---
ksa_id: sd_wan_orchestration
label: SD‑WAN Orchestration
sector: Telecommunications
sub_domain: Core_Networking
horizon: core_2025
description: Designs and automates software‑defined WAN overlays for dynamic path selection and policy‑based traffic steering.
source_frameworks: ["sfia:NTDS","esco:3514"]
proficiency_levels:
  - level: Awareness
    indicator: Configures basic edge devices via GUI templates.
  - level: Basic
    indicator: Implements path‑conditioning and monitors SLA metrics.
  - level: Intermediate
    indicator: Automates provisioning with APIs and CI/CD pipelines.
  - level: Advanced
    indicator: Optimises multi‑cloud SD‑WAN with intent‑based analytics.
  - level: Expert
    indicator: Architect of carrier‑grade SD‑WAN platforms serving >10 000 sites.
cluster_tags: ["Network_Automation","Cloud_Edge"]
---

## References
  - ITU Facts & Figures 2024 – workforce & connectivity KPIs 

  - Cisco Annual Internet Report – device & traffic forecasts 

  - 3GPP Rel‑18 specs; ETSI NFV‑MANO guidelines
  - 3GPP TS 23.501 & TS 23.288
  - ETSI NFV‑SEC 016 & GS NFV‑MANO 006
  - Linux Foundation Anuket & CNCF Security Guides
  - OSHA 29 CFR 1926; NESC 2023
  - ITU‑T P.1203; ETSI TS 103 640
  - Fiber Broadband Association OSP Handbook
  - TM Forum AI‑Ops Framework