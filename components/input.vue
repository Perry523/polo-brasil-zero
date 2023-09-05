<template>
  <div>
    <label
      v-if="label"
      :for="name"
      :class="['text-lg font-bold text-green-800', labelClasses]"
    >
      {{ label }}
    </label>
    <input
      type="text"
      :name="name"
      :id="name"
      :class="[
        label ? 'mt-4' : '',
        'rounded-md shadow-input h-[52px] p-3 text-green-800',
        inputClasses,
      ]"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup>
const { label, name, placeholder, inputClasses, labelClasses } = defineProps([
  "label",
  "name",
  "placeholder",
  "inputClasses",
  "labelClasses",
]);
</script>
