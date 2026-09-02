# Local Business Launch and Rebrand Rollout Checklist

A launch, move, expansion, or rebrand is not complete when one page goes live. Customers may still meet an old name in navigation, a stale address in search, a discontinued service in a booking tool, or a form that cannot route the request to the right location.

Use this checklist to coordinate the public surfaces a local business controls or can verify. It is designed for a bounded release with owners, evidence, and rollback—not an open-ended redesign.

## Choose the release and the controlling sources

Write one sentence that defines the change:

```text
On [date and time with time zone], [business] will change [name, location, service, team, platform, or offer] from [before] to [after].
```

For every material fact, identify one controlling source before editing any public surface.

| Material fact | Controlling source and owner | Approved after-state | Effective time | Rollback or correction route |
| --- | --- | --- | --- | --- |
| Public business name |  |  |  |  |
| Address and service area |  |  |  |  |
| Phone, email, and inquiry owner |  |  |  |  |
| Normal and special hours |  |  |  |  |
| Services, prices, minimums, and capacity |  |  |  |  |
| Booking, ordering, estimate, or tour destination |  |  |  |  |
| Policies and response expectation |  |  |  |  |

Do not copy a fast-changing operational value onto several pages unless somebody owns every copy. When a booking or commerce platform controls live availability or exact price, link to the deepest stable destination and say what that platform controls.

## Inventory the rollout surfaces

Mark each applicable surface `ready`, `blocked`, `not applicable`, or `verified`. Preserve the exact URL and a dated screenshot or text snapshot.

| Surface | Owner and access verified | Before-state saved | Change prepared | Live result verified |
| --- | --- | --- | --- | --- |
| Homepage, navigation, footer, and contact page |  |  |  |  |
| Location, service, team, gallery, FAQ, and policy pages |  |  |  |  |
| Booking, commerce, CRM, event, or inquiry platform |  |  |  |  |
| Google Business Profile and map destination |  |  |  |  |
| Business-controlled social profiles and profile links |  |  |  |  |
| Important industry, chamber, or local directories |  |  |  |  |
| Email templates, signatures, and automated replies |  |  |  |  |
| Search Console, analytics, consent, and tag configuration |  |  |  |  |

A listing that the business does not control belongs in a correction queue. Do not delay an otherwise safe launch merely to claim every third-party copy has changed.

## Pass the five release gates

### 1. Identity and ownership

- The approved name, address or service area, phone, hours, and primary URL agree on the owned site and operational platform.
- Old and new names are used intentionally during a transition; visitors are not left to guess whether they reached the same business.
- Each location has a distinct, accurate route when locations have different hours, services, or booking options.
- The person who can correct each surface is recorded.

### 2. Discoverability and URL continuity

- Priority pages have descriptive titles, one clear primary heading, current contact details, and useful page copy.
- Applicable `LocalBusiness` or `Organization` structured data matches visible page content and the controlling source.
- Changed URLs have one-to-one mappings. Use server-side permanent redirects where appropriate and avoid sending unrelated old pages to the homepage.
- Internal links, canonical URLs, sitemaps, profile links, and campaign destinations use the intended live URLs.
- Search Console ownership remains available for every relevant property.

Structured data can make information easier for search systems to understand, but it does not guarantee a particular search appearance or ranking.

### 3. Conversion and routing

- Every `Book`, `Order`, `Request pricing`, `Schedule a tour`, or `Contact` action opens the intended service, provider, offer, or location.
- Forms ask only for information required to route or complete the request.
- Every visible control has a meaningful label; required formats and next-step expectations are explained.
- A safe, authorized test reaches the intended inbox or system queue without creating a real customer record or charge.
- Confirmation copy identifies what happened, the expected response time, and a correction route.

### 4. Accessibility, privacy, and trust

- Keyboard users can reach and operate navigation, forms, dialogs, and the primary action with a visible focus indicator.
- Images that communicate information have useful alternatives; decorative images do not create noise.
- Error messages identify the affected field and explain how to correct it.
- The privacy notice and consent behavior match the data the live form, analytics, and connected systems actually collect.
- Draft text, test identities, stale phone numbers, placeholder prices, and old policy language are absent from the release.

