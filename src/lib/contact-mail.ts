import nodemailer from "nodemailer";

const CONTACT_TO = "muhamadsyech46@gmail.com";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export class ContactFormError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ContactFormError";
    this.status = status;
  }
}

function sanitizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function getContactPayload(body: unknown): ContactPayload {
  const source = typeof body === "object" && body !== null ? body : {};

  return {
    name: sanitizeValue((source as Record<string, unknown>).name),
    email: sanitizeValue((source as Record<string, unknown>).email),
    subject: sanitizeValue((source as Record<string, unknown>).subject),
    message: sanitizeValue((source as Record<string, unknown>).message),
  };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateContactPayload(payload: ContactPayload) {
  if (!payload.name || !payload.email || !payload.subject || !payload.message) {
    throw new ContactFormError(
      "Please complete all fields before sending.",
      400
    );
  }

  if (!isValidEmail(payload.email)) {
    throw new ContactFormError("Please use a valid email address.", 400);
  }
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || "465");
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass || Number.isNaN(port)) {
    throw new ContactFormError(
      "Contact form is temporarily unavailable.",
      503
    );
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === "true"
      : port === 465,
    auth: {
      user,
      pass,
    },
  });
}

export async function sendContactMail(payload: ContactPayload) {
  const transporter = getTransporter();
  const fromAddress = process.env.CONTACT_FROM || process.env.SMTP_USER || CONTACT_TO;

  await transporter.sendMail({
    from: fromAddress,
    to: CONTACT_TO,
    replyTo: payload.email,
    subject: `[Portfolio Contact] ${payload.subject}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      "",
      payload.message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
        <h2 style="margin-bottom: 16px;">New portfolio contact message</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Subject:</strong> ${payload.subject}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${payload.message}</p>
      </div>
    `,
  });
}