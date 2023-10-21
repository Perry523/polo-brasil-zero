<template>
  <section class="bg-green-100 py-16" id="esgRef">
    <div>
      <h2 class="wrapper-full text-green-800">{{ $t("esgSection.title") }}</h2>
      <div class="h-[240px] w-full flex justify-center items-center">
        <h3 class="text-green-800">{{ $t("esgSection.noPostsText") }}</h3>
      </div>
      <!-- Comentado a parte que usa StaticImage como no original
        <div class="mt-9 wrapper-full flex justify-between posts-box overflow-x-scroll invisible-scrollbar max-lg:px-8">
          <div
            v-for="post in $t('esgSection.posts')"
            :key="post.id"
            class="w-[250px] cursor-pointer"
          >
            <nuxt-img
              :src="post.imageSrc"
              :alt="post.alt"
              class="rounded-2xl"
            />
            <h4 class="mt-6 text-green-800">{{ post.title }}</h4>
            <span class="mt-6 font-semibold block text-green-800">{{ post.date }}</span>
          </div>
        </div>
        -->
    </div>
  </section>
</template>

<script setup>
// Você pode descomentar o array abaixo se decidir usar a parte de posts
// const posts = ref([
//   {
//     id: 1,
//     title: $t('esgSection.posts.post1.title'),
//     date: $t('esgSection.posts.post1.date'),
//     imageSrc: '../images/placeholder-hand.png',
//     alt: $t('esgSection.posts.post1.alt')
//   },
//   // Repita para outros posts
// ]);
</script>

<style scoped>
/* Seu CSS aqui */
</style>
