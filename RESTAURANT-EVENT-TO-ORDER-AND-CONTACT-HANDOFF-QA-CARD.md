# Restaurant Event-to-Order and Contact Handoff QA Card

Use this card when a restaurant publishes live music, tastings, seasonal menus, special hours, or other dated events while ordering and contact actions live on separate systems.

The goal is a small, reversible check: keep the public event promise, menu facts, ordering route, and guest-contact path aligned. It is not evidence that a working website or ordering provider should be replaced.

## Assign the controlling source

Before changing public copy, name one owner and source for each applicable field.

| Field | Owner | Controlling source | Public surface | Checked at | Result |
| --- | --- | --- | --- | --- | --- |
| Event name, date, start time, and status |  |  |  |  |  |
| Venue name, address, and map destination |  |  |  |  |  |
| Event admission, age, seating, or reservation rule |  |  |  |  |  |
| Menu item name, price, and availability note |  |  |  |  |  |
| Order provider, fulfillment choice, and pickup location |  |  |  |  |  |
| Special-request or event-question contact path |  |  |  |  |  |
| Restaurant phone, hours, and holiday exception |  |  |  |  |  |
| Cancellation, refund, or weather-change instruction |  |  |  |  |  |

Mark a row `match`, `conflict`, `missing`, or `not applicable`. Resolve material conflicts before promotion. Do not invent a date, price, availability claim, policy, or accessibility statement to complete the table.

## Run three protected journeys

Use approved synthetic data. Do not place a real order, make a reservation, join a marketing list, or submit a guest-service form without the restaurant's authorization.

1. **Event discovery:** From the homepage or event listing, confirm that the dated detail is current and that cancellation or sold-out status can be updated without leaving stale calls to action.
2. **Event to order:** Follow the order link on mobile, desktop, and keyboard. Confirm the intended location and fulfillment method are still visible before any payment step.
3. **Event to question:** Reach the appropriate special-request or event-question path. Confirm its purpose, required fields, privacy notice, and accessible instructions before any approved test submission.

For every applicable journey, record:

| Journey and device | Correct destination | Critical facts preserved | Keyboard path works | Provider accepted approved test | Restaurant received approved test | Pass or fail |
| --- | --- | --- | --- | --- | --- | --- |
| Event discovery - mobile |  |  |  | N/A | N/A |  |
| Event discovery - desktop |  |  |  | N/A | N/A |  |
| Event discovery - keyboard |  |  |  | N/A | N/A |  |
| Event to order - mobile |  |  |  |  |  |  |
| Event to order - desktop |  |  |  |  |  |  |
| Event to order - keyboard |  |  |  |  |  |  |
| Event to question - mobile |  |  |  |  |  |  |
| Event to question - desktop |  |  |  |  |  |  |
| Event to question - keyboard |  |  |  |  |  |  |

Provider acceptance and internal receipt are separate checks. A button click, page view, form start, or order-provider redirect is not a completed order, reservation, inquiry, or sale.

## Check event and menu retirement

- Give every dated event a named reviewer and a next-review time.
- Remove or clearly archive expired event calls to action.
- If an event changes, update the owned page, structured data, order or reservation note, and any approved directory listing from the same owner-approved fact set.
- Keep historical menus clearly labeled; do not let an old downloadable menu silently override current item, price, or availability information.
- Preserve the working order provider and identifier through any website change.

## Pass the release gate

Release only when all applicable conditions pass:

- The controlling-source table has no unresolved material conflict.
- The dated event has an owner, current status, and next-review time.
- Mobile, desktop, and keyboard journeys reach the intended destination.
- Approved test data is synthetic and contains no real guest, payment, or health information.
- Provider acceptance and restaurant receipt are verified separately where testing is authorized.
- Analytics labels clicks, starts, accepted tests, received tests, explicit inquiries, and completed orders separately.
- A rollback owner can restore the previous event, menu, and destination references without breaking the order provider.

## Record the bounded result

```text
Restaurant / location:
Event reviewed:
Checked at:
Applicable parity rows matching / total:
Journey-device checks passed / failed:
Approved provider acceptances:
Verified restaurant receipts:
Explicit guest or business inquiries:
Unresolved conflicts and owner:
Next review:
Rollback reference:
```

Do not attribute traffic, reservations, orders, revenue, or accessibility conformance to this check without corresponding evidence.

Need a scoped second set of eyes? Bring the completed rows and one public URL to a [no-obligation Evolved Designs fit check](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=resource&utm_campaign=restaurant_event_order_handoff&utm_content=qa_card). The first conversation can stay limited to the unresolved handoff instead of assuming a rebuild.

## References

- [W3C Web Accessibility Initiative: Form instructions](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [Google Search Central: Local business structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
