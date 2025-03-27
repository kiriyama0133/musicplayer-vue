// electron/preload.ts
import { ipcRenderer, contextBridge } from 'electron'
console.log('preload加载完成！！')
console.log(process.versions.node)
console.log(process.versions.node)
// export const findMp3Files = () => {
//   console.log("666");
// };
// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('ipcRenderer', {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args
    return ipcRenderer.on(channel, (event, ...args) => listener(event, ...args))
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args
    return ipcRenderer.off(channel, ...omit)
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args
    return ipcRenderer.send(channel, ...omit)
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args
    return ipcRenderer.invoke(channel, ...omit)
  },

  // You can expose other APTs you need here.
  // ...
})

// 使用 contextBridge 将安全的 API 暴露给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 定义一个方法，通过 ipcRenderer.invoke 与主进程通信
  resize: (args:any) => ipcRenderer.invoke('resize', args),
  //登录成功，创建窗口
  login: (args:any) => ipcRenderer.invoke('login', args),
  Storeget:(args:any)=> ipcRenderer.invoke('Storeget',args),
  //扫描音乐：
  scanMusic: () => ipcRenderer.invoke('scan-music'),
  // 监听登录成功事件
  onLoginSuccess: (callback:any) => ipcRenderer.on('login-success', (_, data) => callback(data)),
  // 暴露 Node.js 的版本信息
  NODE_VERSION: process.versions.node,
});


// import fs from 'node:fs';
// import path from 'node:path';
// import { parseBlob } from 'music-metadata-browser';

// // 定义要扫描的文件夹路径
// const musicFolder = './src/assets/musics';

// 检测文件夹下的所有 .mp3 文件
// export const findMp3Files = async (folder = musicFolder) => {
//   const files = fs.readdirSync(folder);
//   const result = []; // 用于存储所有歌曲的地址和元数据

//   for (const file of files) {
//     const fullPath = path.join(folder, file);
//     const stats = fs.statSync(fullPath);

//     if (stats.isDirectory()) {
//       // 如果是文件夹，递归调用
//       const subFolderResults:any = await findMp3Files(fullPath);
//       result.push(...subFolderResults);
//     } else if (path.extname(file).toLowerCase() === '.mp3') {
//       console.log('找到的 MP3 文件:', fullPath);

//       try {
//         // 读取文件为 Buffer
//         const fileBuffer = fs.readFileSync(fullPath);

//         // 使用 parseBlob 解析元数据
//         const metadata = await parseBlob(new Blob([fileBuffer]));
//         console.log('元数据:', metadata);

//         result.push({
//           filepath: encodeURIComponent(fullPath),
//           metadata: {
//             title: metadata.common.title || '未知',
//             artist: metadata.common.artist || '未知',
//             album: metadata.common.album || '未知',
//             year: metadata.common.year || '未知',
//             track: metadata.common.track || '未知',
//             genre: metadata.common.genre || '未知',
//             duration: metadata.format.duration
//               ? `${metadata.format.duration.toFixed(2)} 秒`
//               : '未知',
//             bitrate: metadata.format.bitrate
//               ? `${(metadata.format.bitrate / 1000).toFixed(2)} kbps`
//               : '未知',
//             cover: metadata.common.picture?.[0]?.data || null, // 检查封面是否存在
//           },
//         });
//       } catch (error) {
//         console.error(`解析文件 ${fullPath} 的元数据时出错:`, error);
//       }
//     }
//   }

//   return result;
// };