import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req: Request) {
  const { customerId, name, age, location, interests } = await req.json();

  try {
    const newUser = await prisma.user.create({
      data: {
        customerId,
        name,
        age,
        location,
        interests,
      },
    });
    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json({ success: false, error: 'Failed to create user' }, { status: 500 });
  }
}

