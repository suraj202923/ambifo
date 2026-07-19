<div align="center">

# Ambifo Technology — Official Website

**Cloud Consulting | DevOps | AI Solutions**

[![License](https://img.shields.io/badge/license-proprietary-blue.svg)](#)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss)](https://tailwindcss.com)

🌐 **[ambifo.com](https://www.ambifo.com)**

</div>

---

## About

This repository contains the source code for the official **Ambifo Technology** corporate website — a modern, performant, and fully responsive web application showcasing Ambifo's cloud consulting, DevOps, and AI/ML solutions for enterprises worldwide.

Ambifo Technology is an AWS Advanced Consulting Partner headquartered in Bangalore, India, with a global presence across **6 offices** in India, USA, Australia, Dubai, and Singapore.

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | React 19 |
| **Language** | TypeScript 6 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 3 |
| **Animation** | Framer Motion |
| **Routing** | React Router 7 |
| **Icons** | Lucide React |
| **SEO** | react-helmet-async |
| **Fonts** | Lato + Montserrat (Google Fonts) |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **npm** >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/suraj202923/ambifo.git

# Navigate to project directory
cd ambifo

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
ambifo/
├── public/
│   └── images/          # Static images (hero, services, clients, etc.)
├── src/
│   ├── components/
│   │   ├── common/      # Reusable components (Button, SectionHeading, SubServiceLayout, etc.)
│   │   ├── home/        # Homepage section components
│   │   └── layout/      # Navbar, Footer, Layout, RibbonBanner
│   ├── data/            # Static data files (navLinks, services, caseStudies, etc.)
│   ├── pages/
│   │   ├── services/    # Service category pages + sub-service pages
│   │   ├── solutions/   # Solution pages (Gen AI, Cloud Modernization, Managed Services, etc.)
│   │   ├── industries/  # Industry pages
│   │   ├── insights/    # Blog, Case Studies, Media, Events
│   │   ├── company/     # About, Leadership, Partners, Careers
│   │   └── platforms/   # Product pages (Entisense, FastDataBroker)
│   ├── App.tsx          # Root component with lazy-loaded routes
│   ├── main.tsx         # Entry point
│   └── style.css        # Global styles + Tailwind directives
├── index.html
├── tailwind.config.js   # Custom theme (navy, blue/teal, Chartreuse green)
├── vite.config.ts       # Vite config with manual chunks
├── tsconfig.json
└── package.json
```

---

## Features

- **Fully Responsive** — Optimized for mobile, tablet, and desktop
- **Lazy-Loaded Routes** — Code-split pages for faster initial load
- **Mega Menu Navigation** — Multi-column dropdowns with background images
- **Animated Interactions** — Smooth page transitions and scroll animations with Framer Motion
- **SEO Optimized** — Meta tags, canonical URLs, and structured headings on every page
- **Performance Optimized** — Manual chunk splitting for vendor, framer-motion, and icons
- **Multi-Step Forms** — Interactive contact form with step-by-step navigation
- **Client Testimonials** — Carousel with real client quotes and photos
- **Case Studies** — Detailed project showcases with challenge/solution/results
- **Dynamic Industry Pages** — Route-based dynamic content for each industry

---

## Pages

| Section | Pages |
|---------|-------|
| **Home** | Hero, What We Do, Edge You Need, Proven Results, Vision to Reality, Testimonials, Awards, Partners |
| **Services** | Strategy & Advisory, App Modernization, AI/Data Analytics, Cloud Infrastructure, Generative AI |
| **Solutions** | Gen AI Factory, AWS Cloud Modernization, Managed Services – AWS, Cloud Migration, Swayam |
| **Platforms** | Entisense, FastDataBroker |
| **Industries** | Aerospace, Public Sector, Manufacturing, Logistics, BFSI, Healthcare, Power & Utilities |
| **Insights** | Blog, Case Studies, Media, Events & Webinars |
| **Company** | About Us, Leadership, Partners, Careers |
| **Legal** | Privacy Policy, Terms, CSR Policy |

---

## Custom Theme

The project uses a custom Tailwind color palette defined in `tailwind.config.js`:

| Color | Hex | Usage |
|-------|-----|-------|
| **Navy 900** | `#0a2463` | Primary dark background |
| **Blue 600** | `#0fb8a9` | Teal accent |
| **Blue 500** | `#00d4ff` | Cyan accent |
| **Green 500** | `#7FFF00` | Chartreuse — primary CTA buttons |
| **Accent Coral** | `#ff6b6b` | Secondary accent |

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build locally |

---

## Key Dependencies

| Package | Purpose |
|---------|---------|
| `react` / `react-dom` | UI framework |
| `react-router-dom` | Client-side routing |
| `framer-motion` | Animations and transitions |
| `lucide-react` | Icon library |
| `react-helmet-async` | Document head management |
| `tailwindcss` | Utility-first CSS framework |

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Company

**Ambifo Technology Pvt Ltd**

- 🌍 Website: [ambifo.com](https://www.ambifo.com)
- 📧 Email: support@ambifo.com
- 📍 HQ: Bangalore, India
- 🌐 Offices: USA | Australia | Dubai | Singapore

---

## License

This is proprietary software. All rights reserved by Ambifo Technology Pvt Ltd.

---

<div align="center">

**Built with care by the Ambifo Technology team**

[![Ambifo](https://img.shields.io/badge/Ambifo-Technology-0fb8a9?style=for-the-badge)](https://www.ambifo.com)

</div>
