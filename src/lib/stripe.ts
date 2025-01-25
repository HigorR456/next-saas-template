import Stripe from 'stripe';
import { prisma } from './prisma';
import { PlanEnum, SessionType } from '@/types';

export const stripe = new Stripe(String(process.env.STRIPE_SECRET), {
  apiVersion: '2024-12-18.acacia',
});

export const prices = {
  starter: process.env.PRICE_STARTER_PLAN,
  premium: process.env.PRICE_PREMIUM_PLAN,
};

export async function createCustomerIfNull(session: SessionType) {
  try {
    if (session) {
      const user = await prisma.user.findFirst({ where: { email: session.user?.email } });

      if (!user?.stripe_customer_id) {
        const customer = await stripe.customers.create({
          email: String(user?.email),
        });

        const updatedUser = await prisma.user.update({
          where: {
            id: user?.id,
          },
          data: {
            stripe_customer_id: customer.id,
          },
        });

        return updatedUser
      }

      return user;
    }
  } catch (error) {
    console.error('Error creating customer:', error);
    return null;
  }
}

export async function generateCustomerPortalLink(customerId: string) {
  try {
    if (!customerId) {
      console.error('Customer ID is undefined or null.');
      return null;
    }

    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: process.env.REDIRECT_AUTH_URL + '/account',
    });

    return portalSession.url;
  } catch (error) {
    console.error('Error generating customer portal link:', error);
    return null;
  }
}

export async function hasSubscription(session: SessionType) {
  try {
    if (session) {
      const user = await prisma.user.findFirst({ where: { email: session.user?.email } });

      const subscriptions = await stripe.subscriptions.list({
        customer: String(user?.stripe_customer_id),
        status: "active",
      });

      return subscriptions.data.length > 0 ? subscriptions.data[0].id : null ;
    }

    return null;
  } catch (error) {
    console.error('Error checking subscription:', error);
    return null;
  }
}

export async function createCheckoutLink(session: SessionType, plan: PlanEnum) {
  try {
    if (!session) {
      return null;
    }

    const user = await prisma.user.findFirst({
      where: { email: session.user.email },
    });
  
    if (user?.stripe_customer_id) {
      const checkout = await stripe.checkout.sessions.create({
        success_url: "http://localhost:3000/account/success",
        cancel_url: "http://localhost:3000/account",
        customer: user.stripe_customer_id,
        line_items: [
          {
            price: prices[plan],
            quantity: 1,
          }
        ],
        mode: "subscription"
      })
      
      return checkout.url;
    }

    console.error('Customer ID is undefined or null.');
    return null;
  } catch(error) {
    console.error('Error creating checkout link', error);
  }
}
