/**
 * 游戏展示区域组件 - GameSection.tsx
 * 
 * 功能：
 * 1. 展示主要游戏（Crazy Cattle 3D）的嵌入界面
 * 2. 提供全屏切换功能
 * 3. 响应式布局适配
 * 4. 主题样式支持
 * 5. 游戏控制按钮区域
 */

'use client'; // 声明这是一个客户端组件，支持浏览器API和交互功能

// React 核心导入
import { useState, useRef } from 'react'; // 状态管理和DOM引用

// 配置和主题导入
import { content as defaultContent } from "@/config/content"; // 内容配置
import { theme } from "@/config/theme"; // 主题配置
import { layout } from "@/config/layout"; // 布局配置
import { cn } from "@/lib/utils"; // 工具函数，用于合并 CSS 类名

// UI 组件导入
import { Button } from "@/components/ui/button"; // 按钮组件

/**
 * GameSection 组件的属性接口定义
 */
interface GameSectionProps {
  content?: typeof defaultContent; // 可选的内容配置，默认为默认配置
}

/**
 * 游戏展示区域组件
 * 
 * 主要功能：
 * - 嵌入游戏 iframe
 * - 提供全屏切换功能
 * - 响应式布局
 * - 主题样式支持
 * 
 * @param content - 游戏内容配置，默认为 defaultContent
 */
export function GameSection({ content = defaultContent }: GameSectionProps) {
  // 状态管理
  // isFullscreen: 跟踪当前是否处于全屏状态
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // containerRef: 引用游戏容器DOM元素，用于全屏操作
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * 切换全屏状态
   * 
   * 功能：
   * 1. 检查当前是否已全屏
   * 2. 如果未全屏，请求进入全屏模式
   * 3. 如果已全屏，退出全屏模式
   * 4. 更新全屏状态
   */
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      // 当前未全屏，请求进入全屏
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      // 当前已全屏，退出全屏
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  /**
   * 渲染游戏展示区域
   */
  return (
    <section
      id="game-section" // 锚点ID，用于导航
      className={cn(
        theme.gameSection.layout.section, // 游戏区域布局样式
        theme.layout.section.scrollMargin // 滚动偏移样式
      )}
    >
      {/* 游戏标题 - 仅在配置启用时显示 */}
      {layout.gameSection.isVisible.title && (
        <h2 className={cn(
          theme.gameSection.typography.title, // 标题字体样式
          theme.gameSection.spacing.title // 标题间距样式
        )}>
          {content.gameSection.title} {/* 显示游戏标题 */}
        </h2>
      )}

      {/* 游戏容器 - 包含 iframe 或外部链接按钮 */}
      <div
        ref={containerRef} // DOM引用，用于全屏操作
        className={cn(
          "w-full max-w-4xl mx-auto overflow-hidden shadow-xl relative", // 基础样式
          theme.gameSection.colors.container, // 容器颜色主题
          "mb-0 rounded-none" // 移除底部边距，移除圆角
        )}
      >
        {/* 检查是否为可嵌入地址：url 与 externalUrl 不同，则视为 iframe 嵌入 */}
        {(content.gameSection.game.url as string) === (content.gameSection.game.externalUrl as string) ? (
          // 外部链接 - 显示游戏预览和按钮
          <div className="w-full aspect-video bg-gradient-to-br from-purple-600 to-blue-600 flex flex-col items-center justify-center text-white relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute top-4 left-4 text-2xl">🎮</div>
            <div className="absolute top-4 right-4 text-2xl">🧠</div>
            <div className="absolute bottom-4 left-4 text-2xl">⚡</div>
            <div className="absolute bottom-4 right-4 text-2xl">🎯</div>

            {/* 游戏信息 */}
            <div className="relative z-10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {content.gameSection.title}
              </h3>
              <p className="text-lg md:text-xl mb-8 opacity-90 max-w-md">
                Experience the viral merge game that's taking over the internet!
              </p>

              {/* 游戏按钮 */}
              <Button
                onClick={() => window.open(content.gameSection.game.url, '_blank')}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                🎮 Play Now on CrazyGames
              </Button>

              <p className="text-sm opacity-75 mt-4">
                Opens in a new tab
              </p>
            </div>
          </div>
        ) : (
          // 内部嵌入 - 显示iframe
          <iframe
            src={content.gameSection.game.url} // 游戏URL（通常是嵌入链接）
            className="w-full h-full aspect-video border-0" // 响应式样式，16:9比例
            allow="fullscreen" // 允许iframe内全屏
            title={content.gameSection.game.title} // 无障碍标题
          />
        )}
      </div>

      {/* 游戏控制按钮区域 */}
      {/* 位于游戏区域下方，带暗色背景，移除上部圆角 */}
      <div className="flex justify-end items-center w-full max-w-4xl mx-auto mb-16 bg-gray-700/70 dark:bg-gray-800/70 text-white rounded-none p-2 shadow-md">
        {/* 这里可以添加其他游戏控制按钮 */}
        {/* 例如：音量控制、设置按钮、帮助按钮等 */}

        {/* 全屏切换按钮 - 仅在 iframe 嵌入时显示 */}
        {(content.gameSection.game.url as string) !== (content.gameSection.game.externalUrl as string) && (
          <Button
            onClick={toggleFullscreen} // 点击切换全屏
            size="icon" // 图标尺寸
            variant="ghost" // 幽灵按钮样式
            className="hover:bg-white/20 text-white rounded-full p-1.5 transition-colors" // 悬停效果和过渡
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"} // 无障碍标签
          >
            {/* 全屏图标 - SVG 格式 */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              {/* 全屏图标的四个角落箭头 */}
              <path d="M9 9L4 4m0 0l5 0M4 4l0 5" /> {/* 左上角 */}
              <path d="M15 9l5-5m0 0h-5m5 0v5" /> {/* 右上角 */}
              <path d="M9 15l-5 5m0 0h5m-5 0v-5" /> {/* 左下角 */}
              <path d="M15 15l5 5m0 0v-5m0 5h-5" /> {/* 右下角 */}
            </svg>
          </Button>
        )}
      </div>
    </section>
  );
}
