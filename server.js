const express = require('express');
const path = require('path');
const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'images', 'ambifologo.png'));
});

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio');
});

app.get('/blog', (req, res) => {
  res.render('blog');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/privacy-policy', (req, res) => {
  res.render('privacy-policy');
});

app.get('/terms', (req, res) => {
  res.render('terms');
});

// Service detail routes
app.get('/cloud-migration', (req, res) => {
  res.render('cloud-migration');
});

app.get('/cloud-devops', (req, res) => {
  res.render('cloud-devops');
});

app.get('/cloud-finops', (req, res) => {
  res.render('cloud-finops');
});

app.get('/cloud-security', (req, res) => {
  res.render('cloud-security');
});

app.get('/managed-cloud', (req, res) => {
  res.render('managed-cloud');
});

app.get('/ai-ml', (req, res) => {
  res.render('ai-ml');
});

// New menu routes
app.get('/expertise', (req, res) => {
  res.render('expertise');
});

app.get('/offers', (req, res) => {
  res.render('offers');
});

app.get('/careers', (req, res) => {
  res.render('careers');
});

// Contact form handler (API endpoint)
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Log the contact information (in production, save to database or send email)
  console.log('Contact form submitted:', { name, email, subject, message });
  
  res.json({ success: true, message: 'Message received! We will contact you soon.' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

// Start server - only for local development
const PORT = process.env.PORT || 3000;
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Ambifo Technology website running on http://localhost:${PORT}`);
  });
}

// Export for Cloudflare Workers and local server
module.exports = app;
