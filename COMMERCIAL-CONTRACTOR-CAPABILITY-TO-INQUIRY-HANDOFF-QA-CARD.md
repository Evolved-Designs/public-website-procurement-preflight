# Commercial Contractor Capability-to-Inquiry Handoff QA Card

Use this card when a commercial contractor's website describes its trades, markets, safety program, projects, and service territory but buyers still have to translate that proof into a usable bid invitation or general inquiry.

The goal is a bounded handoff check. It does not replace estimating, prequalification, contract review, safety review, or a working bid-management platform.

## Map the buyer's decision path

Assign an owner and controlling source for each applicable field.

| Field | Public source | Internal owner | Destination record | Result |
| --- | --- | --- | --- | --- |
| Legal and trading name |  |  |  |  |
| Offices and service territory |  |  |  |  |
| Trades and specialty capabilities |  |  |  |  |
| Project sectors and representative work |  |  |  |  |
| Safety or certification claims |  |  |  |  |
| Estimating or inquiry contact |  |  |  |  |
| Plans, specifications, and file-transfer route |  |  |  |  |
| Confirmation and response expectation |  |  |  |  |

Mark each row `pass`, `fail`, `blocked`, or `not applicable`. Do not infer an internal owner, certification, geographic reach, or bid capability from a logo, testimonial, or old project alone.

## Run three approved journeys

Use synthetic, owner-approved information. Do not upload real plans, customer data, contract terms, or confidential project details.

1. **Known-capability buyer:** start on a specific trade page, verify the related proof, and reach the intended inquiry route.
2. **Project-fit buyer:** start on a representative project or market page, verify location and scope context, and reach the correct office or estimator.
3. **Keyboard-only buyer:** move through navigation, form labels, errors, attachments if applicable, submit, and status without a pointer.

Before any authorized submit, confirm that the exact entered values are still present. If a CAPTCHA or provider challenge appears, stop and schedule a human test; do not bypass it.

## Verify the handoff

Provider acceptance and internal receipt are separate checks. Retain the accepted response, confirmation URL, or submission identifier, then have the authorized owner find the matching internal record.

Record these rates without turning them into revenue claims:

- **Capability parity rate** = matching applicable public capability fields / applicable capability fields x 100
- **Route completion rate** = passed applicable journey-device checks / applicable journey-device checks x 100
- **Receipt integrity rate** = internally received approved test submissions / provider-accepted approved test submissions x 100

A form start, button click, provider response, or analytics event is not a qualified opportunity. Count a qualified response only after a verified non-client intentionally asks for relevant commercial help and has a recorded next action.

## Fix the smallest failed step

- Correct stale office, trade, project, or safety facts at the controlling source.
- Preserve the buyer's selected trade, office, or project context through the inquiry record.
- Provide persistent labels, text errors, announced status, and a published alternate contact route.
- Name the internal routing owner and response expectation.
- Keep working estimating, file-transfer, CRM, and bid systems unless a measured failure requires a scoped change.
- Retain before-state evidence and a rollback reference for every public change.

## Record the result

```text
Organization and public URL:
Checked at:
Controlling sources and owners:
Applicable parity fields passed / failed:
Journeys and devices passed / failed:
Provider acceptance reference:
Internal receipt reference:
Qualified response and next action, if any:
Smallest approved fix:
Rollback reference:
Next review:
```

Need help isolating a contractor website handoff gap? Bring this completed card and one public URL to a [no-obligation Evolved Designs fit check](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=resource&utm_campaign=commercial_contractor_inquiry_handoff&utm_content=qa_card). The first conversation can stay limited to the failed step instead of assuming a rebuild.

## References

- [W3C Web Accessibility Initiative: Form instructions](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [W3C Web Accessibility Initiative: Form validation](https://www.w3.org/WAI/tutorials/forms/validation/)
