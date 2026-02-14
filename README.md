# LambdaTest Certifications – Playwright 101
This repository contains the solution for the Playwright 101 certification assignment from LambdaTest Certifications.

# Project Requirements
Includes 3 different test locators
Tests run in parallel on multiple browser/OS combinations using LambdaTest
Video, network logs, console logs, and screenshots are enabled
LambdaTest test run IDs will be included in the submission

# Automated Test Scenarios
Simple Form Demo – Fill out a text input and verify the displayed message.
Drag & Drop Sliders – Adjust the slider to a specific value and validate it.
Input Form Submit – Submit a form both empty and filled, verifying validation and success messages.

# Useful Scripts
npm install          # Install dependencies
npm run test         # Run all tests on LambdaTest
npm run test:local   # Run all tests locally

# Setup
Install dependencies:
npm install

# Configure LambdaTest credentials:
Use the .env.dist template file by renaming it to .env and adding your credentials:
LTC_USERNAME=your_lambdatest_username
LTC_ACCESS_KEY=your_lambdatest_access_key

# How to Run Tests
Run tests on LambdaTest: npm run test
Run tests locally: npm run test:local

# Github Actions
It includes a "ci-cd-pipeline.yml" file for github actions workflow
