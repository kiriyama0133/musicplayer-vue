<script setup lang="ts">
import { MusicStore } from '../stores/musiclist'
import { ref, watch } from 'vue'
import type { MusicData } from '../types/MusicData'
console.log("footercontorl组件加载Ok")
// 获取音乐列表
const music_store = MusicStore()
let music_meata = ref<MusicData | null>(null)
// 加载音频数据
// 加载音频数据
const loadAudio = async () => {
    if (!music_meata.value) {
        console.error("没有音乐数据")
        return
    }
    const response = await fetch(music_meata.value.filepath)
    console.log("加载音频数据", music_meata.value.filepath)
    const arrayBuffer = await response.arrayBuffer()
    audioBuffer = await audioctx.decodeAudioData(arrayBuffer)
    duration_isplaying.value = audioBuffer.duration
    console.log("音频加载完成")
}


watch(() => music_store.mp3_data, (newData) => {
    if (newData && newData.length > 0) {
        music_meata.value = newData[music_store.music_index]
        loadAudio()
    }
}, { immediate: true })

watch(() => music_store.music_index, (newIndex) => {
    if (newIndex >= 0 && newIndex < music_store.mp3_data.length+1) {
        // 直接使用新的索引获取对应的音乐数据
        music_meata.value = music_store.mp3_data[newIndex]
        // 如果正在播放，先停止当前播放
        if (isPlaying.value) {
            source?.stop()
            source?.disconnect()
            isPlaying.value = false
        }
        // 重置播放相关的状态
        currentTime.value = 0
        pausedAt = 0
        // 加载新的音频
        loadAudio()
    } else {
        console.log("超出索引，重置为 0")
        music_store.music_index = 0
    }
})

const nextmusic = () => {
    console.log("下一首")
    music_store.music_index += 1
    console.log("当前序列:",music_store.music_index)
}
// 创建和管理音频上下文
const audiocontext = window.AudioContext
const audioctx = new audiocontext()

// 创建音量控制节点
const gain = audioctx.createGain()

// 音量值绑定
const gainvalue_before = ref(30)
const gainvalue = ref(gainvalue_before.value / 100)

// 定义全局变量
let source: AudioBufferSourceNode | null = null 
let isPlaying = ref(false)
let duration_isplaying = ref(0)
let audioBuffer: AudioBuffer | null = null
let currentTime = ref(0) // 添加当前播放时间的引用
let pausedAt = 0 // 记录暂停时的播放位置
// 添加一个变量来记录开始播放的时间
let startTime = 0
// 监听音量值变化
watch(gainvalue, (newValue) => {
    gain.gain.value = newValue // 实时更新音量
})
watch(gainvalue_before, (newValue) => {
    gainvalue.value = newValue / 100
})
// 格式化时间
const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

//处理进度条拖动的函数
const handleTimeChange = (newTime: number) => {
    currentTime.value = newTime
    if (isPlaying.value) {
        // 如果正在播放，先停止当前播放
        source?.stop()
        source?.disconnect()
        
        // 创建新的音源节点从新位置开始播放
        source = audioctx.createBufferSource()
        source.buffer = audioBuffer
        source.connect(gain)
        source.start(0, newTime)
        
        // 更新开始时间和暂停位置
        startTime = audioctx.currentTime
        pausedAt = newTime
    } else {
        // 如果暂停状态，只更新暂停位置
        pausedAt = newTime
    }
}

// 修改模板中的 slider 部分
const playfunction = () => {
    if (!audioBuffer) {
        console.error("音频未加载")
        return
    }

    if (isPlaying.value) {
        console.log("音频已经在播放中")
        return
    }

    // 创建新的音源节点
    source = audioctx.createBufferSource()
    source.buffer = audioBuffer
    duration_isplaying.value = audioBuffer.duration
    source.connect(gain)
    gain.connect(audioctx.destination)
    gain.gain.value = gainvalue.value

    // 记录开始播放的时间
    startTime = audioctx.currentTime

    // 从暂停位置开始播放
    if (pausedAt > 0) {
        source.start(0, pausedAt)
        console.log(`从暂停位置 ${pausedAt} 秒继续播放`)
    } else {
        source.start(0)
        console.log("从头开始播放")
    }

    isPlaying.value = true
    
       // 修改更新时间的计算方式
       const updateTime = () => {
        if (isPlaying.value && audioBuffer) {  // 添加 audioBuffer 检查
            // 计算实际播放时间 = 暂停位置 + (当前时间 - 开始播放时间)
            currentTime.value = pausedAt + (audioctx.currentTime - startTime)
            requestAnimationFrame(updateTime)
            
            // 添加空值检查
            if(currentTime.value >= audioBuffer?.duration){
                console.log("音频播放结束")
                currentTime.value = 0
                pausedAt = 0
                isPlaying.value = false
                source = null
            }
        }
    }
    updateTime()
}

