# Craft Brainrot 游戏网站

🎮 **官方网站**: [Craft Brainrot 官方网站](https://craftbrainrot.net/)

📖 **English Version**: [README_EN.md](./README_EN.md)

这是 Craft Brainrot 游戏的官方网站项目，基于 Next.js 构建。该网站提供游戏嵌入、游戏信息展示以及针对搜索引擎和 AI 爬虫的优化。

## 项目概述

Craft Brainrot 是一款病毒式传播的合并游戏，结合了意大利梗文化与令人上瘾的合成玩法，可直接在浏览器中运行，无需下载安装。本项目是游戏的官方网站，提供完整的游戏体验和信息展示。

### 支持的游戏列表

1. **[Craft Brainrot](https://www.crazygames.com/game/craft-brainrot)** - 病毒式传播的合并游戏，意大利梗文化主题

### 主要功能

- **游戏嵌入与展示** - 支持 Craft Brainrot 病毒式传播的合并游戏
- **统一游戏页面模板** - 完整的介绍、特性、玩法和FAQ
- **游戏特性、玩法和 FAQ 介绍** - 详细的游戏指南和常见问题解答
- **针对搜索引擎优化 (SEO)** - 完整的meta标签和结构化数据
- **针对 AI 爬虫的特殊内容优化** - 专用的llms.txt文件
- **响应式设计** - 支持各种设备和屏幕尺寸

## 技术栈

- **框架**: Next.js 13.5.1 (App Router)
- **语言**: TypeScript 5.2.2
- **样式**: Tailwind CSS 3.3.3
- **UI组件**: Radix UI (完整无障碍组件库)
- **部署**: Vercel
- **SEO**: next-sitemap 4.2.3
- **表单**: React Hook Form + Zod
- **图标**: Lucide React

## 项目结构

```
/
├── app/                    # Next.js 应用目录 (App Router)
│   ├── craft-brainrot/     # Craft Brainrot 游戏页面
│   ├── games/              # 游戏列表和数据配置
│   ├── about/              # 关于页面
│   ├── contact/            # 联系页面
│   ├── privacy-policy/     # 隐私政策页面
│   ├── terms-of-service/   # 服务条款页面
│   ├── layout.tsx          # 全局布局
│   ├── page.tsx            # 首页
│   ├── schema.ts           # 结构化数据配置
│   └── globals.css         # 全局样式
├── components/             # React 组件库
│   ├── game-section/       # 游戏展示组件
│   ├── layout/             # 布局组件 (Header, Footer)
│   ├── templates/          # 页面模板 (GamePageTemplate)
│   ├── home/               # 首页组件
│   ├── features/           # 游戏特性组件
│   ├── what-is/            # 游戏介绍组件
│   ├── how-to-play/        # 玩法说明组件
│   ├── faq/                # FAQ组件

│   ├── rating/             # 评分组件
│   └── ui/                 # 基础UI组件 (基于Radix UI)
├── config/                 # 配置文件
│   ├── site.ts/js          # 站点基本配置
│   ├── content.ts          # 游戏内容配置
│   ├── layout.ts           # 布局配置
│   └── theme.ts            # 主题配置
├── hooks/                  # 自定义React Hooks
├── lib/                    # 工具函数库
├── public/                 # 静态资源
│   ├── assets/             # 图片和其他资源
│   │   ├── craft-brainrot/ # Craft Brainrot 相关图片
│   │   └── img/            # 站点通用图片
│   ├── game/               # 游戏文件目录
│   │   └── craft-brainrot/ # Craft Brainrot 游戏文件
│   ├── llms.txt            # AI 爬虫专用内容摘要
│   ├── llms-full.txt       # AI 爬虫专用完整内容
│   ├── robots.txt          # 搜索引擎爬虫规则
│   └── sitemap.xml         # 网站地图
├── next.config.js          # Next.js 配置 (包含游戏路由重写)
├── next-sitemap.config.js  # Sitemap 和 robots.txt 配置
├── tailwind.config.ts      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
└── components.json         # shadcn/ui 组件配置
```

## 开发指南

### 环境要求

- Node.js 16.x 或更高版本
- npm 或 yarn

### 环境变量配置

在项目根目录创建 `.env.local` 文件：

```bash
# Google Analytics Configuration
# 请替换为您自己的 Google Analytics ID
# 获取方式: https://analytics.google.com/ → 管理 → 数据流 → 衡量ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# 其他可选配置
# NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**注意**: 
- `.env.local` 文件已在 `.gitignore` 中，不会被提交到代码库
- 请将 `G-XXXXXXXXXX` 替换为您自己的 Google Analytics 衡量ID

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 本地开发

```bash
npm run dev
# 或
yarn dev
```

访问 http://localhost:3000 查看网站。

### 构建项目

```bash
npm run build
# 或
yarn build
```

### 生成 Sitemap

```bash
npm run sitemap
# 或
yarn sitemap
```

### 清理 Sitemap

```bash
npm run clean-sitemap
```

## 游戏嵌入指南

网站通过 iframe 嵌入游戏，每个游戏都有对应的嵌入路由：

- `/craft-brainrot.embed` → `/game/craft-brainrot/index.html`

详细的游戏本地化部署指南可参考 `IFRAME_DOWNLOAD_README.md`。

## 添加新游戏指南

要添加新游戏，需要以下步骤：

1. **添加游戏文件**: 将游戏文件放入 `public/game/[游戏名]/` 目录
2. **创建游戏页面**: 在 `app/[游戏名]/` 创建页面目录和文件
3. **配置游戏数据**: 在 `app/games/game-data.ts` 中添加游戏信息
4. **添加游戏内容**: 创建游戏的 `content.ts` 配置文件
5. **配置路由重写**: 在 `next.config.js` 中添加嵌入路由
6. **添加游戏资源**: 在 `public/assets/[游戏名]/` 添加相关图片

## 当前游戏

### Craft Brainrot
- **游戏类型**: 病毒式传播的合并游戏
- **主题**: 意大利梗文化
- **玩法**: 点击合成，发现新组合
- **特色**: 结合意大利梗文化与令人上瘾的合成玩法

## 相关链接和资源

### 官方页面
- 🏠 **主页**: [Craft Brainrot 官方网站](https://craftbrainrot.net/)
- 🎮 **游戏页面**: [Craft Brainrot 游戏](https://www.crazygames.com/game/craft-brainrot)
- 📞 **联系我们**: [联系我们](https://craftbrainrot.net/contact)
- ℹ️ **关于我们**: [关于我们](https://craftbrainrot.net/about)
- 🔒 **隐私政策**: [隐私政策](https://craftbrainrot.net/privacy-policy)
- 📋 **服务条款**: [服务条款](https://craftbrainrot.net/terms-of-service)

### 外部链接 (Footer Quick Links)
- 🐍 **Snake Game**: [在线贪吃蛇游戏](https://snake-game.online)
- 📝 **Evernote**: [Evernote 笔记](https://lite.evernote.com/note/a7633e02-bcf7-d080-171a-a858eec4a9d2)
- 📅 **CAL**: [Vincent AI 日历预约](https://cal.com/vincent-ai)
- 💰 **Patreon**: [Patreon 支持页面](https://www.patreon.com/posts/craft-brainrot-129397709)
- 📌 **Pinterest**: [Pinterest 图片分享](https://www.pinterest.com/pin/581245895696208484/)
- 🔗 **Linktr**: [Linktr 链接树](https://linktr.ee/vincent20250520)
- 📰 **Substack**: [Substack 博客](https://substack.com/@vincent879601/posts)
- 🎨 **Creem**: [Creem 创作平台](https://www.creem.io/bip/vincent-ai)
- 💻 **CraftBrainrot Github**: [项目英文文档](https://github.com/WeiWenxing/crazycattle3d/blob/main/README_EN.md)

## AI 爬虫优化

本项目针对 AI 爬虫进行了特殊优化：

1. **专用内容文件**: 提供了 `llms.txt` 和 `llms-full.txt` 文件，包含结构化的游戏信息
2. **robots.txt 配置**: 引导 AI 爬虫访问专用文件，限制对网站其他部分的访问
3. **支持的AI爬虫**: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, DeepseekBot 等

详细配置可查看 `next-sitemap.config.js`。

## OG 图片生成

社交媒体预览图片生成指南可参考 `OG_IMAGE_README.md`。

## 部署

项目配置为通过 Vercel 自动部署。推送到主分支的更改将自动部署到生产环境。

### Vercel 环境变量配置

在 Vercel 控制台中配置以下环境变量：

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择您的项目
3. 进入 **Settings** → **Environment Variables**
4. 添加以下变量：

```
Name: NEXT_PUBLIC_GA_ID
Value: G-XXXXXXXXXX
Environment: Production, Preview, Development
```

**或者使用 Vercel CLI：**

```bash
# 安装 Vercel CLI
npm i -g vercel

# 设置环境变量
vercel env add NEXT_PUBLIC_GA_ID
# 输入值: G-XXXXXXXXXX
# 选择环境: Production, Preview, Development
```

### 自动部署

- **生产环境**: 推送到 `main` 分支自动部署
- **预览环境**: 创建 Pull Request 自动生成预览链接
- **开发环境**: 使用 `vercel dev` 本地开发

## 许可证

© 2025 Craft Brainrot. 保留所有权利。