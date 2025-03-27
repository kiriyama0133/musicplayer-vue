// vite.config.mjs
import { defineConfig } from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/vite@5.4.15_@types+node@22.13.13_lightningcss@1.29.2_sass-embedded@1.86.0/node_modules/vite/dist/node/index.js";
import electron from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/vite-plugin-electron@0.28.8_vite-plugin-electron-renderer@0.14.6/node_modules/vite-plugin-electron/dist/simple.mjs";
import vue from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/@vitejs+plugin-vue@5.2.3_vite@5.4.15_@types+node@22.13.13_lightningcss@1.29.2_sass-embedded@1_madk5kq6uhlzyesqb77oaluoji/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import AutoImport from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/unplugin-auto-import@19.1.1_@vueuse+core@9.13.0_vue@3.5.13_typescript@5.8.2__/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/unplugin-vue-components@28.4.1_@babel+parser@7.27.0_vue@3.5.13_typescript@5.8.2_/node_modules/unplugin-vue-components/dist/vite.js";
import Icons from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/unplugin-icons@22.1.0_@vue+compiler-sfc@3.5.13/node_modules/unplugin-icons/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/unplugin-vue-components@28.4.1_@babel+parser@7.27.0_vue@3.5.13_typescript@5.8.2_/node_modules/unplugin-vue-components/dist/resolvers.js";
import IconsResolver from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/unplugin-icons@22.1.0_@vue+compiler-sfc@3.5.13/node_modules/unplugin-icons/dist/resolver.js";
import tailwindcss from "file:///D:/AWINXIN/new_start/node_modules/.pnpm/@tailwindcss+vite@4.0.15_vite@5.4.15_@types+node@22.13.13_lightningcss@1.29.2_sass-embedded@1.86.0_/node_modules/@tailwindcss/vite/dist/index.mjs";
var vite_config_default = defineConfig(
  {
    // base:'./',
    plugins: [
      vue(),
      tailwindcss(),
      AutoImport({
        // 自动导入 Vue 和 Vue-router 相关函数，如 ref, reactive, createRouter 等
        imports: ["vue", "vue-router"],
        resolvers: [
          // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
          ElementPlusResolver(),
          // 自动导入图标组件
          IconsResolver({
            prefix: "Icon"
          })
        ]
      }),
      Components({
        resolvers: [
          // 自动导入 Element Plus 组件
          ElementPlusResolver(),
          // 自动注册图标组件
          IconsResolver({
            // ep 是 Element Plus 的缩写
            enabledCollections: ["ep"]
          })
        ]
      }),
      Icons({
        autoInstall: true
      }),
      electron({
        main: {
          // Shortcut of `build.lib.entry`.
          entry: "electron/main.ts"
        },
        preload: {
          // Shortcut of `build.rollupOptions.input`.
          // Preload scripts may contain Web assets, so use the `build.rollupOptions.input` instead `build.lib.entry`.
          input: "electron/preload.ts"
        },
        // Ployfill the Electron and Node.js API for Renderer process.
        // If you want use Node.js in Renderer process, the `nodeIntegration` needs to be enabled in the Main process.
        // See 👉 https://github.com/electron-vite/vite-plugin-electron-renderer
        renderer: process.env.NODE_ENV === "development" ? void 0 : {}
      })
    ],
    optimizeDeps: {},
    build: {
      assetsDir: "assets/musics",
      rollupOptions: {
        plugins: []
      }
    }
  }
);
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcQVdJTlhJTlxcXFxuZXdfc3RhcnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXEFXSU5YSU5cXFxcbmV3X3N0YXJ0XFxcXHZpdGUuY29uZmlnLm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovQVdJTlhJTi9uZXdfc3RhcnQvdml0ZS5jb25maWcubWpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCBlbGVjdHJvbiBmcm9tICd2aXRlLXBsdWdpbi1lbGVjdHJvbi9zaW1wbGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnO1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSc7XG5pbXBvcnQgSWNvbnMgZnJvbSAndW5wbHVnaW4taWNvbnMvdml0ZSc7XG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJztcbmltcG9ydCBJY29uc1Jlc29sdmVyIGZyb20gJ3VucGx1Z2luLWljb25zL3Jlc29sdmVyJztcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICdAdGFpbHdpbmRjc3Mvdml0ZSdcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBiYXNlOicuLycsXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB0YWlsd2luZGNzcygpLFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IFZ1ZSBcdTU0OEMgVnVlLXJvdXRlciBcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcdUZGMENcdTU5ODIgcmVmLCByZWFjdGl2ZSwgY3JlYXRlUm91dGVyIFx1N0I0OVxuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlciddLFxuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IEVsZW1lbnQgUGx1cyBcdTc2RjhcdTUxNzNcdTUxRkRcdTY1NzBcdUZGMENcdTU5ODJcdUZGMUFFbE1lc3NhZ2UsIEVsTWVzc2FnZUJveC4uLiAoXHU1RTI2XHU2ODM3XHU1RjBGKVxuICAgICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTVCRkNcdTUxNjVcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcbiAgICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICAgICAgcHJlZml4OiAnSWNvbicsXG4gICAgICAgICAgfSlcbiAgICAgIF0sXG4gIH0pLFxuICBDb21wb25lbnRzKHtcbiAgICByZXNvbHZlcnM6IFtcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1IEVsZW1lbnQgUGx1cyBcdTdFQzRcdTRFRjZcbiAgICAgICAgRWxlbWVudFBsdXNSZXNvbHZlcigpLFxuICAgICAgICAvLyBcdTgxRUFcdTUyQThcdTZDRThcdTUxOENcdTU2RkVcdTY4MDdcdTdFQzRcdTRFRjZcbiAgICAgICAgSWNvbnNSZXNvbHZlcih7XG4gICAgICAgICAgICAvLyBlcCBcdTY2MkYgRWxlbWVudCBQbHVzIFx1NzY4NFx1N0YyOVx1NTE5OVxuICAgICAgICAgICAgZW5hYmxlZENvbGxlY3Rpb25zOiBbJ2VwJ10sXG4gICAgICAgIH0pXG4gICAgXSxcbn0pLFxuSWNvbnMoe1xuICBhdXRvSW5zdGFsbDogdHJ1ZSxcbn0pLFxuICAgIGVsZWN0cm9uKHtcbiAgICAgIG1haW46IHtcbiAgICAgICAgLy8gU2hvcnRjdXQgb2YgYGJ1aWxkLmxpYi5lbnRyeWAuXG4gICAgICAgIGVudHJ5OiAnZWxlY3Ryb24vbWFpbi50cycsXG4gICAgICB9LFxuICAgICAgcHJlbG9hZDoge1xuICAgICAgICAvLyBTaG9ydGN1dCBvZiBgYnVpbGQucm9sbHVwT3B0aW9ucy5pbnB1dGAuXG4gICAgICAgIC8vIFByZWxvYWQgc2NyaXB0cyBtYXkgY29udGFpbiBXZWIgYXNzZXRzLCBzbyB1c2UgdGhlIGBidWlsZC5yb2xsdXBPcHRpb25zLmlucHV0YCBpbnN0ZWFkIGBidWlsZC5saWIuZW50cnlgLlxuICAgICAgICBpbnB1dDogJ2VsZWN0cm9uL3ByZWxvYWQudHMnXG4gICAgICB9LFxuICAgICAgLy8gUGxveWZpbGwgdGhlIEVsZWN0cm9uIGFuZCBOb2RlLmpzIEFQSSBmb3IgUmVuZGVyZXIgcHJvY2Vzcy5cbiAgICAgIC8vIElmIHlvdSB3YW50IHVzZSBOb2RlLmpzIGluIFJlbmRlcmVyIHByb2Nlc3MsIHRoZSBgbm9kZUludGVncmF0aW9uYCBuZWVkcyB0byBiZSBlbmFibGVkIGluIHRoZSBNYWluIHByb2Nlc3MuXG4gICAgICAvLyBTZWUgXHVEODNEXHVEQzQ5IGh0dHBzOi8vZ2l0aHViLmNvbS9lbGVjdHJvbi12aXRlL3ZpdGUtcGx1Z2luLWVsZWN0cm9uLXJlbmRlcmVyXG4gICAgICByZW5kZXJlcjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCdcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2VsZWN0cm9uLXZpdGUvdml0ZS1wbHVnaW4tZWxlY3Ryb24tcmVuZGVyZXIvaXNzdWVzLzc4I2lzc3VlY29tbWVudC0yMDUzNjAwODA4XG4gICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgIDoge30sXG4gICAgfSksXG4gIF0sXG4gIG9wdGltaXplRGVwczp7XG4gIH0sXG4gIGJ1aWxkOntcbiAgICBhc3NldHNEaXI6ICdhc3NldHMvbXVzaWNzJyxcbiAgICByb2xsdXBPcHRpb25zOntcbiAgICAgIHBsdWdpbnM6W1xuICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfVxuKVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUCxTQUFTLG9CQUFvQjtBQUVuUixPQUFPLGNBQWM7QUFDckIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sV0FBVztBQUNsQixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQUV4QixJQUFPLHNCQUFRO0FBQUEsRUFBYTtBQUFBO0FBQUEsSUFFMUIsU0FBUztBQUFBLE1BQ1AsSUFBSTtBQUFBLE1BQ0osWUFBWTtBQUFBLE1BQ1osV0FBVztBQUFBO0FBQUEsUUFFVCxTQUFTLENBQUMsT0FBTyxZQUFZO0FBQUEsUUFDN0IsV0FBVztBQUFBO0FBQUEsVUFFUCxvQkFBb0I7QUFBQTtBQUFBLFVBRXBCLGNBQWM7QUFBQSxZQUNWLFFBQVE7QUFBQSxVQUNaLENBQUM7QUFBQSxRQUNMO0FBQUEsTUFDSixDQUFDO0FBQUEsTUFDRCxXQUFXO0FBQUEsUUFDVCxXQUFXO0FBQUE7QUFBQSxVQUVQLG9CQUFvQjtBQUFBO0FBQUEsVUFFcEIsY0FBYztBQUFBO0FBQUEsWUFFVixvQkFBb0IsQ0FBQyxJQUFJO0FBQUEsVUFDN0IsQ0FBQztBQUFBLFFBQ0w7QUFBQSxNQUNKLENBQUM7QUFBQSxNQUNELE1BQU07QUFBQSxRQUNKLGFBQWE7QUFBQSxNQUNmLENBQUM7QUFBQSxNQUNHLFNBQVM7QUFBQSxRQUNQLE1BQU07QUFBQTtBQUFBLFVBRUosT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBLFNBQVM7QUFBQTtBQUFBO0FBQUEsVUFHUCxPQUFPO0FBQUEsUUFDVDtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSUEsVUFBVSxRQUFRLElBQUksYUFBYSxnQkFFL0IsU0FDQSxDQUFDO0FBQUEsTUFDUCxDQUFDO0FBQUEsSUFDSDtBQUFBLElBQ0EsY0FBYSxDQUNiO0FBQUEsSUFDQSxPQUFNO0FBQUEsTUFDSixXQUFXO0FBQUEsTUFDWCxlQUFjO0FBQUEsUUFDWixTQUFRLENBQ1I7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
