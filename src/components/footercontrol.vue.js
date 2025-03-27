import { MusicStore } from '../stores/musiclist';
import { ref, watch } from 'vue';
// 获取音乐列表
const music_store = MusicStore();
let music_meata = ref(null);
// 加载音频数据
// 加载音频数据
const loadAudio = async () => {
    if (!music_meata.value) {
        console.error("没有音乐数据");
        return;
    }
    const response = await fetch(music_meata.value.filepath);
    const arrayBuffer = await response.arrayBuffer();
    audioBuffer = await audioctx.decodeAudioData(arrayBuffer);
    console.log("音频加载完成");
};
watch(() => music_store.mp3_data, (newData) => {
    if (newData && newData.length > 0) {
        music_meata.value = newData[music_store.music_index];
        loadAudio();
    }
}, { immediate: true });
watch(() => music_store.music_index, (newIndex) => {
    if (newIndex >= 0 && newIndex < music_store.mp3_data.length + 1) {
        // 直接使用新的索引获取对应的音乐数据
        music_meata.value = music_store.mp3_data[newIndex];
        // 如果正在播放，先停止当前播放
        if (isPlaying.value) {
            source?.stop();
            source?.disconnect();
            isPlaying.value = false;
        }
        // 重置播放相关的状态
        currentTime.value = 0;
        pausedAt = 0;
        // 加载新的音频
        loadAudio();
    }
    else {
        console.log("超出索引，重置为 0");
        music_store.music_index = 0;
    }
});
const nextmusic = () => {
    console.log("下一首");
    music_store.music_index += 1;
    console.log("当前序列:", music_store.music_index);
};
// 创建和管理音频上下文
const audiocontext = window.AudioContext;
const audioctx = new audiocontext();
// 创建音量控制节点
const gain = audioctx.createGain();
// 音量值绑定
const gainvalue_before = ref(30);
const gainvalue = ref(gainvalue_before.value / 100);
// 定义全局变量
let source = null;
let isPlaying = ref(false);
let duration_isplaying = 0;
let audioBuffer = null;
let currentTime = ref(0); // 添加当前播放时间的引用
let pausedAt = 0; // 记录暂停时的播放位置
// 添加一个变量来记录开始播放的时间
let startTime = 0;
// 监听音量值变化
watch(gainvalue, (newValue) => {
    gain.gain.value = newValue; // 实时更新音量
});
watch(gainvalue_before, (newValue) => {
    gainvalue.value = newValue / 100;
});
// 格式化时间
const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};
//处理进度条拖动的函数
const handleTimeChange = (newTime) => {
    currentTime.value = newTime;
    if (isPlaying.value) {
        // 如果正在播放，先停止当前播放
        source?.stop();
        source?.disconnect();
        // 创建新的音源节点从新位置开始播放
        source = audioctx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(gain);
        source.start(0, newTime);
        // 更新开始时间和暂停位置
        startTime = audioctx.currentTime;
        pausedAt = newTime;
    }
    else {
        // 如果暂停状态，只更新暂停位置
        pausedAt = newTime;
    }
};
// 修改模板中的 slider 部分
const playfunction = () => {
    if (!audioBuffer) {
        console.error("音频未加载");
        return;
    }
    if (isPlaying.value) {
        console.log("音频已经在播放中");
        return;
    }
    // 创建新的音源节点
    source = audioctx.createBufferSource();
    source.buffer = audioBuffer;
    duration_isplaying = audioBuffer.duration;
    source.connect(gain);
    gain.connect(audioctx.destination);
    gain.gain.value = gainvalue.value;
    // 记录开始播放的时间
    startTime = audioctx.currentTime;
    // 从暂停位置开始播放
    if (pausedAt > 0) {
        source.start(0, pausedAt);
        console.log(`从暂停位置 ${pausedAt} 秒继续播放`);
    }
    else {
        source.start(0);
        console.log("从头开始播放");
    }
    isPlaying.value = true;
    // 修改更新时间的计算方式
    const updateTime = () => {
        if (isPlaying.value && audioBuffer) { // 添加 audioBuffer 检查
            // 计算实际播放时间 = 暂停位置 + (当前时间 - 开始播放时间)
            currentTime.value = pausedAt + (audioctx.currentTime - startTime);
            requestAnimationFrame(updateTime);
            // 添加空值检查
            if (currentTime.value >= audioBuffer?.duration) {
                console.log("音频播放结束");
                currentTime.value = 0;
                pausedAt = 0;
                isPlaying.value = false;
                source = null;
            }
        }
    };
    updateTime();
};
// 修改 pauseAudio 函数
const pauseAudio = () => {
    if (!source || !isPlaying.value) {
        console.log("音频未在播放中");
        return;
    }
    // 使用计算后的实际播放时间
    pausedAt = currentTime.value;
    console.log("暂停播放");
    console.log("暂停位置：", pausedAt);
    source.stop();
    source.disconnect();
    source = null;
    isPlaying.value = false;
};
// 加载音乐数据
// const loadMusicData = async () => {
//     await music_store.fetchMusicData() // 调用方法加载数据
//     console.log(music_store.mp3_data)
//     await loadAudio() // 加载音频文件
// }
// // 初始化加载音乐
// loadMusicData()
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.ElFooter;
/** @type {[typeof __VLS_components.ElFooter, typeof __VLS_components.elFooter, typeof __VLS_components.ElFooter, typeof __VLS_components.elFooter, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "footer backdrop-blur-[10px] bg-white/30 shadow-lg" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "footer backdrop-blur-[10px] bg-white/30 shadow-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
__VLS_3.slots.default;
const __VLS_5 = {}.ElRow;
/** @type {[typeof __VLS_components.ElRow, typeof __VLS_components.elRow, typeof __VLS_components.ElRow, typeof __VLS_components.elRow, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_8.slots.default;
const __VLS_9 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    span: (4),
}));
const __VLS_11 = __VLS_10({
    span: (4),
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
__VLS_12.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "song-info-container flex items-center p-2 rounded-lg" },
    ...{ style: {} },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
    src: "../assets/images/defalut.jpg",
    alt: "Album Cover",
    ...{ class: "w-10 h-10 rounded-md" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex flex-col ml-4 flex-grow" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "scrolling-text-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "scrolling-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-white font-semibold text-sm" },
});
(__VLS_ctx.music_meata?.metadata?.title || '未知歌曲');
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "scrolling-text-container" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "scrolling-text" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-gray-400 text-xs" },
});
(__VLS_ctx.music_meata?.metadata?.artist || "未知歌手");
var __VLS_12;
const __VLS_13 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
    span: (16),
}));
const __VLS_15 = __VLS_14({
    span: (16),
}, ...__VLS_functionalComponentArgsRest(__VLS_14));
__VLS_16.slots.default;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid grid-cols-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "play col-span-1 flex justify-around ml-4 mr-4" },
});
const __VLS_17 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(__VLS_17, new __VLS_17({
    circle: true,
}));
const __VLS_19 = __VLS_18({
    circle: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_18));
__VLS_20.slots.default;
const __VLS_21 = {}.IEpArrowLeft;
/** @type {[typeof __VLS_components.IEpArrowLeft, typeof __VLS_components.iEpArrowLeft, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
var __VLS_20;
if (!__VLS_ctx.isPlaying) {
    const __VLS_25 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
        ...{ 'onClick': {} },
        circle: true,
    }));
    const __VLS_27 = __VLS_26({
        ...{ 'onClick': {} },
        circle: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    let __VLS_29;
    let __VLS_30;
    let __VLS_31;
    const __VLS_32 = {
        onClick: (__VLS_ctx.playfunction)
    };
    __VLS_28.slots.default;
    const __VLS_33 = {}.IEpVideoPlay;
    /** @type {[typeof __VLS_components.IEpVideoPlay, typeof __VLS_components.iEpVideoPlay, ]} */ ;
    // @ts-ignore
    const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
    const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
    var __VLS_28;
}
else {
    const __VLS_37 = {}.ElButton;
    /** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        ...{ 'onClick': {} },
        circle: true,
    }));
    const __VLS_39 = __VLS_38({
        ...{ 'onClick': {} },
        circle: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    let __VLS_41;
    let __VLS_42;
    let __VLS_43;
    const __VLS_44 = {
        onClick: (__VLS_ctx.pauseAudio)
    };
    __VLS_40.slots.default;
    const __VLS_45 = {}.IEpVideoPause;
    /** @type {[typeof __VLS_components.IEpVideoPause, typeof __VLS_components.iEpVideoPause, ]} */ ;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    var __VLS_40;
}
const __VLS_49 = {}.ElButton;
/** @type {[typeof __VLS_components.ElButton, typeof __VLS_components.elButton, typeof __VLS_components.ElButton, typeof __VLS_components.elButton, ]} */ ;
// @ts-ignore
const __VLS_50 = __VLS_asFunctionalComponent(__VLS_49, new __VLS_49({
    circle: true,
}));
const __VLS_51 = __VLS_50({
    circle: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_50));
