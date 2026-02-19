# Sapience B2C Individual Intake Form
## Version 2.0 Specification

**Document Status:** Specification for implementation
**Form Title:** Personal Growth Discovery Form
**Target Completion Time:** 12-18 minutes
**Last Updated:** February 2026

---

## FORM HEADER

> **SAPIENCE — Personal Growth Discovery Form**
>
> You're taking an important step by exploring how to grow and develop. This form helps us understand where you are, where you want to go, and how we might help you get there.
>
> There are no right or wrong answers — just honest ones. Take about 12-18 minutes to complete this thoughtfully. Your responses help us personalize our conversation with you.
>
> *Everything you share is confidential and used only to serve you better.*

---

## SECTION 1: ABOUT YOU
*Let's start with the basics*

| Field | Type | Required | Options / Format |
|-------|------|----------|-----------------|
| Your Name | text | yes | |
| Email | email | yes | |
| Phone | tel | no | |
| City / Location | text | yes | |
| Age Range | radio | yes | 18-22 / 23-26 / 27-30 / 31-35 / 36-40 / 41+ |
| Current Situation | checkbox (multi) | yes | Student / Recently graduated / Employed full-time / Employed part-time / Job searching / Military / Entrepreneur / Career break / Other |
| Current Role / Title | text | conditional | Show if: Employed or Entrepreneur selected |
| Industry / Field | text | conditional | Show if: Employed or Entrepreneur selected |
| Years of Experience | number | yes | |
| How did you hear about Sapience? | checkbox | yes | Social media / Google / Referral / Event / College / Professional org / Other |

**UPLS Mapping:** Section 1 feeds `client_profile.demographics` and `industry_context` in intake schema.

---

## SECTION 2: WHERE YOU ARE NOW
*Understanding your current situation and challenges*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| What's prompting you to reach out? | textarea | yes | 2-3 sentence open-ended prompt |
| Which resonates with you? | checkbox (multi) | yes | See options below |
| How long have you felt this way? | radio | yes | Just recently / Few months / 6-12 months / Over a year / Years |
| What have you tried before? | textarea | no | Books, courses, coaching, therapy, etc. |
| What's at stake if nothing changes? | textarea | yes | Urgency / consequences |

**"Which resonates with you?" options:**
- Feeling stuck or uncertain about my direction
- I want to advance faster than I am
- Navigating a major career or life transition
- Struggling with focus, productivity, or motivation
- Building confidence for a new challenge
- Preparing for job search or promotion
- Wanting to develop leadership skills
- Feeling overwhelmed or burned out
- I just want more — personally or professionally
- Other

**UPLS Mapping:** Maps to `resilience`, `adaptability`, `growth_mindset`, `stress_management`.

---

## SECTION 2A: YOUR ASPIRATION PATH *(NEW)*
*Understanding what kind of journey you're on*

**Introduction text:** *"Knowing your specific goal helps us point you in the right direction. Select the option that best describes your situation."*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Which best describes your situation? | radio | yes | Routes to appropriate sub-section |

### Aspiration Type Options

| Option | Code | Description |
|--------|------|-------------|
| Career Advancer | `career_advancer` | I have a specific job or role I want to pursue |
| Entrepreneur | `entrepreneur` | I want to start or grow my own business |
| Career Explorer | `career_explorer` | I'm exploring what careers might fit me |
| Improver-in-Place | `improver` | I want to excel in my current role (not looking to leave) |
| Role Model Path | `role_model` | I admire someone's career and want to follow a similar trajectory |

### Sub-section 2A-i: Career Advancer
*Show if "Career Advancer" selected*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Target Job Title | text | yes | |
| Target Employer / Industry | text | yes | |
| What draws you to this role? | textarea | yes | |
| Do you have a job description to share? | radio | yes | Yes — I'll upload it / Yes — I'll paste it / Not yet |

**Schema mapping:** `aspiration_evidence.evidence_type = "target_job_description"`

### Sub-section 2A-ii: Entrepreneur
*Show if "Entrepreneur" selected*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Business idea (brief) | textarea | yes | |
| Who are your target customers? | text | yes | |
| What problem do you solve? | textarea | yes | |
| Timeline to launch / next milestone | radio | yes | Already launched / 0-6 months / 6-12 months / 1+ year / Still figuring it out |

