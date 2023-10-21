<template>
  <section class="bg-green-700 max-lg:pt-16 lg:py-16" id="contactRef">
    <div class="flex items-center max-lg:flex-col wrapper-full">
      <div class="flex flex-col max-lg:flex">
        <h2 class="text-white max-lg:text-center">{{ $t("contact.title") }}</h2>
        <div class="mt-16 p-3 border-white rounded-md border lg:w-[330px]">
          <span class="text-white">lhmt@polobrasilzero.com</span>
        </div>
        <div
          class="mt-4 p-3 border-white rounded-md border lg:w-[330px] flex items-center"
        >
          <span class="text-white block">{{ $t("contact.address") }}</span>
        </div>
      </div>
      <div
        class="flex flex-col gap-y-4 shrink-0 max-lg:w-screen lg:w-[600px] p-12 bg-white rounded-2xl lg:ml-20 max-lg:mt-10 max-lg:shadow-2xl"
      >
        <Input
          :name="'name'"
          :placeholder="isPtBr ? 'Seu nome' : 'Your name'"
          :label="$t('contact.labels.name')"
        />
        <Input
          :name="'email'"
          :placeholder="isPtBr ? 'Seu melhor email' : 'Your e-mail'"
          :label="$t('contact.labels.email')"
          labelClasses="mt-6"
        />
        <Input
          :name="'phone'"
          :placeholder="isPtBr ? 'Seu telefone' : 'Your phone'"
          :label="$t('contact.labels.phone')"
          labelClasses="mt-6"
        />
        <Selectable
          :label="$t('contact.labels.contactType')"
          labelClasses="mt-6"
          :name="'contactType'"
          :placeholder="
            isPtBr
              ? 'Selecione o motivo do contato'
              : 'Select the reason of contact'
          "
          :options="
            isPtBr
              ? ['Comprar um terreno', 'Fazer parceria', 'Outro motivo']
              : ['Buy a land', 'Make a partnership', 'Other reason']
          "
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
          {{ $t("contact.checkboxLabel") }}
        </span>
        <button
          type="button"
          class="bt bt-primary mx-auto mt-5 flex items-center justify-center"
        >
          <nuxt-img
            alt="Ícone de enviar mensagem"
            src="/images/send.svg"
            class="bt-icon mr-3"
          />
          {{ $t("contact.sendButton") }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const contactTypeSelectedOption = ref(-1);
const { locale } = useI18n();
const isPtBr = locale.value === "pt-BR";
const handleSelectOption = (i) => {
  contactTypeSelectedOption.value = i;
};
</script>

<style scoped>
/* seus estilos aqui */
</style>
