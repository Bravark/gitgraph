@echo off

REM Define commit message and date
set commit_message=Automated commit
set commit_date=2024-07-23T10:00:00

REM Add changes to staging area
git add .

REM Commit with specific date and message
git commit --date="%commit_date%" -m "%commit_message%"

REM Push changes to GitHub (replace 'main' with your branch name if different)
git push origin main
