/**
 * Build script to convert EJS templates to static HTML
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');

const viewsDir = path.join(__dirname, 'views');
const outputDir = path.join(__dirname, 'public', 'static');
const publicDir = path.join(__dirname, 'public');

// Create output directory
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Copy CSS, JS, and images to static folder
const assetDirs = ['css', 'js', 'images'];
assetDirs.forEach(dir => {
  const srcPath = path.join(publicDir, dir);
  const destPath = path.join(outputDir, dir);
  
  if (fs.existsSync(srcPath)) {
    // Remove existing destination if it exists
    if (fs.existsSync(destPath)) {
      fs.rmSync(destPath, { recursive: true, force: true });
    }
    // Copy entire directory
    fs.cpSync(srcPath, destPath, { recursive: true });
    console.log(`✓ Copied ${dir}/`);
  }
});

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
  '404',
  'cloud-migration',
  'cloud-devops',
  'cloud-security',
  'cloud-finops',
  'managed-cloud',
  'ai-ml'
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
