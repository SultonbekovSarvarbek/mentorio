import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, startup } = body;

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Here you would typically save to a database
    // For now, we'll just log it
    console.log('New waitlist signup:', { email, name, startup });

    // You can integrate with services like:
    // - Supabase, Firebase, MongoDB
    // - Email services like SendGrid, Mailgun
    // - CRM like HubSpot, Mailchimp

    return NextResponse.json(
      { message: 'Successfully added to waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
} 