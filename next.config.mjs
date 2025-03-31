/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['v0.blob.com'],
        unoptimized: true, // 這對 Cloudflare Pages 很重要
    },
    // Cloudflare Pages 特定配置
    webpack: (config, { isServer }) => {
        // 修復 Cloudflare 上的 fs 模塊問題
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                module: false,
            };
        }
        return config;
    },
};

export default nextConfig;
