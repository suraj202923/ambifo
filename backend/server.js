require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());
app.use(express.json({ limit: '10kb' }));

// CORS configuration
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['POST', 'GET'],
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

// Newsletter subscription endpoint
app.post('/api/subscribe', contactLimiter, async (req, res) => {
  try {
    const { email } = req.body;

    if (!email?.trim()) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Please enter a valid email' });
    }

    const cleanEmail = sanitize(email);

    // Send notification email
    const receiverEmail = process.env.RECEIVER_EMAIL || 'support@ambifo.com';
    const senderEmail = process.env.SENDER_EMAIL || process.env.SMTP_USER;

    const mailOptions = {
      from: `"Ambifo Newsletter" <${senderEmail}>`,
      to: receiverEmail,
      subject: `New Newsletter Subscription: ${cleanEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #0fb8a9; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 140px;">Email</td>
              <td style="padding: 8px 12px; color: #1f2937;"><a href="mailto:${cleanEmail}">${cleanEmail}</a></td>
            </tr>
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Timestamp</td>
              <td style="padding: 8px 12px; color: #1f2937;">${new Date().toISOString()}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            Subscribed via Ambifo Technology Website Footer
          </p>
        </div>
      `,
      text: `New Newsletter Subscription\n\nEmail: ${cleanEmail}\nTimestamp: ${new Date().toISOString()}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Successfully subscribed to newsletter!' });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to subscribe. Please try again later.',
    });
  }
});

// Job application endpoint
app.post('/api/careers/apply', contactLimiter, async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;

    // Validate
    const errors = {};
    if (!name?.trim()) errors.name = 'Name is required';
    if (!email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!position?.trim()) errors.position = 'Position is required';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    // Sanitize
    const data = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone),
      position: sanitize(position),
      message: sanitize(message || ''),
    };

    // Send notification email
    const receiverEmail = process.env.RECEIVER_EMAIL || 'support@ambifo.com';
    const senderEmail = process.env.SENDER_EMAIL || process.env.SMTP_USER;

    const mailOptions = {
      from: `"${data.name}" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: data.email,
      subject: `Job Application: ${data.name} for ${data.position}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #0fb8a9; padding-bottom: 10px;">
            New Job Application
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 140px;">Name</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.name}</td>
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
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Position</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.position}</td>
            </tr>
            ${data.message ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; vertical-align: top;">Cover Letter</td>
              <td style="padding: 8px 12px; color: #1f2937; white-space: pre-wrap;">${data.message}</td>
            </tr>` : ''}
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            Applied via Ambifo Technology Careers Page
          </p>
        </div>
      `,
      text: `New Job Application\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nPosition: ${data.position}\n\nCover Letter:\n${data.message}`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Application submitted successfully!' });
  } catch (error) {
    console.error('Job application error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit application. Please try again later or email us directly at support@ambifo.com',
    });
  }
});

// Resume upload - multer config (memory storage, PDF only, 5MB max)
const resumeUpload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed'));
    }
  },
});

// Send resume endpoint
app.post('/api/careers/send-resume', contactLimiter, resumeUpload.single('resume'), async (req, res) => {
  try {
    const { name, email, phone, experience, currentRole, skills, preferredRole, message } = req.body;

    const errors = {};
    if (!name?.trim()) errors.name = 'Name is required';
    if (!email?.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!req.file) errors.resume = 'Please upload your resume (PDF)';

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const data = {
      name: sanitize(name),
      email: sanitize(email),
      phone: sanitize(phone || ''),
      experience: sanitize(experience || ''),
      currentRole: sanitize(currentRole || ''),
      skills: sanitize(skills || ''),
      preferredRole: sanitize(preferredRole || ''),
      message: sanitize(message || ''),
    };

    const receiverEmail = process.env.RECEIVER_EMAIL || 'support@ambifo.com';
    const senderEmail = process.env.SENDER_EMAIL || process.env.SMTP_USER;

    const mailOptions = {
      from: `"${data.name}" <${senderEmail}>`,
      to: receiverEmail,
      replyTo: data.email,
      subject: `Resume Submission: ${data.name}${data.preferredRole ? ` - ${data.preferredRole}` : ''}`,
      attachments: [
        {
          filename: `Resume_${data.name.replace(/\s+/g, '_')}.pdf`,
          content: req.file.buffer,
          contentType: 'application/pdf',
        },
      ],
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f172a; border-bottom: 2px solid #10b981; padding-bottom: 10px;">
            New Resume Submission
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; width: 160px;">Name</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.name}</td>
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
            ${data.experience ? `
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Experience</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.experience}</td>
            </tr>` : ''}
            ${data.currentRole ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Current Role</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.currentRole}</td>
            </tr>` : ''}
            ${data.skills ? `
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Skills</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.skills}</td>
            </tr>` : ''}
            ${data.preferredRole ? `
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Preferred Role</td>
              <td style="padding: 8px 12px; color: #1f2937;">${data.preferredRole}</td>
            </tr>` : ''}
            ${data.message ? `
            <tr style="background: #f9fafb;">
              <td style="padding: 8px 12px; font-weight: bold; color: #374151; vertical-align: top;">Cover Letter</td>
              <td style="padding: 8px 12px; color: #1f2937; white-space: pre-wrap;">${data.message}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 12px; font-weight: bold; color: #374151;">Resume</td>
              <td style="padding: 8px 12px; color: #1f2937;">📎 Attached (PDF)</td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            Submitted via Ambifo Technology Careers Page
          </p>
        </div>
      `,
      text: `New Resume Submission\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || 'N/A'}\nExperience: ${data.experience || 'N/A'}\nCurrent Role: ${data.currentRole || 'N/A'}\nSkills: ${data.skills || 'N/A'}\nPreferred Role: ${data.preferredRole || 'N/A'}\n\nCover Letter:\n${data.message}\n\nResume: Attached as PDF`,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Resume submitted successfully!' });
  } catch (error) {
    console.error('Resume submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit resume. Please try again later or email us directly at support@ambifo.com',
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware (for multer errors etc.)
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ success: false, error: 'File too large. Maximum size is 5MB.' });
    }
    return res.status(400).json({ success: false, error: 'File upload error. Please try again.' });
  }
  if (err.message === 'Only PDF files are allowed') {
    return res.status(400).json({ success: false, error: 'Only PDF files are allowed.' });
  }
  console.error('Unhandled error:', err);
  res.status(500).json({ success: false, error: 'Internal server error.' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
