import type { VercelRequest, VercelResponse } from '@vercel/node';
import { insertContactSchema } from '../shared/schema';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const contactData = insertContactSchema.parse(req.body);
    
    // In produzione, qui dovrai configurare l'invio delle email
    // Puoi usare servizi come SendGrid, Amazon SES, o altri
    
    // Per ora restituiamo solo i dati ricevuti
    res.status(200).json({
      id: Date.now(),
      ...contactData,
      createdAt: new Date()
    });
  } catch (error) {
    res.status(400).json({ error: 'Invalid contact data' });
  }
}
