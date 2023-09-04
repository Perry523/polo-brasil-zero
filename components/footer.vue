<template>
  <footer :class="isGreen ? 'bg-green-700' : 'bg-white'">
    <div
      class="wrapper-full flex py-8 justify-between max-lg:flex-col max-lg:items-center"
    >
      <div
        class="lg:w-[300px] flex max-lg:items-center lg:items-start flex-col"
      >
        <img
          :src="isGreen ? logoWhite : logoGreen"
          :alt="altText"
          :class="imageClass"
        />
        <span
          :class="`mt-3 block ${isGreen ? 'text-green-100' : 'text-green-700'}`"
          >{{ emailText }}</span
        >
      </div>
      <div class="lg:w-[300px] max-lg:flex max-lg:flex-col max-lg:items-center">
        <h3
          :class="`mt-8 ${
            isGreen ? 'text-green-100' : 'text-green-700'
          } font-bold`"
        >
          Nos siga nas redes sociais
        </h3>
        <div
          class="mt-3 flex items-center max-lg:justify-center lg:justify-start"
        >
          <img
            v-for="(image, index) in socialImages"
            :key="index"
            :src="image"
            :class="imageClass"
            :alt="`Social image ${index + 1}`"
          />
        </div>
      </div>
      <div class="max-lg:flex max-lg:flex-col max-lg:mt-8">
        <h3
          :class="`font-bold ${
            isGreen ? 'text-green-100' : 'text-green-700'
          } max-lg:text-center`"
        >
          Menu
        </h3>
        <ul
          :class="`footer-menu flex ${
            isGreen ? 'is-green' : ''
          } max-lg:flex max-lg:flex-wrap`"
        >
          <div>
            <li
              class="max-lg:mr-6"
              v-for="(menuItem, index) in firstMenuItems"
              :key="index"
            >
              <a @click="goToAnchor(menuItem.reference)">{{ menuItem.text }}</a>
            </li>
          </div>
          <div class="ml-10">
            <li
              class="max-lg:mr-6"
              v-for="(menuItem, index) in secondMenuItems"
              :key="index"
            >
              <a @click="goToAnchor(menuItem.reference)">{{ menuItem.text }}</a>
            </li>
            <li class="font-bold">Baixar e-book</li>
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
        © 2023 Polobrasilzero by Blackelphant | Todos os direitos reservados
      </p>
      <p class="text-green-100 font-bold lg:hidden text-center">
        © 2023 Polobrasilzero by Blackelphant <br />
        Todos os direitos reservados
      </p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const isGreen = ref(true); // Mudar conforme sua lógica

const logoWhite = "path/to/logo-white.svg";
const logoGreen = "path/to/logo-green.png";
const altText = "Logo da empresa Polo Brasil Zero";
const emailText = "lhmt@polobrasilzero.com";
const imageClass = "object-left-top w-[200px]";

const socialImages = isGreen.value
  ? [
      "path/to/facebook-white.svg",
      "path/to/linkedin-white.svg",
      "path/to/instagram-white.svg",
    ]
  : ["path/to/facebook.png", "path/to/linkedin.png", "path/to/instagram.png"];

const firstMenuItems = [
  { text: "Esg - Blog", reference: "esgReference" },
  { text: "Sobre Nós", reference: "aboutUsReference" },
  { text: "Sustentabilidade", reference: "sustentabilityReference" },
  { text: "Terrenos", reference: "ourGroundReference" },
];

const secondMenuItems = [
  { text: "Parceiros", reference: "partinersReference" },
  { text: "Contato", reference: "contactReference" },
];

function goToAnchor(reference) {
  console.log(`Rolando para ${reference}`);
}
</script>
<style scoped></style>
