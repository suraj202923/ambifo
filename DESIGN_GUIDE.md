# 🎨 Ambifo Technology Website - Visual Design Guide

## Color Palette

### Primary Colors
```css
Primary Gradient: #667eea → #764ba2 (Blue to Purple)
Accent Color: #f5576c (Red/Pink)
```

### Secondary Colors
```css
Light Background: #f8f9fa
Dark Text: #2c3e50
Light Text: #666
Border Color: #e0e0e0
Dark Background: #1a2332 (Footer)
```

### Gradient Combinations Used
1. **Primary Gradient** - Headers, buttons, hero
   - From: #667eea (Blue)
   - To: #764ba2 (Purple)

2. **Feature Cards** - 4 different gradients
   - Blue-Purple, Pink-Red, Cyan-Teal, Orange-Red

3. **Hero Section** - Soft gradient background
   - #f5f7fa to #c3cfe2

## Typography

### Font Family
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

### Font Sizes
- **H1 (Page Titles):** 64px (64px mobile)
- **H2 (Section Titles):** 40-48px
- **H3 (Card Titles):** 22px
- **H4 (Small Titles):** 18-20px
- **Body Text:** 14-16px
- **Small Text:** 12-14px

### Font Weights
- **Light:** 300
- **Regular:** 400
- **Medium:** 500
- **Semi-Bold:** 600
- **Bold:** 700

## Layout Patterns

### Hero Section
```
┌─────────────────────────────────────┐
│         Hero Content                │
│  (Heading + Description + Button)   │
│    With Animated Background         │
└─────────────────────────────────────┘
```

### Feature Cards (4 columns)
```
┌────────────────────────────────────────┐
│  ┌──────┐  ┌──────┐  ┌──────┐        │
│  │ Card │  │ Card │  │ Card │  ...  │
│  │ 1    │  │ 2    │  │ 3    │        │
│  └──────┘  └──────┘  └──────┘        │
└────────────────────────────────────────┘
```

### Services Grid (3 columns on desktop)
```
┌─────────────────────────────────┐
│  ┌──────────┐ ┌──────────┐    │
│  │ Service  │ │ Service  │  │ │
│  │    1     │ │    2     │  │ │
│  └──────────┘ └──────────┘    │
│  ┌──────────┐ ┌──────────┐    │
│  │ Service  │ │ Service  │  │ │
│  │    3     │ │    4     │  │ │
│  └──────────┘ └──────────┘    │
└─────────────────────────────────┘
```

### Navigation Menu
```
┌──────────────────────────────────────────────┐
│  Logo  [Home] [About] [Services] [Contact]  │
└──────────────────────────────────────────────┘
```

### Mobile Menu (Hamburger)
```
┌──────────────────────────────┐
│  Logo        ☰               │
├──────────────────────────────┤
│  [Home]                      │
│  [About]                     │
│  [Services]                  │
│  [Contact]                   │
└──────────────────────────────┘
```

## Components

### Buttons

