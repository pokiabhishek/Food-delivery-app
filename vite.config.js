// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base:"/Food-delivery-app/",
  server: {
    host: '0.0.0.0', // This allows access from external devices
    port: 3000,      // or any port you are using
  },
});
