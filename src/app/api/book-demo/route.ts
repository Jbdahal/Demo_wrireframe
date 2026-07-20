import nodemailer from "nodemailer";

const DEMO_NOTIFY_EMAIL = "jbdahal13@gmail.com";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, organisation, message } = body as {
    name?: string;
    email?: string;
    organisation?: string;
    message?: string;
  };

  if (!name || !email) {
    return Response.json({ error: "Name and email are required." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: DEMO_NOTIFY_EMAIL,
      replyTo: email,
      subject: `New demo request from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organisation: ${organisation || "—"}`,
        "",
        "Message:",
        message || "—",
      ].join("\n"),
    });
  } catch (err) {
    console.error("Failed to send demo request email", err);
    return Response.json({ error: "Failed to send email." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
