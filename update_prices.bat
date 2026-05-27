@echo off
REM =====================================================================
REM update_prices.bat
REM Run nightly via Windows Task Scheduler.
REM Scrapes yuyu-tei.jp (current card base / Diva era only),
REM updates price_info.json + js/price_info.js, then commits + pushes.
REM The commit ALWAYS goes through on a successful scrape because the
REM `updated` ISO timestamp inside the JSON changes every run — that keeps
REM the "Last update" indicator on the website in sync with git history.
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

REM --- Stage outputs ---
echo [2/3] Staging changes... >> "%LOG%"
git add price_info.json js/price_info.js >> "%LOG%" 2>&1
git diff --staged --quiet
if %errorlevel% equ 0 (
    REM Should not happen in practice (the timestamp always changes), but be safe.
    echo [INFO] No changes to commit. >> "%LOG%"
    echo [INFO] No changes to commit.
    exit /b 0
)

REM --- Pull the ISO timestamp out of price_info.json so the commit message
REM     records the EXACT moment the data was scraped. Fall back to today's
REM     date if extraction fails for any reason. ---
set "updated="
for /f "usebackq delims=" %%a in (`node -e "process.stdout.write(require('./price_info.json').updated||'')"`) do set "updated=%%a"
if "%updated%"=="" (
    for /f "tokens=2 delims==" %%a in ('wmic OS Get localdatetime /value ^| find "="') do set datetime=%%a
    set "updated=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2%"
)

REM --- Commit + push ---
echo [3/3] Committing and pushing (updated=%updated%)... >> "%LOG%"
git commit -m "chore: update card prices (%updated%)" >> "%LOG%" 2>&1
if errorlevel 1 (
    echo [ERROR] git commit failed. See "%LOG%".
    exit /b 1
)
git push >> "%LOG%" 2>&1
if errorlevel 1 (
    echo [ERROR] git push failed. See "%LOG%".
    exit /b 1
)

echo [OK] Prices updated and pushed for %updated%. >> "%LOG%"
echo [OK] Done. See update_prices.log for details.
endlocal
exit /b 0
