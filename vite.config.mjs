import { defineConfig } from 'vite'
import path from 'node:path'
import electron from 'vite-plugin-electron/simple'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import IconsResolver from 'unplugin-icons/resolver';
import tailwindcss from '@tailwindcss/vite'
// https://vitejs.dev/config/
export default defineConfig({
  // base:'./',
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      // 自动导入 Vue 和 Vue-router 相关函数，如 ref, reactive, createRouter 等
      imports: ['vue', 'vue-router'],
      resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
              prefix: 'Icon',
          })
      ],
  }),
  Components({
    resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        // 自动注册图标组件
        IconsResolver({
            // ep 是 Element Plus 的缩写
            enabledCollections: ['ep'],
        })
    ],
}),
Icons({
  autoInstall: true,
}),
    electron({
      main: {
        // Shortcut of `build.lib.entry`.
        entry: 'electron/main.ts',
      },
      preload: {
        // Shortcut of `build.rollupOptions.input`.
        // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
        input: 'electron/preload.ts'
      },
      // Ployfill the Electron and Node.js API for Renderer process.
      // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
      // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
      renderer: process.env.NODE_ENV === 'development'
        // https://github.com/electron-vite/vite-plugin-electron-renderer/issues/78#issuecomment-2053600808
        ? undefined
        : {},
    }),
  ],
  optimizeDeps:{
  },
  build:{
    assetsDir: 'assets/musics',
    rollupOptions:{
      plugins:[
      ]
      }
    }
  }
)
