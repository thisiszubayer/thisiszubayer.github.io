import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // **CRITICAL FIX:** Ensures all asset paths (JS/CSS) are relative.
  base: '', 
  plugins: [react()],
  // Add this block if you are using TypeScript with Vite's default setup
  build: {
    rollupOptions: {
      input: {
        // Explicitly defines the main entry point to ensure it's built correctly
        main: './index.html' 
      }
    }
  }
});
