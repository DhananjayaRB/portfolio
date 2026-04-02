import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Source image provided via Cursor attachment (local to this machine).
// If you deploy this site elsewhere, copy the image into `public/` and point to it directly.
const SOURCE_IMAGE_PATH = path.join(
  "C:",
  "Users",
  "Resolve",
  ".cursor",
  "projects",
  "d-AI-PAP",
  "assets",
  "c__Users_Resolve_AppData_Roaming_Cursor_User_workspaceStorage_392f4f06d90df01314b6533631cf7d7a_images_WhatsApp_Image_2026-04-02_at_4.34.25_PM-258794ff-b50b-471e-afba-1e56fff50afe.png"
);

export async function GET() {
  try {
    const buffer = await fs.promises.readFile(SOURCE_IMAGE_PATH);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Profile image not found on server." },
      { status: 404 }
    );
  }
}

