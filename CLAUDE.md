# Sapience — Claude Code Context

## What Is Sapience

Sapience is a Learning & Development (L&D) company delivering human-led coaching, workshops, and consulting services. The core IP is the **UPLS competency framework** (Universal Professional, Leadership, and Self-Mastery) plus 400+ technical KSAs across 35 industry sectors.

**Author:** YordsBoy | **Version:** 0.1.0 | **License:** UNLICENSED

## Strategic Context

See **[docs/STRATEGIC_DIRECTION.md](docs/STRATEGIC_DIRECTION.md)** for the authoritative development roadmap.

### Phase Summary

| Phase | Timeframe | Status | Focus |
|-------|-----------|--------|-------|
| **Phase 1** — Human-Delivered | 2026-2027 | **CURRENT** | Coaching, workshops, KSA content, documentation |
| **Phase 2** — Technology-Augmented | 2027-2028 | Planned | Digital intake, assessments, client portal |
| **Phase 3** — AI-Native | 2028+ | Deferred | AI companion, memory integration, tone calibration |

### What's Active vs. Deferred

- **ACTIVE (Phase 1):** `content/Individual_KSAs/`, `schemas/`, `scripts/`, `data/`, `docs/`
- **DEFERRED (Phase 3):** `flows/` — the 7-day AI intake and post-intake companion model. Preserve but do not develop.
- **NEEDS REVIEW:** `components/UserTierContext.js`, Stripe integration, `README.md` — built for SaaS model, may need redesign.

## Tech Stack

- **Framework:** Next.js 13.4 (App Router) + React 18
- **Styling:** Tailwind CSS v4
- **Payments:** Stripe (needs reconfiguration from subscription to invoicing)
- **Exports:** html2pdf.js
- **Schema Validation:** AJV (JSON Schema Draft 7)
- **Markdown Parsing:** gray-matter (YAML front-matter)

## Key Commands

```bash
npm run dev              # Next.js dev server
npm run build            # Production build
npm run lint             # ESLint
npm run format           # Prettier format all files
npm run clean            # Remove .next cache
npm run build:ksas       # Generate data/master_ksa.json from KSA markdown files
npm run validate:ksas    # Build + validate KSA schema compliance
```

## Project Structure

```
content/Individual_KSAs/       # CORE ASSET — 400+ KSA markdown files by sector
  universal_professional/      #   15 Universal Professional competencies
  leadership_influence/        #   15 Leadership competencies
  self_management_personal_mastery/  #   15+ Self-Mastery competencies
  technical_ksas/              #   Sector-specific KSAs (35 sectors)
schemas/ksa.schema.json        # KSA validation schema
scripts/build_ksa_json.js      # Compiles KSAs → data/master_ksa.json
scripts/validate_ksas.js       # Schema validation
data/master_ksa.json           # Compiled KSA output (regenerate with build:ksas)
flows/                         # DEFERRED — Phase 3 AI companion content
docs/STRATEGIC_DIRECTION.md    # Authoritative development roadmap
docs/architecture/             # System architecture (review for Phase 1 relevance)
components/                    # React/UI components (shadcn/ui)
pages/                         # Next.js API routes and pages
```

## KSA Authoring Rules

- Every KSA is a markdown file with YAML front-matter
- **Required fields:** `ksa_id`, `label`, `category`, `description`, `sector`, `horizon`, `proficiency_levels`
- `ksa_id` must match `^[a-z0-9_]+$`
- `sector` must be one of the 35 enum values in `schemas/ksa.schema.json`
- `horizon` values: `core`, `emerging`, `perennial`, `watch_2030`, `peripheral`
- Each proficiency level needs `level` and `indicator`
- **Always run `npm run validate:ksas` after adding or editing KSA files**

## Development Principles

**DO:**
- Maintain and expand KSA content
- Build tools that support human-delivered services
- Create documentation that codifies methodology
- Design with Phase 2 in mind (digital intake, assessments)

**DO NOT:**
- Invest development time in AI companion features (Phase 3)
- Build SaaS subscription infrastructure
- Treat `flows/` as a current priority
- Develop features that bypass human coaches

## Git Conventions

- Branch naming: `feature/your-feature-name`
- One feature/fix per branch
- Commit messages: short, imperative ("Add onboarding walkthrough")
- Always pull before editing
- See `docs/sapience-dev_contributor-guide.md` for full guidelines
