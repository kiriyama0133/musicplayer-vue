<script setup lang="ts">
import { ref, watch } from 'vue'
import { MusicStore } from '../stores/musiclist'
import type { MusicData } from '../types/MusicData'
console.log("musicdetail组件加载Ok")
// 获取音乐列表
const music_store = MusicStore()
let music_meata = ref<MusicData | null>(null)
watch(() => music_store.mp3_data, (newData) => {
   if (newData && newData.length > 0) {
      music_meata.value = newData[music_store.music_index]
   }
}, { immediate: true })
watch(() => music_store.music_index, (newIndex) => {
    if (newIndex >= 0 && newIndex < music_store.mp3_data.length+1) {
        // 直接使用新的索引获取对应的音乐数据
        music_meata.value = music_store.mp3_data[newIndex]
    } else {
        console.log("超出索引，重置为 0")
        music_store.music_index = 0
    }
})
</script>
<template>
<div class="p-5 bg-purple-950/10 h-full rounded-lg">
    <div class=" grid-flow-row-dense ml-0 grid  grid-cols-6 mt-2 gap-4">
        <!-- 图片 -->
        <div class=" bg-amber-50 rounded-lg col-span-6">
            <img
                src="../assets/images/defalut.jpg"
                alt="Song Cover"
                class=" rounded-lg "
                />
        </div>
        <!-- 歌曲信息等 -->
         <div class="col-span-6 bg-neutral-400/90 rounded-lg backdrop-blur-[10px] p-2 font-mono">
            <span>名称：{{music_meata?.metadata?.title || "未知"}}</span>
         </div>
         <div class="col-span-4 bg-neutral-400/90 rounded-lg p-2 font-mono">
            <span>码率：1200Kb/s</span>
         </div>

         <div class=" col-span-2 bg-neutral-400/90 rounded-lg p-1">
            <span>格式： mp3</span>
         </div>

         <div class=" col-span-3 bg-neutral-400/90 rounded-lg p-1">
            <span>时长：{{music_meata?.metadata?.duration || "未知"}}</span>
         </div>
         <div class=" col-span-3 bg-neutral-400/90 rounded-lg p-1">
            <span>作者：{{ music_meata?.metadata?.artist || "未知" }}</span>
         </div>
         <div class=" col-span-6 bg-neutral-400/90 rounded-lg p-1 flex justify-center">
            <span>Album：</span>
            <span class=" font-mono">{{ music_meata?.metadata?.album || "未知"}}</span>
         </div>
         
         <div height="200px">

         </div>
    </div>

</div>
</template>
<style></style>