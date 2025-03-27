/// <reference types="vue" />
import { DefineComponent } from 'vue'
declare global {
  interface Window {
    electronAPI: {
      resize: (width: number) => Promise<string>;
      // 如果有其他方法，也可以在这里添加
      [key: string]: any; // 可选：允许动态添加其他属性
    };
  }
}

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
