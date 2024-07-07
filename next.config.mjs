/* 公開時のサブディレクトリ */
const SUB_DIRECTORY = "/dashboard";

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? SUB_DIRECTORY : "",
  trailingSlash: true
};

export default nextConfig;
