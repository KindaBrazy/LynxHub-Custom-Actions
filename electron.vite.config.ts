import federation from '@originjs/vite-plugin-federation';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'electron-vite';
import {resolve} from 'path';

export default defineConfig({
  main: {
    root: resolve('extension/src/main'),
    build: {
      externalizeDeps: {exclude: ['tree-kill']},
      outDir: resolve('extension_out/main'),
      rollupOptions: {
        input: resolve('extension/src/main/lynxExtension.ts'),
        output: {entryFileNames: 'mainEntry.cjs', format: 'cjs'},
      },
    },
  },
  renderer: {
    root: resolve('extension/src/renderer'),
    plugins: [
      react(),
      tailwindcss(),
      federation({
        name: 'extension',
        filename: 'rendererEntry.mjs',
        exposes: {
          Extension: resolve('extension/src/renderer/Extension.tsx'),
        },
        shared: {
          react: {generate: false},
          'react-dom': {generate: false},
          'react-redux': {generate: false},
          '@heroui-v3/react': {generate: false},
          '@heroui-v3/styles': {generate: false},
        },
      }),
    ],
    build: {
      outDir: resolve('extension_out/renderer'),
      rollupOptions: {
        input: resolve('extension/src/renderer/index.html'),
        treeshake: {moduleSideEffects: false},
      },
      assetsDir: '',
      minify: false,
      target: 'esnext',
      cssCodeSplit: false,
      modulePreload: false,
    },

    publicDir: resolve(__dirname, 'extension/src/renderer/Public'),
  },
});
