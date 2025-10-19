# Core IT & Cloud Infrastructure

## Sector Overview  
Gartner projects **global public-cloud spend to top $723 billion in 2025** as hybrid and multi-cloud strategies become the enterprise default.  HashiCorp’s *2025 Cloud Complexity Report* finds that **94 % of organisations are multi-cloud** and cite skill gaps and security as top hurdles.  The **AWS Well-Architected Framework** (six pillars) and analogous Azure/GCP guides remain the dominant reference for cloud design.  **FinOps** adoption is surging: 70 % of teams rank cost-optimisation as their #1 cloud priority in the *State of FinOps 2025* survey.  Reliability culture is cemented by Google’s SRE principles, now widely implemented beyond hyperscalers.  

On the technology front, **Kubernetes powers >80 % of new cloud-native workloads** per CNCF research, while **Zero-Trust Architecture (NIST SP 800-207)** guides cloud-security transformations.  ISO/IEC 27017 and sovereign-cloud regulations drive heightened data-residency governance.  Edge-computing spend will exceed **$261 billion by 2025** according to IDC, amplifying the need for orchestration skills across the core–edge continuum.

## Sub-domains & Representative KSAs  

| Code | Sub-Domain                     | Example KSAs                                                  |
|------|--------------------------------|---------------------------------------------------------------|
| **CA** | Cloud Architecture               | Cloud-Infrastructure Architecture · Serverless Architecture   |
| **CO** | Cloud Operations & Observability | Cloud Observability Monitoring · Site-Reliability Engineering |
| **DB** | Databases & Data Stores          | Database Management                                            |
| **DV** | DevOps & Automation              | Infrastructure as Code · Kubernetes Orchestration             |
| **EC** | Edge & Distributed Computing     | Edge-Cloud Orchestration                                      |
| **FN** | FinOps & Green-Ops               | Cloud FinOps Cost Optimisation · Green-Cloud Optimisation |
| **GV** | Governance & Residency           | Cloud-Data Governance & Residency                             |
| **NW** | Networking Fundamentals          | Network Basics                                                |
| **SC** | Security & Confidential Compute  | Cloud Security Architecture · Confidential-Computing Services |
| **SA** | System Administration & Helpdesk | System Admin · IT Support & Helpdesk Ops                      |

## Horizon Key  

| Horizon | Meaning                                           |
|---------|---------------------------------------------------|
| **core** | Widely implemented practice or mandated control   |
| **emerging** | High-growth or specialised skill (< 40 % adoption) |

## KSA Inventory  

| ID                                   | Label                                                     | Horizon   |
|--------------------------------------|-----------------------------------------------------------|-----------|
| cloud_infrastructure_architecture     | Cloud-Infrastructure Architecture                         | core      |
| serverless_architecture               | Serverless Architecture                                   | core      |
| cloud_infrastructure_management       | Cloud-Infrastructure Management                           | core      |
| cloud_observability_monitoring        | Cloud Observability & Monitoring                          | core      |
| site_reliability_engineering_practices| Site-Reliability Engineering Practices                    | core      |
| ai_ops_autonomous_remediation         | AIOps – Predictive Scaling & Autonomous Remediation       | emerging  |
| database_management                   | Database Management                                       | core      |
| devops_tooling                        | DevOps Tooling                                            | core      |
| infrastructure_as_code                | Infrastructure as Code                                    | core      |
| kubernetes_container_orchestration    | Kubernetes Container Orchestration                        | core      |
| edge_cloud_orchestration              | Edge-Cloud Orchestration                                  | core      |
| cloud_finops_cost_optimization        | Cloud FinOps Cost Optimisation                            | core      |
| green_cloud_optimisation              | Green-Cloud Optimisation                                  | emerging  |
| cloud_data_governance_residency       | Cloud-Data Governance & Residency                         | core      |
| network_basics                        | Network Basics                                            | core      |
| cloud_security_architecture           | Cloud Security Architecture                               | core      |
| identity_access_management_cloud      | Identity & Access Management (Cloud)                      | core      |
| confidential_computing_services       | Confidential-Computing Services                           | emerging  |
| it_support_helpdesk_operations        | IT Support & Helpdesk Operations                          | core      |
| system_admin                          | System Administration                                     | core      |

