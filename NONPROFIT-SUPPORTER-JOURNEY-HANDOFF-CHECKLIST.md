# Nonprofit Supporter-Journey Handoff Checklist

Use this card when a nonprofit is promoting a campaign, volunteer need, event, mission trip, facility goal, or recurring-giving program across a website and one or more external systems.

The goal is not to replace a working donation, registration, email, or volunteer platform. It is to make the path into those systems current, understandable, accessible, measurable, and safe to test.

## Define the journey before changing the site

Choose one priority journey and one owner for each surface it crosses.

| Journey | Starting surface | Required decision facts | Completion system | Internal owner |
|---|---|---|---|---|
| Give | campaign, program, or donate page | purpose, amount options, recurrence, fees, tax-language owner | donation platform | |
| Volunteer | service or volunteer page | role, eligibility, location, schedule, next step | volunteer form or coordinator | |
| Attend | event or calendar page | date, time zone, location, capacity, cost, accessibility/contact route | registration platform | |
| Join a team | program, trip, or interest page | dates, prerequisites, cost or fundraising expectations, decision deadline | application or interest system | |
| Ask for help | contact or service page | audience, service area, availability, response expectation, safe-contact option | form, phone, or case system | |

Do not publish a date, goal, eligibility rule, fee, tax statement, availability promise, or response-time claim until its named owner approves it.

## Reconcile the public facts

For the selected journey, compare the owned page, navigation label, footer, current campaign or event page, and the destination system.

| Field | Owned page | Destination system | Controlling source and owner | Match? |
|---|---|---|---|---|
| Organization and program name | | | | |
| Purpose and intended beneficiary | | | | |
| Current date or deadline | | | | |
| Location or service area | | | | |
| Amount, fee, or cost language | | | | |
| Capacity or availability | | | | |
| Contact address or phone | | | | |
| Privacy and consent wording | | | | |
| Confirmation and follow-up expectation | | | | |
| Accessibility or accommodation route | | | | |

Resolve material contradictions before adding promotion. A stale event list, wrong address, legacy email, placeholder team member, conflicting deadline, or unexplained destination-domain change is a release blocker.

## Test with synthetic data

Use clearly labeled test records when the destination system permits them. Never enter a real donor's, volunteer's, participant's, client's, or beneficiary's information for a test.

1. Start from the page a new visitor is most likely to find.
2. Confirm the action label describes the actual destination: donate, register, volunteer, apply, or contact.
3. Repeat the path on mobile, desktop, and keyboard only.
4. Confirm the destination retains enough context for the person to know the organization, program, event, or campaign they selected.
5. Submit only when the form owner has approved a synthetic test; otherwise stop before submission and record that the completion step is unverified.
6. When submission is approved, verify the provider confirmation and the internal receipt or queue separately.
7. Remove or label the test record according to the organization's retention process.

## Pass the release gates

- **Fact gate:** every material statement has a current controlling source and owner.
- **Route gate:** every primary action reaches the intended current system without an unexplained detour.
- **Accessibility gate:** labels, instructions, errors, focus order, contrast, and keyboard operation are checked; do not claim conformance from this card alone.
- **Privacy gate:** collect only necessary information, expose the correct notice, and avoid sensitive test data.
- **Consent gate:** email and text choices are separate, understandable, and not inferred from another action.
- **Receipt gate:** the provider confirmation and the organization's internal receipt path are both verified when test submission is authorized.
- **Rollback gate:** the previous copy, URL, owner, timestamp, and restore steps are preserved before release.

## Measure without overstating impact

Keep these events separate:

- priority-page views;
- primary-action starts;
- destination arrivals;
- provider-confirmed submissions;
- internally received qualified records;
- completed donations, registrations, applications, or volunteer placements.

Do not call a click a donation, registration, volunteer, application, or revenue outcome. Report the numerator, denominator, date range, exclusions, and system of record for every rate.

Suggested measures:

- **Fact parity rate** = matching applicable fields / applicable fields x 100
- **Journey test pass rate** = passed applicable journey-device checks / applicable checks x 100
- **Receipt integrity rate** = internally received approved test submissions / provider-confirmed approved test submissions x 100
- **Freshness coverage** = priority pages reviewed by their due date / priority pages due for review x 100

## Record the handoff

```text
Priority journey:
Public starting URL:
Destination system and URL:
Controlling fact owner:
Destination-system owner:
Approved synthetic test? yes / no
Mobile / desktop / keyboard result:
Provider confirmation verified? yes / no / not authorized
Internal receipt verified? yes / no / not authorized
Material contradictions resolved:
Known limitations:
Release timestamp and approver:
Rollback location and owner:
Next fact-review date:
Measurement owner and system of record:
```

Need a bounded review of a nonprofit supporter path while preserving the systems that already work? [Ask Evolved Designs about a scoped supporter-journey check](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=reference&utm_campaign=nonprofit_supporter_journey_handoff).

This is an operational planning aid, not legal, tax, fundraising, privacy, or accessibility advice. It does not certify compliance or promise donations, registrations, volunteer participation, search placement, or revenue.

