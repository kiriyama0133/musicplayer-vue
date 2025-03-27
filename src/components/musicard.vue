<script setup lang="ts">
console.log("musiccard组件加载Ok")
// import { ref, watch } from 'vue'
// import { MusicStore } from '../stores/musiclist'
// import { MusicData } from '../types/MusicData'
// const music_store = MusicStore()
// let music_meata = ref<MusicData | null>(null)
// watch(() => music_store.mp3_data, (newData) => {
//    if (newData && newData.length > 0) {
//       music_meata.value = newData[music_store.music_index]
//    }
// }, { immediate: true })
// watch(() => music_store.music_index, (newIndex) => {
//     if (newIndex >= 0 && newIndex < music_store.mp3_data.length+1) {
//         // 直接使用新的索引获取对应的音乐数据
//         music_meata.value = music_store.mp3_data[newIndex]
//     } else {
//         console.log("超出索引，重置为 0")
//         music_store.music_index = 0
//     }
// })
// 定义 Props
defineProps(['title','artist','album']
)
// 明确定义 emit 函数
const emit = defineEmits<{
  (e: 'select'): void
}>()
</script>
<template>

  <el-tooltip
    effect="dark"
    placement="right"
    :show-after="200"
    :hide-after="100"
  >
    <!-- 触发提示的元素 -->
    <div
      class="group flex h-[130px] w-full cursor-pointer items-center gap-4 rounded-lg bg-gray-800 p-4 shadow-md transition hover:bg-gray-700"
      @click="emit('select')"
      style="overflow: hidden;"
    >
      <!-- 歌曲图片 -->
      <img
        src="../assets/images/defalut.jpg"
        alt="Song Cover"
        class="h-auto w-[100px] rounded-lg object-cover"
      />

      <!-- 歌曲信息 -->
      <div class="flex flex-col justify-between">
        <h3 class="text-lg font-semibold text-white group-hover:text-green-400">
          {{ title }}
        </h3>
        <p class="text-sm text-gray-400">{{ artist }}</p>
        <p class="text-xs text-gray-500">{{ album }}</p>
      </div>
    </div>

    <!-- 提示内容 -->
    <template #content>
      <div class="tooltip-content rounded-2xl">
        <p><strong>歌曲名称:</strong> {{ title }}</p>
        <p><strong>歌手:</strong> {{ artist }}</p>
        <p><strong>专辑:</strong> {{ album }}</p>
      </div>
    </template>
  </el-tooltip>


</template>
<style scoped>
.tooltip-content {
  text-align: left;
  padding: 5px;
}
.tooltip-content p {
  margin: 5px 0;
  white-space: nowrap;
}
</style>