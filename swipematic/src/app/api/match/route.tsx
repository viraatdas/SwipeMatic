import { NextResponse } from 'next/server';
import prisma from '../../../../lib/prisma';

export async function POST(req: Request) {
  const { userId, matchId } = await req.json();

  try {
    // Check if the other user already swiped right on the current user
    const existingSwipe = await prisma.swipe.findFirst({
      where: {
        userId: matchId,
        swipedProfileId: userId,
        swipeDirection: 'right',
      },
    });

    let isMutual = false;
    if (existingSwipe) {
      // Create a match since both swiped right
      await prisma.match.create({
        data: {
          userId,
          matchId,
          isMutual: true,
        },
      });
      isMutual = true;
    }

    return NextResponse.json({ success: true, isMutual });
  } catch (error) {
    console.error('Error creating match:', error);
    return NextResponse.json({ success: false, error: 'Failed to create match' }, { status: 500 });
  }
}

