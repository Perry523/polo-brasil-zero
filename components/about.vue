<template>
  <section className="lg:mb-16 mb-8 mt-16" id="aboutUsRef">
    <div className="flex wrapper-full items-center max-lg:flex-col">
      <div className="flex flex-col max-lg:text-center max-lg:items-center">
        <h2 className="lg:w-80 xl:w-auto text-green-800 max-lg:text-center">
          {{ $t("aboutUs.title") }}
        </h2>
        <h3 className="mt-7 max-lg:text-center text-green-800">
          {{ $t("aboutUs.subtitle") }}
        </h3>
        <p
          className="mt-2 max-lg:text-center xl:pr-28 2xl:pr-60 text-green-800"
        >
          {{ $t("aboutUs.description") }}
        </p>
        <saiba-mais @click="emit('anchor', 'contactRef')" />
      </div>
      <div
        className="w-full h-auto lg:w-[450px] lg:h-[340px] shrink-0 lg:ml-20 relative flex justify-center items-center cursor-pointer max-lg:mt-7 flex-col"
        @click="emit('open', 'b6SDcbE3y98')"
      >
        <p className="text-green-800 font-bold mb-2 lg:mb-0">
          {{ $t("aboutUs.masterPlanPresentation") }}
        </p>
        <nuxt-img
          className="rounded-3xl w-full border border-green-500 mt-2"
          alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
          src="/images/pbz-render-video-banner-2.jpg"
          layout="fullWidth"
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

    <div className="flex wrapper-full lg:mt-24 items-center max-lg:flex-col">
      <div className="text-green-800 font-bold mt-12 lg:mt-32">
        {{ $t("aboutUs.businessModel") }}
      </div>
      <nuxt-img
        alt="Imagem que mostra o plano ESG. (ambiental, social, governança, econômico, tecnológico)"
        src="/images/esg.png"
        className="shrink-0  w-[300px]"
      />
      <div className="lg:ml-10 max-lg:text-center">
        <h3 className="text-green-800 max-lg:mt-10">
          {{ $t("aboutUs.leadershipVision") }}
        </h3>
        <p className="mt-2 text-green-800">
          {{ $t("aboutUs.leadershipDescription") }}
        </p>
        <saiba-mais @click="emit('anchor', 'contactRef')" />
      </div>
      <div
        className="lg:w-[450px] lg:h-[340px] shrink-0 ml-20 relative flex justify-center
						items-center cursor-pointer max-lg:mt-5 max-lg:w-full max-lg:ml-0 lg:ml-10 flex-col"
        @click="emit('open', 'fL2jcCSN2pc')"
      >
        <p className="text-green-800 font-bold mb-2 lg:mb-0">
          {{ $t("aboutUs.sustainability") }}
        </p>
        <nuxt-img
          className="rounded-3xl !w-full border border-green-500 mt-2"
          alt="Vídeo ilustrativo renderizado do Polo Brasil Zero"
          src="/images/pbz-render-video-banner-3.jpg"
          layout="fullWidth"
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

    <div
      className="wrapper-full flex max-lg:flex-col justify-center lg:justify-between lg:mt-24 mt-20"
      id="sustentabilityRef"
    >
      <div className="max-lg:text-center ">
        <h2 className="text-green-800">{{ $t("") }}</h2>
        <p className="mt-7 text-green-800">
          {{ $t("aboutUs.sustainabilityDescription") }}
        </p>
      </div>
      <nuxt-img
        alt="Lista de todas as ODS's da ONU"
        src="/images/odss.png"
        className="shrink-0 lg:ml-20 max-lg:mt-12 w-full lg:w-[531px]"
        objectFit="contain"
        layout="fullWidth"
      />
    </div>
  </section>
  <section class="bg-gray-200 w-full lg:h-[362px] xl:h-[420px]">
    <div
      class="h-full wrapper-full !px-0 flex max-lg:flex-col lg:justify-center"
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
          class="from-black bg-gradient-green w-full h-2/5 absolute z-50 bottom-0"
        ></div>
        <nuxt-img
          :src="video.imageSrc"
          class="shrink-0 card-banner w-full max-lg:h-64 object-left-top"
          :alt="video.alt"
        />
        <!-- <a
          class="border-4 border-white mx-auto w-16 lg:w-20 h-16 lg:h-20 top-[35%] lg:top-36 absolute z-[90] rounded-full flex justify-center items-center"
        >
          <nuxt-img
            src="/images/play-outline.svg"
            alt="Clique aqui para dar play"
            class="w-6 ml-2"
          />
        </a> -->
        <div class="flex flex-col absolute w-10/12 bottom-2 z-[60]">
          <h3 class="text-white w-10/12 text-2xl font-bold mb-2">
            {{ video.title }}
          </h3>
          <p class="text-white w-10/12">{{ video.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { locale } = useI18n();
const emit = defineEmits(["anchor", "open"]);
const videos = computed(() =>
  locale.value === "pt-BR"
    ? [
        {
          id: 1,
          title: "Reciclagem Hídrica",
          description:
            "Tratamento total dos efluentes sanitários e industriais",
          imageSrc: "/images/video-one.jpg",
          alt: "Banner do vídeo 1",
        },
        {
          id: 2,
          title: "Reciclagem Sólidos",
          description:
            "Coletas, troca interna e logística reversa dos recicláveis",
          imageSrc: "/images/video-two.jpg",
          alt: "Banner do vídeo 2",
        },
        {
          id: 3,
          title: "Neutralização GEE",
          description:
            "Mitigar emissões diretas e neutralizar pegada de carbono",
          imageSrc: "/images/video-three.jpg",
          alt: "Banner do vídeo 3",
        },
        {
          id: 4,
          title: "Matriz Energética",
          description:
            "Produção própria de energia limpa, renovável e acessível",
          imageSrc: "/images/video-four.png",
          alt: "Banner do vídeo 4",
        },
        {
          id: 5,
          title: "Urbanismo Social",
          description: "Desenvolver a comunidade e as pessoas com equidade",
          imageSrc: "/images/video-five.jpg",
          alt: "Banner do vídeo 5",
        },
      ]
    : [
        {
          id: 1,
          title: "Water Recycling",
          description: "Total treatment of sanitary and industrial effluents",
          imageSrc: "/images/video-one.jpg",
          alt: "Video 1 Banner",
        },
        {
          id: 2,
          title: "Solid Recycling",
          description:
            "Collection, internal exchange, and reverse logistics of recyclables",
          imageSrc: "/images/video-two.jpg",
          alt: "Video 2 Banner",
        },
        {
          id: 3,
          title: "GHG Neutralization",
          description:
            "Mitigating direct emissions and neutralizing carbon footprint",
          imageSrc: "/images/video-three.jpg",
          alt: "Video 3 Banner",
        },
        {
          id: 4,
          title: "Energy Matrix",
          description:
            "Own production of clean, renewable, and affordable energy",
          imageSrc: "/images/video-four.png",
          alt: "Video 4 Banner",
        },
        {
          id: 5,
          title: "Social Urbanism",
          description: "Developing the community and people with equity",
          imageSrc: "/images/video-five.jpg",
          alt: "Video 5 Banner",
        },
      ]
);
</script>
