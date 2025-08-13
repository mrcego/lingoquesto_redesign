<template>
  <Card :hover="true" class="relative overflow-hidden">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-sm font-medium text-gray-600">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-900 mt-1">{{ value }}</p>
        <div v-if="change" class="flex items-center mt-2">
          <TrendingUp v-if="change > 0" class="w-4 h-4 text-brand-mint mr-1" />
          <TrendingDown v-else class="w-4 h-4 text-red-500 mr-1" />
          <span 
            :class="[
              'text-sm font-medium',
              change > 0 ? 'text-brand-mint' : 'text-red-500'
            ]"
          >
            {{ Math.abs(change) }}%
          </span>
          <span class="text-sm text-gray-500 ml-1">vs last week</span>
        </div>
      </div>
      
      <div 
        :class="[
          'w-12 h-12 rounded-xl flex items-center justify-center',
          iconBg
        ]"
      >
        <component :is="icon" class="w-6 h-6 text-white" />
      </div>
    </div>
    
    <div 
      v-if="gradient"
      :class="[
        'absolute top-0 right-0 w-20 h-20 opacity-10 rounded-full -mr-10 -mt-10',
        gradient
      ]"
    ></div>
  </Card>
</template>

<script setup lang="ts">
import { TrendingUp, TrendingDown } from 'lucide-vue-next'
import Card from './Card.vue'

interface Props {
  title: string
  value: string | number
  icon: any
  iconBg: string
  gradient?: string
  change?: number
}

defineProps<Props>()
</script>