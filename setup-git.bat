@echo off
REM Git Setup Script for Ambifo Technology Website (Windows)

echo 🚀 Initializing Git repository for Ambifo Technology...
echo.

REM Initialize git
git init
echo ✅ Git repository initialized

REM Add all files
git add .
echo ✅ All files staged

REM Initial commit
git commit -m "Initial commit: Ambifo Technology website"

echo ✅ Initial commit created
echo.
echo 📋 Next steps:
echo 1. Create a repository on GitHub: https://github.com/new
echo 2. Run the following commands:
echo.
echo    git branch -M main
echo    git remote add origin https://github.com/YOUR-USERNAME/ambifo.git
echo    git push -u origin main
echo.
echo 3. Your repository is ready! 🎉
pause
