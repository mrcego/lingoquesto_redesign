<template>
  <Card :hover="true" class="group">
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <div class="flex items-center space-x-3 mb-2">
          <h3 class="text-lg font-semibold text-gray-900">{{ term.term }}</h3>
          <span 
            :class="[
              'px-2 py-1 rounded-full text-xs font-medium',
              term.difficulty === 'easy' ? 'bg-brand-mint text-white' :
              term.difficulty === 'medium' ? 'bg-brand-orange text-white' :
              'bg-red-500 text-white'
            ]"
          >
            {{ term.difficulty }}
          </span>
        </div>
        
        <p class="text-gray-600 mb-3">{{ term.definition }}</p>
        
        <div v-if="term.pronunciation" class="flex items-center space-x-2 mb-3">
          <span class="text-sm text-gray-500">Pronunciación:</span>
          <span class="text-sm font-mono bg-gray-100 px-2 py-1 rounded">{{ term.pronunciation }}</span>
          <button 
            v-if="term.audioUrl"
            @click="playAudio"
            class="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Volume2 class="w-4 h-4 text-gray-500" />
          </button>
        </div>
        
        <div class="flex items-center space-x-2 mb-3">
          <Tag class="w-4 h-4 text-gray-400" />
          <span class="text-sm text-gray-500">{{ term.category }}</span>
        </div>
        
        <div v-if="term.examples.length" class="space-y-1">
          <p class="text-sm font-medium text-gray-700">Ejemplos:</p>
          <ul class="space-y-1">
            <li 
              v-for="example in term.examples" 
              :key="example"
              class="text-sm text-gray-600 italic pl-4 border-l-2 border-gray-200"
            >
              {{ example }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          @click="editTerm"
          class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <Edit3 class="w-4 h-4 text-gray-500" />
        </button>
        <button
          @click="deleteTerm"
          class="p-2 rounded-lg hover:bg-red-50 transition-colors"
        >
          <Trash2 class="w-4 h-4 text-red-500" />
        </button>
      </div>
    </div>
  </Card>
</template>

<script setup lang="ts">
import { Volume2, Tag, Edit3, Trash2 } from 'lucide-vue-next'
import Card from '@/components/ui/Card.vue'
import type { GlossaryTerm } from '@/types'

interface Props {
  term: GlossaryTerm
}

defineProps<Props>()

const playAudio = () => {
  // Audio playback logic
  console.log('Reproduciendo audio')
}

const editTerm = () => {
  // Edit term logic
  console.log('Editando término')
}

const deleteTerm = () => {
  // Delete term logic
  console.log('Eliminando término')
}
</script>