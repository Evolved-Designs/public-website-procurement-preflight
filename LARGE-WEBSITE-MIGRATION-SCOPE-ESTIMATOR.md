# Large Website Migration Scope Estimator

Use this worksheet before requesting a fixed migration price. It separates inventory volume, technical risk, and acceptance evidence so a large move is not priced from a page count alone.

This is a scoping aid, not a quote, schedule, accessibility certification, or promise that search visibility will remain unchanged. Verify the resulting scope against the actual content, systems, records obligations, and procurement rules.

## 1. Count the inventory before estimating

Record a reproducible count and the source of each count. Preserve the export or crawl date.

| Inventory stratum | Count | Evidence source | Owner identified? | Retain, merge, archive, or remove? |
| --- | ---: | --- | --- | --- |
| Public HTML pages |  | CMS export plus crawl |  |  |
| Downloadable documents |  | Media library or storage export |  |  |
| Structured records |  | Database or API export |  |  |
| Images, audio, and video |  | Media library or object storage |  |  |
| Forms and authenticated flows |  | Form and application inventory |  |  |
| Domains, subdomains, and microsites |  | DNS, analytics, and Search Console |  |  |
| Languages or localized variants |  | CMS and translation inventory |  |  |
| Integrations and scheduled feeds |  | Architecture and vendor inventory |  |  |

Do not silently treat a document or database record as a page. A PDF may need remediation, records retention, metadata mapping, link repair, and a new download URL. A structured record may need schema transformation, search indexing, relationship preservation, and a repeatable import.

## 2. Calculate a manual acceptance sample

Run the included estimator from the repository root:

```bash
node tools/migration-scope-estimator.mjs --pages 600 --documents 8000 --records 4000 --margin 0.10 --confidence 0.95
```

The tool uses the conservative finite-population sample formula for each non-empty inventory stratum:

```text
n0 = z^2 * 0.5 * 0.5 / margin^2
sample = ceiling(population * n0 / (population + n0 - 1))
```

The sample is a planning floor for manual attribute checks, not a substitute for full automated validation. Stratify the sample across templates, content owners, years, languages, traffic tiers, file types, and high-risk journeys. Always include every critical transaction and unusual template even if it is not selected randomly.

For the example command, the 10% margin and 95% confidence planning samples are 83 of 600 pages, 95 of 8,000 documents, and 94 of 4,000 structured records. Tighter margins increase the sample. The estimator reports the assumptions in JSON so they can be saved with the procurement record.

## 3. Score migration risk separately from volume

Score each factor from 0 to 3. This is an explicit triage heuristic, not an industry standard.

- `0` — absent or already proven
- `1` — limited and documented
- `2` — material uncertainty or several variants
- `3` — complex, regulated, business-critical, or not yet inventoried

| Risk factor | 0-3 | Evidence needed before award |
| --- | ---: | --- |
| URL and information-architecture change |  | Old-to-new URL mapping method and exception policy |
| Multiple sites, domains, or CMS instances |  | Complete property and environment inventory |
| Unknown ownership or disposition |  | Named owner and retain/merge/archive/remove decision |
| Documents and records obligations |  | Retention, integrity, metadata, and accessibility rules |
| Structured data and relationships |  | Source schema, target schema, transformation, and reconciliation |
| Accessibility target |  | Standard, evaluation method, manual testing, and defect workflow |
| Forms, authentication, and integrations |  | End-to-end test cases and responsible system owners |
| Multilingual or regional variants |  | Translation ownership, locale mapping, and hreflang plan |
| Search and analytics continuity |  | Redirect, canonical, sitemap, analytics, and monitoring plan |
| Cutover and rollback constraints |  | Freeze window, backups, rollback trigger, and decision authority |

Interpret the total before pricing:

- `0-7`: contained — normal discovery may be sufficient.
- `8-15`: moderate — require a paid inventory and mapping phase.
- `16-23`: high — separate discovery, pilot, migration, and acceptance gates.
- `24-30`: critical — do not request a responsible fixed implementation price until unknowns are reduced.

## 4. Require 100% machine-checkable acceptance evidence

Sampling is for human review. Require full-population automated checks where the rule can be tested deterministically:

- every inventoried old URL has an approved disposition;
- every migrated URL returns the intended status and avoids redirect chains;
- redirects lead to relevant final destinations rather than a blanket home page;
- canonical, robots, noindex, sitemap, internal-link, and hreflang rules use the intended production URLs;
- every retained document and media object is present, retrievable, and linked from the intended destination;
- record counts reconcile by content type, year, owner, and disposition;
- forms, search, authentication, feeds, and scheduled jobs have named end-to-end tests;
- analytics and consent behavior are verified in production;
- backups, rollback triggers, and rollback authority are recorded before cutover.

Google recommends preparing an old-to-new URL mapping, testing redirects, updating internal links and canonical annotations, submitting the new sitemap, and monitoring both old and new properties. Its guidance also notes that large sites can be moved in sections and that documents and images need to be transferred. NARA guidance for government web records emphasizes content, context, structural integrity, retention, and documented change history. W3C's evaluation-report template calls for a defined scope, tools, manual reviews, results, and recommended actions rather than a tool-only accessibility claim.

## 5. Put the estimator into the solicitation

Ask every proposer to return the same evidence:

1. inventory counts, exclusions, crawl/export dates, and reconciliation method;
2. assumptions that could change price or schedule;
3. the proposed pilot stratum and why it is representative;
4. automated full-inventory tests and manual stratified sample sizes;
5. redirect, search, accessibility, records, integration, cutover, and rollback acceptance criteria;
6. named owners for content decisions and production approval;
7. pricing for discovery separately from implementation when inventory is incomplete;
8. a change-control method for volume discovered after award.

Compare proposals on their treatment of uncertainty, evidence, and rollback—not on an unsupported promise to migrate “all content.”

## Sources

- [Google Search Central: Site Moves and Migrations](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes)
- [W3C WAI: Template for Accessibility Evaluation Reports](https://www.w3.org/WAI/test-evaluate/report-template/)
- [W3C: Web Content Accessibility Guidelines 2.2](https://www.w3.org/TR/WCAG22/)
- [NARA: Guidance on Managing Web Records](https://www.archives.gov/records-mgmt/policy/managing-web-records.html)
- [Section508.gov: Buy Accessible Products and Services](https://www.section508.gov/buy/)

## Need a defensible migration scope?

Evolved Designs can help turn an inventory, risk score, and acceptance model into a procurement-ready discovery brief. [Start a migration scope conversation](https://evolveddesigns.net/contact/?utm_source=github&utm_medium=resource&utm_campaign=large_site_migration_estimator).
