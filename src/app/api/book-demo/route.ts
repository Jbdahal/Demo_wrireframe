import nodemailer from "nodemailer";

const DEMO_NOTIFY_EMAIL = "admin@pravaro.com";

const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_SWEEP_THRESHOLD = 1000;

const requestLog = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  if (requestLog.size > RATE_LIMIT_SWEEP_THRESHOLD) {
    for (const [key, entry] of requestLog) {
      if (now > entry.resetAt) requestLog.delete(key);
    }
  }

  const entry = requestLog.get(ip);
  if (!entry || now > entry.resetAt) {
    requestLog.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT_MAX) return true;

  entry.count += 1;
  return false;
}

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: Request) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

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
