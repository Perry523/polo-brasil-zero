<template>
  <div>
    <head>
      <title>Polo Brasil Zero - Distrito Industrial 100% sustentável.</title>
    </head>
    <navbar @go-to-anchor="goToAnchor" />
    <keep-alive>
      <videos @open="handleOpenVideo('b6SDcbE3y98')" sta />
    </keep-alive>
    <land @anchor="goToAnchor" @open="handleOpenVideo" />
    <lot-about @anchor="goToAnchor" />
    <about @anchor="goToAnchor" @open="handleOpenVideo" />
    <ambitions />
    <partners />

    <posts />
    <contact />
    <newsletter />
    <the-footer @go-to-anchor="goToAnchor" />
    <a :href="whatsappUrl" class="fixed bottom-10 right-10 w-14 h-14 z-50">
      <nuxt-img
        alt="Ícone de enviar mensagem pelo whatsapp"
        src="/images/whatsapp-icon.png"
        className=""
      />
    </a>
    <modal
      v-if="isVideoOpen"
      :videoSrc="selectedVideoShow"
      @close="handleCloseVideoClick"
    />
  </div>
</template>

<script setup>
import "animate.css";
import { ref } from "vue";
const { $pwa } = useNuxtApp();
const isVideoOpen = ref(false);
const selectedVideoShow = ref("");
function goToAnchor(anchor) {
  const ref = document.getElementById(anchor);
  ref?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
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
  window.addEventListener("scroll", handleScroll);
});

const handleCloseVideoClick = () => {
  isVideoOpen.value = false;
  selectedVideoShow.value = "";
};

const handleOpenVideo = (link) => {
  selectedVideoShow.value = link;
  isVideoOpen.value = true;
};

function handleScroll() {
  const aboutSection = document.getElementById("about");
  const rect = aboutSection.getBoundingClientRect();
  console.log(rect);
  if (rect.top <= 400) {
    const targetDiv = document.getElementById("bg-white");
    if (!targetDiv.classList.contains("animate__backInUp")) {
      targetDiv.classList.remove("hidden");
      targetDiv.classList.add("animate__animated", "animate__backInUp", "grid");
    }
  }
}
</script>

<style scoped>
/* seus estilos aqui */
</style>
