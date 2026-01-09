import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        base: command === 'build' && mode === 'production' ? '' : '/',
        // base: command === 'build' ? '' : 'http://localhost:5173/',
        optimizeDeps: {
            noDiscovery: true
        },
        plugins: [
            vue(),
            tailwindcss(),
            Components({
                resolvers: [PrimeVueResolver()]
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        build: {
            // Always generate manifest.json for .NET integration
            manifest: 'manifest.json',
            rollupOptions: {
                // If we are doing a standard build, use index.html as entry
                // If we are building specifically for the CDN/Library, use main.js
                input: mode === 'production' ? 'src/main.js' : 'index.html'
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler'
                }
            }
        },
        server: {
            cors: true,
            port: 5173,
            strictPort: true,
            origin: 'http://localhost:5173',
            proxy: {
                '/Component': {
                    target: 'https://localhost:44301',
                    secure: false // Set to false to accept self-signed SSL certificates from IIS Express
                }
            }
        }
    };
});
