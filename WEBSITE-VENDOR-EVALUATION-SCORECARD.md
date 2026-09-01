# Website Vendor Evaluation Scorecard

Use this scorecard to compare proposals for a website redesign, migration, portal, or web application after responsiveness review and before interviews or award. It helps an evaluation team distinguish evidence from promises, apply the published criteria consistently, and preserve a short rationale for each rating.

This is a planning aid, not legal advice or a substitute for your procurement policy. Publish the actual evaluation factors, significant subfactors, relative importance, and award method in the solicitation. Do not invent new criteria after proposals arrive.

## Before evaluators score

- Give every evaluator the final solicitation, all addenda, the same proposal set, and the same scoring instructions.
- Resolve conflicts of interest and confidentiality requirements before distributing proposals.
- Separate responsiveness or mandatory requirements from comparative scoring.
- Decide whether price will be scored, evaluated separately, or used in a documented tradeoff.
- Require evaluators to cite a proposal page, attachment, demonstration, reference, or clarification for every non-zero technical score.
- Score independently before consensus. Preserve both the initial evaluation and the reason for any consensus change.

For covered federal acquisitions, follow the FAR and your agency procedures. [FAR 15.101-1](https://www.acquisition.gov/far/15.101-1) requires the solicitation to state the evaluation factors and significant subfactors, their relative importance, and the relationship between price and non-price factors when using a tradeoff process. [FAR 15.305](https://www.acquisition.gov/far/15.305) calls for an assessment and supporting narrative against those published factors.

## Gate review: pass, fail, or clarify

Complete this review before assigning comparative points. A gate should be mandatory only if the solicitation says it is.

| Gate | Evidence to record | Result |
| --- | --- | --- |
| Submission is complete, timely, signed, and delivered through the required channel | Receipt, timestamp, signature, and required forms | Pass / Fail / Clarify |
| Offeror accepts or clearly identifies exceptions to material terms | Exception list and affected section | Pass / Fail / Clarify |
| Required insurance, licensing, registrations, and representations are present | Certificate, registration, or attestation reference | Pass / Fail / Clarify |
| Conflicts, subcontractors, and key dependencies are disclosed | Disclosure and mitigation reference | Pass / Fail / Clarify |
| Accessibility response addresses every stated requirement | ACR or other requested evidence, test approach, and remediation plan | Pass / Fail / Clarify |
| Security, privacy, hosting, and data-location requirements are addressed | Architecture, control, subprocessor, and incident-response references | Pass / Fail / Clarify |
| Ownership, licensing, portability, and exit obligations are accepted | Contract exception and deliverables reference | Pass / Fail / Clarify |
| Price form is complete and includes required recurring and optional costs | Price schedule and assumption reference | Pass / Fail / Clarify |

Do not treat a polished proposal as evidence that a gate is satisfied. Record the exact location of the supporting material or the clarification requested.

## 100-point technical score

These sample weights fit a moderately complex website implementation. Adapt and publish them before release. If the project is primarily custom software, integration, content migration, or managed service, change the weights to match the actual risk.

| Factor | Weight | What strong evidence looks like |
| --- | ---: | --- |
| Understanding of users and outcomes | 10 | Prioritized journeys, baseline assumptions, research plan, measurable outcomes, and a clear link between the approach and the service need |
| Technical and content approach | 20 | Architecture appropriate to the requirement; content model; editorial workflow; integrations; environments; quality controls; and explicit assumptions |
| Accessibility, usability, and inclusive delivery | 15 | Named standard; qualified roles; continuous automated and manual testing; assistive-technology coverage; content-author training; defect handling; and acceptance evidence |
| Security, privacy, reliability, and operations | 15 | Secure development practices; least privilege; dependency and secret handling; monitoring; backup and restore; incident roles; data flows; and subprocessors |
| Migration, search, analytics, and launch | 10 | Inventory and disposition method; URL mapping; redirect and crawl validation; analytics continuity; launch rehearsal; rollback; and post-launch monitoring |
| Delivery plan, governance, and risk control | 10 | Work breakdown; decision dates; accountable roles; dependencies; demonstrations tied to acceptance criteria; risk register; change control; and realistic client effort |
| Team and relevant past performance | 10 | Named people and availability; directly relevant work; references with comparable constraints; lessons learned; and responsibility for subcontractors |
| Ownership, handoff, training, and support | 10 | Organization-controlled accounts; source and design assets; licenses; documentation; administrator and author training; warranty; support boundaries; and tested exit path |
| **Total** | **100** | |

Evaluate price or cost exactly as the solicitation states. Do not quietly convert an unscored tradeoff into a lowest-price decision, or turn a lowest-price technically acceptable process into an unpublished quality competition.

## Scoring anchors

Rate every factor from 0 to 5, then calculate `factor points = weight × rating ÷ 5`.

| Rating | Anchor |
| ---: | --- |
| 0 | No response, disqualifying contradiction, or no usable evidence for the factor |
| 1 | Materially incomplete; major weaknesses create a high likelihood of unsuccessful performance |
| 2 | Partially responsive; weaknesses or unsupported assumptions create meaningful delivery risk |
| 3 | Meets the stated requirement with credible evidence and manageable risk |
| 4 | Exceeds the requirement in a way that provides a documented, relevant benefit |
| 5 | Exceptional evidence of a substantial, relevant benefit with low execution risk; use rarely |

A higher score requires more than extra features or more pages. The evaluator should be able to name the benefit to the organization and the evidence that makes it credible.

## Evaluator worksheet

Create one row per factor for each proposal. Do not record confidential proposal material in a public or broadly shared worksheet.

| Factor | Weight | Rating (0–5) | Weighted points | Evidence location | Strength, weakness, risk, or clarification |
| --- | ---: | ---: | ---: | --- | --- |
| Users and outcomes | 10 | | | | |
| Technical and content approach | 20 | | | | |
| Accessibility and usability | 15 | | | | |
| Security, privacy, reliability, and operations | 15 | | | | |
| Migration, search, analytics, and launch | 10 | | | | |
| Delivery, governance, and risk | 10 | | | | |
| Team and past performance | 10 | | | | |
| Ownership, handoff, training, and support | 10 | | | | |
| **Technical total** | **100** | | | | |

For every strength or weakness, write three things:

1. The proposal evidence or omission.
2. The effect on an outcome, requirement, cost, schedule, or risk.
3. Why that effect changes the rating under the published factor.

Example: “Page 18 identifies one-to-one URL mapping, pre-launch crawl comparison, redirect tests, and 30-day index monitoring. This reduces migration and search-loss risk beyond the minimum launch requirement, supporting a rating of 4 for migration.”

## Accessibility evidence review

Do not award accessibility points solely because a vendor says it follows WCAG or uses an automated scanner. [Section508.gov’s acquisition guidance](https://www.section508.gov/buy/) recommends defining requirements early, requesting vendor evidence, evaluating the response, and validating contractor compliance. Its [vendor-information guidance](https://www.section508.gov/buy/request-accessibility-information/) distinguishes evidence for standard products from customized development and describes test methods, issue detail, remediation, demonstrations, and training information buyers can request.

Record whether the proposal identifies:

- the applicable standard and scope;
- who tests, when, with which methods, browsers, assistive technologies, and representative journeys;
- how templates, components, content, documents, media, forms, and third-party tools are covered;
- how defects are prioritized, remediated, retested, and accepted;
- what evidence the organization receives before launch; and
- how authors and administrators are trained to preserve accessibility.

## Security and supplier evidence review

Look for a delivery process that can be demonstrated, not a generic statement that the site will be secure. [NIST SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) provides a common vocabulary buyers and suppliers can use when discussing secure software development.

Record whether the proposal explains:

- security roles and secure-development practices;
- administrative access, multi-factor authentication, and least privilege;
- source, dependency, secret, vulnerability, patch, and release handling;
- data flows, retention, subprocessors, logs, monitoring, and incident responsibilities;
- backups, restore testing, recovery objectives, and third-party failure behavior; and
- which evidence, inventories, runbooks, and credentials transfer at handoff.

## Interview and demonstration prompts

Use the same core prompts for every shortlisted vendor. Ask evaluators to update scores only when the procurement rules allow it and the new evidence is documented.

1. Demonstrate how one priority journey moves from discovery through design, build, test, acceptance, and measurement.
2. Show a real accessibility defect your team found, how it affected a user, and how you proved the correction.
3. Walk through a migration decision involving a retired page, a changed URL, and a file that must remain available.
4. Show the project artifact that exposes client decisions, dependencies, risks, and late feedback.
5. Explain what happens when a third-party integration fails on launch day.
6. Identify every account, asset, license, repository, credential, and dataset the organization will control at handoff.
7. Describe a comparable project that went off plan, the signal you missed, and the control you changed afterward.
8. Reconcile the proposed schedule, named people, client effort, assumptions, recurring costs, and optional costs.

## Consensus and decision record

At consensus, do not average away a material disagreement. Capture:

- each evaluator’s initial total;
- the consensus rating and evidence for each factor;
- strengths, weaknesses, risks, deficiencies, and clarifications using the terms in your procurement procedure;
- any score change and its reason;
- the evaluated price or cost and the approved comparison method;
- reference, responsibility, or financial-capacity findings when applicable; and
- the award or shortlist rationale tied to the published factors.

Keep the supporting narrative. A number without evidence is difficult to defend and rarely helps the delivery team manage the risks identified during selection.

## Next step

Pair this scorecard with the [Website RFP Requirements Checklist](WEBSITE-RFP-REQUIREMENTS-CHECKLIST.md) before release so requirements, proposal instructions, evaluation factors, and acceptance evidence remain aligned.

If your team needs a neutral working session to turn the requirement into an evaluation-ready brief or to pressure-test implementation assumptions, contact [Evolved Designs](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=resource&utm_campaign=website_vendor_scorecard). Share only a non-confidential scope.

