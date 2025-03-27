import { defineStore } from 'pinia';
import { ref } from 'vue';

// 定义音乐数据的类型
interface MusicData {
  filepath: string;
  metadata: {
    title: string;
    artist: string;
    album: string;
    year: string;
    track: string;
    genre: string;
    duration: string;
    bitrate: string;
    cover: Uint8Array | undefined; // 假设 cover 是 Uint8Array 类型
  };
}
let music_index = ref(0)
let music_max = ref(0)
export const MusicStore = defineStore('music', () => {
  // 定义响应式变量，用于存储 MP3 数据
  const mp3_data = ref<MusicData[]>([]);

  // 异步加载 MP3 数据
  const fetchMusicData = async () => {
    try {
      const data = await window.electronAPI.scanMusic(); // 调用 Electron API
      mp3_data.value = data; // 将解析后的数据存储到响应式变量中
      console.log('MP3 数据:', mp3_data.value); // 打印 MP3 数据
    } catch (error) {
      console.error('加载 MP3 数据时出错:', error);
    }
  };

  // 加载音乐数据
const loadMusicData = async () => {
  await fetchMusicData() // 调用方法加载数据
  console.log(mp3_data.value)
  music_max.value = mp3_data.value.length
}
// 初始化加载音乐
loadMusicData()

  // 返回响应式变量和方法
  return {
    mp3_data,
    fetchMusicData,
    music_index,
  };
});