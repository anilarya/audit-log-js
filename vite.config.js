import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'AuditLogJs',
      fileName: (format) => `audit-log-js.${format}.js`
    }
  }
});
