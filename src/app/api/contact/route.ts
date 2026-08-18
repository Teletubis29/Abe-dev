import { NextResponse } from "next/server";
import {
  ContactFormError,
  getContactPayload,
  sendContactMail,
  validateContactPayload,
} from "@/lib/contact-mail";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = getContactPayload(body);

    validateContactPayload(payload);
    await sendContactMail(payload);

    return NextResponse.json({
      message: "Your message has been sent. I will get back to you soon.",
    });
  } catch (error) {
    if (error instanceof ContactFormError) {
      if (error.status >= 500) {
        console.error("Contact form configuration error:", error.message);
      }

      return NextResponse.json({ message: error.message }, { status: error.status });
    }

    console.error("Failed to handle contact request:", error);

    return NextResponse.json(
      { message: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}