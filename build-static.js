/**
 * Build script to convert EJS templates to static HTML
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'public', 'static');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// List of templates to build (excluding partials)
const templates = [
  'index',
  'about',
  'services',
  'portfolio',
  'blog',
  'contact',
  'privacy-policy',
  'terms',
  '404'
];

templates.forEach(template => {
  const inputFile = path.join(viewsDir, `${template}.ejs`);
  const outputFile = path.join(outputDir, `${template}.html`);

  if (fs.existsSync(inputFile)) {
    ejs.renderFile(inputFile, {}, (err, html) => {
      if (err) {
        console.error(`Error building ${template}:`, err);
      } else {
        fs.writeFileSync(outputFile, html);
        console.log(`✓ Built ${template}.html`);
      }
    });
  }
});

console.log('Build complete!');
