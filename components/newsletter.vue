<template>
  <section class="bg-green-400 py-12 max-lg:-mt-4">
    <div class="wrapper-full flex justify-between items-center max-lg:flex-col">
      <h2 class="lg:w-[380px] text-white max-lg:text-center">
        {{ $t("newsletterSection.title") }}
      </h2>
      <div class="flex max-lg:flex-col max-lg:w-full">
        <input
          type="text"
          name=""
          id=""
          class="lg:ml-3 rounded-lg h-[52px] p-3 border border-green-700 w-48 max-lg:w-full max-lg:mt-9 text-green-800"
          :placeholder="$t('newsletterSection.namePlaceholder')"
        />
        <input
          type="text"
          name=""
          id=""
          class="lg:ml-3 rounded-lg h-[52px] p-3 border border-green-700 w-48 max-lg:w-full max-lg:mt-3 text-green-800"
          :placeholder="$t('newsletterSection.emailPlaceholder')"
        />
        <button
          type="button"
          class="bt bt-primary shrink-0 lg:ml-3 max-lg:mt-3 max-lg:w-full flex justify-center items-center"
        >
          <nuxt-img
            alt="Ícone de enviar mensagem"
            src="/images/send.svg"
            class="bt-icon mr-3"
          />
          {{ $t("newsletterSection.buttonText") }}
        </button>
      </div>
    </div>
  </section>
</template>
