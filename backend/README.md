# Ambifo Backend - Contact Form Email Service

This backend handles contact form submissions and sends emails via SMTP.

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your SMTP credentials:

```bash
cp .env.example .env
```

Edit `.env` with your SMTP details:

```env
# For Gmail
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # Use App Password, not regular password

# For Outlook/Office 365
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password

# For AWS SES
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-access-key
SMTP_PASS=your-secret-key

# For SendGrid (SMTP relay)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### 3. Start the Server

```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server runs on `http://localhost:3001`

## API Endpoints

### POST /api/contact

Sends an email with the contact form data.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "phone": "+1 555 000-0000",
  "service": "Cloud Migration",
  "message": "I need help with cloud migration..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "errors": {
    "email": "Please enter a valid email"
  }
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2026-07-22T12:00:00.000Z"
}
```

## Features

- ✅ SMTP email sending via Nodemailer
- ✅ Input validation and sanitization
- ✅ Rate limiting (10 requests per 15 minutes)
- ✅ CORS protection
- ✅ Security headers via Helmet
- ✅ HTML and plain text email formats
- ✅ Reply-to set to submitter's email

## Gmail Setup Notes

If using Gmail SMTP:

1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account → Security → 2-Step Verification → App passwords
3. Generate an App Password for "Mail"
4. Use that 16-character password in `SMTP_PASS`

**Do NOT use your regular Gmail password.**
