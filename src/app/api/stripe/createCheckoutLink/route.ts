import { stripe, prices } from '@/lib/stripe';
import { prisma } from '@/lib/prisma';
import { PlanEnum, SessionType } from '@/types';
import { NextRequest, NextResponse } from 'next/server';

async function handler(req: NextRequest) {
  try {
    const { session, plan }: { session: SessionType; plan: PlanEnum } = await req.json();

    if (!session || !plan) {
      return NextResponse.json({ error: 'Missing session or plan in request body' });
    }

    if (!Object.values(PlanEnum).includes(plan)) {
      return NextResponse.json({ error: 'Invalid plan provided' });
    }

    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' });
    }

    if (user.stripe_customer_id) {
      const checkout = await stripe.checkout.sessions.create({
        success_url: 'http://localhost:3000/account',
        cancel_url: 'http://localhost:3000/account',
        customer: user.stripe_customer_id,
        line_items: [
          {
            price: prices[plan],
            quantity: 1,
          },
        ],
        mode: 'subscription',
      });

      return NextResponse.json({ url: checkout.url });
    }

    console.error('Customer ID is undefined or null.');
    return NextResponse.json({ error: 'Customer ID is undefined or null.' });
  } catch (error) {
    console.error('Error creating checkout link:', error);
    return NextResponse.json({ error: 'Internal server error' });
  }
}

export { handler as POST };