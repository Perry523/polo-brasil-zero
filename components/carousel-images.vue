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
      <div>
        <div
          class="flex justify-between items-center absolute top-[30%] w-full px-1"
        >
          <button
            class=""
            @click="handleBack"
            :disabled="myCarousel?.isFirstSlide"
          >
            <ChevronLeftIcon class="w-12 lg:w-16 h-12 lg:h-16 stroke-white" />
          </button>
          <button
            class=""
            @click="handleNext"
            :disabled="myCarousel?.isLastSlide"
          >
            <ChevronRightIcon class="w-12 lg:w-16 h-12 lg:h-16 stroke-white" />
          </button>
        </div>
        <Carousel
          id="inner-carousel"
          ref="innerCarousel"
          class="mt-3"
          :items-to-show="3"
          :wrap-around="true"
        >
          <Slide v-for="(slide, n) in 40" :key="slide">
            <div class="mx-2">
              <nuxt-img
                :class="
                  slide == currentSlide + 1
                    ? 'border-[6px] border-green-700'
                    : ''
                "
                class="rounded-2xl"
                :src="`/carousel-images/${n + 1}.jpg`"
                @click="goToSlide(n)"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Slide } from "vue3-carousel";

import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
import "vue3-carousel/dist/carousel.css";
const currentSlide = ref(0);
const innerCarousel = ref(null);
const myCarousel = ref(null);
function goToSlide(slide) {
  myCarousel.value.slideTo(slide);
}
function handleNext() {
  innerCarousel.value.next();
  myCarousel.value.next();
}
function handleBack() {
  innerCarousel.value.prev();
  myCarousel.value.prev();
}
</script>

<style lang="scss">
.carousel__item {
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
}
.carousel__icon {
  border: 3px solid white;
  border-radius: 50%;
  fill: white;
  width: 40px;
  height: 35px;
}
</style>
