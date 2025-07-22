/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // 移除重写规则，因为我们现在直接跳转到外部链接
  
  // Cloudflare Pages 优化配置
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  
  // 确保静态资源正确处理
  assetPrefix: '',
};

module.exports = nextConfig;