// 修改 pauseAudio 函数
const pauseAudio = () => {
    if (!source || !isPlaying.value) {
        console.log("音频未在播放中")
        return
    }

    // 使用计算后的实际播放时间
    pausedAt = currentTime.value
    console.log("暂停播放")
    console.log("暂停位置：", pausedAt)
    source.stop()
    source.disconnect()
    source = null
    isPlaying.value = false
}

// 加载音乐数据
// const loadMusicData = async () => {
//     await music_store.fetchMusicData() // 调用方法加载数据
//     console.log(music_store.mp3_data)
//     await loadAudio() // 加载音频文件
// }

// // 初始化加载音乐
// loadMusicData()
</script>

<template>
    <el-footer class="footer backdrop-blur-[10px] bg-white/30 shadow-lg">
        <el-row>
            <el-col :span="4">
                <div class="song-info-container flex items-center p-2 rounded-lg" style="overflow: hidden;">
                    <!-- 专辑封面 -->
                    <img
                        src="../assets/images/defalut.jpg"
                        alt="Album Cover"
                        class="w-10 h-10 rounded-md"
                    />

                    <!-- 歌曲信息 -->
                    <div class="flex flex-col ml-4 flex-grow">
                        <!-- 滚动的歌曲标题 -->
                        <div class="scrolling-text-container">
                            <div class="scrolling-text">
                                <span class="text-white font-semibold text-sm">
                                    {{music_meata?.metadata?.title || '未知歌曲'}}
                                </span>
                            </div>
                        </div>
                        <!-- 滚动的歌手信息 -->
                        <div class="scrolling-text-container">
                            <div class="scrolling-text">
                                <span class="text-gray-400 text-xs">
                                    {{ music_meata?.metadata?.artist || "未知歌手" }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>

            <el-col :span="16">
                <div class="grid grid-cols-4">
                    <div class="play col-span-1 flex justify-around ml-4 mr-4">
                        <el-button circle>
                            <i-ep-arrow-left />
                        </el-button>
                        <el-button v-if="!isPlaying" circle @click="playfunction">
                            <i-ep-video-play />
                        </el-button>
                        <el-button v-else @click="pauseAudio" circle>
                            <i-ep-video-pause />
                        </el-button>
                        <el-button circle>
                            <i-ep-arrow-right @click="nextmusic" />
                        </el-button>
                    </div>
                    
                    <div class="col-span-3 grid grid-cols-4">
                        <span class="text-white col-span-1  font-mono font-extrabold flex justify-center items-center m-0">音量：</span>
                         
                          <!-- <i-ep-headset class="col-span-1 flex justify-center items-center m-0"/> -->
                        <el-slider class="col-span-1"
                            v-model="gainvalue_before"
                            :min="0"
                            :max="100"
                            :step="1"
                            >
                        </el-slider>
                    </div>
                </div>
                <div class=" items-center grid grid-cols-10">

                    <div>
                        <span class="text-white">
                            {{ formatTime(currentTime) }}
                        </span>
                    </div>
                        <el-slider class="col-span-5 flex justify-center items-center"
                            v-model="currentTime" v-if="!isPlaying"
                            :min="0"
                            :max="duration_isplaying"
                            :step="0.1"
                            @input="handleTimeChange"
                            >
                        </el-slider>

                        <el-slider class="col-span-5 flex justify-center items-center"
                            v-model="currentTime" v-else="isPlaying"
                            :min="0"
                            :max="audioBuffer?.duration ?? 0"
                            :step="0.1"
                            @input="handleTimeChange"
                            >
                        </el-slider>
                        <div class="col-span-1 ml-4" v-if="!isPlaying">
                            <span class=" text-white">
                            {{ formatTime(duration_isplaying) }}
                            </span>
                        </div>

                        <div class="col-span-1 ml-4" v-else>
                            <span class=" text-white">
                            {{ formatTime(audioBuffer?.duration ?? 0)}}
                            </span>
                        </div>
                </div>
            </el-col>

            <el-col :span="4">
            </el-col>
        </el-row>
    </el-footer>
</template>