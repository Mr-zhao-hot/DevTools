// tailwind.config.ts（项目根目录必须存在该文件）
import type { Config } from "tailwindcss";

import tailwindcss_animate from 'tailwindcss-animate'

export default {
  // 1. 关键：扫描所有需要解析 Tailwind 样式的文件（包括 shadcn 组件）
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // 扫描项目 src 下所有组件
    "./src/components/ui/**/*.{vue,js,ts,jsx,tsx}", // 单独扫描 shadcn 组件目录（确保不遗漏）
  ],
  theme: {
    extend: {
      // 2. 关键：映射你在 tailwind.css 中定义的 CSS 变量（否则样式无颜色/布局）
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        sidebar: {
          background: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      // 3. 映射你定义的圆角变量（确保组件圆角生效）
      borderRadius: {
        DEFAULT: "var(--radius)",
      },
    },
  },
  // 4. 关键：引入 shadcn 依赖的 Tailwind 插件（否则动画/特殊样式失效）
  plugins: [tailwindcss_animate],
} satisfies Config;
