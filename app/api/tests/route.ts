import { NextResponse } from "next/server";

export async function GET() {
  const cameras = [
    { id: 1, title: "TEST 1" },
    { id: 2, title: "TEST 2" },
    { id: 3, title: "TEST 3" },

  ];

  return NextResponse.json(cameras);
}