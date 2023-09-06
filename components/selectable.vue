<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="text-lg  font-bold text-green-800 {{ labelClasses }}"
    >
      {{ label }}
    </label>
    <div
      class="rounded-md shadow-input h-[52px] p-3 text-green-800 relative cursor-pointer mt-4"
      @click="toggleSelectMenuOpen"
    >
      <p :class="selectedOption >= 0 ? 'text-green-800' : 'text-gray-400'">
        {{ selectedOption >= 0 ? options[selectedOption] : placeholder }}
      </p>
      <div
        v-if="isSelectMenuOpen"
        class="rounded-md shadow-input text-green-800 bg-white z-[99] absolute top-14 w-full left-0 p-2"
      >
        <p
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(index)"
          class="rounded-md cursor-pointer ease-in-out duration-300 transition-all px-3 py-4 hover:bg-green-400/50 text-green-800"
        >
          {{ option }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  label: String,
  name: String,
  labelClasses: String,
  options: Array,
  placeholder: String,
  selectedOption: Number,
  handleSelectOption: Function,
});

const isSelectMenuOpen = ref(false);

const toggleSelectMenuOpen = () => {
  isSelectMenuOpen.value = !isSelectMenuOpen.value;
};

const selectOption = (index) => {
  toggleSelectMenuOpen();
  props.handleSelectOption(index);
};
</script>
