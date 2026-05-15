/**
 * 首页模板组件 - HomeTemplate.tsx
 * 
 * 这是网站首页的主要模板组件，负责：
 * 1. 组织首页的整体布局结构
 * 2. 管理搜索功能和游戏选择状态
 * 3. 集成所有首页相关的子组件
 * 4. 处理用户交互和页面导航
 */

"use client"; // 声明这是一个客户端组件，支持浏览器API和状态管理

// React 核心导入
import { useState } from "react";

// 布局组件导入
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// 首页内容组件导入
import { GameSection } from "@/components/game-section/GameSection";
import { GameGrid } from "@/components/game-grid/GameGrid";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Rating } from "@/components/rating/Rating";

/**
 * 首页模板组件
 *
 * 功能：
 * - 提供完整的首页布局和内容
 * - 管理搜索查询状态
 * - 处理游戏选择和搜索交互
 * - 集成所有首页相关的子组件
 */
export function HomeTemplate() {
  // 状态管理
  // searchQuery: 存储用户输入的搜索关键词
  const [searchQuery, setSearchQuery] = useState("");

  // activeGame: 存储当前选中的游戏ID，用于高亮显示
  const [activeGame, setActiveGame] = useState<string | null>(null);

  /**
   * 处理搜索表单提交
   *
   * 功能：
   * 1. 阻止表单默认提交行为
   *
   * @param e - React 表单事件对象
   */
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault(); // 阻止表单默认提交行为
  };

  /**
   * 渲染首页内容
   *
   * 页面结构：
   * 1. Header - 页面头部，包含导航和搜索功能
   * 2. Main - 主要内容区域，包含所有首页组件
   * 3. Footer - 页面底部
   */
  return (
    // 根容器：最小高度为屏幕高度，背景色为主题背景色
    <div className="min-h-screen bg-background">

      {/* 页面头部组件 */}
      {/* 传递搜索相关的状态和回调函数 */}
      <Header
        searchQuery={searchQuery}        // 当前搜索关键词
        onSearchChange={setSearchQuery}  // 搜索关键词更新回调
        onSearch={handleSearch}          // 搜索提交回调
      />

      {/* 主要内容区域 */}
      {/* 使用容器布局，居中对齐，添加内边距 */}
      <main className="container mx-auto px-4 py-8">

        {/* 游戏展示区域 - 主要游戏内容 */}
        <GameSection />

        {/* 更多游戏网格区域 */}
        <GameGrid />

        {/* 游戏特性介绍区域 */}
        <Features />
        
        {/* 游戏介绍区域 - 什么是这个游戏 */}
        <WhatIs />
        
        {/* 游戏玩法说明区域 */}
        <HowToPlay />
        
        {/* 常见问题解答区域 */}
        <FAQ />
        
        {/* 游戏评分区域 */}
        {/* 添加底部边距和锚点ID，便于导航 */}
        <section className="mb-16" id="rating">
          <Rating />
        </section>
      </main>

      {/* 页面底部组件 */}
      <Footer />
    </div>
  );
}