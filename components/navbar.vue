<template>
  <nav
    :class="[
      'z-[99] py-6 transition-all duration-200 fixed top-0 w-full',
      { 'glass-effect': scrollDown },
    ]"
  >
    <div class="wrapper-full flex justify-between items-center">
      <a href="#" class="shrink-0 sm:w-[250px] flex items-center">
        <!-- Substituir por uma tag <nuxt-img> ou componente de imagem -->
        <nuxt-img
          src="/images/logo-white.svg"
          alt="Logo da empresa Polo Brasil Zero"
          class="w-32 lg:w-40"
        />
      </a>
      <div class="flex items-center">
        <nuxt-link
          class="btn mr-5"
          v-for="(locale, index) in availableLocales"
          :key="index"
          :to="switchLocalePath(locale.code)"
        >
          <nuxt-img
            :src="
              locale.code !== 'en-US'
                ? 'https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/2560px-Flag_of_Brazil.svg.png'
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/1024px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png'
            "
            alt="Bandeira do país"
            class="w-10"
          />
        </nuxt-link>
        <a class="w-9" href="#" @click="toggleMenu">
          <!-- Substituir por uma tag <nuxt-img> ou componente de imagem -->
          <nuxt-img
            src="/images/menu-hamburger.svg"
            alt="Menu hamburger"
            class="2xl:!hidden cursor-pointer w-9"
          />
        </a>
      </div>
      <div
        v-if="isMenuOpen"
        class="bg-black/60 absolute top-0 left-0 w-screen h-screen"
        @click="toggleMenu"
      ></div>
      <ul :class="['nav-menu', { 'nav-menu-open': isMenuOpen }]">
        <li class="absolute left-3 top-3 !mt-0">
          <a href="#" @click="toggleMenu">
            <!-- Substituir por uma tag <nuxt-img> ou componente de imagem -->
            <XMarkIcon
              src="@/assets/close.svg"
              alt="Fechar menu hamburger"
              class="2xl:!hidden cursor-pointer w-8 text-white"
            />
          </a>
        </li>
        <li v-for="(item, index) in menuItems" :key="index">
          <a @click="handleGoToAnchor(item.anchor)">{{ item.label }}</a>
        </li>
        <li>
          <button
            @click="handleGoToAnchor('contactRef')"
            type="button"
            class="bt bt-primary shrink-0 flex"
          >
            <!-- Substituir por uma tag <nuxt-img> ou componente de imagem -->
            <nuxt-img
              src="/images/send.svg"
              alt="Ícone de baixar"
              class="bt-icon mr-3 w-6"
            />
            {{ $t("navigation.contactButton") }}
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import ptBr from "@/locales/pt-BR.json";
import enUs from "@/locales/en-US.json";
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const lang = locale.value === "pt-BR" ? ptBr : enUs;
console.log(lang);
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
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
  isMenuOpen.value = false;
  emit("goToAnchor", ref);
};
const emit = defineEmits(["goToAnchor"]);
const menuItems =
  locale.value == "en-US"
    ? [
        {
          label: "Lots",
          anchor: "ourGroundRef",
        },
        {
          label: "About Us",
          anchor: "aboutUsRef",
        },
        {
          label: "Sustainability",
          anchor: "sustentabilityRef",
        },
        {
          label: "Netzero",
          anchor: "netzeroRef",
        },
        {
          label: "Partners",
          anchor: "partnersRef",
        },
        {
          label: "ESG",
          anchor: "esgRef",
        },
        {
          label: "Contact",
          anchor: "contactRef",
        },
      ]
    : [
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
          anchor: "partnersRef",
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
watch(
  () => locale.value,
  (value) => {
    // window.location.reload();
  }
);
</script>
<style scoped>
/* seus estilos aqui */
</style>
