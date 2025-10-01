import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateDiscountCode } from '@/lib/utils';

// Check if we have a database URL before initializing Prisma
let prisma: PrismaClient | null = null;
try {
  if (process.env.DATABASE_URL) {
    prisma = new PrismaClient();
  }
} catch (error) {
  console.warn('Database not available:', error);
}

export async function POST(request: Request) {
  try {
    // If no database is available, return a fallback response
    if (!prisma) {
      return NextResponse.json(
        { 
          error: 'System is being updated. Please try again in a few moments.',
          fallback: true
        }, 
        { status: 503 }
      );
    }

    const body = await request.json();
    const { email, firstName, lastName, phone, city, state } = body;

    // Check if email already exists
    const existingUser = await prisma.waitlist.findUnique({
      where: { email }
    });

    if (existingUser) {
      return NextResponse.json(
        { 
          error: 'Email already registered',
          discountCode: existingUser.discountCode,
          discountPercent: existingUser.discountPercent,
          position: await getWaitlistPosition(existingUser.id)
        }, 
        { status: 400 }
      );
    }

    // Count current waitlist entries
    const currentCount = await prisma.waitlist.count();
    
    // Determine discount percentage (20% for first 50, then 0%)
    const discountPercent = currentCount < 50 ? 20 : 0;
    
    // Generate unique discount code
    const discountCode = generateDiscountCode();

    // Create waitlist entry
    const waitlistEntry = await prisma.waitlist.create({
      data: {
        email,
        discountCode,
        discountPercent,
        // Store additional info as metadata (you might want to add these fields to schema)
        metadata: {
          firstName,
          lastName,
          phone,
          city,
          state,
          signupDate: new Date().toISOString()
        }
      }
    });

    const position = currentCount + 1;

    return NextResponse.json({
      success: true,
      discountCode: waitlistEntry.discountCode,
      discountPercent: waitlistEntry.discountPercent,
      position,
      message: discountPercent > 0 
        ? `Congratulations! You've secured ${discountPercent}% off as one of the first ${position} early supporters!`
        : `You're on the waitlist at position ${position}. The early bird discount has ended, but you'll still get priority access!`
    });

  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Failed to process signup. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // If no database is available, return fallback status
    if (!prisma) {
      return NextResponse.json({
        totalSignups: 0,
        discountSpotsLeft: 50,
        discountActive: true,
        fallback: true
      });
    }

    const totalCount = await prisma.waitlist.count();
    const discountSpotsLeft = Math.max(0, 50 - totalCount);
    
    return NextResponse.json({
      totalSignups: totalCount,
      discountSpotsLeft,
      discountActive: discountSpotsLeft > 0
    });
  } catch (error) {
    console.error('Waitlist status error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch waitlist status' },
      { status: 500 }
    );
  }
}

async function getWaitlistPosition(entryId: string): Promise<number> {
  const entry = await prisma.waitlist.findUnique({
    where: { id: entryId }
  });
  
  if (!entry) return 0;
  
  const earlierEntries = await prisma.waitlist.count({
    where: {
      createdAt: {
        lt: entry.createdAt
      }
    }
  });
  
  return earlierEntries + 1;
}