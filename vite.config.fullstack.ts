/**
 * 飞书全栈模板原始入口（Vite 开发时会将 HTML 请求代理到 Nest，需同时运行后端）。
 * 使用方式：npx vite --config vite.config.fullstack.ts
 */
import path from 'path';
import { defineConfig } from '@lark-apaas/fullstack-vite-preset';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },
});
