import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();
    if (!userId) return NextResponse.json("Unauthorized", { status: 401 });
    const course = await db.course.create({
      data: {
        userId,
        title,
      },
    });
    return NextResponse.json(course)
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal sever error");
  }
}
