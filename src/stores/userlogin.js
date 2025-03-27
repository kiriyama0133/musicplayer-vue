// src/stores/userlogin.ts
import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
export const useCounterStore = defineStore('user', () => {
    const userInfo = reactive({
        username: 'root',
        password: '123456',
    });
    const alert_sucess = ref(false);
    const alert_error = ref(false);
    const alert_message = ref(false);
    const alert_info = ref(false);
    const is_login = ref(false);
    return {
        userInfo,
        alert_sucess,
        alert_error,
        alert_message,
        alert_info,
        is_login,
    };
});
