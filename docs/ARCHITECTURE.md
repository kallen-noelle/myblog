
## 技术栈

| 类别     | 技术                        |
| -------- | --------------------------- |
| 框架     | Next.js 16 + App Router     |
| 语言     | TypeScript                  |
| 样式     | Tailwind CSS                |
| 动画     | Framer Motion               |
| 图标     | Lucide React                |
| 评论系统 | Giscus (GitHub Discussions) |
| 字体     | Geist Sans / Geist Mono     |

## 组件规范

- 所有组件文件（`app/_components/` 和 `app/**/page.tsx`）统一使用 **`export default function`**
- `app/_components/` 下所有组件均为 **Client Component**（带有 `"use client"`）
- 页面文件（`page.tsx`）可以是 Server Component，按需添加 `"use client"`
- 样式优先使用 Tailwind 原子类，复杂样式才写自定义 CSS

## 路由结构

- `(main)` 为 Route Group，共享主布局（含顶栏、浮动导航等）
- `admin` 为独立路由组，独立布局
- 工具页位于 `(main)/tools/` 下，每个工具一个子目录

## 设计规范

详见 [docs/STYLE-GUIDE.md](./STYLE-GUIDE.md)：

- 玻璃拟态卡片风格
- 亮色/暗色双主题
- 统一的配色 Token 和文字层级
