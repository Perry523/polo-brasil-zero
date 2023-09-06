<template>
  <Carousel v-model="currentSlide" ref="myCarousel">
    <Slide v-for="(slide, n) in 40" :key="slide">
      <div class="carousel__item">
        <nuxt-img
          class="rounded-[20px]"
          :src="`/carousel-images/${n + 1}.jpg`"
        />
      </div>
    </Slide>

    <template #addons="{}">
      <Carousel
        id="inner-carousel"
        class="mt-3"
        :items-to-show="3"
        :wrap-around="true"
      >
        <Slide v-for="(slide, n) in 40" :key="slide">
          <div class="mx-2">
            <nuxt-img
              :class="
                slide == currentSlide + 1 ? 'border-[6px] border-green-700' : ''
              "
              class="rounded-2xl"
              :src="`/carousel-images/${n + 1}.jpg`"
              @click="goToSlide(n)"
            />
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
const currentSlide = ref(0);
const myCarousel = ref(null);
function goToSlide(slide) {
  myCarousel.value.slideTo(slide);
}
</script>

<style lang="scss">
.carousel__item {
  /* height: 540px; */
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  // border: 5px solid white;
}
.carousel__icon {
  border: 3px solid white;
  border-radius: 50%;
  fill: white;
  width: 40px;
  height: 35px;
}

/* .carousel__pagination-button::after {
    background-color: rgb(132 132 132 / var(--tw-bg-opacity)) !important;
  } */
</style>
<!-- <style lang="scss" scoped>
  :deep(.carousel) {
    display: block;
    overflow-x: auto;
    scroll-snap-type: none;
    scroll-behavior: auto;
  }
  </style> -->
