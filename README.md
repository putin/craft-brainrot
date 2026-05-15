# Craft Brainrot 游戏网站

🎮 **官方网站**: [craft-brainrot.com](https://craft-brainrot.com/)

📖 **English Version**: [README_EN.md](./README_EN.md)

基于 Next.js 构建的 Craft Brainrot 游戏聚合网站，内嵌 16 款 Italian Brainrot 系列游戏，支持 iframe 直接游玩或外链跳转。

---

## 项目概述

本站聚合了来自 [craft-brainrot.com](https://craft-brainrot.com/) 的全部游戏：
- **主游戏 Craft Brainrot** 通过 iframe 直接嵌入，无需跳转
- **其他 15 款游戏** 以卡片形式展示，点击跳转原站游玩

---

## 游戏列表（共 16 款）

| 游戏名称 | 类型 | 嵌入方式 |
|---------|------|---------|
| Craft Brainrot | 合成/合并 | ✅ iframe 直接嵌入 |
| Merge Brainrot | 合并 | 🔗 外链跳转 |
| Brainrot Merge Drop Puzzles | 益智合并 | 🔗 外链跳转 |
| Merge Brainrot 2 | 合并续作 | 🔗 外链跳转 |
| Brainrot Boing Boing Merge | 弹跳合并 | 🔗 外链跳转 |
| Labuba Merge | 休闲合并 | 🔗 外链跳转 |
| Italian Brainrot Find the Stars | 找星星 | 🔗 外链跳转 |
| Italian Brainrot Survival Arena | 竞技生存 | 🔗 外链跳转 |
| Brainrot Merge | 经典合并 | 🔗 外链跳转 |
| Italian Brainrot Challenge | 挑战赛 | 🔗 外链跳转 |
| Guess The Italian Brainrot Animals | 猜谜 | 🔗 外链跳转 |
| Brainrot Hole | 休闲吞噬 | 🔗 外链跳转 |
| Italian Brainrot Puzzle | 拼图 | 🔗 外链跳转 |
| Sprunki Phase Brainrot | 音乐创作 | 🔗 外链跳转 |
| Italian Brainrot Baby Clicker | 点击游戏 | 🔗 外链跳转 |
| Brainrot Click to Hatch | 点击孵化 | 🔗 外链跳转 |

---

## 技术栈

- **框架**: Next.js 13.5.1 (App Router)
- **语言**: TypeScript 5.2.2
- **样式**: Tailwind CSS 3.3.3
- **UI 组件**: Radix UI + shadcn/ui
- **部署**: Cloudflare Pages（静态导出）
- **SEO**: next-sitemap

---

## 项目结构

```
/
├── app/                        # Next.js App Router
│   ├── craft-brainrot/         # Craft Brainrot 独立游戏页
│   │   ├── page.tsx            # 页面入口
│   │   └── content.ts          # 页面内容配置
│   ├── games/
│   │   └── game-data.ts        # 所有游戏数据（16 款）
│   ├── about/                  # 关于页面
│   ├── contact/                # 联系页面
│   ├── privacy-policy/         # 隐私政策
│   ├── terms-of-service/       # 服务条款
│   ├── layout.tsx              # 全局布局
│   ├── page.tsx                # 首页
│   ├── schema.ts               # 结构化数据
│   └── globals.css             # 全局样式
├── components/
│   ├── game-section/           # 主游戏 iframe 嵌入区
│   │   └── GameSection.tsx
│   ├── game-grid/              # 游戏网格卡片区（16款）
│   │   └── GameGrid.tsx
│   ├── home/
│   │   └── HomeTemplate.tsx    # 首页模板
│   ├── templates/
│   │   └── GamePageTemplate.tsx# 游戏页通用模板
│   ├── layout/                 # Header / Footer
│   ├── features/               # 游戏特性介绍
│   ├── what-is/                # 游戏说明
│   ├── how-to-play/            # 玩法指南
│   ├── faq/                    # FAQ
│   ├── rating/                 # 评分组件
│   └── ui/                     # 基础 UI（shadcn/ui）
├── config/
│   ├── site.js                 # 站点基础配置（域名/邮箱等）
│   ├── site.ts                 # 站点类型定义
│   ├── content.ts              # 首页内容配置
│   ├── layout.ts               # 布局显示控制
│   └── theme.ts                # 主题样式配置
├── hooks/                      # 自定义 React Hooks
├── lib/                        # 工具函数
├── public/
│   ├── assets/img/             # 静态图片资源
│   ├── game/craft-brainrot/    # （保留）本地游戏文件
│   ├── llms.txt                # AI 爬虫摘要
│   └── llms-full.txt           # AI 爬虫完整内容
├── types/                      # 全局类型定义
├── .gitignore
├── next.config.js              # Next.js 配置
├── next-sitemap.config.js      # Sitemap 配置
├── tailwind.config.ts
├── tsconfig.json
└── wrangler.toml               # Cloudflare Pages 部署配置
```

---

## 快速开始

### 环境要求

- Node.js 18.x 或更高版本
- npm 9.x 或更高版本

### 安装与运行

```bash
# 克隆项目
git clone <repo-url>
cd craft-brainrot

# 安装依赖
npm install

# 本地开发
npm run dev
# 访问 http://localhost:3000
```

### 构建部署

```bash
# 构建（含 sitemap 生成）
npm run build

# 仅构建静态文件（Cloudflare Pages）
npm run build:static
```

### 环境变量（可选）

创建 `.env.local` 文件：

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Bing 站长验证
BING_VERIFICATION_KEY=your-bing-key
```

---

## 核心配置说明

### 修改主游戏 iframe 地址

编辑 `config/content.ts` 中的 `gameSection.game.url`：

```ts
gameSection: {
  game: {
    url: 'https://g.igroutka.ru/games/...', // iframe 嵌入地址
    externalUrl: 'https://craft-brainrot.com/' // 原站地址
  }
}
```

### 添加新游戏

在 `app/games/game-data.ts` 中添加游戏对象：

```ts
"game-id": {
  id: "game-id",
  title: "Game Title",
  description: "...",
  image: "https://...",
  url: "https://...",           // 原站链接（必填）
  iframeUrl: "https://...",    // 可嵌入 iframe 地址（可选）
}
```

---

## 部署

### Cloudflare Pages

项目已配置 `wrangler.toml` 和静态导出，推送 `main` 分支自动触发部署。

```bash
# 本地预览构建结果
npm run build:static
npx wrangler pages dev out
```

---

## SEO & AI 爬虫

- `public/llms.txt` — AI 爬虫摘要（GPTBot、Claude 等）
- `public/llms-full.txt` — 完整内容版本
- `next-sitemap.config.js` — Sitemap 和 robots.txt 自动生成

---

## 许可证

© 2025 Craft Brainrot. All rights reserved.
