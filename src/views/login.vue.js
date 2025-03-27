import { useCounterStore } from '../stores/userlogin';
import { reactive } from 'vue';
import { useAlerts } from '../hooks/useAlerts';
import { useRouter } from 'vue-router';
const router = useRouter();
const { shutAlerts } = useAlerts();
const user = useCounterStore();
const input = reactive({
    username: '',
    password: '',
});
// 监视id=register的组件
const message = () => {
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
    window.electronAPI.login('ok');
    router.push('/home');
    user.is_login = true;
};
const handleLogin = () => {
    const result = message();
    console.log(result);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "h-screen bg-gray-900 text-white flex flex-col" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "drag w-full h-8 bg-gray-800 fixed top-0 left-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col items-center justify-center flex-grow mt-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "text-center mb-8" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({
    ...{ class: "text-4xl font-bold" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-gray-400 mt-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "space-y-4 mb-6" },
});
const __VLS_0 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    title: "登录成功",
    type: "success",
}));
const __VLS_2 = __VLS_1({
    title: "登录成功",
    type: "success",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.user.alert_sucess) }, null, null);
const __VLS_4 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
    title: "账号不一致",
    type: "info",
}));
const __VLS_6 = __VLS_5({
    title: "账号不一致",
    type: "info",
}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.user.alert_message) }, null, null);
const __VLS_8 = {}.ElAlert;
/** @type {[typeof __VLS_components.ElAlert, typeof __VLS_components.elAlert, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    title: "密码错误",
    type: "error",
}));
const __VLS_10 = __VLS_9({
    title: "密码错误",
    type: "error",
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.user.alert_error) }, null, null);
const __VLS_12 = {}.ElForm;
/** @type {[typeof __VLS_components.ElForm, typeof __VLS_components.elForm, typeof __VLS_components.ElForm, typeof __VLS_components.elForm, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
__VLS_15.slots.default;
const __VLS_16 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
__VLS_19.slots.default;
const __VLS_20 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.input.username),
    placeholder: "请输入用户名",
    ...{ class: "bg-gray-700 text-white placeholder-gray-400 rounded-lg" },
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.input.username),
    placeholder: "请输入用户名",
    ...{ class: "bg-gray-700 text-white placeholder-gray-400 rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_19;
const __VLS_24 = {}.ElFormItem;
/** @type {[typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, typeof __VLS_components.ElFormItem, typeof __VLS_components.elFormItem, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
__VLS_27.slots.default;
const __VLS_28 = {}.ElInput;
/** @type {[typeof __VLS_components.ElInput, typeof __VLS_components.elInput, ]} */ ;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    modelValue: (__VLS_ctx.input.password),
    placeholder: "请输入密码",
    type: "password",
    ...{ class: "bg-gray-700 text-white placeholder-gray-400 rounded-lg" },
}));
const __VLS_30 = __VLS_29({
    modelValue: (__VLS_ctx.input.password),
    placeholder: "请输入密码",
    type: "password",
    ...{ class: "bg-gray-700 text-white placeholder-gray-400 rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
var __VLS_27;
var __VLS_15;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center justify-between mt-6" },
});
const __VLS_32 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
    ...{ 'onClick': {} },
    type: "success",
    ...{ class: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md" },
}));
const __VLS_34 = __VLS_33({
    ...{ 'onClick': {} },
    type: "success",
    ...{ class: "bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg shadow-md" },
}, ...__VLS_functionalComponentArgsRest(__VLS_33));
let __VLS_36;
let __VLS_37;
let __VLS_38;
const __VLS_39 = {
    onClick: (__VLS_ctx.handleLogin)
};
__VLS_35.slots.default;
var __VLS_35;
const __VLS_40 = {}.RouterLink;
/** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    to: "/register",
    ...{ class: "text-green-400 hover:underline text-sm" },
}));
const __VLS_42 = __VLS_41({
    to: "/register",
    ...{ class: "text-green-400 hover:underline text-sm" },
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
__VLS_43.slots.default;
var __VLS_43;
__VLS_asFunctionalElement(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({
    ...{ class: "mt-8 text-center text-gray-500 text-sm" },
});
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['drag']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-md']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['p-8']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['placeholder-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-500']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-400']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            user: user,
            input: input,
            handleLogin: handleLogin,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
