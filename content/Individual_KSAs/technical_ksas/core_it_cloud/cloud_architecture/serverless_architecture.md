---
ksa_id: serverless_architecture
label: Serverless Architecture
category: Technical
sector: core_it_cloud
horizon: emerging
cluster_tags:
  - "Serverless"
  - "Event-Driven"
description: |
  Designs and operates event-driven applications using FaaS (Lambda, Cloud Functions) and managed services; optimizes cold starts, observability, and cost.
source_frameworks:
  - "AWS Serverless Lens Well-Architected 2023 (vendor documentation; conceptual alignment only — equivalent serverless frameworks and platforms may demonstrate competency)"
proficiency_levels:
  - level: Awareness
    indicator: Triggers simple functions from HTTP events.
  - level: Basic
    indicator: Connects functions to managed DB/queue; sets IAM least-privilege.
  - level: Intermediate
    indicator: Implements workflow orchestration services (e.g., AWS Step Functions, Azure Logic Apps, GCP Workflows), retries, DLQs, tracing.
  - level: Advanced
    indicator: Tunes performance, manages large fan-out, blue-green deploys.
  - level: Expert
    indicator: Architects enterprise serverless platforms, multi-region cold-start strategy.
---
