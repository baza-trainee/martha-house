import { NextResponse } from "next/server";

export const GET = () => NextResponse.json({ success: true }, { status: 200 });
