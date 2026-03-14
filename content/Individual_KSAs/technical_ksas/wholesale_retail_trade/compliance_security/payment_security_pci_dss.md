---
ksa_id: payment_security_pci_dss
label: Payment Security – PCI DSS 4.0
category: Technical
sector: wholesale_retail_trade
horizon: core
cluster_tags:
  - "Security"
  - "PCI DSS"
description: >
  Implements Payment Card Industry Data Security Standard (PCI DSS) 4.0
  controls—network segmentation, tokenization, multifactor authentication—to
  safeguard cardholder data.
source_frameworks:
  - "PCI DSS v4.0 Payment Card Industry Data Security Standard (proprietary industry standard — PCI Security Standards Council, a commercial consortium of payment brands; conceptual alignment only — CaliberPath does not assert reproduction rights)"
proficiency_levels:
  - level: Awareness
    indicator: Identifies the components of the cardholder-data environment (CDE) and explains why payment data requires segregated controls; completes required security awareness training.
  - level: Basic
    indicator: Maintains SAQ (A) or SAQ D; installs PA-DSS compliant payment app.
  - level: Intermediate
    indicator: Implements point-to-point encryption (P2PE); monitors logs via SIEM.
  - level: Advanced
    indicator: Completes yearly ROC with QSA; reduces scope via tokenization; zero out stored PAN.
  - level: Expert
    indicator: Leads enterprise PCI strategy; mentors info-sec staff; passes ROC with no high findings.
---
