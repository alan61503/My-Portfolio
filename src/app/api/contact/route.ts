import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Missing email service configuration" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || "alanchrisdisilva@gmail.com";

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
