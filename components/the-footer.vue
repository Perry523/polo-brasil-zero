<template>
  <footer :class="isGreen ? 'bg-green-700' : 'bg-white'">
    <div
      class="wrapper-full flex py-8 justify-between max-lg:flex-col max-lg:items-center"
    >
      <div
        class="lg:w-[300px] flex max-lg:items-center lg:items-start flex-col"
      >
        <nuxt-img
          :src="isGreen ? logoWhite : logoGreen"
          :alt="altText"
          class="w-52"
          :class="imageClass"
        />
        <span
          :class="`mt-3 block ${isGreen ? 'text-green-100' : 'text-green-700'}`"
          >lhmt@polobrasilzero.com
        </span>
      </div>
      <div class="lg:w-[300px] max-lg:flex max-lg:flex-col max-lg:items-center">
        <h3
          :class="`mt-8 ${
            isGreen ? 'text-green-100' : 'text-green-700'
          } font-bold`"
        >
          {{ $t("footer.followUsText") }}
        </h3>
        <div
          class="mt-3 space-x-4 flex items-center max-lg:justify-center lg:justify-start"
        >
          <nuxt-img
            v-for="(image, index) in socialImages"
            :key="index"
            :src="image"
            :class="[...imageClass, index === 3 ? 'w-14' : '']"
            :alt="`Social image ${index + 1}`"
            class="w-10"
          />
        </div>
      </div>
      <div class="max-lg:flex max-lg:flex-col max-lg:mt-8">
        <h3
          :class="`font-bold ${
            isGreen ? 'text-green-100' : 'text-green-700'
          } max-lg:text-center`"
        >
          {{ $t("footer.menuHeaderText") }}
        </h3>
        <ul
          :class="`footer-menu flex ${
            isGreen ? 'is-green' : ''
          } max-lg:flex max-lg:flex-wrap`"
        >
          <div>
            <li
              class="max-lg:mr-6"
              v-for="(menuItem, index) in menuItems.firstMenuItems"
              :key="index"
            >
              <a @click="goToAnchor(menuItem.reference)">{{ menuItem.text }}</a>
            </li>
          </div>
          <div class="ml-10">
            <li
              class="max-lg:mr-6"
              v-for="(menuItem, index) in menuItems.secondMenuItems"
              :key="index"
            >
              <a @click="goToAnchor(menuItem.reference)">{{ menuItem.text }}</a>
            </li>
            <li @click="downloadEbook" href="/ebook.pdf" class="font-bold">
              {{ $t("footer.downloadEbookText") }}
            </li>
          </div>
        </ul>
      </div>
    </div>
    <hr
      :class="`border -mt-5 mb-10 max-w-screen-xl mx-auto opacity-50 ${
        isGreen ? 'border-green-100' : 'border-green-700'
      }`"
    />
    <div
      class="max-lg:bg-ods-footer-mobile lg:bg-ods-footer max-lg:h-[59px] lg:h-[42px] flex justify-center items-center"
    >
      <p class="text-green-100 font-bold max-lg:hidden">
        {{ $t("footer.rightsText") }}
      </p>
      <p class="text-green-100 font-bold lg:hidden text-center">
        {{ $t("footer.rightsText") }}
      </p>
    </div>
    <NuxtLink
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
      >{{ locale.name }}</NuxtLink
    >
  </footer>
</template>

<script setup>
import { ref } from "vue";
const { locale } = useI18n();
const menuItems = computed(() => ({
  firstMenuItems:
    locale.value === "en-US"
      ? [
          { text: "ESG - Blog", reference: "esgRef" },
          { text: "About Us", reference: "aboutUsRef" },
          { text: "Sustainability", reference: "sustentabilityRef" },
          { text: "Our Ground", reference: "ourGroundRef" },
        ]
      : [
          { text: "ESG - Blog", reference: "esgRef" },
          { text: "Sobre Nós", reference: "aboutUsRef" },
          { text: "Sustentabilidade", reference: "sustentabilityRef" },
          { text: "Terrenos", reference: "ourGroundRef" },
        ],
  secondMenuItems:
    locale.value === "en"
      ? [
          { text: "Partners", reference: "partnersRef" },
          { text: "Contact", reference: "contactRef" },
        ]
      : [
          { text: "Parceiros", reference: "partnersRef" },
          { text: "Contato", reference: "contactRef" },
        ],
}));
const isGreen = ref(false); // Mudar conforme sua lógica
const emit = defineEmits(["anchor", "openVideo"]);
const logoWhite = "/images/logo-white.svg";
const logoGreen = "/images/logo-green.png";
const altText = "Logo da empresa Polo Brasil Zero";
const imageClass = "object-left-top";
useSeoMeta({
  ogImage: "/og-image.png",
});
function downloadEbook() {
  window.open("/ebook.pdf", "_blank");
}
const socialImages = isGreen.value
  ? [
      "/images/facebook-white.svg",
      "/images/linkedin-white.svg",
      "/images/instagram-white.svg",
    ]
  : [
      "/images/facebook.png",
      "/images/linkedin.png",
      "/images/instagram.png",
      "/images/icon-youtube.svg",
    ];

function goToAnchor(reference) {
  emit("go-to-anchor", reference);
}
</script>
<style scoped></style>