**Schema mapping:** `aspiration_evidence.evidence_type = "business_concept_brief"`

### Sub-section 2A-iii: Career Explorer
*Show if "Career Explorer" selected*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Industries or fields that interest you | textarea | yes | |
| What matters most in your work? | textarea | yes | e.g., creativity, stability, impact, flexibility, income |
| Skills you most enjoy using | textarea | yes | |
| Values most important to you | textarea | no | |

**Schema mapping:** `aspiration_evidence.evidence_type = "sector_values_statement"`

### Sub-section 2A-iv: Improver-in-Place
*Show if "Improver-in-Place" selected*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| What do you most want to improve? | textarea | yes | |
| Biggest frustrations in your current role | textarea | yes | |
| What does success look like 6 months from now? | textarea | yes | |

**Schema mapping:** `aspiration_evidence.evidence_type = "improvement_goals"`

### Sub-section 2A-v: Role Model Path
*Show if "Role Model Path" selected*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Who do you admire? (name or description) | text | yes | Don't need to be famous |
| What specifically do you admire about them? | textarea | yes | |
| What capabilities do you want to develop? | textarea | yes | |

**Schema mapping:** `aspiration_evidence.evidence_type = "role_model_profile"`

---

## SECTION 3: WHERE YOU WANT TO BE
*Goals, aspirations, and vision*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| In 12 months, I want to... | textarea | yes | Specific near-term goal |
| In 3-5 years, I envision... | textarea | yes | Longer-term vision |
| What would make this a success from your perspective? | textarea | yes | Personal definition of win |
| What would make this a failure? | textarea | no | |
| How committed are you to making this change? | radio | yes | Exploring / Serious / All-in / This is urgent |

**UPLS Mapping:** Maps to `purpose_articulation`, `strategic_thinking`, `vision_setting`.

---

## SECTION 4: YOUR GROWTH PROFILE
*Self-assessment across key dimensions*

**Introduction text:** *"Rate yourself honestly on where you are now (1 = real struggle, 10 = strong strength) and where you want to be. This helps us identify your highest-priority growth areas."*

**Scale guidance:**

| Rating | Current State |
|--------|--------------|
| 1-2 | This is a real struggle for me |
| 3-4 | I'm getting by but want to improve |
| 5-6 | Doing okay, some room to grow |
| 7-8 | Fairly strong here |
| 9-10 | One of my strengths |

### Growth Dimensions (dual rating: Now / Want to Be)

| Dimension | Now (1-10) | Want to Be (1-10) | UPLS Mapping |
|-----------|-----------|-------------------|-------------|
| Career Clarity & Direction | ___ | ___ | strategic_thinking, purpose_articulation, vision_setting |
| Confidence & Self-Belief | ___ | ___ | growth_mindset, identity_self_authorship, resilience |
| Communication & Relationships | ___ | ___ | effective_communication, collaboration, emotional_intelligence |
| Productivity & Focus | ___ | ___ | time_management, deep_work_practice, attention_switching_focus |
| Leadership & Influence | ___ | ___ | team_building, mentoring_coaching, persuasion_negotiation |
| Resilience & Stress Management | ___ | ___ | stress_management, impulse_control, adaptability |
| Habits & Self-Discipline | ___ | ___ | self_motivation, accountability, digital_minimalism |
| Purpose & Values Alignment | ___ | ___ | purpose_articulation, ethical_reflection_reasoning, integrity_alignment |

**Supplemental questions:**
- Which 1-2 dimensions are most urgent for you right now? (text)
- Overall life satisfaction right now (1-10): ___

---

## SECTION 5: PRACTICAL CONSIDERATIONS
*Logistics, format, and investment*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| When do you need results? | radio | yes | ASAP / 1-3 months / 3-6 months / Flexible |
| Preferred format | checkbox | yes | 1:1 coaching / Group workshop / Cohort program / Self-paced / No preference |
| Session length preference | radio | no | 30 min / 45 min / 60 min / 90 min / Flexible |
| Preferred meeting time | checkbox | no | Mornings / Afternoons / Evenings / Weekends |
| Schedule availability | radio | yes | Very flexible / Moderately flexible / Very limited |
| Investment comfort level | radio | yes | See options below |
| Will someone else be involved in this decision? | radio | no | Just me / Partner/spouse input / Parent paying / Employer reimbursing |

