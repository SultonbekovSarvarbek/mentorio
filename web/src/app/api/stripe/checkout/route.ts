import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe only if key is available
const stripeKey = process.env.STRIPE_SECRET_KEY;

export async function POST(request: Request) {
  try {
    // Check if Stripe key is configured
    if (!stripeKey) {
      console.warn('Stripe secret key not configured. Please add STRIPE_SECRET_KEY to your .env.local file');
      return NextResponse.json(
        { error: 'Payment system not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const stripe = new Stripe(stripeKey, {
      apiVersion: '2025-07-30.basil',
    });

    const { planName, planPrice, isYearly, locale } = await request.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Mentorio ${planName}`,
              description: locale === 'ru' 
                ? `Предзаказ плана ${planName} - AI-ментор для стартапов`
                : `Pre-order ${planName} plan - AI mentor for startups`,
              images: ['https://mentorio.io/logo.png'], // Add your logo URL
            },
            unit_amount: Math.round(parseFloat(planPrice.replace('$', '')) * 100), // Convert to cents
            recurring: {
              interval: isYearly ? 'year' : 'month',
            },
          },
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/`,
      metadata: {
        planName,
        isYearly: String(isYearly),
      },
      // Pre-fill customer email if available
      customer_email: undefined, // You can pass email from the form if needed
      // Enable promotional codes
      allow_promotion_codes: true,
      // Collect billing address
      billing_address_collection: 'required',
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
} 