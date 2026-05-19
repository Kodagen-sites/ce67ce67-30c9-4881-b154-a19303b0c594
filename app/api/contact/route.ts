import { NextResponse } from "next/server";

/**
 * Contact / pickup-request endpoint.
 * Landing-mode build: validates the submission and acknowledges it.
 * Wire to email or a database when the site is upgraded to full-stack.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();

  if (!name || !email || !phone) {
    return NextResponse.json(
      { ok: false, error: "Name, email and phone are required." },
      { status: 422 }
    );
  }

  return NextResponse.json({ ok: true, message: "Pickup request received." });
}
