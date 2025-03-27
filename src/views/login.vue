<template>
  <div class="h-screen bg-gray-900 text-white flex flex-col">
    <!-- 顶部拖拽区域 -->
    
    <div class="drag w-full h-8 bg-gray-800 fixed top-0 left-0">
    </div>

    <!-- 登录内容 -->
    <div class="flex flex-col items-center justify-center flex-grow mt-8">
      <!-- 登录页标题 -->
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold">泥猴啊！</h1>
        <p class="text-gray-400 mt-2">欢迎回来，请登录继续</p>
      </div>

      <!-- 登录表单 -->
      <div class="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <!-- 提示信息 -->
        <div class="space-y-4 mb-6">
          <el-alert v-show="user.alert_sucess" title="登录成功" type="success" />
          <el-alert v-show="user.alert_message" title="账号不一致" type="info" />
          <el-alert v-show="user.alert_error" title="密码错误" type="error" />
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
        </el-form>

        <!-- 登录按钮和注册链接 -->
        <div class="flex items-center justify-between mt-6">
          <el-button
            type="success"
            @click="handleLogin"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md"
          >
            登录
          </el-button>
          <router-link
            to="/register"
            class="text-green-400 hover:underline text-sm"
          >
            注册账号
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
import { reactive} from 'vue';
import { useAlerts } from '../hooks/useAlerts';
import { useRouter } from 'vue-router';
const router = useRouter();
const { shutAlerts } = useAlerts();
const user = useCounterStore();
const input = reactive({
  username: '',
  password: '',
});

async function checkLoginAndRedirect() {
  const isLogin = await window.electronAPI.Storeget('is_login');
  if (isLogin) {
    router.push('/home'); // 跳转到 /home
  } else {
    console.log('User is not logged in.');
  }
}
// 调用函数
checkLoginAndRedirect();
const message = () => {
  if (!user.userInfo || !user.userInfo.username) {
    console.error('userInfo 未定义或 username 为空');
    user.alert_message = true;
    shutAlerts();
    return '用户名错误';
  }

  if (input.username !== user.userInfo.username) {
    console.log(input.username);
    user.alert_message = true;
    shutAlerts();
    return '用户名错误';
  }

  if (input.password !== user.userInfo.password) {
    user.alert_error = true;
    shutAlerts();
    return '密码错误';
  }

  user.alert_sucess = true;
  shutAlerts();
  console.log("electronAPI:",window.electronAPI)
  window.electronAPI.login('ok');
  
  user.is_login = true
};

const handleLogin = () => {
  const result = message();
  console.log(result);
};
</script>

<style lang="scss">
/* Spotify 风格的样式 */
.drag {
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