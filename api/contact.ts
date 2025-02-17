import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';

const EMAIL_TO = 'info@50digital.it'; // Make sure this is your correct email

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const contactData = insertContactSchema.parse(req.body);

    // Send email using Vercel's built-in email service
    const emailResponse = await fetch('https://api.vercel.com/v1/email/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.VERCEL_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: EMAIL_TO,
        from: 'no-reply@vercel.app',
        subject: 'Nuovo messaggio dal sito web',
        text: `
Nome: ${contactData.name}
Email: ${contactData.email}

Messaggio:
${contactData.message}
        `,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Email sending failed:', await emailResponse.text());
      throw new Error('Failed to send email');
    }

    // Return success response
    res.status(200).json({
      id: Date.now(),
      ...contactData,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(400).json({ error: 'Invalid contact data or email sending failed' });
  }
}