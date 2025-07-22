#!/bin/bash

# Cloudflare Pages 部署脚本
# 使用方法: ./deploy.sh

echo "🚀 开始部署 Craft Brainrot 到 Cloudflare Pages..."

# 1. 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败，请检查错误信息"
    exit 1
fi

echo "✅ 构建成功！"

# 2. 检查是否安装了 wrangler
if ! command -v wrangler &> /dev/null; then
    echo "📥 安装 Wrangler CLI..."
    npm install -g wrangler
fi

# 3. 检查是否已登录
echo "🔐 检查 Cloudflare 登录状态..."
wrangler whoami

if [ $? -ne 0 ]; then
    echo "🔑 请先登录 Cloudflare..."
    wrangler login
fi

# 4. 部署到 Cloudflare Pages
echo "🌐 部署到 Cloudflare Pages..."
wrangler pages deploy out --project-name=craft-brainrot

if [ $? -eq 0 ]; then
    echo "🎉 部署成功！"
    echo "🌍 您的网站现在应该可以在 https://craft-brainrot.pages.dev 访问"
else
    echo "❌ 部署失败，请检查错误信息"
    exit 1
fi 