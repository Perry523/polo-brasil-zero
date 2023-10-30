<template>
  <Carousel v-model="currentSlide" ref="myCarouselEn">
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
            :disabled="myCarouselEn?.isFirstSlide"
          >
            <ChevronLeftIcon class="w-12 lg:w-16 h-12 lg:h-16 stroke-white" />
          </button>
          <button
            class=""
            @click="handleNext"
            :disabled="myCarouselEn?.isLastSlide"
          >
            <ChevronRightIcon class="w-12 lg:w-16 h-12 lg:h-16 stroke-white" />
          </button>
        </div>
        <Carousel
          id="inner-carousel"
          ref="innerCarouselEn"
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

<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/outline";
import "vue3-carousel/dist/carousel.css";
const innerCarouselEn = ref();
const myCarouselEn = ref();
const currentSlide = ref(0);
function goToSlide(slide: any) {
  myCarouselEn.value.slideTo(slide);
  // myCarouselEn.value.next();

  innerCarouselEn.value.slideTo(slide);
}
// onMounted(() => {
//   setTimeout(() => {

//     innerCarouselEn.value.slideTo(0);
//     myCarouselEn.value.slideTo(0);
//   });
// });
function handleNext() {
  console.log(myCarouselEn.value);
  innerCarouselEn.value.next();
  myCarouselEn.value.next();
}
function handleBack() {
  innerCarouselEn.value.prev();
  myCarouselEn.value.prev();
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
