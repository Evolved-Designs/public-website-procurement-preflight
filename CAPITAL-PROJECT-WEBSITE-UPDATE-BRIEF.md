# Capital Project Website Update Brief

Use this copy-ready brief when a renovation, expansion, relocation, or phased opening changes what visitors need to know. It is designed to add a dependable project-update layer without replacing a working registration, booking, membership, giving, ordering, or account system.

The goal is not to publish every construction detail. The goal is to keep approved project facts, operational impacts, and next actions current enough that a visitor can decide what to do today.

## Start with the controlled facts

Complete this source map before drafting the public update. Put `not approved` beside any field that has no owner-approved answer.

| Public fact | Approved value | Controlling owner or system | Verified on | Next review | Public? |
|---|---|---|---|---|---|
| Project name |  |  | YYYY-MM-DD | YYYY-MM-DD | Yes / No |
| Current phase and status |  |  |  |  |  |
| Public start or opening window |  |  |  |  |  |
| Public completion window |  |  |  |  |  |
| Address and entrance |  |  |  |  |  |
| Hours and closures |  |  |  |  |  |
| Parking or transit changes |  |  |  |  |  |
| Accessible route changes |  |  |  |  |  |
| Program or service relocations |  |  |  |  |  |
| Registration, booking, or account destination |  |  |  |  |  |
| Giving or supporter destination |  |  |  |  |  |
| Public questions contact |  |  |  |  |  |

Do not merge conflicting sources into a new claim. Keep the owner-controlled operational fact, record the mismatch, and route it to the source owners for resolution. An estimate, filing, planning case, or contractor schedule is not an owner commitment unless the organization approves it for public use.

## Copy this public update

Replace the bracketed text. Remove any section that is not applicable instead of publishing an empty heading.

---

**[Project name]: current update**  
**Last updated:** [Month DD, YYYY, time zone]  
**Current phase:** [Plain-language phase]  
**Next scheduled review:** [Month DD, YYYY]

### What is happening now

[Two or three sentences describing the owner-approved current phase, what has changed since the previous update, and what has not changed. Separate approved facts from estimates.]

### What visitors need to know today

| Topic | Current information | Effective dates | What to do |
|---|---|---|---|
| Hours | [No change / approved change] | [Dates] | [Specific action] |
| Entrance and accessible route | [Approved route] | [Dates] | [Specific action] |
| Parking or transit | [Approved impact] | [Dates] | [Specific action] |
| Programs or services | [Approved impact] | [Dates] | [Specific action] |
| Registration, booking, membership, or account access | [System status] | [Dates] | [Descriptive link to the existing system] |

If there is no operational impact, say so directly: **There are no approved changes to [hours, entrance, parking, programs, or registration] as of [date].** Do not imply that silence means no change.

### Milestones

| Milestone | Public status | Date or window | Source verified |
|---|---|---|---|
| [Milestone] | Planned / in progress / complete / delayed | [Approved date or range] | [Month DD, YYYY] |

Use ranges for uncertain dates. Label every estimate. Never convert a filing date, target, application, or third-party schedule into a guaranteed opening date.

### Take the next step

- [Register for the affected program — destination and owner]
- [View current hours and access information — destination and owner]
- [Support the project — destination and owner]
- [Ask a public project question — destination and response expectation]

Use link text that states the destination and task. Preserve existing provider systems when they work; do not duplicate an account, registration, payment, or giving flow just to make the project page look self-contained.

### Update history

- **[Month DD, YYYY]:** [Material change in one sentence.]
- **[Month DD, YYYY]:** [Material change in one sentence.]

### Source and boundary note

This update was verified by [publishing owner] against [approved source names] on [date]. Dates and scope labeled as estimates may change. For the controlling program, account, registration, or facility information, use the linked owner system.

---

## Run the release check

A named publisher should be able to show each item before release:

1. The visible `Last updated` date matches the approved fact set and the page's machine-readable `dateModified` value when Article structured data is used.
2. The status, schedule, address, hours, access, program, and destination facts each have one controlling owner.
3. Every material operational impact says what changed, when it applies, and what the visitor should do.
4. Link names describe their purpose; keyboard focus follows a meaningful order; dynamic confirmation or scoring messages are exposed as status messages without stealing focus.
5. The existing registration, booking, membership, giving, ordering, or account path was tested on mobile, desktop, and keyboard before release.
6. A rollback copy, approver, publication timestamp, and next-review date are recorded.

For urgent or sitewide impacts, use an established alert pattern with a specific heading and concise action. Do not style routine progress news as an emergency. The U.S. Web Design System distinguishes ordinary alerts from sitewide alerts, and WCAG 2.2 requires dynamic status messages to be programmatically determinable when they do not take focus.

## Measure freshness and usefulness separately

Record a baseline before publishing, then compare the same definitions after an approved interval.

- **Update freshness:** `today - last owner verification date`
- **Operational-impact coverage:** `applicable impact topics with a current approved answer / applicable impact topics × 100`
- **Milestone evidence coverage:** `public milestones with status, date or range, and verified source / public milestones × 100`
- **Priority-task handoff success:** `successful tested handoffs / tested priority tasks × 100`
- **Stale-link rate:** `broken or misrouted project-page action links / tested action links × 100`

Keep discovery and outcomes in separate layers. A project-page view is not an informed visitor, an outbound registration click is not a completed registration, and a giving-link click is not a gift. Use confirmed downstream outcomes only when the organization authorizes the data and privacy controls.

## Suggested update rhythm

- Review on every approved status, schedule, access, hours, service, or system change.
- Set a dated review even when there is no new milestone; publish `no approved operational change` only after an owner checks.
- Escalate a source mismatch immediately rather than silently choosing the more convenient value.
- Retire the project layer deliberately after the final operational handoff; preserve any records the organization must retain.

## Official references

- [W3C: Understanding WCAG 2.2 status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [W3C: Understanding link purpose in context](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [U.S. Web Design System: site alert](https://designsystem.digital.gov/components/site-alert/)
- [Google Search Central: Article structured data](https://developers.google.com/search/docs/appearance/structured-data/article)

This is a planning template, not a compliance certification, construction notice, records-retention policy, or substitute for the organization's legal, accessibility, safety, facilities, or communications review.

[Ask Evolved Designs to shape the project-update layer around your existing systems](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=owned_resource&utm_campaign=capital_project_update_brief).
