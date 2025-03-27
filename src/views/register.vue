<template>
  <div class="h-screen bg-gray-900 text-white flex flex-col">
    <!-- 顶部拖拽区域 -->
    <div class="drag w-full h-8 bg-gray-800 border-b border-gray-700 fixed top-0 left-0"></div>

    <!-- 注册内容 -->
    <div class="flex flex-col items-center justify-center flex-grow mt-8">
      <!-- 注册页标题 -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold">欢迎注册</h1>
        <p class="text-gray-400 mt-2">创建一个新账号，开始你的旅程</p>
      </div>

      <!-- 注册表单 -->
      <div class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <!-- 提示信息 -->
        <div class="space-y-4 mb-6">
          <el-alert v-show="user.alert_sucess" title="注册成功" type="success" />
          <el-alert v-show="user.alert_message" title="账号已存在" type="info" />
          <el-alert v-show="user.alert_error" title="密码不一致" type="error" />
        </div>

        <el-form>
          <!-- 用户名输入框 -->
          <el-form-item>
            <el-input
              v-model="input.username"
              placeholder="请输入用户名"
              class="bg-gray-700 text-white placeholder-gray-400 rounded-lg"
            />
          </el-form-item>

          <!-- 密码输入框 -->
          <el-form-item>
            <el-input
              v-model="input.password"
              placeholder="请输入密码"
              type="password"
              class="bg-gray-700 text-white placeholder-gray-400 rounded-lg"
            />
          </el-form-item>

          <!-- 确认密码输入框 -->
          <el-form-item>
            <el-input
              v-model="input.confirmPassword"
              placeholder="请确认密码"
              type="password"
              class="bg-gray-700 text-white placeholder-gray-400 rounded-lg"
            />
          </el-form-item>
        </el-form>

        <!-- 注册按钮和登录链接 -->
        <div class="flex items-center justify-between mt-6">
          <el-button
            type="success"
            @click="handleRegister"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
          >
            注册
          </el-button>
          <router-link
            to="/login"
            class="text-green-400 hover:underline text-sm"
          >
            已有账号，去登录
          </router-link>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="mt-8 text-center text-gray-500 text-sm">
      Designed by kiriyama
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/userlogin';
import { reactive } from 'vue';
console.log("register页面加载Ok")
const user = useCounterStore();
const input = reactive({
  username: '',
  password: '',
  confirmPassword: '',
});

const handleRegister = () => {
  console.log('注册按钮被点击');
};
</script>

<style lang="scss">
/* Spotify 风格的样式 */
.drag {
  user-select: none;
  -webkit-app-region: drag;
  background-color: #1e1e1e;
  border-bottom: 1px solid #333;
  z-index: 10; /* 确保拖拽区域在最上层 */
}

.el-input {
  background-color: #333 !important;
  border: none !important;
  color: #fff !important;
}

.el-input::placeholder {
  color: #888 !important;
}

.el-button {
  border-radius: 8px !important;
}

.el-alert {
  border-radius: 8px !important;
}

footer {
  color: #666;
}
</style>