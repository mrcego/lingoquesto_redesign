<template>
  <Card :hover="true" class="group">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <div class="flex items-center space-x-3 mb-2">
          <h3 class="text-lg font-semibold text-gray-900">{{ phrase.text }}</h3>
          <span 
            :class="[
              'px-2 py-1 rounded-full text-xs font-medium',
              phrase.difficulty === 'easy' ? 'bg-brand-mint text-white' :
              phrase.difficulty === 'medium' ? 'bg-brand-orange text-white' :
              'bg-red-500 text-white'
            ]"
          >
            {{ phrase.difficulty }}
          </span>
        </div>
        
        <p class="text-brand-blue font-medium mb-2">{{ phrase.translation }}</p>
        <p class="text-gray-600 text-sm mb-3">{{ phrase.context }}</p>
        
        <div v-if="phrase.usage.length" class="flex flex-wrap gap-2">
          <span 
            v-for="usage in phrase.usage" 
            :key="usage"
            class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
          >
            {{ usage }}
          </span>
        </div>
      </div>
      
      <div class="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          v-if="phrase.audioUrl"
          @click="playAudio"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Volume2 class="w-4 h-4 text-gray-500" />
        </button>
        <button
          @click="editPhrase"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Edit3 class="w-4 h-4 text-gray-500" />
        </button>
        <button
          @click="deletePhrase"
          class="p-2 rounded-lg hover:bg-red-50 transition-colors"
        >
          <Trash2 class="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Volume2, Edit3, Trash2 } from 'lucide-vue-next'
import Card from '@/components/ui/Card.vue'
import type { Phrase } from '@/types'

interface Props {
  phrase: Phrase
}

defineProps<Props>()

const playAudio = () => {
  // Audio playback logic
  console.log('Reproduciendo audio')
}

const editPhrase = () => {
  // Edit phrase logic
  console.log('Editando frase')
}

const deletePhrase = () => {
  // Delete phrase logic
  console.log('Eliminando frase')
}
</script>