import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as {
      name?: string;
      email?: string;
      message?: string;
    };

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const message = (body.message ?? "").trim();

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !emailOk || message.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Invalid input. Please check your fields." },
        { status: 400 }
      );
    }

    // Demo behavior:
    // In a production site, replace this with real email sending
    // (e.g., Resend, SendGrid, or your SMTP provider).
    console.log("[contact]", { name, email, message });

    return NextResponse.json({
      ok: true,
      message: "Received",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Failed to parse request." },
      { status: 400 }
    );
  }
}

