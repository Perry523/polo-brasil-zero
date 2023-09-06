<template>
  <div>
    <div
      class="fixed w-screen h-screen top-0 left-0 bg-black/90 flex justify-center items-center z-[999]"
      @click="emit('close')"
    >
      <div
        class="xs:w-[320px] sm:w-[480px] md:w-[780px] xl:w-[1000px] xs:h-[192px] sm:h-[288px] md:h-[468px] xl:h-[600px] mx-auto bg-black"
      >
        {{ videoSrc }}
        <iframe
          class="xs:w-[320px] sm:w-[480px] md:w-[780px] xl:w-[1000px] xs:h-[192px] sm:h-[288px] md:h-[468px] xl:h-[600px] mx-auto"
          :src="embedUrl"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const { videoSrc } = defineProps({
  videoSrc: String,
});
const emit = defineEmits(["close"]);
watch(
  () => videoSrc,
  () => {
    console.log(videoSrc);
  }
);
const embedUrl = `https://www.youtube.com/embed/${videoSrc}`;
</script>
