<template>
  <section class="py-16 shrink-0 grow bg-leave" id="ourGroundRef">
    <div
      class="flex wrapper-full max-lg:justify-center max-lg:flex-col max-lg:items-center"
    >
      <div class="flex flex-col justify-center max-lg:items-center">
        <h2 class="lg:w-80 xl:w-auto text-green-800 max-lg:text-center text">
          {{ $t("ourGround.title") }}
        </h2>
        <p class="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800">
          {{ $t("ourGround.description") }}
        </p>
      </div>
      <div
        class="lg:w-[450px] lg:h-[340px] shrink-0 relative flex justify-center items-center cursor-pointer max-lg:mt-5 max-lg:w-full max-lg:ml-0 flex-col ml-20"
        @click="emit('open', 'FuCpCoSmRBg')"
      >
        <p class="text-green-800 font-bold">
          {{ $t("ourGround.plantSaleTitle") }}
        </p>
        <nuxt-img
          src="/images/pbz-render-video-banner.webp"
          alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
          class="rounded-3xl !w-full border border-green-500 mt-2"
        />
        <a
          class="border-4 border-white mx-auto w-16 lg:w-20 h-16 lg:h-20 top-[43%] lg:top-36 absolute z-[60] rounded-full flex justify-center items-center"
        >
          <nuxt-img
            src="/images/play-outline.svg"
            alt="Clique aqui para dar play"
            class="w-6 ml-2 !absolute"
          />
        </a>
      </div>
    </div>
    <div class="wrapper-full">
      <nuxt-img
        src="/images/ground.svg"
        alt="Planta do parque industrial"
        class="mx-auto block w-fit mt-16 max-lg:!hidden"
      />
      <nuxt-img
        src="/images/map-responsive.png"
        alt="Planta do parque industrial"
        class="mx-auto block w-full mt-16 lg:!hidden"
      />
      <div class="flex justify-center mt-10">
        <nuxt-img class="w-48" src="/ebook.jpeg" />
      </div>
      <div class="flex justify-center">
        <button
          type="button"
          class="bt bt-outline-primary mx-auto mt-5 flex justify-center items-center max-lg:w-full"
          @click="emit('anchor', 'contactRef')"
        >
          <nuxt-img
            src="/images/download.svg"
            alt="Ícone de baixar"
            class="bt-icon w-5"
          />

          <span
            @click="downloadEbook"
            class="ml-3 text-green-700 font-bold text-lg"
            >{{ $t("ourGround.downloadButtonText") }}</span
          >
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const emit = defineEmits(["open"]);
function downloadEbook() {
  window.open("/ebook.pdf", "_blank");
}
</script>
