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

console.log("carousel.value");
setInterval(() => {
  carousel.value.next();
}, 5000);
</script>
