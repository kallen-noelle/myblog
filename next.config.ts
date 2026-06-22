import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

const raw = fs.readFileSync(path.join(process.cwd(), "lib", "siteConfig.ts"), "utf-8");
const hasDomain = /hasDomain:\s*true/.test(raw);
const repo = (raw.match(/repo:\s*"([^"]+)"/)?.[1]?.split("/")?.[1]) || "myblog";

const isDev = process.env.NODE_ENV === "development";
const prefix = isDev ? "" : (hasDomain ? "" : `/${repo}`);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: prefix,
  ...(prefix && !isDev ? { assetPrefix: `${prefix}/` } : {}),
};

export default nextConfig;