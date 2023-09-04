<template>
  <section class="py-16 shrink-0 grow bg-leave" ref="ourGroundRef">
    <div
      class="flex wrapper-full max-lg:justify-center max-lg:flex-col max-lg:items-center"
    >
      <div class="flex flex-col justify-center max-lg:items-center">
        <h2 class="lg:w-80 xl:w-auto text-green-800 max-lg:text-center text">
          Lotes sustentáveis carbono neutro
        </h2>
        <p class="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
          Todos os lotes já estão equipados com tubulações centrais de
          abastecimento e tratamento de água, rede de coleta dos efluentes
          industriais e sanitários interligados direto na ETAE.
        </p>
      </div>
      <div
        class="lg:w-[450px] lg:h-[340px] shrink-0 relative flex justify-center items-center cursor-pointer max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col ml-20"
        @click="handleOpenVideo('https://www.youtube.com/embed/FuCpCoSmRBg')"
      >
        <p class="text-green-800 font-bold">Planta dos Lotes de Venda</p>
        <img
          src="~/static/images/pbz-render-video-banner.webp"
          alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
          class="rounded-3xl !w-full border border-green-500 mt-2"
        />
        <img
          src="~/static/images/play.svg"
          alt="Ícone de play"
          class="!absolute"
        />
      </div>
    </div>
    <div class="wrapper-full">
      <img
        src="~/static/images/ground.svg"
        alt="Planta do parque industrial"
        class="mx-auto block w-fit mt-16 max-lg:!hidden"
      />
      <img
        src="~/static/images/map-responsive.png"
        alt="Planta do parque industrial"
        class="mx-auto block w-full mt-16 lg:!hidden"
      />
      <button
        type="button"
        class="bt bt-outline-primary mx-auto mt-9 flex justify-center items-center max-lg:w-full"
        @click="scrollToAboutUs"
      >
        <img
          src="~/static/images/download.svg"
          alt="Ícone de baixar"
          class="bt-icon"
        />
        <span class="ml-3 text-green-700 font-bold text-lg">Baixar e-book</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const ourGroundRef = ref(null);
const aboutUsRef = ref(null);

const handleOpenVideo = (link) => {
  // openVideo(link);
};

const scrollToAboutUs = () => {
  aboutUsRef.value?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
</script>

<style scoped>
/* seus estilos aqui */
</style>
