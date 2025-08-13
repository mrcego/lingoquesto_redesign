<template>
  <div>
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="$emit('update:activeTab', tab.id)"
          :class="[
            'py-2 px-1 border-b-2 font-medium text-sm transition-colors',
            activeTab === tab.id
              ? 'border-brand-violet text-brand-violet'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          <component v-if="tab.icon" :is="tab.icon" class="w-4 h-4 mr-2 inline" />
          {{ tab.label }}
        </button>
      </nav>
    </div>
    
    <div class="mt-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tab {
  id: string
  label: string
  icon?: any
}

interface Props {
  tabs: Tab[]
  activeTab: string
}

defineProps<Props>()
defineEmits<{
  'update:activeTab': [value: string]
}>()
</script>