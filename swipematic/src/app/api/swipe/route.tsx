import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req: Request) {
  const { userId, swipedProfileId, swipeDirection } = await req.json();

  try {
    const newSwipe = await prisma.swipe.create({
      data: {
        userId,
        swipedProfileId,
        swipeDirection,
      },
    });
    return NextResponse.json({ success: true, swipe: newSwipe });
  } catch (error) {
    console.error('Error recording swipe:', error);
    return NextResponse.json({ success: false, error: 'Failed to record swipe' }, { status: 500 });
  }
}

