<script setup lang="ts">
import { computed } from "vue";

interface Props {
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  hover: false,
  padding: "md",
});

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

const cardClasses = computed(() => [
  "bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-200",
  {
    "hover:shadow-md hover:border-gray-200": props.hover,
  },
  paddingClasses[props.padding],
]);
</script>

<template>
  <div :class="cardClasses">
    <slot />
  </div>
</template>
