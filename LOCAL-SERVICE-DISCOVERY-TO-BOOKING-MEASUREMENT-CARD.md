# Local Service Discovery-to-Booking Measurement Card

Use this one-page operating card when a local service business already has a working booking, ordering, membership, or scheduling platform but customers still need a clearer path from local discovery to the right action.

The goal is not to replace a functioning operational system. The goal is to make the business-owned discovery layer accurate, accessible, measurable, and easy to hand off into that system.

## 1. Name the journey before changing the tools

Write one sentence for the visitor journey you are improving:

> A person in **[location]** looking for **[service]** should be able to confirm **[decision facts]** and reach **[booking or inquiry action]** without guessing which page, profile, app, or provider is official.

Choose one primary journey per card. Examples include booking a first class, requesting an estimate, reserving a consultation, ordering for pickup, or finding the right location. A broad goal such as “increase engagement” is not specific enough to test.

Record the baseline date, owner, and next review date. If no privacy-safe measurement is available, mark the field `not observed`; do not substitute an impression or click for a completed transaction.

## 2. Build the source-and-ownership map

List every surface a visitor may encounter and classify who controls it. Do this before rewriting copy or adding another link.

| Surface | URL or app | Owner | Facts it controls | Primary action | Last verified |
| --- | --- | --- | --- | --- | --- |
| Official website or location page |  | Business | Name, location, services, hours, policies |  |  |
| Google Business Profile |  | Business / authorized manager | Local presence and action links |  |  |
| Booking, ordering, or membership platform |  | Authorized provider | Availability, price, transaction state |  |  |
| iOS or Android app listing |  | Business or provider | App identity, publisher, support and privacy links |  |  |
| Social profile |  | Business | Launches, changes, timely proof |  |  |
| Directory or partner listing |  | Third party | Referral context |  |  |

Do not infer ownership from branding alone. App-store developer, provider, privacy, support, and “website” links may identify the software vendor rather than the local operator. Treat vendor support as a vendor contact unless first-party evidence proves otherwise.

## 3. Establish the discovery facts

For the selected journey, assign one controlling source and one owner to each applicable fact:

- Business name and location name
- Address, suite, entrance, parking, and service area
- Phone, email, and inquiry route
- Hours, holiday exceptions, and appointment requirements
- Service or class name, audience, duration, and price boundary
- Accessibility information needed to plan the visit or transaction
- Cancellation, refund, age, arrival, and safety policies
- Booking, ordering, membership, or consultation action
- Current opening, move, team, or service-change status

Compare the facts across the website, profile, app, operational platform, and two most visible third-party surfaces. Record each applicable field as `match`, `conflict`, `missing`, or `stale`.

```text
discovery parity rate = matching applicable fields / applicable fields x 100
```

A high rate does not prove that the journey converts. It proves only that the compared public facts agree on the review date.

## 4. Design a clear handoff

The business-owned page should help a visitor decide before sending them to a provider or app. Include only verified facts and make the next step explicit:

- Use descriptive action text such as “Book a first class” or “Request an estimate”; avoid repeated “click here” labels.
- Identify when a link opens an external booking or ordering provider.
- Keep location, service, policy, and accessibility context available before the handoff.
- Link to the most relevant destination, not a generic platform home page.
- Preserve a visible phone or inquiry alternative when the business supports one.
- If multiple action links exist, name the preferred route and document why.
- Add applicable `LocalBusiness` structured data only for facts visible on the page; validate it and never use markup to invent or hide information.

Google documents that a Business Profile can contain service and transaction links, can mark one link as business-preferred, and may also show links supplied by third-party providers. Google also recommends using the most specific applicable `LocalBusiness` structured-data subtype on an official business page. Those capabilities make ownership and destination checks part of the release, not optional cleanup.

## 5. Test the transition, not just each page

Run the primary journey on at least one current mobile viewport and one desktop viewport. Include a keyboard-only pass when the handoff starts on a website.

| Check | Mobile | Desktop | Keyboard | Evidence |
| --- | --- | --- | --- | --- |
| Discovery page loads and identifies the business/location |  |  |  |  |
| Decision facts match the controlling source |  |  |  |  |
| Action text describes its purpose |  |  |  |  |
| External provider or app destination is expected |  |  |  |  |
| Destination preserves the correct location/service context |  |  |  |  |
| A visitor can recover from a closed app, error, or unavailable slot |  |  |  |  |
| Supported contact alternative is visible |  |  |  |  |

Save the tested URLs, timestamp, viewport, result, and a screenshot or text record. A successful page load is not a successful booking. A successful handoff means the visitor reached the intended operational destination with the right context and without a material contradiction.

## 6. Use a three-layer measurement ladder

Measure only signals that the business is authorized to collect and can interpret honestly.

1. **Discovery:** impressions, profile views, organic landing sessions, or local query coverage.
2. **Handoff:** clicks on the named action, app-store selections, provider referrals, or tracked calls.
3. **Confirmed outcome:** completed booking, order, qualified inquiry, membership, or attended visit from an authorized operational source.

Keep the layers separate. Report these rates only when the numerator and denominator come from compatible, privacy-safe sources:

```text
handoff rate = handoff actions / eligible discovery sessions x 100
confirmed completion rate = confirmed outcomes / eligible handoffs x 100
```

Do not call an outbound click a booking, an app install a membership, or an inquiry a sale. When cross-platform completion cannot be measured, report discovery and handoff separately and label the outcome gap.

## 7. Release with rollback evidence

Capture the before state for every edited business-owned surface. Record the page, profile field, action destination, responsible owner, approval, and exact rollback. Then use a bounded release:

- **Before:** parity rate, tested journey, destination, baseline measures, screenshots or exports
- **Change:** copy, structured data, link, profile field, or handoff routing updated
- **First 24 hours:** broken-link and destination-context checks
- **Day 7:** discovery and handoff comparison with anomalies noted
- **Day 30:** confirmed outcomes when available; keep, revise, or revert decision
- **Rollback:** prior copy, link, structured data, and profile values restored by the named owner

Pause or revert when the primary action reaches the wrong business, location, service, or provider; when a material fact conflicts; when the path loses a supported accessibility or contact alternative; or when measurement transmits data beyond the approved boundary.

## Ready-to-use decision record

```text
Journey:
Business/location:
Controlling sources:
Operational provider:
Business-owned discovery page:
Discovery parity rate:
Mobile / desktop / keyboard result:
Primary action and destination:
Discovery baseline:
Handoff baseline:
Confirmed-outcome source or "not observed":
Release owner and approval:
Rollback reference:
24-hour / day-7 / day-30 review dates:
Decision: keep / revise / revert
```

## Official references

- [Google Business Profile Help: manage local business links](https://support.google.com/business/answer/6218037?hl=en)
- [Google Business Profile Help: business-links policies and crawlability](https://support.google.com/business/answer/13769188?hl=en)
- [Google Search Central: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [W3C WAI: understanding link purpose in context](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)

This is an operating worksheet, not legal advice, an accessibility certification, or a guarantee of search visibility or completed transactions.

Need help reconciling a local discovery surface with an existing booking, ordering, or membership platform? [Ask Evolved Designs to scope a measured handoff](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=owned_resource&utm_campaign=local_discovery_booking_handoff).

