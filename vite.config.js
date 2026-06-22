import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5175, // Cambia al puerto que deseas usar
    strictPort: true, // Fuerza el uso de este puerto
    hmr: {
      port: 5175, // Asegúrate de que HMR use el mismo puerto
    },
  },
})