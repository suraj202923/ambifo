#!/bin/bash
# Cloudflare Deployment Script

echo "🚀 Ambifo - Cloudflare Deployment Script"
echo "==========================================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed."
    exit 1
fi

echo "✓ Node.js and npm are installed"
echo ""

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✓ Dependencies installed"
fi

echo ""

# Build static files
echo "🔨 Building static files..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✓ Build completed successfully"

echo ""

# Check if wrangler is installed globally or locally
if ! command -v wrangler &> /dev/null && ! npx wrangler --version &> /dev/null; then
    echo "📦 Installing Wrangler..."
    npm install -g wrangler
fi

echo ""
echo "✓ Project is ready for Cloudflare deployment"
echo ""
echo "Next steps:"
echo "1. Authenticate with Cloudflare: npx wrangler login"
echo "2. Configure your domain in wrangler.toml"
echo "3. Deploy: npm run worker:deploy"
echo ""
echo "For more information, see CLOUDFLARE_DEPLOYMENT.md"
