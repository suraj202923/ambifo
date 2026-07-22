require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// CORS configuration
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['POST'],
  allowedHeaders: ['Content-Type'],
}));

// Rate limiting - 10 requests per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, error: 'Too many requests. Please try again later.' },
  standardHeaders: true,
  legacyHeaders: false,
});

// SMTP transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify SMTP connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP connection error:', error.message);
  } else {
    console.log('SMTP server is ready to send emails');
  }
});

// Input validation
function validateInput(data) {
  const errors = {};

  if (!data.firstName?.trim()) errors.firstName = 'First name is required';
  if (!data.lastName?.trim()) errors.lastName = 'Last name is required';

  if (!data.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email';
  }

  if (!data.message?.trim()) errors.message = 'Message is required';

  return errors;
}

// Sanitize input to prevent injection
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>]/g, '').trim().slice(0, 500);
}

// Contact form endpoint
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { firstName, lastName, email, company, phone, service, message } = req.body;

    // Validate
    const errors = validateInput(req.body);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Sanitize
    const data = {
      firstName: sanitize(firstName),
      lastName: sanitize(lastName),
      email: sanitize(email),
      company: sanitize(company),
      phone: sanitize(phone),
      service: sanitize(service),
      message: sanitize(message),
    };

    // Build email
    const receiverEmail = process.env.RECEIVER_EMAIL || 'support@ambifo.com';
    const senderEmail = process.env.SENDER_EMAIL || process.env.SMTP_USER;

    const mailOptions = {
      from: `"${data.firstName} ${data.lastName}" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: data.email,
      subject: `New Contact: ${data.firstName} ${data.lastName} from ${data.company || 'N/A'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.firstName} ${data.lastName}</td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Email</td>
              <td style="padding: 8px 12px; color: #1f2937;"><a href="mailto:${data.email}">${data.email}</a></td>
            </tr>
            ${data.phone ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Phone</td>
              <td style="padding: 8px 12px; color: #1f2937;"><a href="tel:${data.phone}">${data.phone}</a></td>
            </tr>` : ''}
            ${data.company ? `
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Company</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.company}</td>
            </tr>` : ''}
            ${data.service ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Service Interest</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.service}</td>
            </tr>` : ''}
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; color: #1f2937; white-space: pre-wrap;">${data.message}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            Sent from Ambifo Technology Contact Form
          </p>
        </div>
      `,
      text: `New Contact Form Submission\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nCompany: ${data.company || 'N/A'}\nService: ${data.service || 'N/A'}\n\nMessage:\n${data.message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later or email us directly at support@ambifo.com',
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
