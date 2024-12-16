import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/okurmen-web/',
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this is correct
  },
});