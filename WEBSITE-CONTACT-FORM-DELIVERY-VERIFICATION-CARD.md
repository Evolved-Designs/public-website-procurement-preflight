# Website Contact-Form Delivery Verification Card

Use this card when a public inquiry, quote, volunteer, sponsor, event, or support form appears to work but the organization cannot prove that a completed message reached its destination.

The goal is a small delivery check. It does not justify bypassing a CAPTCHA, collecting real visitor data, replacing a working provider, or claiming that a click became a lead.

## Map the delivery chain

Name the owner and evidence for every applicable step before changing the form.

| Step | Owner | Expected evidence | Checked at | Result |
| --- | --- | --- | --- | --- |
| Public page and intended form |  | Correct organization, purpose, and URL |  |  |
| Required-field instructions |  | Visible labels, errors, and privacy notice |  |  |
| Browser field state |  | Exact approved test values remain before submit |  |  |
| Human-verification step |  | Visible challenge or documented provider rule |  |  |
| Provider acceptance |  | Unique success state, response, or submission ID |  |  |
| Internal routing |  | Correct inbox, CRM, queue, or assigned owner |  |  |
| Internal receipt |  | Approved test located with matching timestamp or ID |  |  |
| Reply path |  | Authorized owner can respond from the intended channel |  |  |

Mark each row `pass`, `fail`, `blocked`, or `not applicable`. A form is not delivery-ready while a required owner or evidence row is blank.

## Run one authorized synthetic test

Use only owner-approved synthetic data. Do not submit a sales message, personal information, payment data, health information, or a real customer request as a test.

1. Open a fresh private test context and wait for the form to finish loading.
2. Enter the approved values using normal keyboard interaction.
3. Immediately before submit, verify every required field still contains the exact intended value. Dynamic forms can re-render and clear fields after they first appear.
4. Activate the normal submit control once.
5. If a CAPTCHA or provider verification challenge appears, stop. Record `blocked` and arrange an authorized human test; do not read, synthesize, solve, or bypass the challenge.
6. If no challenge appears, retain a unique provider success state, accepted response, or submission identifier and timestamp.
7. Ask the authorized internal owner to locate the same test by timestamp or identifier. Keep the provider response and internal receipt as separate evidence.

## Separate setup traffic from acceptance

Many forms make several background requests around a submit. Classify each response by what it actually proves.

- Analytics, performance, render, and telemetry requests prove only that browser activity was recorded.
- A request for a form key, token, or CAPTCHA reload proves only that the provider prepared or challenged the submission.
- A final save or submission response with a success status can support provider acceptance, but retain its timestamp or identifier and require the page's intended success state too.
- A final save or submission response with a `4xx` or `5xx` status is a rejection even if an earlier setup request returned `200`.
- An invisible CAPTCHA can appear only after the normal submit. Stop when it appears; do not retry rapidly, simulate a solution, or treat setup traffic as acceptance.
- If no final provider response and no visible success state arrive, record one failed or unverified attempt, preserve an alternate organization contact route, and investigate before another submit.

## Bound the submit and choose provider-specific proof

Before an approved test, set one interaction count and a short response deadline. Capture the request method, exact provider endpoint, response status, response meaning, final URL, and visible status. End the run at the deadline even if the browser or provider remains busy.

| Provider behavior | Minimum provider proof | Failure boundary |
| --- | --- | --- |
| Full-page form navigation | Successful final submit response, provider-specific success URL or flag, and visible confirmation | No final navigation or success state by the declared deadline |
| AJAX or API-backed form | Exact submission endpoint, successful HTTP response, semantic accepted status in the response body, and visible confirmation | Telemetry only, a stalled request, an error status, or a body that does not say accepted |
| Post-submit human verification | None until the authorized human completes it | Challenge appears after the one normal submit; stop without solving or clicking again |
| Unknown or opaque provider | Unique provider reference plus an internally reconciled receipt | A button click, cleared form, thank-you copy already present before submit, or an unbounded browser wait |

If the test process must be terminated, record the timeout, interaction count, last observed provider request, and whether acceptance was seen. Classify the result as `unverified`, even when the button was activated. Do not retry until the organization can prove the first attempt was not accepted or provides an idempotent test route.

## Classify the result honestly

| Observed result | Classification | Next action |
| --- | --- | --- |
| Fields cleared before submit | Failed browser state | Wait for stable loading; retest keyboard input without submitting again until values persist |
| Required-field error after populated-looking fields | Failed controlled input | Verify the form's actual field values and supported input events |
| CAPTCHA appears after submit | Blocked human-verification step | Stop automation; schedule one authorized human test |
| Button clicked, no provider response or success state | Unverified | Do not call it sent; inspect the provider path and retry only after the cause is known |
| Provider accepted, internal destination empty | Failed internal routing | Trace notification, spam, CRM, webhook, or assignment configuration |
| Provider accepted and matching internal receipt found | Delivered synthetic test | Record evidence and remove the test record under the approved retention rule |

Provider acceptance, page text, analytics traffic, and internal receipt are different facts. Count an inquiry or lead only when a real person intentionally submits it and the organization is authorized to process it.

## Check accessibility and recovery

- Required fields have persistent labels and instructions.
- Errors identify the affected field in text and are announced to assistive technology.
- Keyboard focus reaches fields, verification, submit, and the resulting status.
- The status does not depend on color alone.
- A failed submit preserves appropriate entered values unless policy requires clearing them.
- The organization has a published alternative contact path for people who cannot complete the form.
- The owner can disable or roll back a broken form without removing every contact route.

## Record the bounded result

```text
Organization and form URL:
Form purpose:
Checked at:
Approved synthetic test reference:
Normal submit interactions allowed / observed:
Execution deadline and termination reason:
Pre-submit exact-field check passed / failed:
Human-verification state:
Provider endpoint, method, HTTP status, and response meaning:
Provider acceptance reference:
Internal receipt reference:
Published alternate contact route:
Accessibility checks passed / failed:
Unresolved owner and next action:
Next review:
Rollback reference:
```

Need help isolating a delivery gap? Bring this completed card and one public form URL to a [no-obligation Evolved Designs fit check](https://evolveddesigns.net/contact-us/?utm_source=github&utm_medium=resource&utm_campaign=contact_form_delivery_verification&utm_content=qa_card). The first conversation can stay limited to the failed step instead of assuming a rebuild.

## References

- [W3C Web Accessibility Initiative: Form instructions](https://www.w3.org/WAI/tutorials/forms/instructions/)
- [W3C Web Accessibility Initiative: Form validation](https://www.w3.org/WAI/tutorials/forms/validation/)