__VLS_52.slots.default;
const __VLS_53 = {}.IEpArrowRight;
/** @type {[typeof __VLS_components.IEpArrowRight, typeof __VLS_components.iEpArrowRight, ]} */ ;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    ...{ 'onClick': {} },
}));
const __VLS_55 = __VLS_54({
    ...{ 'onClick': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
let __VLS_57;
let __VLS_58;
let __VLS_59;
const __VLS_60 = {
    onClick: (__VLS_ctx.nextmusic)
};
var __VLS_56;
var __VLS_52;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "col-span-3 grid grid-cols-4" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "col-span-1  font-mono font-extrabold flex justify-center items-center m-0" },
});
const __VLS_61 = {}.ElSlider;
/** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    ...{ class: "col-span-1" },
    modelValue: (__VLS_ctx.gainvalue_before),
    min: (0),
    max: (100),
    step: (1),
}));
const __VLS_63 = __VLS_62({
    ...{ class: "col-span-1" },
    modelValue: (__VLS_ctx.gainvalue_before),
    min: (0),
    max: (100),
    step: (1),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: " items-center grid grid-cols-10" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
(__VLS_ctx.formatTime(__VLS_ctx.currentTime));
if (!__VLS_ctx.isPlaying) {
    const __VLS_65 = {}.ElSlider;
    /** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
        ...{ 'onInput': {} },
        ...{ class: "col-span-5 flex justify-center items-center" },
        modelValue: (__VLS_ctx.currentTime),
        min: (0),
        max: (__VLS_ctx.duration_isplaying),
        step: (0.1),
    }));
    const __VLS_67 = __VLS_66({
        ...{ 'onInput': {} },
        ...{ class: "col-span-5 flex justify-center items-center" },
        modelValue: (__VLS_ctx.currentTime),
        min: (0),
        max: (__VLS_ctx.duration_isplaying),
        step: (0.1),
    }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    let __VLS_69;
    let __VLS_70;
    let __VLS_71;
    const __VLS_72 = {
        onInput: (__VLS_ctx.handleTimeChange)
    };
    var __VLS_68;
}
else {
    const __VLS_73 = {}.ElSlider;
    /** @type {[typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, typeof __VLS_components.ElSlider, typeof __VLS_components.elSlider, ]} */ ;
    // @ts-ignore
    const __VLS_74 = __VLS_asFunctionalComponent(__VLS_73, new __VLS_73({
        ...{ 'onInput': {} },
        ...{ class: "col-span-5 ml-3" },
        modelValue: (__VLS_ctx.currentTime),
        min: (0),
        max: (__VLS_ctx.audioBuffer?.duration ?? 0),
        step: (0.1),
    }));
    const __VLS_75 = __VLS_74({
        ...{ 'onInput': {} },
        ...{ class: "col-span-5 ml-3" },
        modelValue: (__VLS_ctx.currentTime),
        min: (0),
        max: (__VLS_ctx.audioBuffer?.duration ?? 0),
        step: (0.1),
    }, ...__VLS_functionalComponentArgsRest(__VLS_74));
    let __VLS_77;
    let __VLS_78;
    let __VLS_79;
    const __VLS_80 = {
        onInput: (__VLS_ctx.handleTimeChange)
    };
    var __VLS_76;
}
if (!__VLS_ctx.isPlaying) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "col-span-1 ml-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.formatTime(__VLS_ctx.duration_isplaying));
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "col-span-1 ml-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.formatTime(__VLS_ctx.audioBuffer?.duration ?? 0));
}
var __VLS_16;
const __VLS_81 = {}.ElCol;
/** @type {[typeof __VLS_components.ElCol, typeof __VLS_components.elCol, typeof __VLS_components.ElCol, typeof __VLS_components.elCol, ]} */ ;
// @ts-ignore
const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({
    span: (4),
}));
const __VLS_83 = __VLS_82({
    span: (4),
}, ...__VLS_functionalComponentArgsRest(__VLS_82));
var __VLS_8;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['footer']} */ ;
/** @type {__VLS_StyleScopedClasses['backdrop-blur-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/30']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['song-info-container']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10']} */ ;
/** @type {__VLS_StyleScopedClasses['h-10']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-grow']} */ ;
/** @type {__VLS_StyleScopedClasses['scrolling-text-container']} */ ;
/** @type {__VLS_StyleScopedClasses['scrolling-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['scrolling-text-container']} */ ;
/** @type {__VLS_StyleScopedClasses['scrolling-text']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['play']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-1']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-around']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-3']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['font-extrabold']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['m-0']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-1']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-10']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-5']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-5']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-3']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-1']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-1']} */ ;
/** @type {__VLS_StyleScopedClasses['ml-4']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            music_meata: music_meata,
            nextmusic: nextmusic,
            gainvalue_before: gainvalue_before,
            isPlaying: isPlaying,
            duration_isplaying: duration_isplaying,
            audioBuffer: audioBuffer,
            currentTime: currentTime,
            formatTime: formatTime,
            handleTimeChange: handleTimeChange,
            playfunction: playfunction,
            pauseAudio: pauseAudio,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
