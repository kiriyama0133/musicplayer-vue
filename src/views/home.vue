<script setup lang="ts">
import 'primeicons/primeicons.css'
import Musicdetail from '../components/musicdetail.vue'
import Playercontrol from '../components/playercontrol.vue'
import { onMounted, ref} from 'vue'
import { storeToRefs } from 'pinia'
import { MusicStore } from '../stores/musiclist.ts'
import Musicard from '../components/musicard.vue'
console.log("home页面加入🆗")
// 状态管理
const music_store = MusicStore()
const isLoading = ref(true)

// 使用 storeToRefs 来保持响应性
const { mp3_data } = storeToRefs(music_store)

// 处理音乐选择
const handleSelect = (index: number) => {
  console.log('点击了音乐:', index)
  music_store.music_index = index
}

// 初始化函数
const initMusicData = async () => {
  try {
    await music_store.fetchMusicData()
  } catch (error) {
    console.error('加载音乐数据失败:', error)
  } finally {
    isLoading.value = false
  }
}

// 组件挂载时加载数据
onMounted(initMusicData)
</script>
<template>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <body class="h-screen">

        <el-header class="drag flex items-center justify-between" style="width: 2000px;">
            <div class="drag-div font-extrabold font-mono text-white">
            Designed by kiriyama
            </div>
        </el-header>

    <el-row>

        <!-- <img class='back' src="../assets/images/bg.jpg" style="z-index: -1;"> -->
    <el-col :span="6" class="h-screen w-full overflow-y-auto custom-scrollbar">
    
      <!-- 加载状态显示 -->
    <div v-if="isLoading" class="text-center p-4 text-gray-400">
      加载中...
    </div>
    
    <!-- 音乐列表 -->
    <template v-else>
      <div v-if="mp3_data && mp3_data.length > 0" class="mt-10">
        <Musicard 
          v-for="(music, index) in mp3_data"
          :key="index"
          :title="music.metadata.title"
          :artist="music.metadata.artist"
          :album="music.metadata.album"
          :is-active="index === music_store.music_index"
          @select="() => handleSelect(index)"
        />
        <!-- 修改事件处理器 -->
      </div>
      <div v-else class="text-center p-4 text-gray-400">
        暂无音乐
      </div>
    </template>
      </el-col>

      <el-col :span="12" class="h-screen w-full overflow-y-auto custom-scrollbar">
        <Playercontrol></Playercontrol>
      </el-col>

      <el-col :span="6" class="h-screen overflow-auto custom-scrollbar">
        <Musicdetail></Musicdetail>
        <div style="height: 150px;"></div>
      </el-col>

    </el-row>
</body>
  <Footercontrol></Footercontrol>
</template>
<style lang="scss">
/* 滚动容器样式 */
.scrolling-text-container {
  position: relative;
  overflow: hidden; /* 隐藏超出容器的部分 */
  width: 100%; /* 确保容器宽度 */
  height: 1.5rem; /* 设置容器高度，适配文字大小 */
  display: flex; /* 使用 Flexbox 布局 */
  align-items: center; /* 垂直居中文字 */
}

/* 滚动文字样式 */
.scrolling-text {
  display: inline-block;
  white-space: nowrap; /* 防止文字换行 */
  animation: scroll 10s linear infinite; /* 应用滚动动画 */
  line-height: 1.5rem; /* 确保文字与容器高度一致 */
}

@keyframes scroll {
  0% {
    transform: translateX(100%); /* 从容器右侧开始 */
  }
  100% {
    transform: translateX(-100%); /* 滚动到容器左侧 */
  }
}

/* 滚动动画 */
@keyframes scroll {
  0% {
    transform: translateX(100%); /* 从容器右侧开始 */
  }
  100% {
    transform: translateX(-100%); /* 滚动到容器左侧 */
  }
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
.drag {
  user-select: none;
  -webkit-app-region: drag;
  margin: 0;
  width: 800px;
  height: 30px;
}
.el-hearder {
    margin: 0;
}
.drag-div {
  margin: 0;
  color: #E5E5E5;
}
.footer {
  margin: 0;
  position: absolute;
  bottom: 0;
  width: 100%;
}

body {
    background-color: #10172a;
    overflow: hidden; /* 禁止滚动 */
}
.custom-scrollbar::-webkit-scrollbar {
  width: 1px; /* 滚动条宽度 */
}
</style>