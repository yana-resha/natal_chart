import path from 'path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import svgr from 'vite-plugin-svgr'

export default ({ command }: { command: string }) => {
  const commonResolve = {
    alias: {
      '@': path.resolve(__dirname, './src/'),
    },
  }
  if (command === 'serve') {
    return defineConfig({
      plugins: [
        svgr({
          include: '**/*.svg?react',
          svgrOptions: {
            ref: true, // Forward the ref to the root SVG tag.
            icon: true, // Replace SVG width and height with
          },
        }),
        react(),
      ],
      resolve: commonResolve,
      server: {
        open: true,
      },
    })
  }

  return defineConfig({
    plugins: [
      svgr({
        include: '**/*.svg?react',
        svgrOptions: {
          ref: true, // Forward the ref to the root SVG tag.
          icon: true, // Replace SVG width and height with
        },
      }),
      react(),
      viteSingleFile(),
    ],
    resolve: commonResolve,
  })
}
