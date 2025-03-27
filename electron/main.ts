import { app, BrowserWindow, ipcMain } from 'electron'
import { fileURLToPath } from 'node:url'
import fs from 'node:fs';
import path from 'node:path';
import { parseBlob } from 'music-metadata-browser';
import store from 'electron-store'
const Store = new store()
Store.set('is_login', false);
// 读取音乐文件的函数
export const findMp3Files = async () => {
  const folder = path.resolve(musicFolder); // 将相对路径解析为绝对路径
  const files = fs.readdirSync(folder); // 读取文件夹内容
  const result = []; // 用于存储所有歌曲的地址和元数据

  for (const file of files) {
    const fullPath = path.join(folder, file); // 拼接完整路径
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      // 如果是文件夹，递归调用（这里可以忽略，因为路径是写死的）
      console.warn(`忽略子文件夹: ${fullPath}`);
    } else if (path.extname(file).toLowerCase() === '.mp3') {
      console.log('找到的 MP3 文件:', fullPath);

      try {
        // 读取文件为 Buffer
        const fileBuffer = fs.readFileSync(fullPath);

        // 使用 parseBlob 解析元数据
        const metadata = await parseBlob(new Blob([fileBuffer]));
        console.log('元数据:', metadata);

        result.push({
          filepath: `file://${path.resolve(fullPath).replace(/\\/g, '/')}`, // 转换为 URL 格式
          metadata: {
            title: metadata.common.title || '未知',
            artist: metadata.common.artist || '未知',
            album: metadata.common.album || '未知',
            year: metadata.common.year || '未知',
            track: metadata.common.track || '未知',
            genre: metadata.common.genre || '未知',
            duration: metadata.format.duration
              ? `${metadata.format.duration.toFixed(2)} 秒`
              : '未知',
            bitrate: metadata.format.bitrate
              ? `${(metadata.format.bitrate / 1000).toFixed(2)} kbps`
              : '未知',
            cover: metadata.common.picture?.[0]?.data || null, // 检查封面是否存在
          },
        });
      } catch (error) {
        console.error(`解析文件 ${fullPath} 的元数据时出错:`, error);
      }
    }
  }

  return result;
};
// import { findMp3Files } from './preload'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
let windows_list: BrowserWindow[] = [];
const musicFolder = './resources/assets/musics'
// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.mjs
// │
process.env.APP_ROOT = path.join(__dirname, '..')

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
export const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']
export const MAIN_DIST = path.join(process.env.APP_ROOT, 'dist-electron')
export const RENDERER_DIST = path.join(process.env.APP_ROOT, 'dist')

process.env.VITE_PUBLIC = VITE_DEV_SERVER_URL ? path.join(process.env.APP_ROOT, 'public') : RENDERER_DIST

let win: BrowserWindow | null

function createWindow() {
  win = new BrowserWindow({
    width: 400,
    height: 600,
    frame: false,
    resizable: false, // 不可改变窗口大小
    autoHideMenuBar: true,
    icon: path.join(process.env.VITE_PUBLIC, '1.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation:true,
      nodeIntegration:true,
    },
  })
  ipcMain.handle('resize', async (event, args) => {
    console.log('Received args from renderer:', args);
    console.log('Event sender ID:', event.sender.id); // Example usage of event
    windows_list[0].setSize(400, args);
    return 'ok'; // 返回数据给渲染进程
  });

    // 登录事件处理
    ipcMain.handle('login', async (event, args) => {
      console.log('login success!:', args);
    
      // 确保事件和参数被正确处理
      console.log('Event sender ID:', event.sender.id);
    
      if (args === 'ok') {
        // 1. 更新登录状态
        Store.set('is_login', true);
        console.log('Updated is_login:', Store.get('is_login')); // 确保这里输出的是 true
    
        // 2. 发送登录成功事件到渲染进程
        event.sender.send('login-success', { status: true });
    
        // 3. 创建新窗口
        await createWindow_2(); // 假设 createWindow_2 是一个异步函数
    
        // 4. 关闭旧窗口
        windows_list[0].close();
      }
    });

    ipcMain.handle('Storeget', async (event, args) => {
        console.log('从electron-store里获取:', args);
        console.log("is_login::",Store.get('is_login'))
        console.log('Event sender ID:', event.sender.id);
        if (args === 'is_login') {
        return Store.get('is_login')
      }
    })

  // win.webContents.openDevTools()
  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(RENDERER_DIST, 'index.html'),
  {
    hash:'/login'
  })
  }
  windows_list.push(win);
}
// 创建第二个窗口
const createWindow_2 = () => {
  const win2 = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth:850,
    minHeight: 500,
    frame: false,
    autoHideMenuBar: true,
    icon: path.join(process.env.VITE_PUBLIC, '1.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // 指定 preload.js 的路径
      contextIsolation: true, // 必须为 true
      nodeIntegration: true, // 必须为 false
      sandbox: false, // 必须为 false
    },
  });

  // 启用开发者工具
  // win2.webContents.openDevTools();
  win2.loadFile(path.join(RENDERER_DIST, 'index.html'))

  // 窗口关闭监听
  win2.on('closed', () => {
    windows_list.splice(1);
  });

  // 将窗口对象存入 windows 集合
  windows_list.push(win2);
  console.log(windows_list); // 打印窗口对象

  // 监听渲染进程发送的事件
  ipcMain.handle('scan-music', () => {
    console.log('触发运行 扫描mp3 文件');
    const mp3 = findMp3Files(); // 
    return mp3;
  });
};

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

app.whenReady().then(createWindow)