**Primary Button**
- Gradient background (#667eea → #764ba2)
- White text
- Padding: 12px 35px
- Border-radius: 25px
- Hover: Transform up + shadow

**Secondary Button**
- White background
- Gradient text color
- Border: 2px solid
- Hover: Gradient background + white text

### Cards

**Feature/Service Card**
- White background
- Border-radius: 15px
- Box-shadow: 0 5px 20px rgba(0,0,0,0.08)
- Padding: 40px
- Hover: Transform up + stronger shadow

**Portfolio Card**
- Image at top (gradient placeholder)
- Title + description below
- Technology tags
- Hover: Image zoom effect

**Blog Card**
- Image (200px height)
- Meta information (date, category)
- Title + excerpt
- Read more link

### Forms

**Input Fields**
- Padding: 12px 20px
- Border: 2px solid #e0e0e0
- Border-radius: 10px
- Focus: Border changes to primary color
- Width: 100%

**Text Area**
- Same styling as inputs
- Rows: 5
- Resize: vertical

## Animations

### Hover Effects
- **Cards:** translateY(-10px) with shadow increase
- **Links:** Color change + underline animation
- **Buttons:** Transform + shadow
- **Icons:** Scale or rotate effects

### Scroll Animations
- **Elements fade in:** opacity 0 → 1
- **Elements slide up:** translateY(20px) → translateY(0)
- **Duration:** 0.6s ease

### Continuous Animations
- **Floating shapes:** translateY(30px) up/down
- **Duration:** 6-8s ease-in-out infinite

### Page Transitions
- Smooth scroll behavior
- Fade transitions between pages (via server render)

## Responsive Breakpoints

```css
Mobile:  < 480px
Tablet:  480px - 768px
Desktop: > 768px
```

### Mobile Changes
- Navigation becomes hamburger menu
- Grid becomes single column
- Font sizes reduce
- Padding reduces
- Hero height becomes 90vh
- Buttons become full-width on very small screens

## Icon Usage

**Font Awesome Icons Used:**
- `fas fa-rocket` - Speed, launch
- `fas fa-shield-alt` - Security
- `fas fa-chart-line` - Growth
- `fas fa-headset` - Support
- `fas fa-laptop-code` - Web dev
- `fas fa-mobile-alt` - Mobile apps
- `fas fa-cloud` - Cloud solutions
- `fas fa-database` - Data & analytics
- `fas fa-cogs` - Consulting
- `fas fa-map-marker-alt` - Location
- `fas fa-phone` - Phone
- `fas fa-envelope` - Email
- `fas fa-clock` - Hours
- `fas fa-target` - Mission
- `fas fa-eye` - Vision
- Social: `fab fa-facebook`, `fab fa-twitter`, `fab fa-linkedin`, `fab fa-instagram`

## Spacing System

### Padding/Margin Scale
- XS: 5px
- S: 10px
- M: 20px
- L: 30px
- XL: 40px
- XXL: 60px
- XXXL: 100px

### Container Width
- Max-width: 1200px
- Horizontal padding: 20px
- Gap between columns: 30-60px

## Shadows

```css
Light: 0 2px 10px rgba(0, 0, 0, 0.05)
Medium: 0 5px 20px rgba(0, 0, 0, 0.08)
Strong: 0 15px 40px rgba(0, 0, 0, 0.15)
```

## Border Radius

- Small elements: 10px
- Medium elements: 15px
- Buttons/pills: 25px
- Circles: 50%

## Transitions

```css
Color transitions: 0.3s ease
Transform transitions: 0.3s ease
All transitions: 0.6s ease
```

## Accessible Colors

- **Contrast Ratio:** WCAG AA compliant (4.5:1 for text)
- **Focus States:** Clear focus indicators on interactive elements
- **Text:** Dark text on light backgrounds, light text on dark

## Custom Scrollbar (Optional)

```css
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #667eea;
  border-radius: 5px;
}
```

## Print Styles

Website includes print-friendly styling:
- Hide navigation on print
- Adjust colors for print
- Remove shadows for cleaner look
- Optimize font sizes

## Dark Mode Support (Future)

The color scheme is designed for potential dark mode:
```css
@media (prefers-color-scheme: dark) {
  --dark-text: #e0e0e0;
  --light-text: #999;
  --light-bg: #1a1a1a;
}
```

## CSS Organization

```css
1. Reset & Variables
2. Navigation styles
3. Buttons & Links
4. Hero section
5. Features section
6. CTA section
7. Page header
8. About section
9. Services section
10. Portfolio section
11. Blog section
12. Contact section
13. Footer
14. Responsive media queries
```

## Mobile-First Approach

- Base styles for mobile
- Media queries enhance for larger screens
- Reduces CSS file size
- Improves mobile performance

---

## Quick Color Reference

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Primary | Blue | #667eea | Headings, buttons, links |
| Secondary | Purple | #764ba2 | Gradients, accents |
| Accent | Red-Pink | #f5576c | Highlights, CTAs |
| Light BG | Off-white | #f8f9fa | Section backgrounds |
| Dark Text | Navy | #2c3e50 | Body text |
| Light Text | Gray | #666 | Secondary text |
| Border | Light Gray | #e0e0e0 | Dividers, borders |
| Footer BG | Dark | #1a2332 | Footer background |

---

**This design guide ensures consistency across all pages and easy customization!**
