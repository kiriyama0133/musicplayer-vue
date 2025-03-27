const __VLS_props = defineProps(['title', 'artist', 'album']);
const emit = defineEmits();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['tooltip-content']} */ ;
// CSS variable injection 
// CSS variable injection end 
const __VLS_0 = {}.ElTooltip;
/** @type {[typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, typeof __VLS_components.ElTooltip, typeof __VLS_components.elTooltip, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    effect: "dark",
    placement: "right",
    showAfter: (200),
    hideAfter: (100),
}));
const __VLS_2 = __VLS_1({
    effect: "dark",
    placement: "right",
    showAfter: (200),
    hideAfter: (100),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.emit('select');
        } },
    ...{ class: "group flex h-[130px] w-full cursor-pointer items-center gap-4 rounded-lg bg-gray-800 p-4 shadow-md transition hover:bg-gray-700" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/images/defalut.jpg",
    alt: "Song Cover",
    ...{ class: "h-auto w-[100px] rounded-lg object-cover" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col justify-between" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({
    ...{ class: "text-lg font-semibold text-white group-hover:text-green-400" },
});
(__VLS_ctx.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-sm text-gray-400" },
});
(__VLS_ctx.artist);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "text-xs text-gray-500" },
});
(__VLS_ctx.album);
{
    const { content: __VLS_thisSlot } = __VLS_3.slots;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "tooltip-content rounded-2xl" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.artist);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.album);
}
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[130px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['h-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[100px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-between']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:text-green-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['tooltip-content']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-2xl']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            emit: emit,
        };
    },
    __typeEmits: {},
    props: ['title', 'artist', 'album'],
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    props: ['title', 'artist', 'album'],
});
; /* PartiallyEnd: #4569/main.vue */
