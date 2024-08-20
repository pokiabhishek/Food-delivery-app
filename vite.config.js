// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/Food-delivery-app",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows access from external devices
    port: 3000,      // or any port you are using
  },
});
