<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs } from "pinia";

import { useGlossaryStore } from "@/stores/glossary";
import { useConversationStore } from "@/stores/conversation";

import SummaryWordPracticeCard from "@/components/summary/SummaryWordPracticeCard.vue";
import SummaryPhrasesPracticeCard from "@/components/summary/SummaryPhrasesPracticeCard.vue";

const glossaryStore = useGlossaryStore();
const { terms, phrases } = storeToRefs(glossaryStore);

const conversationStore = useConversationStore();

// Dynamic final score from conversation messages (average of available message.score values).
const finalScore = computed(() => {
  const scored = (conversationStore.messages || [])
    .map((m: any) => m.score)
    .filter((s: any) => typeof s === "number");
  if (!scored.length) return 0;
  const avg = scored.reduce((a: number, b: number) => a + b, 0) / scored.length;
  const outOf100 = Math.round(avg * 10);
  return Math.max(0, Math.min(100, outOf100));
});

// Score evaluation based on performance
const getScoreEvaluation = (score: number) => {
  if (score >= 90)
    return { text: "Excelente", color: "text-green-600 dark:text-green-400" };
  if (score >= 80)
    return { text: "Muy Bueno", color: "text-blue-600 dark:text-blue-400" };
  if (score >= 70)
    return { text: "Bueno", color: "text-yellow-600 dark:text-yellow-400" };
  if (score >= 60)
    return { text: "Regular", color: "text-orange-600 dark:text-orange-400" };
  return { text: "Necesita Mejorar", color: "text-red-600 dark:text-red-400" };
};

const scoreEvaluation = computed(() => getScoreEvaluation(finalScore.value));

// Score gradient based on performance
const getScoreGradient = (score: number) => {
  if (score >= 90) return "from-green-400 to-emerald-500";
  if (score >= 80) return "from-blue-400 to-indigo-500";
  if (score >= 70) return "from-yellow-400 to-amber-500";
  if (score >= 60) return "from-orange-400 to-red-500";
  return "from-red-400 to-pink-500";
};
</script>

<template>
  <div class="space-y-6 lg:space-y-8">
    <!-- Words and Phrases Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <!-- Words Practiced Card -->
      <SummaryWordPracticeCard />

      <!-- Phrases Practiced Card -->
      <SummaryPhrasesPracticeCard />
    </div>

    <!-- Performance Summary -->
    <div class="card p-6 lg:p-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">
            Resumen de Rendimiento
          </h2>
          <p class="text-gray-600 mt-1">
            Tu progreso en esta sesión de práctica
          </p>
        </div>
        <div class="flex items-center space-x-2">
          <div
            :class="`w-3 h-3 rounded-full bg-gradient-to-r ${getScoreGradient(finalScore)}`"
          ></div>
          <span :class="`text-sm font-medium ${scoreEvaluation.color}`">
            {{ scoreEvaluation.text }}
          </span>
        </div>
      </div>

      <!-- Progress bars -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Palabras</span>
              <span class="text-sm font-bold text-indigo-600">{{
                terms.length
              }}</span>
            </div>
            <div
              class="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                :style="{
                  width: `${Math.min((terms.length / 10) * 100, 100)}%`,
                }"
              ></div>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-sm font-medium text-gray-700">Frases</span>
              <span class="text-sm font-bold text-emerald-600">{{
                phrases.length
              }}</span>
            </div>
            <div
              class="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-1000"
                :style="{
                  width: `${Math.min((phrases.length / 10) * 100, 100)}%`,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
