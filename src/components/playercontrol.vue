<script setup lang="ts">
console.log("playercontorl组件加载Ok")
</script>
<style> </style>
<template>
            <div class="flex justify-around bg-[#10172a] p-4 rounded-lg">
            <!-- 全部按钮 -->
            <button
                class="px-4 py-2 rounded-full text-black bg-white font-semibold transition delay-50 duration-300 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
                全部
            </button>

            <!-- 音乐按钮 -->
            <button
                class="px-4 py-2 rounded-full text-white bg-transparent font-semibold transition delay-50 duration-300 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
                音乐
            </button>

            <!-- 播客按钮 -->
            <button
                class="px-4 py-2 rounded-full text-white bg-transparent font-semibold transition delay-50 duration-300 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
                播客
            </button>
            </div>

            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                <h3 style="text-align: center;">{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>

            

</template>