
---

## Core _IT & Cloud Infrastructure

```markdown
# ☁️ Core IT & Cloud Infrastructure

Cloud adoption drives an ongoing global skills shortage—90 % of firms will face IT talent gaps by 2026 :contentReference[oaicite:2]{index=2}. This sector houses the foundational compute, network, and platform KSAs on which all digital transformation depends.

## Core sub‑domains
| ID | Sub‑domain | Sample KSAs |
|----|------------|-------------|
| Cloud_Platforms | IAM Policies, IaC Scripting, Cost‑Optimisation, AWS Landing‑Zone Design*, *Azure Policy Automation |
| Networking | IPv6 Design, SD‑WAN Ops, Zero‑Trust Segmentation |
| DevOps & SRE | CI/CD Pipeline, Observability, Chaos Engineering |
| End‑User_Support | ITIL Ticketing, Endpoint Hardening, VDI Troubleshooting |
| Cyber_Hygiene | Patch Management, Vulnerability Scanning, Incident Triage |
| DevSecOps | GitOps Pipelines, SBOM Compliance |
| Container_Orchestration | Kubernetes Multi‑Cluster Ops, Service Mesh Tuning |
| Site_Reliability | Error‑Budget Policy, Chaos Engineering |
| FinOps | Cloud Cost‑Allocation, RI/Savings‑Plan Optimisation |

### YAML template
```yaml
---
ksa_id: kubernetes_multi_cluster_ops
label: Kubernetes Multi‑Cluster Operations
sector: Core_IT_Cloud
sub_domain: Container_Orchestration
horizon: core_2025
description: Designs and manages federated Kubernetes clusters across regions, ensuring policy consistency and low‑latency service discovery.
source_frameworks: ["sfia:INCA","esco:2521"]
proficiency_levels:
  - level: Awareness
    indicator: Deploys workloads to a single managed cluster.
  - level: Basic
    indicator: Configures cluster federation with default settings.
  - level: Intermediate
    indicator: Implements GitOps‑driven multi‑cluster CI/CD and monitors SLOs.
  - level: Advanced
    indicator: Optimises cross‑cluster traffic with service mesh and global ingress.
  - level: Expert
    indicator: Architects highly‑available, compliance‑aligned global mesh for >500 nodes.
cluster_tags: ["K8s","SRE"]
---

## References
  - NIST NICE Work‑Role KSAs  
  - ISO/IEC 17788, 27001  
  - TechTarget cloud‑skills gap analysis 2025 :contentReference[oaicite:3]{index=3}
  - BLS Computer & IT Outlook 2024 (15 % growth) 
  - CNCF Annual Survey 2024 – multi‑cluster adoption trends
  - FinOps Foundation Cost Optimisation framework
  - KubeEdge. *Project Documentation*.
  - Google Cloud. *Security Foundations Guide 2025*.
