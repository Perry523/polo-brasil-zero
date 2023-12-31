<template>
  <Carousel
    @slide-start="carousel.updateSlideWidth()"
    v-model="currentImage"
    id="carousel"
    ref="carousel"
  >
    <Slide v-for="({ title, description }, i) in slidesData" :key="i">
      <div
        @mouseenter="disableSlide"
        @mouseleave="enableSlide"
        @touchstart="disableSlide"
        @touchend="enableSlide"
        class="carousel__item"
      >
        <video
          autoPlay
          muted
          loop
          className="absolute w-screen top-0 left-0 h-full z-10 object-cover"
        >
          <source :src="videos[i]" type="video/mp4" />
        </video>
        <div className="h-[540px] bg-gradient-green w-[calc(100vw)] z-20">
          <div className="wrapper-full ">
            <h1
              v-html="title"
              className="text-green-100 pt-40 lg:w-[400px] text-left"
            ></h1>
            <p className="text-green-100 mt-2 lg:w-[580px] text-left">
              {{ description }}
            </p>
            <button
              type="button"
              className="bt bt-outline-primary mt-8 flex items-center"
              @click="emit('open')"
            >
              <nuxt-img
                alt="Ícone de baixar"
                src="/images/play-circle.png"
                className="bt-icon mr-3 w-6  h-6 "
              />
              {{ locale === "en-US" ? "Know more" : "Conheça o projeto" }}
            </button>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script setup>
import { Carousel, Pagination, Slide } from "vue3-carousel";
const { locale } = useI18n();
const videos = [
  "/img/first-slidee.mp4",
  "/img/third-slide.mp4",
  "/img/second-slide.mp4",
  "/img/fourth-slide.mp4",
  "/img/fifth-slide.mp4",
];
import "vue3-carousel/dist/carousel.css";
const slidesData = computed(() => {
  return locale.value == "pt-BR"
    ? [
        {
          title: "Centro Sustentável <br /> Polo Brasil Zero",
          description:
            "Uma iniciativa privada, onde a inovação se encontra com a responsabilidade socioambiental, alinhado com os objetivos de desenvolvimento sustentável da ONU.",
        },
        {
          title: "Primeiro Parque industrial ZERO EMISSÕES do Brasil",
          description:
            "Com reciclagem total das emissões geradas: líquidas, sólidas e GEEs, seguindo padrões de economia circular e de baixo carbono.",
        },
        {
          title: "Aqui construímos um futuro sem EMISSÕES diretas",
          description:
            "Junte-se a nós, nessa transformação verde rumo a DESCARBONIZAÇÃO da indústria Brasileira com SUSTENTABILIDADE.",
        },
        {
          title: "EcoHub de Tecnologia",
          description:
            "Voltado para Agricultura regenerativa e de baixo carbono, Indústria 5.0 e Sociabilidade. Gerando o DESENVOLVIMENTO SUSTENTÁVEL do estado e das pessoas.",
        },
        {
          title: "Nossa missão",
          description:
            "Vai além como compromisso socioambiental, com projetos voltados para a TRANSFORMAÇÃO das PESSOAS e COMUNIDADE, com urbanismo social de verdade.",
        },
      ]
    : [
        {
          title: "Sustainable Center <br /> Polo Brasil Zero",
          description:
            "A private initiative, where innovation meets social and environmental responsibility, aligned with the UN's sustainable development goals.",
        },
        {
          title: "First ZERO EMISSIONS industrial park in Brazil",
          description:
            "With total recycling of all emissions generated: liquid, solid, and GHGs, following circular economy and low-carbon standards.",
        },
        {
          title: "Here we build a future without direct EMISSIONS",
          description:
            "Join us in this green transformation towards DECARBONIZING the Brazilian industry with SUSTAINABILITY.",
        },
        {
          title: "EcoHub Technology",
          description:
            "Focused on Regenerative and Low-Carbon Agriculture, Industry 5.0, and Sociability. Generating the SUSTAINABLE DEVELOPMENT of the state and its people.",
        },
        {
          title: "Our mission",
          description:
            "Goes beyond as a socio-environmental commitment, with projects focused on the TRANSFORMATION of PEOPLE and COMMUNITY, with genuine social urbanism.",
        },
      ];
});

const emit = defineEmits(["open"]);
const carousel = ref(null);
const currentImage = ref(0);
var interval = setInterval(() => {
  if (currentImage.value < slidesData.length - 1) {
    carousel.value?.next();
  } else {
    carousel.value?.slideTo(0);
  }
}, 5000);
watch(
  () => currentImage.value,
  (value) => {
    console.log(value);
  }
);
const disableSlide = () => {
  clearInterval(interval);
};
const enableSlide = () => {
  interval = setInterval(() => {
    console.log(currentImage.value, slidesData.length);
    if (currentImage.value < 4) {
      carousel.value.next();
    } else {
      carousel.value.slideTo(0);
    }
  }, 5000);
  interval;
};
</script>

<style lang="scss">
.carousel__item {
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#carousel {
  .carousel__item {
    border-radius: 0px !important;
  }
}
.carousel__pagination-button {
  --tw-bg-opacity: 1;
  background-color: rgb(132 132 132 / var(--tw-bg-opacity));
  border-radius: 9999px;
  height: 10px;
  width: 3.1rem;
  z-index: 99999;
  margin: 0 0.25rem;
}
.carousel__pagination-item {
  z-index: 9;
}
.carousel__pagination {
  margin-top: -40px;
}

.carousel__pagination-button--active {
  @apply bg-green-500;
}
.carousel__pagination-button::after {
  background-color: rgb(132 132 132 / var(--tw-bg-opacity));
}
.carousel__pagination-button--active::after {
  @apply bg-green-500;
}
.carousel__pagination-button:hover::after {
  background-color: rgb(132 132 132 / var(--tw-bg-opacity));
  // ::after {
  //   background-color: rgb(132 132 132 / var(--tw-bg-opacity));
  // }
}
.carousel__pagination-button--active::after {
  @apply bg-green-500;
}
.carousel__pagination-button--active:hover::after {
  @apply bg-green-500;
  // ::after {
  //   background-color: rgb(132 132 132 / var(--tw-bg-opacity));
  // }
}
</style>
<!-- <style lang="scss" scoped>

</style> -->
