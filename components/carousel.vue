<template>
  <Carousel ref="carousel">
    <Slide v-model="currentImage" v-for="slide in slides" :key="slide">
      <div class="carousel__item">
        <nuxt-img style="width: 100vw; height: 540px" :src="slide" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Pagination, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const slides = [
  "/images/video-one.jpg",
  "/images/video-two.jpg",
  "/images/video-three.jpg",
  "/images/video-four.jpg",
  "/images/video-five.jpg",
];
const currentImage = ref(0);
const carousel = ref(null);
watch(
  currentImage,
  () => {
    const interval = setInterval(() => {
      carousel.value.next();
    }, 5000);

    return () => clearInterval(interval);
  },
  { immediate: true }
);
</script>
<!-- 
<style>
.carousel__item {
  /* height: 540px; */
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
.carousel__pagination-button {
  --tw-bg-opacity: 1;
  background-color: rgb(132 132 132 / var(--tw-bg-opacity));
  border-radius: 9999px;
  height: 7px;
  width: 3.1rem;
  z-index: 99999;
  margin: 0 0.25rem;
  /* margin-top: -30px; */
}
.carousel__pagination-item {
  z-index: 999999;
}
.carousel__pagination {
  margin-top: -40px;
}
/* .carousel__pagination-button::after {
  background-color: rgb(132 132 132 / var(--tw-bg-opacity)) !important;
} */
</style> -->
<!-- <style lang="scss" scoped>
:deep(.carousel) {
  display: block;
  overflow-x: auto;
  scroll-snap-type: none;
  scroll-behavior: auto;
}
</style> -->
