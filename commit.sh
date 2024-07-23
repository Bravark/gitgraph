#!/bin/bash

# Define commit message and date
commit_message="Automated commit"
commit_date="2024-07-23T10:00:00"

# Add changes to staging area
git add .

# Commit with specific date and message
GIT_COMMITTER_DATE="$commit_date" git commit --date="$commit_date" -m "$commit_message"

# Push changes to GitHub (replace 'main' with your branch name if different)
git push origin main
