<template>
  <section class="bg-green-700 max-lg:pt-16 lg:py-16" ref="contactRef">
    <div class="flex items-center max-lg:flex-col wrapper-full">
      <div class="flex flex-col max-lg:flex">
        <h2 class="text-white max-lg:text-center">
          E você? Quer fazer parte do nosso projeto sustentável? Entre em
          contato
        </h2>
        <div class="mt-16 p-3 border-white rounded-md border lg:w-[330px]">
          <img alt="Ícone de email" src="/images/mail.svg" class="mr-2" />
          <span class="text-white">lhmt@polobrasilzero.com</span>
        </div>
        <div
          class="mt-4 p-3 border-white rounded-md border lg:w-[330px] flex items-center"
        >
          <img
            alt="Ícone de endereço"
            src="/images/map.svg"
            class="mr-4 shrink-0 h-[21px]"
          />
          <span class="text-white block">
            Av. Ayrton Senna da Silva - KM 497 Jardim Industriario, CEP
            78099-499 / Cuiabá - MT
          </span>
        </div>
      </div>
      <div
        class="flex flex-col shrink-0 max-lg:w-screen lg:w-[600px] p-12 bg-white rounded-2xl lg:ml-20 max-lg:mt-10 max-lg:shadow-2xl"
      >
        <Input name="name" placeholder="Seu nome" label="Nome:" />
        <Input
          name="email"
          placeholder="Seu melhor email"
          label="Email:"
          labelClasses="mt-6"
        />
        <Input
          name="phone"
          placeholder="Seu telefone"
          label="Telefone:"
          labelClasses="mt-6"
        />
        <Selectable
          label="Tipo de contato:"
          labelClasses="mt-6"
          name="contactType"
          placeholder="Selecione o motivo do contato"
          :options="['Comprar um terreno', 'Fazer parceria', 'Outro motivo']"
          :handleSelectOption="handleSelectOption"
          :selectedOption="contactTypeSelectedOption"
        />
        <span class="block mx-auto mt-6 font-medium text-green-800">
          <input
            type="checkbox"
            name="isTermsReaded"
            id="isTermsReaded"
            class="text-green-800"
          />
          Declaro que li os termos de uso.
        </span>
        <button
          type="button"
          class="bt bt-primary mx-auto mt-5 flex items-center justify-center"
        >
          <img
            alt="Ícone de enviar mensagem"
            src="/images/send.svg"
            class="bt-icon mr-3"
          />
          Enviar
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Input from "~/components/Input.vue"; // Atualize para o caminho correto
import Selectable from "~/components/Selectable.vue"; // Atualize para o caminho correto

const contactRef = ref(null);
const contactTypeSelectedOption = ref(-1);

const handleSelectOption = (i) => {
  contactTypeSelectedOption.value = i;
};
</script>

<style scoped>
/* seus estilos aqui */
</style>
