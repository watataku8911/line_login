import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { userId } = await req.json();

  try {
    const res = await fetch(`https://api.line.me/v2/bot/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json({ isFriend: false });
    }

    const data = await res.json();
    return NextResponse.json({ isFriend: true, profile: data });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json({ isFriend: false });
  }
}
