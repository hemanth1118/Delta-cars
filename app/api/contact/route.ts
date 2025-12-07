import { NextResponse } from 'next/server';

// For production, integrate with an email service like Resend, SendGrid, or Nodemailer
// Example with Resend:
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, carInterest, message } = body;

    // TODO: Replace with actual email service integration
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@deltacars.com',
    //   to: 'car.delta@yahoo.com',
    //   subject: `New Contact Form Submission from ${name}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    //     <p><strong>Car Interest:</strong> ${carInterest || 'Not specified'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message}</p>
    //   `,
    // });

    // For now, just log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      carInterest,
      message,
    });

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}

