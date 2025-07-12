import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Simple rate limiting (in production, use Redis or similar)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);
  
  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return false;
  }
  
  if (limit.count >= 3) { // Max 3 requests per minute
    return true;
  }
  
  limit.count++;
  return false;
}

function sanitizeInput(input: string): string {
  return input.trim().replace(/[<>]/g, ''); // Basic XSS prevention
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    
    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const { firstName, lastName, email, message } = await req.json();

    // Input validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const sanitizedFirstName = sanitizeInput(firstName);
    const sanitizedLastName = sanitizeInput(lastName);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    // Length validation
    if (sanitizedFirstName.length < 2 || sanitizedLastName.length < 2) {
      return NextResponse.json(
        { error: 'Names must be at least 2 characters long.' },
        { status: 400 }
      );
    }

    if (sanitizedMessage.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long.' },
        { status: 400 }
      );
    }

    // Configure SMTP transporter (supports both Gmail and Hostinger)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER || 'ok.christianc@gmail.com',
        pass: process.env.EMAIL_PASS || 'your-password-here',
      },
    });

    // Get email addresses from environment variables
    const gmailAddress = process.env.GMAIL_ADDRESS || 'ok.christianc@gmail.com';
    const hostingerAddress = process.env.HOSTINGER_ADDRESS || '';
    
    // Create recipients array (filter out empty addresses)
    const recipients = [gmailAddress];
    if (hostingerAddress) {
      recipients.push(hostingerAddress);
    }

    const mailOptions = {
      from: process.env.EMAIL_USER || 'ok.christianc@gmail.com',
      to: recipients.join(', '), // Send to multiple addresses
      subject: 'Project/Product Inquiry',
      replyTo: sanitizedEmail,
      text: `Name: ${sanitizedFirstName} ${sanitizedLastName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`,
      html: `
        <h2>New Project/Product Inquiry</h2>
        <p><strong>Name:</strong> ${sanitizedFirstName} ${sanitizedLastName}</p>
        <p><strong>Email:</strong> ${sanitizedEmail}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedMessage.replace(/\n/g, '<br>')}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ 
      ok: true,
      message: 'Message sent successfully'
    });
    
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Don't expose internal errors to client
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
} 