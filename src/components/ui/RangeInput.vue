<script setup lang="ts">
import { defineProps, defineEmits, defineModel } from "vue";

const props = defineProps({
  min: {
    type: [Number, String],
    default: 0,
  },
  max: {
    type: [Number, String],
    default: 10,
  },
  step: {
    type: [Number, String],
    default: 0.1,
  },
});

const modelValue = defineModel<number | string>({ required: true });

const updateValue = (event: Event) => {
  modelValue.value = parseFloat((event.target as HTMLInputElement).value);
};
</script>

<template>
  <div class="flex items-center gap-3 w-full">
    <input
      v-model="modelValue"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      @input="updateValue"
    />
    <span class="text-lg font-bold text-brand-violet w-12">
      {{ modelValue }}
    </span>
  </div>
</template>
