# Ambifo Technology Website

A modern, professional website for Ambifo Technology Pvt Ltd built with Node.js, Express, and EJS.

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Modern gradient UI with smooth animations
- ✅ Multiple pages (Home, About, Services, Portfolio, Blog, Contact)
- ✅ Contact form with backend handling
- ✅ Portfolio with filtering capability
- ✅ Team showcase
- ✅ Blog section
- ✅ SEO-friendly structure
- ✅ Easy deployment to Cloudflare

## Project Structure

```
ambifo/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── ambifo.jpeg
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   ├── services.ejs
│   ├── portfolio.ejs
│   ├── blog.ejs
│   ├── contact.ejs
│   └── 404.ejs
├── server.js
├── package.json
├── .gitignore
└── README.md
```

## Installation

### Prerequisites
- Node.js (v14+)
- npm

### Setup

1. Clone or navigate to the project directory:
```bash
cd ambifo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will be available at `http://localhost:3000`

### Development Mode

For development with auto-reload:
```bash
npm run dev
```

## Available Routes

- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/portfolio` - Portfolio page
- `/blog` - Blog page
- `/contact` - Contact page
- `/api/contact` - Contact form submission endpoint

## Deployment to Cloudflare

### Using Wrangler (Cloudflare Workers)

1. Install Wrangler CLI:
```bash
npm install -g wrangler
```

2. Initialize Wrangler project:
```bash
wrangler init
```

3. Configure `wrangler.toml`:
```toml
name = "ambifo-technology"
main = "server.js"
compatibility_date = "2024-01-01"
```

4. Deploy:
```bash
wrangler deploy
```

### Using Cloudflare Pages

1. Push your code to GitHub
2. Connect your GitHub repository to Cloudflare Pages
3. Set build command: `npm install && npm build`
4. Set publish directory: `dist` (if using build process)

### Using Vercel (Alternative)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

## Git Setup

Initialize git and push to repository:

```bash
git init
git add .
git commit -m "Initial commit: Ambifo Technology website"
git branch -M main
git remote add origin https://github.com/yourusername/ambifo.git
git push -u origin main
```

## Customization

### Colors
Edit the CSS variables in `public/css/style.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --accent-color: #f5576c;
  --light-bg: #f8f9fa;
  --dark-text: #2c3e50;
  --light-text: #666;
}
```

### Content
- Update company information in individual `.ejs` files
- Replace placeholder images with actual company images
- Update contact details in `views/contact.ejs`
- Modify service descriptions in `views/services.ejs`
- Add real portfolio projects in `views/portfolio.ejs`

### Logo
Replace `public/images/ambifo.jpeg` with your logo file.

## Performance Optimization

- Minify CSS and JavaScript in production
- Use image optimization tools
- Enable caching headers
- Implement lazy loading for images
- Use CDN for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project

## Support

For issues or questions, contact: hello@ambifo.tech

---

Built with ❤️ by Ambifo Technology Pvt Ltd
