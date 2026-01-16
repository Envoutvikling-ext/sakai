import { fileURLToPath, URL } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    return {
        base: command === 'build' && mode === 'production' ? '' : '/',
        optimizeDeps: {
            noDiscovery: true
        },
        plugins: [
            vue(),
            tailwindcss(),
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
                // If we are building specifically for the CDN/Library, use main.ts
                input: mode === 'production' ? 'src/main.ts' : 'index.html'
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
                    secure: false // Set as false to accept self-signed SSL certificates from IIS Express
                }
            }
        }
    };
});
