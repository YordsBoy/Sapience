---
ksa_id: 5g_core_network_operations_slicing
label: 5G Core Network Operations & Slicing
category: Technical
sector: telecommunications
horizon: core
cluster_tags:
  - "5G Core"
  - "Network Slicing"
description: Operating 5G Stand‑Alone (SA) core functions—AMF, SMF, UPF—within Kubernetes‑based telco clouds, orchestrating network slices via 3GPP TS 28.533 management models, and ensuring service continuity and low latency.
source_frameworks:
  - "3GPP TS 28.541 Slice Mgmt"
  - "3GPP TS 23.501 System Architecture"
  - "TM Forum ODA Open APIs"
  - "ETSI GR NFV‑IFA 029 V4.4.1"
  - "Linux Foundation Anuket Reference Model"
proficiency_levels:
  - level: Awareness
    indicator: Identifies 5G core functions; monitors basic KPIs (registration success rate); follows slice‑template catalogs.
  - level: Basic
    indicator: Monitors NF status via NRF deploys cloud‑native network functions (CNFs); updates helm charts; validates slice profiles; deploys default data-network slice; captures KPIs (PDU session success).
  - level: Intermediate
    indicator: Implements network slice lifecycle (instantiate, modify, terminate); automates slice instantiation through Network Slice Selection Function (NSSF); configures QoS Flow rules; sets alert thresholds; analyses UPF throughput; automates scaling rules.
  - level: Advanced
    indicator: Optimises slice resource isolation; manages inter‑PLMN roaming; integrates service orchestration with OSS/BSS; implements NWDAF analytics for SLA breach detection; executes closed-loop remediation; integrates multi-domain orchestration via ETSI NFV-MEC APIs.
  - level: Expert
    indicator: Designs multi‑vendor slice ecosystems; leads national multi-slice production network; mentors core-ops engineers; leads 5G SA migrations; publishes slice‑assurance research.
---