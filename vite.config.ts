import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '.env') });

export default defineConfig({
  root: path.resolve(__dirname, 'client'),
  envDir: path.resolve(__dirname),
  publicDir: 'public',
  plugins: [
    react(),
    tsconfigPaths({
      projects: [path.resolve(__dirname, 'tsconfig.app.json')],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
      '@client': path.resolve(__dirname, 'client'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@lark-apaas/client-toolkit/tools': path.resolve(
        __dirname,
        'node_modules/@lark-apaas/client-toolkit/lib/apis/tools',
      ),
    },
  },
  define: {
    'process.env': JSON.stringify(process.env),
  },
  server: {
    port: Number(process.env.CLIENT_DEV_PORT) || 8080,
    host: process.env.CLIENT_DEV_HOST || 'localhost',
    strictPort: false,
  },
  build: {
    outDir: path.resolve(__dirname, 'dist/client'),
    emptyOutDir: true,
    sourcemap: true,
  },
});
