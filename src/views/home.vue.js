import 'primeicons/primeicons.css';
import Musicdetail from '../components/musicdetail.vue';
import Playercontrol from '../components/playercontrol.vue';
import { onMounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { MusicStore } from '../stores/musiclist';
import Musicard from '../components/musicard.vue';
// 状态管理
const music_store = MusicStore();
const isLoading = ref(true);
// 使用 storeToRefs 来保持响应性
const { mp3_data } = storeToRefs(music_store);
// 处理音乐选择
const handleSelect = (index) => {
    console.log('点击了音乐:', index);
    music_store.music_index = index;
};
// 初始化函数
const initMusicData = async () => {
    try {
        await music_store.fetchMusicData();
    }
    catch (error) {
        console.error('加载音乐数据失败:', error);
    }
    finally {
        isLoading.value = false;
    }
};
// 组件挂载时加载数据
onMounted(initMusicData);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.meta)({
    charset: "UTF-8",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.meta)({
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.body, __VLS_intrinsicElements.body)({
    ...{ class: "h-screen" },
});
const __VLS_0 = {}.ElHeader;
/** @type {[typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, typeof __VLS_components.ElHeader, typeof __VLS_components.elHeader, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "drag flex items-center justify-between" },
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "drag flex items-center justify-between" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "drag-div font-extrabold font-mono text-white" },
});
var __VLS_3;
const __VLS_4 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
__VLS_7.slots.default;
const __VLS_8 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
    span: (6),
    ...{ class: "h-screen w-full overflow-y-auto custom-scrollbar" },
}));
const __VLS_10 = __VLS_9({
    span: (6),
    ...{ class: "h-screen w-full overflow-y-auto custom-scrollbar" },
}, ...__VLS_functionalComponentArgsRest(__VLS_9));
__VLS_11.slots.default;
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-center p-4 text-gray-400" },
    });
}
else {
    if (__VLS_ctx.mp3_data && __VLS_ctx.mp3_data.length > 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "mt-10" },
        });
        for (const [music, index] of __VLS_getVForSourceType((__VLS_ctx.mp3_data))) {
            /** @type {[typeof Musicard, ]} */ ;
            // @ts-ignore
            const __VLS_12 = __VLS_asFunctionalComponent(Musicard, new Musicard({
                ...{ 'onSelect': {} },
                key: (index),
                title: (music.metadata.title),
                artist: (music.metadata.artist),
                album: (music.metadata.album),
                isActive: (index === __VLS_ctx.music_store.music_index),
            }));
            const __VLS_13 = __VLS_12({
                ...{ 'onSelect': {} },
                key: (index),
                title: (music.metadata.title),
                artist: (music.metadata.artist),
                album: (music.metadata.album),
                isActive: (index === __VLS_ctx.music_store.music_index),
            }, ...__VLS_functionalComponentArgsRest(__VLS_12));
            let __VLS_15;
            let __VLS_16;
            let __VLS_17;
            const __VLS_18 = {
                onSelect: (() => __VLS_ctx.handleSelect(index))
            };
            var __VLS_14;
        }
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "text-center p-4 text-gray-400" },
        });
    }
}
var __VLS_11;
const __VLS_19 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    span: (12),
    ...{ class: "h-screen w-full overflow-y-auto custom-scrollbar" },
}));
const __VLS_21 = __VLS_20({
    span: (12),
    ...{ class: "h-screen w-full overflow-y-auto custom-scrollbar" },
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
__VLS_22.slots.default;
/** @type {[typeof Playercontrol, typeof Playercontrol, ]} */ ;
// @ts-ignore
const __VLS_23 = __VLS_asFunctionalComponent(Playercontrol, new Playercontrol({}));
const __VLS_24 = __VLS_23({}, ...__VLS_functionalComponentArgsRest(__VLS_23));
var __VLS_22;
const __VLS_26 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
    span: (6),
    ...{ class: "h-screen overflow-auto custom-scrollbar" },
}));
const __VLS_28 = __VLS_27({
    span: (6),
    ...{ class: "h-screen overflow-auto custom-scrollbar" },
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
__VLS_29.slots.default;
/** @type {[typeof Musicdetail, typeof Musicdetail, ]} */ ;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(Musicdetail, new Musicdetail({}));
const __VLS_31 = __VLS_30({}, ...__VLS_functionalComponentArgsRest(__VLS_30));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ style: {} },
});
var __VLS_29;
var __VLS_7;
const __VLS_33 = {}.Footercontrol;
/** @type {[typeof __VLS_components.Footercontrol, typeof __VLS_components.Footercontrol, ]} */ ;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['drag']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['drag-div']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-10']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-y-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['custom-scrollbar']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Musicdetail: Musicdetail,
            Playercontrol: Playercontrol,
            Musicard: Musicard,
            music_store: music_store,
            isLoading: isLoading,
            mp3_data: mp3_data,
            handleSelect: handleSelect,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
