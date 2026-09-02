# Website Procurement Buyer Kit

Use this one-page route to turn an early website need into a requirements package, an evidence-based vendor decision, and a testable launch handoff. It connects the four planning tools in this repository so your team can start with the decision in front of it instead of reading every resource in sequence.

This is a planning aid, not legal or procurement advice. Apply your organization’s purchasing rules, records policy, accessibility obligations, security requirements, and approval thresholds.

## Pick the decision you need to make now

| Your current decision | Start here | Leave with |
| --- | --- | --- |
| “What problem are we buying a solution for?” | The route below, then the [Website RFP Requirements Checklist](WEBSITE-RFP-REQUIREMENTS-CHECKLIST.md) | A need statement, decision owners, boundaries, measurable outcomes, and an evidence plan |
| “How large and risky is this migration?” | [Large Website Migration Scope Estimator](LARGE-WEBSITE-MIGRATION-SCOPE-ESTIMATOR.md) | An inventory model, transparent manual-review sample, separate risk score, and full-population automated checks |
| “How should AI search, AEO, or GEO work be procured?” | [AI Search Program RFP Requirements Checklist](AI-SEARCH-PROGRAM-RFP-REQUIREMENTS-CHECKLIST.md) | A baseline, platform controls, accuracy governance, auditable measures, and exit rights without placement guarantees |
| “How will we compare proposals consistently?” | [Website Vendor Evaluation Scorecard](WEBSITE-VENDOR-EVALUATION-SCORECARD.md) | Gate decisions, weighted factor scores, cited evidence, risk notes, and a preserved consensus rationale |
| “How will we know the delivered website is acceptable?” | Reopen the requirements checklist and scorecard before award | Named acceptance evidence, owners, dates, remedies, and an operations handoff |

## The 10-minute route

Answer these five questions in a shared working document. If an answer is unknown, record the owner and the date it will be resolved; do not hide it inside “vendor to advise.”

1. **What must change for users or the organization?** Write one need statement without naming a platform or vendor. Add two to four measurable outcomes, the audiences affected, and the consequence of doing nothing.
2. **What is inside and outside the work?** Name the sites, applications, content collections, integrations, languages, records, and support periods in scope. List exclusions explicitly.
3. **What evidence will prove success?** Define the artifact, test method, threshold, reviewer, and due date for each critical requirement. “Meets best practices” is not an acceptance test.
4. **What could invalidate a proposal?** Identify mandatory accessibility, privacy, security, ownership, staffing, schedule, migration, and contracting gates before applying weighted preferences.
5. **Who can decide?** Record the requirement owner, procurement lead, technical reviewer, accessibility reviewer, security/privacy reviewers, approver, and contract administrator.

If questions 1, 3, or 5 are unanswered, pause drafting and run a short discovery session. More proposal detail will not repair an unclear need, an absent acceptance rule, or missing decision authority.

## Build one traceable evidence chain

Create one row per material requirement and keep the same identifier from market research through acceptance.

| Field | What to record |
| --- | --- |
| Requirement ID | A stable label such as `ACC-04`, `MIG-07`, or `OPS-02` |
| Need and user | The problem, affected audience, and intended outcome |
| Requirement | A testable “shall” statement, including applicable constraints |
| Offeror response | The exact evidence, example, staffing detail, method, or price requested |
| Evaluation rule | Mandatory gate or weighted factor; include the published weight when applicable |
| Acceptance evidence | Test method, sample or full population, threshold, artifact, reviewer, and timing |
| Contract response | Remedy, correction window, holdback, or escalation path when evidence fails |
| Owner and status | One accountable person and the current decision state |

This chain prevents three expensive breaks: asking vendors for evidence that is never evaluated, scoring promises that never become contract deliverables, and accepting a launch without the proof named in the solicitation.

## Run the six-stage buying loop

### 1. Define the need

Use the need statement and boundaries from the 10-minute route. Separate outcomes from preferred implementation. Record known constraints and assumptions that market research should challenge.

### 2. Research the market

Compare credible delivery approaches, commercial practices, small or new entrants where applicable, likely cost drivers, and support models. Document what changed in the requirement because of the research. For U.S. federal teams, FAR Part 10 requires market research appropriate to the circumstances before developing new requirements documents and before certain solicitations; other buyers can still reuse the evidence discipline.

### 3. Develop the solicitation

Complete the [Website RFP Requirements Checklist](WEBSITE-RFP-REQUIREMENTS-CHECKLIST.md). Add the migration estimator when content or platform movement is material. Add the AI-search checklist only when that capability is genuinely in scope. Publish the response format, mandatory gates, weighted factors, schedule, question process, data-handling rules, and acceptance evidence.

### 4. Request comparable evidence

Ask every offeror for evidence in the same structure. Distinguish a public case study from an authorized reference, an automated scan from manual accessibility evaluation, and a product feature from a staffed delivery method. Require assumptions and exclusions next to price.

### 5. Evaluate and preserve rationale

Use the [Website Vendor Evaluation Scorecard](WEBSITE-VENDOR-EVALUATION-SCORECARD.md). Resolve mandatory gates before weighted scoring. Require a citation or source note for every rating, score independently before consensus, and preserve conflicts and risk treatments instead of averaging them away.

### 6. Validate delivery

Move the requirement IDs and acceptance rows into the contract and delivery plan. Test at agreed milestones, not only at launch. Preserve test results, exceptions, corrections, approvals, credentials and ownership transfers, redirect evidence, content reconciliation, accessibility findings, security decisions, analytics validation, and the operational runbook.

The Section 508 acquisition guidance uses a similar pre-award, award, and post-award sequence: determine accessibility requirements, conduct market research, develop solicitation language, request vendor information, evaluate proposals, and validate contractor compliance. The durable lesson is broader than one regulation: accessibility evidence has to survive the entire buying lifecycle.

## Red flags to resolve before release

- A platform or redesign is named before the need and trade-offs are documented.
- Accessibility is reduced to a generic compliance claim with no applicable criteria, evaluation evidence, or acceptance method.
- Migration volume excludes documents, structured records, media, redirects, archives, integrations, or ownership cleanup.
- AI-search work promises rankings, citations, or inclusion that no vendor controls.
- Evaluation weights do not match the information requested from offerors.
- The winning proposal can score well without naming the people who will perform the work.
- Acceptance depends on “client satisfaction” instead of observable evidence and thresholds.
- Ownership, export, credential transfer, source access, licenses, records, and transition support are deferred until termination.

## Suggested evidence folder

```text
00-governance/
01-market-research/
02-requirements/
03-solicitation-and-addenda/
04-offeror-evidence/
05-evaluation/
06-contract-and-changes/
07-acceptance/
08-operations-and-exit/
```

Keep confidential, procurement-sensitive, personal, and security information only in an approved system. A public planning repository should contain templates and non-confidential examples, not live proposals or evaluator records.

## Official references

- [FAR Part 10 — Market Research](https://www.acquisition.gov/far/part-10)
- [FAR Part 7 — Acquisition Planning](https://www.acquisition.gov/far/part-7)
- [Section508.gov — Buy Accessible Products and Services](https://www.section508.gov/buy/)
- [Section508.gov — Request Accessibility Information from Vendors and Contractors](https://www.section508.gov/buy/request-accessibility-information/)

Need a neutral working session to turn a non-confidential need, inventory, or draft solicitation into a traceable buyer brief? [Start a scoped conversation with Evolved Designs](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=resource&utm_campaign=website_procurement_buyer_kit).
