import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  try {
    const { email, password, name } = await req.json();

    if (!email || (!password && !name)) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedData: { name?: string; email?: string; password?: string } = {};
    if (name) updatedData.name = name;
    if (password) updatedData.password = await bcrypt.hash(password, 10);

    const updatedUser = await prisma.user.update({
      where: { email },
      data: updatedData,
    });

    return NextResponse.json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
