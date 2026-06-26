import { Resend } from "resend";

const resend = new Resend("re_KxJFuGDR_qXceVVmkZW9aSpb6Aj15NQn1");

const name = "Geoffrey Mairs";
const address = "216A Riddell Road, Glendowie, Auckland";
const details = "Looking to transform our rear garden into a full outdoor living space — decking, lawn, planting, and possibly a water feature. Happy to discuss further.";
const firstName = name.split(" ")[0];

const html = `
<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f0ee;font-family:Georgia,serif">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f0ee;padding:40px 0">
  <tr><td align="center">
    <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%">

      <!-- Hero header -->
      <tr><td style="background:#1B4332;border-radius:6px 6px 0 0;padding:40px 36px 36px">
        <!-- Logo -->
        <table cellpadding="0" cellspacing="0" style="margin-bottom:28px">
          <tr><td>
            <img src="https://greenworx.co.nz/email-logo.png" alt="Greenworx Landscaping" width="200" style="display:block;width:200px;height:auto;border:0" />
          </td></tr>
        </table>
        <h1 style="margin:0 0 10px;font-family:Georgia,serif;font-size:28px;font-weight:700;color:white;line-height:1.2">Thank you, ${firstName}.</h1>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;color:rgba(255,255,255,0.65);line-height:1.6">We&rsquo;ve received your enquiry and will be in touch within one business day.</p>
      </td></tr>

      <!-- Divider accent -->
      <tr><td style="background:#7DC143;height:4px;line-height:4px;font-size:4px">&nbsp;</td></tr>

      <!-- Main message -->
      <tr><td style="background:white;padding:40px 36px">
        <p style="margin:0 0 20px;font-family:Georgia,serif;font-size:16px;color:#1B4332;line-height:1.7">
          Hi ${firstName},
        </p>
        <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:15px;color:#444;line-height:1.75">
          Thank you for reaching out to Greenworx. We&rsquo;ve received your quote request and Devon will personally review your project and be in touch within one business day.
        </p>
        <p style="margin:0 0 32px;font-family:Arial,sans-serif;font-size:15px;color:#444;line-height:1.75">
          In the meantime, if you have any urgent questions or would prefer to speak directly, feel free to call or email us.
        </p>

        <!-- What happens next -->
        <div style="background:#F8F7F4;border-radius:6px;padding:28px 28px 24px">
          <p style="margin:0 0 20px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#7DC143">What Happens Next</p>
          <table cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td width="44" valign="top" style="padding-bottom:18px">
                <div style="width:32px;height:32px;background:#1B4332;border-radius:3px;text-align:center;line-height:32px;font-family:Georgia,serif;font-size:13px;font-weight:700;color:#7DC143">01</div>
              </td>
              <td valign="top" style="padding-bottom:18px;padding-left:8px">
                <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#1B4332">Devon Reviews Your Enquiry</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#666;line-height:1.5">We&rsquo;ll take a look at your project details and any specific requirements.</p>
              </td>
            </tr>
            <tr>
              <td width="44" valign="top" style="padding-bottom:18px">
                <div style="width:32px;height:32px;background:#1B4332;border-radius:3px;text-align:center;line-height:32px;font-family:Georgia,serif;font-size:13px;font-weight:700;color:#7DC143">02</div>
              </td>
              <td valign="top" style="padding-bottom:18px;padding-left:8px">
                <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#1B4332">We&rsquo;ll Be in Touch</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#666;line-height:1.5">Devon will contact you within one business day to discuss your project.</p>
              </td>
            </tr>
            <tr>
              <td width="44" valign="top">
                <div style="width:32px;height:32px;background:#1B4332;border-radius:3px;text-align:center;line-height:32px;font-family:Georgia,serif;font-size:13px;font-weight:700;color:#7DC143">03</div>
              </td>
              <td valign="top" style="padding-left:8px">
                <p style="margin:0 0 3px;font-family:Arial,sans-serif;font-size:13px;font-weight:700;color:#1B4332">Site Visit &amp; Quote</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;color:#666;line-height:1.5">We&rsquo;ll arrange a site visit and provide a detailed, tailored quote.</p>
              </td>
            </tr>
          </table>
        </div>

        <!-- Their submission summary -->
        <div style="margin-top:32px;border-top:1px solid #e5e5e3;padding-top:28px">
          <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#999">Your Enquiry Summary</p>
          <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse">
            <tr>
              <td style="padding:9px 0;border-bottom:1px solid #f0f0ee;width:36%;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#bbb">Property</td>
              <td style="padding:9px 0;border-bottom:1px solid #f0f0ee;font-family:Arial,sans-serif;font-size:13px;color:#444">${address}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding:14px 0 6px;font-family:Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#bbb">Project Details</td>
            </tr>
            <tr>
              <td colspan="2" style="padding-bottom:4px">
                <div style="background:#F8F7F4;border-left:3px solid #7DC143;padding:12px 16px;font-family:Arial,sans-serif;font-size:13px;color:#555;line-height:1.65;white-space:pre-wrap">${details}</div>
              </td>
            </tr>
          </table>
        </div>
      </td></tr>

      <!-- Contact strip -->
      <tr><td style="background:#F8F7F4;padding:28px 36px">
        <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:10px;font-weight:700;letter-spacing:0.18em;text-transform:uppercase;color:#999">Get in Touch</p>
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding-right:32px;padding-bottom:8px">
              <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#999">Phone</p>
              <a href="tel:0226482252" style="font-family:Arial,sans-serif;font-size:14px;font-weight:600;color:#1B4332;text-decoration:none">022 648 2252</a>
            </td>
            <td style="padding-bottom:8px">
              <p style="margin:0 0 2px;font-family:Arial,sans-serif;font-size:11px;color:#999">Email</p>
              <a href="mailto:devon@greenworx.co.nz" style="font-family:Arial,sans-serif;font-size:14px;font-weight:600;color:#7DC143;text-decoration:none">devon@greenworx.co.nz</a>
            </td>
          </tr>
        </table>
      </td></tr>

      <!-- Footer -->
      <tr><td style="background:#111f17;border-radius:0 0 6px 6px;padding:22px 36px">
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td>
              <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:rgba(255,255,255,0.35)">
                &copy; 2026 Greenworx Landscaping &middot; Unit 2, 49 Mt Wellington Highway, Auckland
              </p>
            </td>
            <td align="right">
              <a href="https://greenworx.co.nz" style="font-family:Arial,sans-serif;font-size:11px;color:#7DC143;text-decoration:none">greenworx.co.nz</a>
            </td>
          </tr>
        </table>
      </td></tr>

    </table>
  </td></tr>
</table>
</body></html>`;

const result = await resend.emails.send({
  from: "Greenworx Landscaping <noreply@greenworx.co.nz>",
  to: "geoffreymairs@gmail.com",
  replyTo: "devon@greenworx.co.nz",
  subject: "We’ve received your enquiry — Greenworx Landscaping",
  html,
});

console.log(JSON.stringify(result, null, 2));
