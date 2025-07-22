/**
 * 页面头部组件 - Header.tsx
 * 
 * 功能：
 * 1. 显示网站 Logo 和标题
 * 2. 提供导航链接
 * 3. 集成搜索功能
 * 4. 响应式布局适配
 * 5. 主题样式支持
 */

"use client"; // 声明这是一个客户端组件，支持浏览器API和交互功能

// Next.js 核心导入
import Link from "next/link"; // Next.js 链接组件，用于客户端导航
import { usePathname } from "next/navigation"; // 获取当前路径的 Hook

// 配置和主题导入
import { theme } from "@/config/theme"; // 主题配置
import { content } from "@/config/content"; // 内容配置
import { layout } from "@/config/layout"; // 布局配置
import { cn } from "@/lib/utils"; // 工具函数，用于合并 CSS 类名
import { siteConfig } from "@/config/site"; // 站点配置

// UI 组件导入
import { Input } from "@/components/ui/input"; // 输入框组件
import { Button } from "@/components/ui/button"; // 按钮组件
import { Search } from "lucide-react"; // 搜索图标

/**
 * Header 组件的属性接口定义
 */
interface HeaderProps {
  searchQuery?: string; // 搜索查询字符串
  onSearchChange?: (value: string) => void; // 搜索输入变化回调
  onSearch?: (e: React.FormEvent) => void; // 搜索表单提交回调
}

/**
 * 页面头部组件
 * 
 * @param searchQuery - 当前搜索关键词，默认为空字符串
 * @param onSearchChange - 搜索输入变化时的回调函数
 * @param onSearch - 搜索表单提交时的回调函数
 */
export function Header({ 
  searchQuery = "", 
  onSearchChange = () => {}, 
  onSearch = () => {} 
}: HeaderProps) {
  
  // 如果头部设置为不可见，则不渲染任何内容
  if (!layout.header.isVisible) return null;

  // 注释掉的代码：之前用于动态生成标题，现在改为固定返回品牌名称
  // const pathname = usePathname(); // 获取当前路径
  // const isHomePage = pathname === "/"; // 判断是否为首页

  /**
   * 格式化路径为标题
   * 现在固定返回品牌名称，不再根据路径动态生成
   * 
   * @returns {string} 页面标题（品牌名称）
   */
  const formatPathToTitle = () => {
    return content.header.title; // 返回配置中的标题，通常是 siteConfig.name
  };

  /**
   * 构建头部容器的 CSS 类名
   * 使用 cn 工具函数合并多个类名
   */
  const headerClassName = cn(
    layout.header.isVisible ? "" : "hidden", // 根据配置决定是否显示
    theme.header.layout.position, // 定位样式
    theme.header.layout.zIndex, // 层级样式
    theme.header.colors.border, // 边框颜色
    theme.header.colors.background, // 背景颜色
    theme.header.layout.blur, // 模糊效果
  );

  /**
   * 构建头部内容容器的 CSS 类名
   */
  const containerClassName = cn(
    theme.header.spacing.container, // 容器间距
    "flex", // Flexbox 布局
    theme.header.layout.height, // 高度样式
    "items-center justify-between", // 垂直居中，水平两端对齐
    layout.header.container.padding // 内边距
  );

  /**
   * 渲染头部组件
   */
  return (
    <header className={headerClassName}>
      <div className={containerClassName}>
        
        {/* 左侧标题区域 */}
        <div className={theme.header.layout.logo.wrapper}>
          
          {/* 标题链接 */}
          <Link href="/" className="no-underline">
            <h1 className={cn(
              layout.header.logoSize, // 标题尺寸
              "font-bold", // 粗体字
              theme.header.colors.text, // 文字颜色
              theme.header.colors.hover // 悬停效果颜色
            )}>
              {formatPathToTitle()} {/* 显示页面标题 */}
            </h1>
          </Link>
        </div>

        {/* 右侧导航和搜索区域 */}
        <div className={theme.header.layout.nav.wrapper}>
          
          {/* 导航链接列表 */}
          <nav className={theme.header.layout.nav.list}>
            {content.header.navigation.links.map((link) => (
              <a
                key={link.href} // React key 属性
                href={link.href} // 链接地址
                className={cn(
                  "text-sm font-medium transition-colors", // 基础样式
                  theme.header.colors.text, // 文字颜色
                  "hover:text-primary" // 悬停时变为主题色
                )}
                onClick={(e) => {
                  e.preventDefault(); // 阻止默认跳转行为
                  
                  // 智能导航逻辑：
                  // 1. 首先在当前页面查找目标锚点
                  const targetElement = document.querySelector(link.href);
                  if (targetElement) {
                    // 如果找到目标元素，平滑滚动到该位置
                    targetElement.scrollIntoView({
                      behavior: 'smooth' // 平滑滚动效果
                    });
                  } else {
                    // 如果当前页面没有找到目标元素，跳转到首页对应的锚点
                    window.location.href = '/' + link.href;
                  }
                }}
              >
                {link.text} {/* 显示链接文本 */}
              </a>
            ))}
          </nav>

          {/* 搜索表单 - 仅在启用时显示 */}
          {layout.header.searchEnabled && (
            <form
              onSubmit={onSearch} // 表单提交处理
              className={cn(
                "flex", // Flexbox 布局
                layout.header.maxWidth, // 最大宽度
                "items-center", // 垂直居中
                theme.header.spacing.search // 搜索区域间距
              )}
            >
              {/* 搜索输入框 */}
              <Input
                type="search" // 输入类型为搜索
                placeholder={content.header.search.placeholder} // 占位符文本
                value={searchQuery} // 当前搜索值
                onChange={(e) => onSearchChange(e.target.value)} // 输入变化处理
                aria-label={content.header.search.ariaLabel} // 无障碍标签
              />
              
              {/* 搜索按钮 */}
              <Button
                type="submit" // 按钮类型为提交
                size="icon" // 图标尺寸
                aria-label={content.header.search.buttonAriaLabel} // 无障碍标签
              >
                <Search className="h-4 w-4" /> {/* 搜索图标 */}
              </Button>
            </form>
          )}
        </div>
      </div>
    </header>
  );
}
