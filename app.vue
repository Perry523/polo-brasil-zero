<template>
  <VitePwaManifest />
  <NuxtPage />
</template>
<script setup lang="ts">
const broserLanguage = navigator.language;
const { locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
// if(broserLanguage === )
const router = useRouter();
if (broserLanguage === "pt-BR") {
  switchLocalePath("pt-BR");
  router.push("/");
} else {
  switchLocalePath("en-US");
  router.push("/en-US");
}
</script>
