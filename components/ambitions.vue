<template>
  <section class="pt-20 pb-12" ref="netzeroRef">
    <div class="wrapper-full flex flex-col items-center">
      <div class="flex items-center max-lg:flex-col">
        <div class="flex flex-col max-lg:text-center">
          <h2 class="lg:w-80 xl:w-auto text-green-800 max-lg:text-center">
            NETZERO
          </h2>
          <h3 class="mt-7 max-lg:text-center text-green-800">
            Ambição Net-Zero 2024
          </h3>
          <p class="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
            <!-- Conteúdo aqui -->
          </p>
          <!-- ...resto do texto e Escopos ... -->
        </div>
        <div
          class="lg:w-[450px] lg:h-[340px] shrink-0 ml-20 relative flex justify-center items-center max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col"
        >
          <span class="text-green-800 mt-4 font-bold">
            Projeção de emissões de GEE na atmosfera
          </span>
          <img
            src="~/static/images/netzero.gif"
            alt=""
            class="rounded-3xl mt-4"
          />
          <span class="text-green-800 mt-2">
            Fonte: NASA Scientific Visualization Studio
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const netzeroRef = ref(null);
</script>

<style scoped>
/* seus estilos aqui */
</style>
