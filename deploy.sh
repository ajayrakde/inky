#!/bin/bash

# InfluBridge Deployment Script
echo "🚀 InfluBridge Deployment to Fly.io"
echo "=================================="

# Check if fly CLI is installed
if ! command -v fly &> /dev/null; then
    echo "❌ Fly CLI not found. Installing..."
    curl -L https://fly.io/install.sh | sh
    echo "✅ Fly CLI installed. Please restart your terminal and run this script again."
    exit 1
fi

# Check if logged in
if ! fly auth whoami &> /dev/null; then
    echo "🔐 Please login to Fly.io..."
    fly auth login
fi

# Deploy the application
echo "📦 Building and deploying to Fly.io..."
fly deploy

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Opening your app..."
    fly open
else
    echo "❌ Deployment failed. Check the logs above."
    echo "📋 Try running: fly logs"
fi
