@echo off
REM =====================================================================
REM update_prices.bat
REM Run nightly via Windows Task Scheduler.
REM Scrapes yuyu-tei.jp, updates price_info.json + js/price_info.js,
REM commits and pushes to GitHub if anything changed.
REM =====================================================================

setlocal
cd /d "%~dp0"

REM --- Log file (overwritten each run) ---
set LOG=%~dp0update_prices.log
echo ==== %date% %time% ==== > "%LOG%"

REM --- Run scraper ---
echo [1/3] Running scraper...   >> "%LOG%"
call node scraper.js >> "%LOG%" 2>&1
if errorlevel 1 (
    echo [ERROR] scraper.js failed. See "%LOG%".
    echo [ERROR] scraper.js failed >> "%LOG%"
    exit /b 1
)

REM --- Check if there are changes ---
echo [2/3] Checking for changes... >> "%LOG%"
git add price_info.json js/price_info.js >> "%LOG%" 2>&1
git diff --staged --quiet
if %errorlevel% equ 0 (
    echo [INFO] No price changes today. >> "%LOG%"
    echo [INFO] No price changes today.
    exit /b 0
)

REM --- Commit + push ---
echo [3/3] Committing and pushing... >> "%LOG%"
for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value ^| find "="') do set datetime=%%a
set today=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2%
git commit -m "chore: update card prices (%today%)" >> "%LOG%" 2>&1
if errorlevel 1 (
    echo [ERROR] git commit failed. See "%LOG%".
    exit /b 1
)
git push >> "%LOG%" 2>&1
if errorlevel 1 (
    echo [ERROR] git push failed. See "%LOG%".
    exit /b 1
)

echo [OK] Prices updated and pushed for %today%. >> "%LOG%"
echo [OK] Done. See update_prices.log for details.
endlocal
exit /b 0