**Investment comfort level options:**
- Under $500 (exploring options)
- $500-$1,000 (open to workshop or short program)
- $1,000-$2,500 (serious about investing)
- $2,500+ (ready to invest significantly in coaching)
- Unsure — depends on what's offered

*Note: Frame as "investment in your development" not "cost." Mention payment plans are available in follow-up communication.*

---

## SECTION 5A: SUPPORTING DOCUMENTS *(NEW)*
*Optional documents that help us understand your starting point*

**Introduction text:** *"Sharing documents is optional but helps us serve you better. The more context we have, the more tailored your first conversation will be. All documents are kept strictly confidential."*

### Baseline Documents

| Document | Upload | Notes |
|----------|--------|-------|
| Resume or LinkedIn Profile | File upload / URL | Helps us understand your background |
| Recent performance review or evaluation | File upload | Highlights strengths and development areas |
| Academic transcripts | File upload | Relevant if recent graduate or career-changer |
| Relevant certifications | File upload / List | Professional credentials you hold |

### Aspiration Documents (conditional on Section 2A selection)

| Document | Show When | Notes |
|----------|-----------|-------|
| Target job description | Career Advancer selected | The role you're pursuing |
| Business plan or concept brief | Entrepreneur selected | Even rough notes are helpful |
| Role model bio or LinkedIn profile | Role Model Path selected | Who you're inspired by |

### Document Metadata (per uploaded document)

For each uploaded document, collect:

| Field | Type | Notes |
|-------|------|-------|
| Document type | dropdown | Resume / Transcript / Certification / Appraisal / Job Description / Business Plan / Other |
| Date of document | date | Approximate is fine |
| Brief description | text | Optional — what should we know about this document? |

**Schema mapping:** Uploads populate `baseline_evidence` object in `intake_mapping_schema.json`.

---

## SECTION 6: ANYTHING ELSE?
*Open questions and final thoughts*

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| Anything else we should know? | textarea | no | Sensitivities, context, constraints |
| Questions for Sapience before your first call? | textarea | no | |
| How would you describe your situation in one sentence? | text | no | Optional — your own words |

---

## FORM FOOTER

> *By submitting this form, you consent to Sapience using your responses to personalize our services. Your information is never shared with third parties. You may request deletion of your data at any time by contacting us.*
>
> *Sapience is committed to your growth and privacy.*

---

## INTERNAL ROUTING GUIDE (Sapience Use Only)

### Offering Routing Matrix

| If Client Indicates... | Route To... |
|------------------------|-------------|
| Clear goals + coaching budget + complex situation | Career Compass Coaching (1:1) |
| Career Advancer with specific job target | Career Compass + resume coaching |
| Entrepreneur aspiration type | Career Compass (entrepreneurship track) |
| Productivity / habits / stress focus | Self-Mastery Workshop Series |
| Job search urgency + limited budget | Career Accelerator Bootcamp |
| Completed workshop + wants continued support | Alumni Mastermind |
| High motivation + flexible budget | Coaching + Workshop Bundle |
| Exploring / not ready to commit | Free webinar + nurture sequence |

### Lead Scoring

| Factor | Points |
|--------|--------|
| Clear, specific goals stated | +3 |
| Timeline urgency (next 1-3 months) | +2 |
| Investment comfort at coaching level ($1,000+) | +3 |
| Uploaded supporting documents | +2 |
| Referred by past client | +2 |
| Employed or recently graduated | +1 |
| High self-awareness in responses | +2 |
| Expressed strong motivation | +2 |
| **Total possible** | **17** |

**Interpretation:** 13-17 = high priority coaching candidate / 8-12 = workshop or bootcamp / 4-7 = nurture / 0-3 = gentle follow-up only

---

## FORM ADMINISTRATION NOTES

- **Delivery method:** Online form (Typeform, JotForm, or equivalent) with conditional logic for Section 2A sub-sections
- **File upload:** Secure file handling required; scan for malware on receipt
- **Response time:** Confirm receipt within 1 hour (automated), personal outreach within 24 hours
- **Discovery call:** 20-minute call within 48 hours of submission
- **Data handling:** Responses and documents stored in encrypted client file; deleted 2 years post-engagement per ASSESSMENT_FRAMEWORK_POLICY.md

*Last Updated: February 2026 | Version 2.0*
