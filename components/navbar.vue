<template>
  <nav
    :class="[
      'z-[99] py-6 transition-all duration-200 fixed top-0 w-full',
      { 'glass-effect': scrollDown },
    ]"
  >
    <div class="wrapper-full flex justify-between items-center">
      <a href="#" class="shrink-0 w-[250px]">
        <!-- Substituir por uma tag <img> ou componente de imagem -->
        <img
          src="/images/logo-white.svg"
          alt="Logo da empresa Polo Brasil Zero"
        />
      </a>
      <a href="#" @click="toggleMenu">
        <!-- Substituir por uma tag <img> ou componente de imagem -->
        <img
          src="/images/menu-hamburger.svg"
          alt="Menu hamburger"
          class="2xl:!hidden cursor-pointer"
        />
      </a>
      <div
        v-if="isMenuOpen"
        class="bg-black/60 absolute top-0 left-0 w-screen h-screen"
        @click="toggleMenu"
      ></div>
      <ul :class="['nav-menu', { 'nav-menu-open': isMenuOpen }]">
        <li class="absolute left-3 top-3 !mt-0">
          <a href="#" @click="toggleMenu">
            <!-- Substituir por uma tag <img> ou componente de imagem -->
            <XMarkIcon
              src="@/assets/close.svg"
              alt="Fechar menu hamburger"
              class="2xl:!hidden cursor-pointer w-8 text-white"
            />
          </a>
        </li>
        <li v-for="(item, index) in arrayForNav" :key="index">
          <a @click="handleGoToAnchor(item.anchor)">{{ item.label }}</a>
        </li>
        <li>
          <button
            @click="handleGoToAnchor('contactRef')"
            type="button"
            class="bt bt-primary shrink-0 flex"
          >
            <!-- Substituir por uma tag <img> ou componente de imagem -->
            <img
              src="/images/send.svg"
              alt="Ícone de baixar"
              class="bt-icon mr-3"
            />
            Entrar em contato
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
const scrollDown = ref(false);
const isMenuOpen = ref(false);

onMounted(() => {
  const handleScroll = () => {
    const isScrollDown = window.scrollY > 0;
    scrollDown.value = isScrollDown;
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
});

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleGoToAnchor = (ref) => {
  if (!ref) {
    // Navegar para a página inicial
    window.location.href = "/";
    return;
  }
  emit("goToAnchor", ref);
};
const emit = defineEmits(["goToAnchor"]);
const arrayForNav = [
  {
    label: "Lotes",
    anchor: "ourGroundRef",
  },
  {
    label: "Sobre nós",
    anchor: "aboutUsRef",
  },
  {
    label: "Sustentabilidade",
    anchor: "sustentabilityRef",
  },
  {
    label: "Netzero",
    anchor: "netzeroRef",
  },
  {
    label: "Parceiros",
    anchor: "partinersRef",
  },
  {
    label: "ESG",
    anchor: "esgRef",
  },
  {
    label: "Contato",
    anchor: "contactRef",
  },
];
</script>

<style scoped>
/* seus estilos aqui */
</style>
