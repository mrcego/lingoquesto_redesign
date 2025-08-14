<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import { BookOpen, MessageCircle, Star, BarChart3 } from "lucide-vue-next";

const route = useRoute();
const activeTab = computed(() => {
  const name = route.name?.toString() || "";
  return name.startsWith("content-") ? name.slice("content-".length) : name;
});
</script>

<template>
  <div
    class="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-indigo-600 dark:via-purple-600 dark:to-pink-500 rounded-3xl p-8 border border-gray-200 dark:border-transparent shadow-lg dark:shadow-2xl mb-8"
  >
    <div class="relative z-10">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-4">
          <div
            class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl float-animation"
          >
            <BookOpen class="w-8 h-8 text-white" />
          </div>
          <div>
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-1">
              Navegando una Entrevista Desafiante de AWS
            </h2>
            <div class="flex items-center space-x-4">
              <span
                class="px-3 py-1 bg-green-100 dark:bg-white/20 text-green-700 dark:text-white rounded-full text-sm font-semibold"
                >Completado</span
              >
              <span class="text-gray-600 dark:text-white/80 text-sm"
                >28/07/2025, 12:05</span
              >
            </div>
          </div>
        </div>
        <div class="text-right">
          <div class="flex items-center space-x-2 mb-2">
            <Star class="w-5 h-5 text-yellow-400" />
            <span class="text-sm font-medium text-gray-600 dark:text-white/80"
              >Calificación Actual</span
            >
          </div>
          <p class="text-2xl font-bold text-gray-900 dark:text-white">
            no tiene calificaciones
          </p>
        </div>
      </div>

      <div class="flex items-center space-x-2 mb-6">
        <span class="text-gray-600 dark:text-white/70">Asignado por</span>
        <span class="font-semibold text-gray-900 dark:text-white">Teacher</span>
        <span class="text-gray-600 dark:text-white/70"
          >• Asignado a estudiante</span
        >
        <span class="font-semibold text-gray-900 dark:text-white"
          >Tomas Vallejo</span
        >
      </div>

      <!-- Simple Navigation Tabs (Summary, Words and Phrases, Conversation) -->
      <div class="flex items-center justify-between">
        <div
          class="flex items-center space-x-1 bg-gray-100 dark:bg-white/20 backdrop-blur-sm rounded-xl p-1 border border-gray-200 dark:border-white/30"
        >
          <RouterLink
            :to="{ name: 'content-summary' }"
            :class="[
              'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              activeTab === 'summary'
                ? 'bg-white dark:bg-white/30 text-gray-900 dark:text-white shadow-md'
                : 'text-gray-700 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20',
            ]"
          >
            <BarChart3 class="w-4 h-4" />
            <span>Resumen</span>
          </RouterLink>

          <RouterLink
            :to="{ name: 'content-vocabulary' }"
            :class="[
              'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              activeTab === 'vocabulary'
                ? 'bg-white dark:bg-white/30 text-gray-900 dark:text-white shadow-md'
                : 'text-gray-700 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20',
            ]"
          >
            <BookOpen class="w-4 h-4" />
            <span>Palabras y Frases</span>
            <span
              class="bg-indigo-100 dark:bg-white/30 text-indigo-600 dark:text-white text-xs font-bold px-2 py-1 rounded-full"
              >4</span
            >
          </RouterLink>

          <RouterLink
            :to="{ name: 'content-conversations' }"
            :class="[
              'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
              activeTab === 'conversations'
                ? 'bg-white dark:bg-white/30 text-gray-900 dark:text-white shadow-md'
                : 'text-gray-700 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20',
            ]"
          >
            <MessageCircle class="w-4 h-4" />
            <span>Conversación</span>
          </RouterLink>
        </div>

        <div
          class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg"
        >
          <Star class="w-4 h-4 text-white" />
          <span class="text-white font-bold">Score: 79 Pts.</span>
        </div>
      </div>
    </div>

    <!-- Background decoration -->
    <div class="absolute top-0 right-0 w-64 h-64 opacity-5 dark:opacity-20">
      <div
        class="w-full h-full bg-gradient-to-br from-indigo-600 dark:from-white to-transparent rounded-full transform rotate-12"
      ></div>
    </div>
  </div>
</template>
