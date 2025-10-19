---
ksa_id: confidential_computing_services
label: Confidential-Computing Services
category: Technical
sector: Core_IT_Cloud
horizon: emerging
cluster_tags:
  - "Confidential Computing"
  - "Trusted Execution Environment"
description: >
  Deploys and manages cloud workloads inside hardware-based Trusted Execution Environments (TEEs) or memory-encrypted VMs; configures attestation, key-release, and runtime-encryption to protect data-in-use.
source_frameworks:
  - "Confidential Computing Consortium specs (2024)"
  - "NIST SP 800-207A draft – Zero-Trust & Confidential-Compute patterns (2023)"
  - "Azure Confidential VMs portfolio update 2025 :contentReference[oaicite:5]{index=5}"
proficiency_levels:
  - level: Awareness
    indicator: Defines TEE, attestation, and why data-in-use matters.
  - level: Basic
    indicator: Launches an SGX/TDX VM; verifies attestation quote; encrypts disks.
  - level: Intermediate
    indicator: Integrates remote attestation into CI/CD; configures key-release policies and secure enclave libraries.
  - level: Advanced
    indicator: Migrates containerised apps to confidential-K8s; implements side-car attestation and secret-mount flows.
  - level: Expert
    indicator: Designs multi-cloud confidential platform; aligns with zero-trust architectures; leads audits of enclave integrity.
---
