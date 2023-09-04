<template>
  <section class="bg-green-700 w-full lg:h-[362px] xl:h-[420px]">
    <div
      class="bg-green-800 h-full wrapper-full flex !px-0 max-lg:flex-col lg:justify-center"
    >
      <div
        v-for="video in videos"
        :key="video.id"
        class="flex relative justify-center cursor-pointer overflow-hidden card-video lg:w-1/5"
      >
        <div
          class="bg-green-400 w-full h-full z-50 absolute top-0 left-0 mix-blend-multiply card-mask"
        ></div>
        <div
          class="from-black bg-gradient-to-t w-full h-2/5 absolute z-50 bottom-0"
        ></div>
        <img
          :src="video.imageSrc"
          class="shrink-0 card-banner w-full max-lg:h-80 object-left-top"
          :alt="video.alt"
        />
        <a
          class="border-4 border-white mx-auto top-32 absolute z-[60] rounded-full flex justify-center items-center w-20 h-20"
        >
          <img
            src="../../images/play-outline.svg"
            alt="Clique aqui para dar play"
            class="w-6 ml-2"
          />
        </a>
        <div class="flex flex-col absolute w-10/12 bottom-4 z-[60]">
          <h3 class="text-white w-10/12 text-2xl font-bold mb-2">
            {{ video.title }}
          </h3>
          <p class="text-white w-10/12">{{ video.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const videos = ref([
  {
    id: 1,
    title: "Reciclagem Hídrica",
    description: "Tratamento total dos efluentes sanitários e industriais",
    imageSrc: "../../images/video-one.jpg",
    alt: "Banner do vídeo 1",
  },
  {
    id: 2,
    title: "Reciclagem Sólidos",
    description: "Coletas, troca interna e logística reversa dos recicláveis",
    imageSrc: "../../images/video-two.jpg",
    alt: "Banner do vídeo 2",
  },
  {
    id: 3,
    title: "Neutralização GEE",
    description: "Mitigar emissões diretas e neutralizar pegada de carbono",
    imageSrc: "../../images/video-three.jpg",
    alt: "Banner do vídeo 3",
  },
  {
    id: 4,
    title: "Matriz Energética",
    description: "Produção própria de energia limpa, renovável e acessível",
    imageSrc: "../../images/video-four.png",
    alt: "Banner do vídeo 4",
  },
  {
    id: 5,
    title: "Urbanismo Social",
    description: "Desenvolver a comunidade e as pessoas com equidade",
    imageSrc: "../../images/video-five.jpg",
    alt: "Banner do vídeo 5",
  },
]);
</script>

<style scoped>
/* Coloque seus estilos CSS aqui, se necessário */
</style>
