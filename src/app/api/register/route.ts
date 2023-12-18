import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/connectdb";
import User from "@/app/models/user";
export async function POST(req: any) {
  const body = await req.json();
  await connectDB();
  const createdUser = await User.create(body);

  console.log(createdUser);
  return NextResponse.json({ createdUser }, { status: 201 });
}
