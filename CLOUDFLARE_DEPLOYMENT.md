# Cloudflare Pages 部署指南

本指南将帮助您将 Craft Brainrot 网站部署到 Cloudflare Pages。

## 准备工作

### 1. 确保代码已提交到 Git 仓库

```bash
git add .
git commit -m "Prepare for Cloudflare Pages deployment"
git push origin main
```

### 2. 构建项目

```bash
npm run build
```

## 部署步骤

### 方法一：通过 Cloudflare Dashboard 部署

1. **登录 Cloudflare Dashboard**
   - 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 登录您的账户

2. **创建新项目**
   - 点击左侧菜单中的 "Pages"
   - 点击 "Create a project"
   - 选择 "Connect to Git"

3. **连接 Git 仓库**
   - 选择您的 Git 提供商 (GitHub, GitLab, 等)
   - 授权 Cloudflare 访问您的仓库
   - 选择包含此项目的仓库

4. **配置构建设置**
   - **Project name**: `craft-brainrot` (或您喜欢的名称)
   - **Production branch**: `main`
   - **Framework preset**: `Next.js`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (留空)

5. **环境变量设置** (可选)
   - 如果需要 Google Analytics，添加环境变量：
     - **Name**: `NEXT_PUBLIC_GA_ID`
     - **Value**: `G-XXXXXXXXXX` (您的 GA ID)

6. **部署**
   - 点击 "Save and Deploy"
   - 等待构建完成

### 方法二：使用 Wrangler CLI 部署

1. **安装 Wrangler CLI**
   ```bash
   npm install -g wrangler
   ```

2. **登录 Cloudflare**
   ```bash
   wrangler login
   ```

3. **构建项目**
   ```bash
   npm run build
   ```

4. **部署到 Cloudflare Pages**
   ```bash
   wrangler pages deploy out --project-name=craft-brainrot
   ```

## 自定义域名设置

1. **在 Cloudflare Dashboard 中**
   - 进入您的 Pages 项目
   - 点击 "Custom domains"
   - 点击 "Set up a custom domain"

2. **添加域名**
   - 输入您的域名 (例如: `craftbrainrot.net`)
   - 按照提示完成 DNS 设置

3. **SSL 证书**
   - Cloudflare 会自动为您的域名提供 SSL 证书
   - 无需额外配置

## 环境变量配置

如果需要配置环境变量，在 Cloudflare Dashboard 中：

1. 进入项目设置
2. 点击 "Environment variables"
3. 添加以下变量：

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 自动部署

Cloudflare Pages 支持自动部署：

- 每次推送到 `main` 分支时，会自动触发新的部署
- 可以在 Dashboard 中查看部署历史和状态
- 支持预览部署 (Pull Request 时)

## 性能优化

Cloudflare Pages 自动提供：

- **CDN 加速**: 全球边缘节点
- **自动压缩**: 静态资源自动压缩
- **缓存优化**: 智能缓存策略
- **HTTPS**: 自动 SSL 证书

## 故障排除

### 构建失败

1. **检查构建日志**
   - 在 Cloudflare Dashboard 中查看详细错误信息

2. **常见问题**
   - 确保所有依赖都已安装
   - 检查 Node.js 版本兼容性
   - 验证构建命令是否正确

### 页面显示错误

1. **检查路由配置**
   - 确保 `next.config.js` 中的 `trailingSlash: true` 设置正确

2. **检查静态资源**
   - 确保所有图片和资源文件路径正确

## 监控和分析

1. **访问统计**
   - 在 Cloudflare Dashboard 中查看访问统计
   - 分析用户行为和性能指标

2. **错误监控**
   - 设置错误通知
   - 监控页面加载性能

## 更新部署

每次更新代码后：

1. 推送到 Git 仓库
2. Cloudflare Pages 会自动检测并部署
3. 等待构建完成
4. 验证新版本是否正常工作

## 回滚部署

如果需要回滚到之前的版本：

1. 在 Cloudflare Dashboard 中进入项目
2. 点击 "Deployments"
3. 找到要回滚的版本
4. 点击 "Retry deployment"

---

部署完成后，您的网站将在 `https://craft-brainrot.pages.dev` 或您的自定义域名上可用。 