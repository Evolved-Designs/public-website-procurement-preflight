# Venue Website Inquiry-Routing QA Card

Use this card after a venue opens, adds a space, refreshes its galleries, or changes its inquiry workflow. It is designed to improve discovery and handoff clarity without replacing a working form, CRM, tour scheduler, or booking system.

## Establish the controlling facts

Record an owner-approved source and last-verified date for each item:

| Field | Owner-approved value | Public surfaces checked | Result |
| --- | --- | --- | --- |
| Venue and space names |  | Navigation, gallery, form, confirmation | Pass / fail |
| Address and service area |  | Contact, footer, map, structured data | Pass / fail |
| Capacity and event fit |  | Space page, FAQ, inquiry form | Pass / fail |
| Gallery availability |  | Gallery index and destination albums | Pass / fail |
| Inquiry destination |  | Contact, pricing, tour, confirmation | Pass / fail |
| Consent language |  | Form, privacy notice, SMS or email choice | Pass / fail |

Do not infer availability, pricing, capacity, accessibility, or booking status from an old announcement or search-result excerpt. Confirm operational claims with the venue owner before publishing them.

## Run the gallery-to-inquiry journey

Test one real path for every active venue or space:

1. Open the main venue page on mobile and desktop.
2. Reach the space page and its gallery from visible navigation.
3. Confirm that the gallery index label matches the linked album's actual state.
4. Move from a gallery to the intended inquiry action.
5. Verify that the form identifies the venue or lets the visitor select it.
6. Stop before submitting personal data unless the owner has authorized a synthetic test.
7. Repeat with keyboard-only navigation and record blocked or ambiguous steps.

A populated album labeled "Coming Soon" fails even when its URL works. A form visit or button click is an action start, not a qualified inquiry, tour, booking, or sale.

## Check the minimum routing fields

For a multi-space venue, the inquiry workflow should capture only what the team needs to route and respond:

- preferred venue or space;
- event type;
- estimated guest count;
- preferred date or date flexibility;
- name and a response channel;
- a free-text question for details the fixed fields do not cover.

Separate optional marketing or SMS consent from the request itself. Do not preselect consent. Explain what will happen after submission and which team receives the request.

## Pass the release gates

- **Fact gate:** Owner-approved names, address, capacity language, and availability state match everywhere.
- **Proof gate:** Every published gallery label matches its destination album.
- **Routing gate:** The selected space survives from page or gallery into the inquiry record.
- **Accessibility gate:** Labels, errors, focus order, status messages, and confirmation work by keyboard and with assistive technology.
- **Privacy gate:** Required fields are minimal; consent choices are clear and unbundled.
- **Measurement gate:** Analytics separate gallery views, inquiry starts, verified submissions, qualified responses, tours, and bookings.
- **Rollback gate:** The previous copy, field configuration, routing rule, and deployment reference are preserved.

Release only when every applicable gate has an owner and evidence. Keep failed gates visible with a next action and review date.

## Measure the handoff

Use counts that the venue can verify without exposing personal data:

- gallery parity rate = correctly labeled active albums / active albums checked;
- venue-routing completeness = verified submissions carrying a venue value / verified submissions checked;
- response coverage = inquiries receiving an owner-defined response / verified inquiries;
- journey pass rate = passed device-and-input checks / applicable checks.

Compare a dated baseline with a dated post-release window. Do not claim that a website change caused revenue unless the venue's authorized systems can trace the outcome.

## Turn the findings into a bounded fix

If you want independent help converting the completed card into owner-approved copy, gallery, form-routing, accessibility, or measurement changes, [Evolved Designs offers local website implementation and optimization support](https://evolveddesigns.net/local-web-services/?utm_source=github&utm_medium=reference&utm_campaign=venue_inquiry_routing_qa&utm_content=implementation_support). Keep the existing booking stack when it works, agree on the evidence and rollback plan before release, and measure verified handoffs rather than clicks alone.

## Preserve the evidence

Save the source URLs, capture dates, screenshots or hashes, tested viewport/input combinations, form version, routing destination, release reference, rollback reference, results, owner, and next review date.

Shareable source: [Venue Website Inquiry-Routing QA Card](https://github.com/Evolved-Designs/public-website-procurement-preflight/blob/main/VENUE-WEBSITE-INQUIRY-ROUTING-QA-CARD.md?utm_source=github&utm_medium=reference&utm_campaign=venue_inquiry_routing_qa)



