#!/bin/bash
# Git Setup Script for Ambifo Technology Website

echo "🚀 Initializing Git repository for Ambifo Technology..."
echo ""

# Initialize git
git init
echo "✅ Git repository initialized"

# Add all files
git add .
echo "✅ All files staged"

# Initial commit
git commit -m "Initial commit: Ambifo Technology website

- Modern responsive website with Node.js/Express
- 6+ pages: Home, About, Services, Portfolio, Blog, Contact
- Professional gradient UI with smooth animations
- Mobile-friendly design
- Easy deployment to Cloudflare, Vercel, Heroku, and more
- Ready for customization"

echo "✅ Initial commit created"
echo ""
echo "📋 Next steps:"
echo "1. Create a repository on GitHub: https://github.com/new"
echo "2. Run the following commands:"
echo ""
echo "   git branch -M main"
echo "   git remote add origin https://github.com/YOUR-USERNAME/ambifo.git"
echo "   git push -u origin main"
echo ""
echo "3. Your repository is ready! 🎉"
