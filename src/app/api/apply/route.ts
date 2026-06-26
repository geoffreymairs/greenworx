import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO = "devon@greenworx.co.nz";
const FROM = "Greenworx Landscaping <noreply@greenworx.co.nz>";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const name       = formData.get("name")?.toString() ?? "";
    const phone      = formData.get("phone")?.toString() ?? "";
    const email      = formData.get("email")?.toString() ?? "";
    const experience = formData.get("experience")?.toString() ?? "";
    const cvFile     = formData.get("cv") as File | null;

    if (!name || !phone || !email || !experience) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // Build optional CV attachment
    const attachments: { filename: string; content: Buffer }[] = [];
    if (cvFile && cvFile.size > 0) {
      if (cvFile.size > 5 * 1024 * 1024) {
        return NextResponse.json({ error: "CV file exceeds 5 MB limit." }, { status: 400 });
      }
      const buf = Buffer.from(await cvFile.arrayBuffer());
      attachments.push({ filename: cvFile.name, content: buf });
    }

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New Job Application — ${name}`,
      attachments,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1B4332">
          <div style="background:#1B4332;padding:24px 32px;border-radius:4px 4px 0 0">
            <h1 style="color:#7DC143;margin:0;font-size:20px;font-weight:700;letter-spacing:0.05em">
              NEW JOB APPLICATION
            </h1>
            <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px">
              Submitted via greenworx.co.nz — Work With Us
            </p>
          </div>
          <div style="background:#F8F7F4;padding:32px;border-radius:0 0 4px 4px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5;width:36%">
                  <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#999">Name</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5">
                  <span style="font-size:15px;color:#1B4332;font-weight:600">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5">
                  <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#999">Phone</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5">
                  <a href="tel:${phone}" style="font-size:15px;color:#1B4332;font-weight:600;text-decoration:none">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5">
                  <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#999">Email</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5">
                  <a href="mailto:${email}" style="font-size:15px;color:#7DC143;text-decoration:none">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5">
                  <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#999">CV Attached</span>
                </td>
                <td style="padding:10px 0;border-bottom:1px solid #e5e7e5">
                  <span style="font-size:15px;color:#1B4332">${attachments.length > 0 ? `✓ ${cvFile!.name}` : "No CV uploaded"}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:14px 0 4px;vertical-align:top">
                  <span style="font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#999">Experience</span>
                </td>
                <td></td>
              </tr>
              <tr>
                <td colspan="2" style="padding:0 0 10px">
                  <div style="background:white;border:1px solid #e5e7e5;border-radius:4px;padding:16px;font-size:14px;color:#444;line-height:1.6;white-space:pre-wrap">${experience}</div>
                </td>
              </tr>
            </table>
            <div style="margin-top:24px;padding-top:20px;border-top:2px solid #7DC143">
              <a href="mailto:${email}" style="display:inline-block;background:#7DC143;color:white;font-weight:700;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;padding:12px 28px;border-radius:3px;text-decoration:none">
                Reply to ${name}
              </a>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply route error:", err);
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}
