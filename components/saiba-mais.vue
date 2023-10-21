<template>
  <button type="button" className="bt bt-outline-primary mt-4">
    {{ text }}
  </button>
</template>
<script lang="ts" setup>
const { locale } = useI18n();
const text = computed(() => {
  return locale.value === "pt-BR" ? "Saiba mais" : "Learn more";
});
</script>
