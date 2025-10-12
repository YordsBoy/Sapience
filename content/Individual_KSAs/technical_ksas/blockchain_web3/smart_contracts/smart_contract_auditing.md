---
ksa_id: smart_contract_auditing
label: Smart Contract Auditing
category: Technical
sector: Blockchain_Web3
horizon: core_2025
cluster_tags:
  - "Security"
  - "Formal Verification"
description: >
  Performs manual code-review, static/dynamic analysis, property-based testing, and formal verification to identify vulnerabilities (re-entrancy, overflow, access-control) and produce remediation reports for on-chain systems.
source_frameworks:
  - "OpenZeppelin Security Auditing Handbook"
  - "CertiK Smart-Contract Assessment Criteria"
  - "Ethereum Improvement Proposal (EIP)‑1559 Audit Guidelines"
proficiency_levels:
- level: Awareness
indicator: Reads simple Solidity functions; recognises common re‑entrancy patterns.
- level: Basic
indicator: Uses static‑analysis tools such as Slither/MythX; documents integer‑overflow checks; reports simple issues.
- level: Intermediate
indicator: Performs manual logic‑flow review; writes unit tests in Hardhat; traces call-graphs; verifies gas‑optimisation changes; validates fixes.
- level: Advanced
indicator: Conducts formal specs in Scribble/Foundry; conducts formal verification with Coq or Certora Prover; produces public audit reports; recommends upgrade‑safe patterns; models economic exploits.
- level: Expert
indicator: Leads multi‑chain audits; develops novel detection heuristics; advises regulators on decentralized‑finance (DeFi) security standards.
---