# Horizon Policy

This policy standardises how Sapience assigns and maintains **horizon tiers** for every KSA so the taxonomy stays evergreen and unambiguous.

---

## 1  Horizon Tiers  

| Tier | Definition | Typical Evidence |
|------|------------|------------------|
| **Core** | Widely adopted capability in ≥ 40 % of relevant organisations and governed by mature international/national standards, certifications, or regulations. | ISO/IEEE/NIST/FAA standards; job-posting analytics. |
| **Emerging** | Fast-growing capability with < 40 % adoption but strong signals in investment, R&D, or draft policy activity. | Venture-funding data; Gartner Hype-Cycle “Innovation Trigger / Early Adoption” stages. |
| **Perennial** | Evergreen foundational skill set whose core concepts have remained stable ≥ 5 years and are expected to persist for the foreseeable future. | Foundational frameworks such as SFIA’s long-running core skills list; consistent ≥ 70 % job-adoption across ≥ 5 years. |
| **Legacy** | Competency in structural decline: adoption < 20 %, major standards withdrawn or superseded, and technology sunset underway. | Withdrawn ISO/ANSI standards; Gartner “Obsolete Plateau” notes; shrinking job demand. |

*Rationale:* Tier names mirror common skill-framework practice, avoiding year-stamps that quickly date content.

---

## 2  Promotion & Demotion Framework  

| Direction | Gates (all must pass) | Data Triggers & Sources |
|-----------|----------------------|-------------------------|
| **Emerging → Core** | **Adoption** ≥ 50 % job-ads **and**<br>**Standards** ≥ 1 final standard/cert published **and**<br>**Maturity** exits Early-Adoption (e.g., TRL ≥ 8) | LinkedIn/EMSI analytics; ISO/FAA registers; NASA TRL docs. |
| **Core → Perennial** | Skill has been **Core** ≥ 5 years **and**<br>Adoption ≥ 70 % **and**<br>Minimal change in underlying standards during that period | Long-term labour-market trend lines; standards stability check. |
| **Core/Emerging → Legacy** | Adoption < 20 % **or**<br>Key standards withdrawn **or**<br>Technology labelled obsolete on Hype Cycle | Withdrawal notices; Gartner “Obsolete Plateau”. |

Borderline cases stay in their current tier and are re-evaluated next cycle.

---

## 3  Governance Process  

1. **Quarterly horizon-scan** – domain leads collect adoption, investment, patent and standardisation signals.  
2. **Metric refresh** – labour-market and funding dashboards updated quarterly.  
3. **Standards watch** – PMO logs new, revised or withdrawn ISO/IEC/FAA/NIST documents.  
4. **Annual review board** *(Q4)* – evaluates each KSA against gates; approves promotions, demotions or new tier assignments.  
5. **Change log** – only the `horizon:` field in YAML files is edited; Git history records decisions.

---

## 4  Roles & Responsibilities  

| Role | Key Duties |
|------|-----------|
| **Sector Lead** | Gather evidence, propose tier changes, present to board. |
| **PMO** | Maintain dashboards, coordinate reviews, publish changelog. |
| **Governance Board** | Final decision on tier assignments; arbitrate disputes. |

---

## 5  Effective Date & Amendments  

This policy becomes active upon merge into the main branch. Any amendment requires Governance-Board approval and must be version-tagged in the repository changelog.

---

*All sources cited for conceptual alignment; no proprietary text copied.*
