# Home-Builder Community Page and Inventory-Feed QA Card

Use this card when a builder opens a community, adds floor plans or move-in-ready homes, changes incentives, or updates the system that supplies availability. It is designed to improve an existing website and feed handoff—not to assume the working sales platform should be replaced.

## 1. Name the controlling source

Before editing public copy, assign an owner and a controlling source for each field.

| Field | Controlling source | Owner | Checked at | Public surfaces |
|---|---|---|---|---|
| Community name and address | Approved community record |  |  | Community page, directory, maps |
| Floor-plan name and model | Product or plan catalog |  |  | Plan page, cards, search |
| Availability status | Designated inventory system |  |  | Community page, plan page, listings |
| Price or range | Approved pricing source |  |  | Cards, detail pages, ads |
| Incentive and expiration | Approved offer record |  |  | Banner, cards, forms |
| Sales hours and contact | Sales operations record |  |  | Header, footer, forms, maps |
| School, tax, HOA, and fee facts | Owner-approved source |  |  | Detail pages, FAQs |
| Images and alt text | Approved media library |  |  | Galleries, cards, social previews |

Do not publish an expansion, opening date, unit count, price, incentive, or availability state from an unapproved planning record.

## 2. Reconcile the page, template, and feed

Check a representative community page, every visible card type, at least one floor-plan page, and the inventory or listing handoff.

- Compare the exact community and floor-plan names across headings, navigation, cards, page titles, structured data, forms, and confirmation messages.
- Flag repeated tokens, doubled labels, stale brand names, placeholder copy, mismatched capitalization, and truncated names.
- Confirm that the visible availability status agrees with the designated inventory source.
- Verify that sold, unavailable, or hidden records do not remain indexable through old cards, sitemaps, structured data, or internal search.
- Confirm that prices and incentives have an owner, effective date, expiration rule, and fallback when data is absent.
- Preserve the source record ID through the website and inquiry handoff so staff can identify the exact home or plan.
- Check cache and feed timing. Record how long an approved source change may take to reach each public surface.
- Test canonical URLs, redirects, social previews, and search-result titles after renaming a community or plan.

## 3. Test three synthetic journeys

Use approved synthetic data. Do not create a real appointment, lead, text subscription, or purchase unless the business has authorized that test.

1. **Community to plan:** Find the community from mobile search, open a floor plan, review availability, and start an inquiry.
2. **Move-in-ready home:** Open a specific home, confirm price/status/source ID, and carry that selection into the inquiry record.
3. **Accessibility path:** Complete the same discovery and inquiry-start path with keyboard navigation and at 200% zoom; verify labels, focus, errors, image alternatives, and status announcements.

For each journey, save the viewport, URL, source record ID, time, expected result, actual result, and whether the provider and internal team received the same selection.

## 4. Keep business and buyer routes distinct

Home-buyer, warranty, resident, trade-partner, and general business inquiries serve different purposes.

- Route prospective buyers only through the approved sales path.
- Route warranty or homeowner support only through the approved service path.
- Publish a trade-partner or business-inquiry route only when the organization has approved that purpose and recipient.
- Do not repurpose buyer, warranty, appointment, SMS, or consent fields for vendor outreach.
- Keep consent language specific to the selected channel and purpose.

## 5. Release gates

Publish only when all gates pass.

- **Fact gate:** every material field has an approved source and owner.
- **Template gate:** representative cards and detail pages render without duplicate, stale, or placeholder text.
- **Feed gate:** status, price, plan, and source ID agree with the designated inventory system.
- **Handoff gate:** the selected community, plan, or home reaches the correct internal record.
- **Accessibility gate:** the tested journey works with keyboard navigation, visible focus, meaningful labels, and readable error states.
- **Privacy gate:** synthetic tests do not enter production marketing lists or trigger unauthorized messages.
- **Rollback gate:** the previous template, mapping, or content value and restoration owner are recorded.

## 6. Measure without overstating

Track separate stages instead of calling every click a lead or sale.

- Community-page discovery
- Floor-plan or inventory engagement
- Inquiry start
- Provider-accepted submission
- Internal receipt with the correct source ID
- Qualified sales response
- Appointment held
- Sale confirmed by the authorized business system

Report mismatches, abandoned handoffs, and duplicate-name defects separately from conversion metrics. A provider confirmation proves acceptance by that provider; it does not by itself prove internal receipt, qualification, an appointment, or a sale.

## 7. Evidence packet and review cadence

Save:

- the controlling-source matrix;
- before-and-after URLs or screenshots;
- representative page, card, structured-data, sitemap, and feed checks;
- synthetic journey results;
- provider and internal receipt evidence;
- release approver and timestamp;
- rollback owner and restoration steps;
- the next review date.

Recheck after each feed mapping, template, pricing, incentive, community-name, hours, contact, or platform change. Also sample live pages after cache expiry and again at day 7 and day 30.

Need help turning this card into a bounded QA pass for an existing builder website? [Review Evolved Designs local web services](https://evolveddesigns.net/local-web-services/?utm_source=github&utm_medium=reference&utm_campaign=home_builder_community_feed_qa).
