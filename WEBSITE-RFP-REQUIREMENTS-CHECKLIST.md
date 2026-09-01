# Website RFP Requirements Checklist

Use this checklist before releasing a website redesign, migration, portal, or web-application request for proposals. It is designed to help procurement, communications, IT, and program teams compare proposals on observable outcomes instead of vague promises.

This is a planning aid, not legal advice. Adapt it to your organization, jurisdiction, security program, records obligations, and accessibility policy.

## 1. Business outcome and users

- [ ] Name the service or business outcome the website must improve.
- [ ] Identify primary user groups, including people using assistive technology, mobile devices, slow connections, or languages other than English.
- [ ] Define the highest-value user journeys.
- [ ] State the baseline metrics available today.
- [ ] Set measurable launch and post-launch success criteria.

**Acceptance evidence:** approved outcome statement, prioritized user journeys, baseline report, and named metric owners.

## 2. Scope and content

- [ ] Inventory current pages, files, forms, integrations, domains, and subdomains.
- [ ] State what will be retained, rewritten, migrated, archived, or removed.
- [ ] Assign content owners and approval authority.
- [ ] Define required content types, editorial workflows, permissions, and retention rules.
- [ ] Separate launch requirements from later phases.

**Acceptance evidence:** content inventory, disposition map, role matrix, and phased backlog.

## 3. Accessibility

- [ ] Cite the accessibility standard and conformance level required by your policy or law.
- [ ] Require accessibility throughout design, development, authoring, testing, and acceptance.
- [ ] Require both automated checks and manual testing, including keyboard and screen-reader review where appropriate.
- [ ] Require accessible templates, components, forms, documents, media, errors, and third-party integrations.
- [ ] Define remediation ownership, severity, evidence, and deadlines.

For federal procurement, [Section508.gov](https://www.section508.gov/buy/) recommends including accessibility from the beginning of the procurement lifecycle and validating it before award or deployment. W3C encourages use of the current [WCAG 2 standard](https://www.w3.org/WAI/standards-guidelines/wcag/).

**Acceptance evidence:** requirements traceability matrix, test results, defect log, remediation plan, and accessible content-authoring guide.

## 4. Privacy and data handling

- [ ] List every form, cookie, analytics tag, embedded service, and personal-data flow.
- [ ] Define collection purpose, consent, retention, access, deletion, and incident responsibilities.
- [ ] Require least-privilege administrative access and multi-factor authentication where supported.
- [ ] State where data may be stored and processed.
- [ ] Require a current inventory of subprocessors and third-party services.

**Acceptance evidence:** data-flow diagram, tag inventory, access matrix, retention schedule, and approved privacy notice.

## 5. Security and software supply chain

- [ ] Require a secure development process and named security owner.
- [ ] Define dependency, secret, vulnerability, patch, logging, backup, and recovery practices.
- [ ] Require a software/component inventory appropriate to the solution.
- [ ] Set vulnerability-response targets by severity.
- [ ] Define security testing, evidence, and handoff requirements.
- [ ] Prohibit shared credentials and production secrets in source control.

[NIST SP 800-218](https://csrc.nist.gov/pubs/sp/800/218/final) provides a common vocabulary for secure software development and supplier conversations.

**Acceptance evidence:** architecture diagram, dependency inventory, test summary, remediation log, recovery test, and operations runbook.

## 6. Performance, reliability, and compatibility

- [ ] Name supported browsers, devices, screen sizes, and connection conditions.
- [ ] Set measurable performance budgets for representative pages and journeys.
- [ ] Define availability, monitoring, alerting, backup, restore, and disaster-recovery expectations.
- [ ] State load, peak-event, and scaling assumptions.
- [ ] Define third-party failure behavior.

**Acceptance evidence:** repeatable test method, performance report, monitoring access, backup proof, and successful restore exercise.

## 7. Search discovery and migration

- [ ] Preserve a crawlable inventory of current URLs and their destination.
- [ ] Require one-to-one redirects where a relevant replacement exists.
- [ ] Define canonical URLs, metadata, structured data, crawl rules, and XML sitemap ownership.
- [ ] Preserve analytics and search-console verification through launch.
- [ ] Require pre-launch and post-launch crawl comparisons.
- [ ] Define how removed content returns an honest 404 or 410 response.

Google's current [site-move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes) recommends testing the new site, preparing a URL map, implementing redirects, and monitoring old and new URLs.

**Acceptance evidence:** signed-off URL map, redirect test, crawl comparison, sitemap submission, indexability checks, and monitoring report.

## 8. Ownership and portability

- [ ] Name the owner of domains, DNS, hosting, source code, design files, content, data, analytics, and platform accounts.
- [ ] Require organization-controlled accounts rather than vendor-personal accounts.
- [ ] Define licensing for code, fonts, themes, plugins, stock assets, and AI-generated material.
- [ ] Require export formats and a tested exit process.
- [ ] Define credential transfer and vendor offboarding.

**Acceptance evidence:** ownership register, license register, source repository access, export, credential handoff, and transition checklist.

## 9. Delivery, governance, and change control

- [ ] Require a delivery plan with dependencies, decision dates, and accountable owners.
- [ ] Define environments, release approvals, change logs, and rollback.
- [ ] Set review windows and what happens when feedback is late.
- [ ] Require demonstrations against acceptance criteria, not only status reports.
- [ ] Define how scope changes affect cost and schedule.

**Acceptance evidence:** plan, decision log, release record, rollback proof, and accepted change orders.

## 10. Support after launch

- [ ] Define warranty, maintenance, security-update, content-support, and enhancement boundaries.
- [ ] Set response and resolution expectations by severity.
- [ ] Name monitoring, reporting, escalation, and renewal owners.
- [ ] Require documentation and training for administrators and authors.
- [ ] Schedule 30-, 60-, and 90-day outcome reviews.

**Acceptance evidence:** support matrix, escalation path, training record, monthly report example, and post-launch review schedule.

## Proposal comparison prompts

Ask every bidder to answer the same questions:

1. Which requirements are included, excluded, assumed, or dependent on a third party?
2. What evidence will demonstrate each acceptance criterion?
3. Which accounts, assets, licenses, and data will the organization own at handoff?
4. What can interrupt launch, and what is the rollback path?
5. What recurring costs begin after launch?
6. What does the vendor need from the organization, by when, and from whom?
7. How will unresolved accessibility, security, privacy, migration, or performance defects be handled?

## Next step

Turn these requirements into a phased, acceptance-ready brief with Evolved Designs' browser-private [Website Procurement Readiness](https://evolveddesigns.net/website-procurement-readiness/?utm_source=github&utm_medium=resource&utm_campaign=website_rfp_checklist) path. It does not submit your selections. If the result points to implementation work, share only the non-confidential version with [Evolved Designs](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=resource&utm_campaign=website_rfp_checklist).
