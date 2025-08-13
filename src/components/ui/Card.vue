<template>
  <div 
    :class="[
      'bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-200',
      hover ? 'hover:shadow-md hover:border-gray-200' : '',
      padding === 'none' ? '' : padding === 'sm' ? 'p-4' : padding === 'lg' ? 'p-8' : 'p-6'
    ]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
interface Props {
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
}

withDefaults(defineProps<Props>(), {
  hover: false,
  padding: 'md'
})
</script>