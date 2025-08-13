<template>
  <div class="w-full">
    <div v-if="label" class="flex justify-between items-center mb-2">
      <span class="text-sm font-medium text-gray-700">{{ label }}</span>
      <span class="text-sm text-gray-500">{{ value }}%</span>
    </div>
    <div class="w-full bg-gray-200 rounded-full h-2">
      <div 
        :class="[
          'h-2 rounded-full transition-all duration-500 ease-out',
          color === 'violet' ? 'bg-brand-violet' :
          color === 'blue' ? 'bg-brand-blue' :
          color === 'mint' ? 'bg-brand-mint' :
          color === 'orange' ? 'bg-brand-orange' :
          'gradient-lq2'
        ]"
        :style="{ width: `${Math.min(100, Math.max(0, value))}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  value: number
  label?: string
  color?: 'violet' | 'blue' | 'mint' | 'orange' | 'gradient'
}

withDefaults(defineProps<Props>(), {
  color: 'gradient'
})
</script>