### 5. Evidence, ownership, and rollback

- One release owner can stop the launch when a critical gate fails.
- The prior copy, URL map, form configuration, profile details, and analytics configuration are recoverable.
- The release log records who changed what, when, where, and how the live result was checked.
- Critical failures have an explicit rollback threshold rather than a vague promise to monitor.

## Run the release timeline

### Before launch

1. Capture the source-of-truth table and before-state evidence.
2. Inventory every applicable surface and assign owners.
3. Prepare URL mappings, copy, structured data, form routing, profile edits, and directory corrections.
4. Test priority visitor tasks on desktop, a narrow mobile viewport, and keyboard-only navigation.
5. Record baseline measures and the exact rollback route.

### Launch window

1. Publish the owned site and operational changes in the approved sequence.
2. Enable redirects and verify a sample plus every high-traffic or high-risk old URL.
3. Update the Google Business Profile and business-controlled profile links only from an authenticated owner account.
4. Run one safe task per priority action and location; stop before a real transaction unless the owner authorized the test.
5. Roll back or disable promotion when a critical contact, location, policy, security, privacy, or transaction route is wrong.

### First 72 hours

- Recheck the homepage, priority landing pages, contact route, booking or order handoff, map destination, hours, and form delivery.
- Review server errors, redirect misses, form failures, consent behavior, and support questions.
- Confirm profile edits from a public view; a saved edit is not proof that every visitor sees it immediately.
- Correct material contradictions before publishing more promotional content.

### Days 7 and 30

- Re-run the inventory and close, defer, or assign every outstanding correction.
- Compare only like-for-like measures using the same definitions and time windows.
- Keep redirects for the documented migration period; do not remove them merely because the new page has been indexed once.
- Record what remained accurate and promote repeatable fixes into the next release template.

## Measure without overstating results

Choose only measures the connected systems can support.

| Measure | Definition |
| --- | --- |
| Surface verification rate | Verified applicable surfaces / applicable surfaces |
| Material conflicts open | Count of wrong name, location, contact, hours, price, policy, capacity, or transaction-route facts |
| Priority task success rate | Visitor tasks reaching the intended next step / priority tasks tested |
| Redirect validity | Mapped old URLs reaching the intended final destination without an avoidable chain / mapped old URLs tested |
| Form delivery rate | Authorized test submissions received in the intended queue / authorized tests sent |
| Correction time | Time from verified material conflict to verified correction |
| Qualified handoffs | Leads or bookings only when the receiving system supplies an authorized, privacy-safe confirmation signal |

Do not label a page view, button click, saved profile edit, or outbound booking-link click as a completed inquiry, booking, or sale.

## Preserve a compact release record

```text
Release:
Owner:
Effective time and time zone:
Applicable surfaces / verified surfaces:
Priority tasks passed / tested:
Material conflicts before / after:
Redirects valid / tested:
Form deliveries received / authorized tests:
Critical rollback threshold:
Evidence folder or ticket:
Day-7 owner and date:
Day-30 owner and date:
```

## Official implementation references

- [Google Business Profile Help: edit business hours](https://support.google.com/business/answer/15300403)
- [Google Search Central: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google Search Central: site moves with URL changes](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [W3C Web Accessibility Initiative: forms tutorial](https://www.w3.org/WAI/tutorials/forms/)
- [W3C Web Accessibility Initiative: labeling controls](https://www.w3.org/WAI/tutorials/forms/labels/)

This is a planning checklist, not a promise of search placement, accessibility conformance, or business results. Test the actual implementation and follow the legal, platform, and industry requirements that apply to the business.

Need help turning a launch, move, expansion, or rebrand into a measured rollout? [Start a scoped conversation with Evolved Designs](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=resource&utm_campaign=local_business_launch_rebrand_rollout_checklist).

