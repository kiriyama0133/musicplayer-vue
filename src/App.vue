<script setup lang="ts">
//跳转到/home页面
import { ref } from 'vue';
import { useRouter } from 'vue-router';
// 控制骨架屏显示状态
const isLoading = ref(true); // 初始为 true，显示骨架屏
const router = useRouter();
// user.is_login = window.electronAPI.Storeget('is_login')
async function checkLoginAndRedirect() {
  const isLogin = await window.electronAPI.Storeget('is_login');
  if (isLogin) {
    router.push('/home'); // 跳转到 /home
    isLoading.value = false; // 跳转完成后隐藏骨架屏
  } else {
    console.log('User is not logged in.');
    router.push('/login')
    isLoading.value = false; // 跳转完成后隐藏骨架屏
  }
}
// 调用函数
checkLoginAndRedirect();
</script>

<template>
  <div v-if="isLoading">
    <el-skeleton :rows="6" animated />
    <el-skeleton :rows="6" animated />
  </div>
  <router-view></router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
