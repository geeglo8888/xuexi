/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 关键：开启静态导出，生成纯HTML/CSS/JS文件
  images: {
    unoptimized: true, // 兼容静态导出的图片
  },
};

module.exports = nextConfig;