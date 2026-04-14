# Cloudflare Deployment Script for Windows PowerShell
# Run: .\deploy.ps1

Write-Host "🚀 Ambifo - Cloudflare Deployment Script" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✓ Node.js $nodeVersion is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js v16 or higher." -ForegroundColor Red
    exit 1
}

# Check if npm is installed
try {
    $npmVersion = npm --version
    Write-Host "✓ npm v$npmVersion is installed" -ForegroundColor Green
} catch {
    Write-Host "❌ npm is not installed." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Install dependencies if node_modules doesn't exist
if (!(Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
        exit 1
    }
    Write-Host "✓ Dependencies installed" -ForegroundColor Green
}

Write-Host ""

# Build static files
Write-Host "🔨 Building static files..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}
Write-Host "✓ Build completed successfully" -ForegroundColor Green

Write-Host ""

# Check if wrangler is installed
$wranglerCheck = npm list -g wrangler 2>&1 | Select-String "wrangler"
if (!$wranglerCheck) {
    Write-Host "📦 Installing Wrangler globally..." -ForegroundColor Yellow
    npm install -g wrangler
    if ($LASTEXITCODE -ne 0) {
        Write-Host "⚠️  Warning: Failed to install Wrangler globally, will use npx instead" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "✓ Project is ready for Cloudflare deployment!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Generated Files:" -ForegroundColor Cyan
Write-Host "  - public/static/index.html"
Write-Host "  - public/static/about.html"
Write-Host "  - public/static/services.html"
Write-Host "  - public/static/cloud-migration.html"
Write-Host "  - public/static/cloud-devops.html"
Write-Host "  - public/static/cloud-security.html"
Write-Host "  - public/static/cloud-finops.html"
Write-Host "  - public/static/managed-cloud.html"
Write-Host "  - public/static/ai-ml.html"
Write-Host "  - public/static/portfolio.html"
Write-Host "  - public/static/blog.html"
Write-Host "  - public/static/contact.html"
Write-Host "  - public/static/privacy-policy.html"
Write-Host "  - public/static/terms.html"
Write-Host "  - public/static/404.html"
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Authenticate with Cloudflare:" -ForegroundColor White
Write-Host "   npx wrangler login" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Configure your domain in wrangler.toml:" -ForegroundColor White
Write-Host "   Edit the [env.production] section with your domain and zone_id" -ForegroundColor Gray
Write-Host ""
Write-Host "3. Deploy to Cloudflare:" -ForegroundColor White
Write-Host "   npm run worker:deploy" -ForegroundColor Gray
Write-Host ""
Write-Host "📖 For more information, see CLOUDFLARE_DEPLOYMENT.md" -ForegroundColor Cyan
