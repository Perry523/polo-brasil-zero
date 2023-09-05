<template>
  <div>
    <head>
      <title>Polo Brasil Zero - Distrito Industrial 100% sustentável.</title>
    </head>
    <navbar />

    <videos @open-video="handleOpenVideo" />

    <land @open-video="handleOpenVideo" />
    <get-own-lot />
    <lot-about />
    <about @open-video="handleOpenVideo" />
    <our-principles />
    <ambitions />
    <partners />
    <ScheduleEsg />
    <contact />

    <posts />
    <newsletter />
    <the-footer />
    <a :href="whatsappUrl" class="fixed bottom-10 right-10 w-14 h-14 z-50"> </a>
  </div>
</template>

<script setup>
const ourGroundRef = ref(null);
const aboutUsRef = ref(null);
const sustentabilityRef = ref(null);
const netzeroRef = ref(null);
const partinersRef = ref(null);
const esgRef = ref(null);
const contactRef = ref(null);

const activedSlide = ref(0);
const isVideoOpen = ref(false);
const selectedVideoShow = ref("");

const whatsappUrl =
  "https://wa.me/5511971657007?text=Ol%C3%A1%2C+quero+saber+mais+sobre+o+projeto+Polo+Brasil+Zero.";

onMounted(() => {
  const videoIds = ["myVideo1", "myVideo2", "myVideo3", "myVideo4", "myVideo5"];

  videoIds.forEach((id) => {
    const videoElement = document.getElementById(id);
    if (videoElement) {
      videoElement.play();
    }
  });
});

const handleCloseVideoClick = () => {
  isVideoOpen.value = false;
  selectedVideoShow.value = "";
};

const handleOpenVideo = (link) => {
  selectedVideoShow.value = link;
  isVideoOpen.value = true;
};

watch(
  activedSlide,
  (newValue) => {
    const interval = setInterval(() => {
      activedSlide.value = (newValue + 1) % 5;
    }, 3000);

    return () => clearInterval(interval);
  },
  { immediate: true }
);
</script>

<style scoped>
/* seus estilos aqui */
</style>