## Referenced Frameworks & Standards  

- **Gartner Market Guide for AIOps Platforms 2024** – five functional pillars for AIOps platforms.
- **Google Cloud predictive-autoscaling docs 2025** – ML-based scaling patterns for cloud ops.
- **BigQuery Anomaly-Detection overview** – cloud telemetry ML detection. 
- **Confidential Computing Consortium specifications (2024)** – enclave architecture & attestation flows. 
- **NIST SP 800-207A (draft)** – Zero-Trust patterns incorporating confidential compute. 
- **Azure confidential-VM portfolio update 2025** – market adoption evidence for confidential services.
- **Green Software Foundation – Carbon-Awareness principles (2024)** – dynamic workload scheduling by grid intensity.
- **Microsoft & UBS Carbon-Aware Computing white paper 2023** – operational tactics for green-ops pipelines.
- **EU Energy-Efficiency Directive 2023 (Data-centre clauses)** – mandatory carbon reporting; drives green-cloud KPIs.
- **FinOps Foundation State of FinOps 2025** – carbon + cost metrics in cloud-financial-ops.
- **Gartner Cloud-Spending Forecast 2025 —** Predicts worldwide public-cloud end-user spending will reach **USD 723 billion in 2025**, with every service segment posting double-digit growth; underpins FinOps cost-optimisation KPIs.
- **HashiCorp *Cloud Complexity Report* 2025 —** Survey of 1 100 IT leaders: 86 % run multi-cloud, with skills gaps and security cited as top complexity drivers—context for AIOps and Governance KSAs.
- **AWS Well-Architected Framework (2023) —** Six pillars—operational excellence, security, reliability, performance efficiency, cost optimisation, sustainability—provide design guardrails for Cloud Architecture KSAs. 
- **Google *Site Reliability Engineering* (2023) —** Google’s SRE handbook detailing SLIs/SLOs, error budgets, and toil reduction; forms the foundation of Site-Reliability Engineering Practices.
- **FinOps Foundation *State of FinOps 2025* —** Benchmarks from 1 200+ practitioners on cloud-cost optimisation and emerging carbon-aware metrics, informing both FinOps and Green-Ops KSAs.  
- **CNCF Kubernetes Adoption Survey 2025 —** Reports over 96 % of large enterprises run Kubernetes in production, with AI/ML workloads the fastest-growing use-case—validates Kubernetes Orchestration KSA maturity.
- **NIST SP 800-207 *Zero-Trust Architecture* —** Defines abstract ZTA model, deployment use-cases, and implementation guidelines leveraged in Confidential-Computing and Cloud-Security Architecture KSAs.
- **ISO/IEC 27017 — Cloud Security Controls —** Adds cloud-specific implementation guidance to ISO 27002, covering multi-tenancy, virtualisation, and shared-responsibility—baseline for Cloud-Security Architecture.
- **IDC Edge-Computing Spending Guide 2025 —** Forecasts **USD 261 billion** in global edge-computing spend for 2025, rising at a 13.8 % CAGR—supports Edge-Cloud Orchestration horizon classification.

## Future-Expansion  

| Area | Why it matters |
|------|----------------|
| **Quantum-Safe Cloud Networking** | Preparing TLS, VPN, and key management for post-quantum crypto algorithms. |
| **Autonomous Cloud Recovery via Reinforcement Learning** | RL agents that learn rollback vs. roll-forward strategies to minimise downtime. |
| **Sovereign-Cloud Trust Frameworks** | Policy-defined controls for data residency and lawful-access segmentation. |
| **Serverless on the Edge (WASM)** | Lightweight WebAssembly workloads deployed to micro edge-locations for ultra-low latency. |

> *All sources cited for conceptual alignment. No proprietary text copied.*

_Last updated: 17 Oct 2025_