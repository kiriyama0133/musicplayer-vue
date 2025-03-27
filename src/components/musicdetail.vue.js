import { ref, watch } from 'vue';
import { MusicStore } from '../stores/musiclist';
// 获取音乐列表
const music_store = MusicStore();
let music_meata = ref(null);
watch(() => music_store.mp3_data, (newData) => {
    if (newData && newData.length > 0) {
        music_meata.value = newData[music_store.music_index];
    }
}, { immediate: true });
watch(() => music_store.music_index, (newIndex) => {
    if (newIndex >= 0 && newIndex < music_store.mp3_data.length + 1) {
        // 直接使用新的索引获取对应的音乐数据
        music_meata.value = music_store.mp3_data[newIndex];
    }
    else {
        console.log("超出索引，重置为 0");
        music_store.music_index = 0;
    }
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "p-5 bg-purple-950/10 h-full rounded-lg" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " grid-flow-row-dense ml-0 grid  grid-cols-6 mt-2 gap-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " bg-amber-50 rounded-lg col-span-6" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/images/defalut.jpg",
    alt: "Song Cover",
    ...{ class: " rounded-lg " },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-span-6 bg-neutral-400/90 rounded-lg backdrop-blur-[10px] p-2 font-mono" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.music_meata?.metadata?.title || "未知");
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-span-4 bg-neutral-400/90 rounded-lg p-2 font-mono" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " col-span-2 bg-neutral-400/90 rounded-lg p-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " col-span-3 bg-neutral-400/90 rounded-lg p-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.music_meata?.metadata?.duration || "未知");
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " col-span-3 bg-neutral-400/90 rounded-lg p-1" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.music_meata?.metadata?.artist || "未知");
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " col-span-6 bg-neutral-400/90 rounded-lg p-1 flex justify-center" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: " font-mono" },
});
(__VLS_ctx.music_meata?.metadata?.album || "未知");
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    height: "200px",
});
/** @type {__VLS_StyleScopedClasses['p-5']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-purple-950/10']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-flow-row-dense']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-0']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-amber-50']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-6']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-400/90']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-400/90']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-400/90']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-400/90']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-3']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-400/90']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-neutral-400/90']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            music_meata: music_meata,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
