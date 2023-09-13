<template>
  <section
    id="about"
    class="bg-colorful lg:py-8 py-4 wrapper-full bg-no-repeat bg-center bg-cover min-h-[500px]"
  >
    <div
      id="bg-white"
      class="hidden grid-cols-12 lg:flex-row justify-between max-lg:p-2 bg-white rounded-3xl lg:!p-7 items-center w-full lg:ml-0"
    >
      <div class="col-span-12 lg:col-span-7">
        <carousel-images />
      </div>
      <div class="flex-1 col-span-12 lg:col-span-5 w-64 text-center mx-auto">
        <div
          class="lg:flex flex-col items-center m-auto max-lg:mt-12 text-center"
        >
          <h2 class="text-green-700">Pré lançamento de vendas</h2>
          <h3 class="mt-2 text-green-700 font-semibold">Fase 1</h3>
          <p class="mt-5 text-green-800 lg:w-80">
            Todos os lotes são carbono neutro já equipados com tubulações
            centrais de abastecimento e tratamento de água, rede de coleta dos
            efluentes Industriais e sanitários ligado na ETE. Tratamento de
            resíduos I, II, IIA e IIB
          </p>
          <h3 class="mt-5 text-green-700 font-bold">Garanta seu lote</h3>
          <span class="text-green-700 mt-1"> Entrega finalizada em 2024 </span>
          <button
            type="button"
            class="bt bt-primary mt-10 flex justify-center items-center max-lg:w-full"
            @click="emit('anchor', 'contactRef')"
          >
            <nuxt-img
              alt="Ícone de baixar"
              src="/images/send.svg"
              class="bt-icon mr-3 w-6"
            />
            Entrar em contato
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const emit = defineEmits(["anchor"]);
</script>
