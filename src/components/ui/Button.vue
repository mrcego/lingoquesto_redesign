<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    @click="handleClick"
  >
    <component v-if="iconLeft" :is="iconLeft" :class="iconClasses" />
    <span v-if="$slots.default" :class="textClasses">
      <slot />
    </span>
    <component v-if="iconRight" :is="iconRight" :class="iconClasses" />

    <!-- Loading spinner -->
    <div
      v-if="loading"
      class="absolute inset-0 flex items-center justify-center"
    >
      <div
        class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
      ></div>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success"
    | "warning";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
  iconLeft?: any;
  iconRight?: any;
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  gradient?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  disabled: false,
  loading: false,
  fullWidth: false,
  rounded: "xl",
  type: "button",
  gradient: false,
});

const emit = defineEmits<{
  click: [event: Event];
}>();

const tag = computed(() => {
  if (props.to) return "router-link";
  if (props.href) return "a";
  return "button";
});

const baseClasses =
  "inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden";

const variantClasses = computed(() => {
  const variants = {
    primary: props.gradient
      ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl focus:ring-indigo-500/50 hover:scale-105"
      : "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl focus:ring-indigo-500/50 hover:scale-105",
    secondary:
      "bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white shadow-md hover:shadow-lg focus:ring-indigo-500/50 hover:scale-105",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 focus:ring-gray-500/50",
    ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500/50",
    danger: props.gradient
      ? "bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500/50 hover:scale-105"
      : "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl focus:ring-red-500/50 hover:scale-105",
    success: props.gradient
      ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500/50 hover:scale-105"
      : "bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl focus:ring-green-500/50 hover:scale-105",
    warning: props.gradient
      ? "bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl focus:ring-yellow-500/50 hover:scale-105"
      : "bg-yellow-600 hover:bg-yellow-700 text-white shadow-lg hover:shadow-xl focus:ring-yellow-500/50 hover:scale-105",
  };
  return variants[props.variant];
});

const sizeClasses = computed(() => {
  const sizes = {
    xs: "px-2 py-1 text-xs gap-1",
    sm: "px-3 py-2 text-sm gap-2",
    md: "px-4 py-2.5 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-3",
    xl: "px-8 py-4 text-lg gap-3",
  };
  return sizes[props.size];
});

const roundedClasses = computed(() => {
  const rounded = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };
  return rounded[props.rounded];
});

const buttonClasses = computed(() => [
  baseClasses,
  variantClasses.value,
  sizeClasses.value,
  roundedClasses.value,
  props.fullWidth ? "w-full" : "",
  props.loading ? "pointer-events-none" : "",
  props.disabled ? "transform-none hover:scale-100" : "",
]);

const iconClasses = computed(() => {
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };
  return [sizes[props.size], props.loading ? "opacity-0" : ""];
});

const textClasses = computed(() => [props.loading ? "opacity-0" : ""]);

const handleClick = (event: Event) => {
  if (!props.disabled && !props.loading) {
    emit("click", event);
  }
};
</script>
