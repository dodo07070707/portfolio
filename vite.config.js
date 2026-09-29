import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages(username.github.io/repo) 배포 시 base를 '/repo/'로 변경
export default defineConfig({
  plugins: [react()],
  base: './',
});
