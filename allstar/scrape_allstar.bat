@echo off
cd /d "%~dp0\.."
node allstar\scrape_allstar.js %*
pause
