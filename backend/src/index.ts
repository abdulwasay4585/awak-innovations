import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// ── Middleware ──────────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));
app.use(express.json());

// ── Health Check ─────────────────────────────────────────────────
app.get('/', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'AWAK Innovations API is running' });
});

// ── Contact Form ─────────────────────────────────────────────────
interface ContactBody {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  message: string;
}

// In-memory store for now (replace with Prisma when DB is provisioned)
const contactSubmissions: ContactBody[] = [];

app.post('/api/contact', (req: Request<object, object, ContactBody>, res: Response) => {
  const { firstName, lastName, email, company, message } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !message) {
    res.status(400).json({ error: 'Missing required fields: firstName, lastName, email, message' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Invalid email address' });
    return;
  }

  const submission: ContactBody = { firstName, lastName, email, company: company || '', message };
  contactSubmissions.push(submission);

  console.log('📧 New contact submission:', { firstName, lastName, email, company });

  res.status(201).json({
    success: true,
    message: `Thank you ${firstName}! We've received your message and will be in touch within 1 business day.`,
  });
});

// ── Newsletter ────────────────────────────────────────────────────
interface NewsletterBody {
  email: string;
}

const newsletterSubscribers: Set<string> = new Set();

app.post('/api/newsletter', (req: Request<object, object, NewsletterBody>, res: Response) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ error: 'Email is required' });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({ error: 'Invalid email address' });
    return;
  }

  if (newsletterSubscribers.has(email)) {
    res.status(200).json({ success: true, message: "You're already subscribed! Thank you." });
    return;
  }

  newsletterSubscribers.add(email);
  console.log('📰 New newsletter subscriber:', email);

  res.status(201).json({
    success: true,
    message: "You've been subscribed to our newsletter!",
  });
});

// ── 404 Handler ───────────────────────────────────────────────────
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

// ── Start ─────────────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`✅ Backend server running on port ${port}`);
  console.log(`   Health: http://localhost:${port}/`);
  console.log(`   Contact API: http://localhost:${port}/api/contact`);
  console.log(`   Newsletter API: http://localhost:${port}/api/newsletter`);
});
