<template>
  <div id="partnersRef" class="px-10 pb-10 bg-gray-200 lg:w-full">
    <h2
      class="pt-12 mb-5 lg:mb-0 text-green-800 max-lg:text-center"
      id="partinersRef"
    >
      Parceiros estratégicos
    </h2>
    <div class="flex justify-between w-full max-lg:flex-col items-center">
      <a
        v-for="partner in partners"
        :key="partner.id"
        :href="partner.url"
        target="_blank"
        class="max-lg:mt-10"
      >
        <nuxt-img :src="partner.imageSrc" :alt="partner.alt" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const partners = ref([
  {
    id: 1,
    url: "https://www.pactoglobal.org.br/",
    imageSrc: "/images/partner-one.png",
    alt: "Imagem de um parceiro estratégico",
  },
  {
    id: 2,
    url: "https://www.pactoglobal.org.br/pg/hub-ods/",
    imageSrc: "/images/partner-three.png",
    alt: "Imagem de um parceiro estratégico",
  },
  {
    id: 3,
    url: "https://eaesp.fgv.br/centros/centro-estudos-sustentabilidade/projetos/programa-brasileiro-ghg-protocol",
    imageSrc: "/images/partner-two.png",
    alt: "Imagem de um parceiro estratégico",
  },
  {
    id: 4,
    url: "https://www.globalreporting.org/",
    imageSrc: "/images/partner-four.png",
    alt: "Imagem de um parceiro estratégico",
  },
  {
    id: 5,
    url: "https://sasb.org/",
    imageSrc: "/images/partner-five.png",
    alt: "Imagem de um parceiro estratégico",
  },
  {
    id: 6,
    url: "https://www.ibgc.org.br/",
    imageSrc: "/images/partner-six.png",
    alt: "Imagem de um parceiro estratégico",
  },
]);
</script>

<style scoped>
/* Seu CSS aqui */
</style>
