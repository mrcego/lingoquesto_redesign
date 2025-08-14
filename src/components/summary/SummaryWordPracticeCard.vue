<script setup lang="ts">
import { computed } from "vue";
import { Type, Volume2, ChevronDown, Trophy } from "lucide-vue-next";
import { useGlossaryStore } from "@/stores/glossary";
import { useConversationStore } from "@/stores/conversation";
import type { GlossaryTerm } from "@/types";

const glossaryStore = useGlossaryStore();
const conversationStore = useConversationStore();

const glossaryCount = computed(() => glossaryStore.terms.length);

// Prioritize specific terms to match original design ("Menú", "Camarero").
const topTerms = computed<GlossaryTerm[]>(() => {
  const priority = ["Menú", "Camarero"];
  const byPriority = priority
    .map((name) => glossaryStore.terms.find((t) => t.term === name))
    .filter((t): t is GlossaryTerm => !!t);
  if (byPriority.length < 2) {
    const extras = glossaryStore.terms
      .filter((t) => !byPriority.includes(t))
      .slice(0, 2 - byPriority.length);
    return [...byPriority, ...extras];
  }
  return byPriority;
});

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
</script>

<template>
  <div class="space-y-6">
    <div
      class="card p-6 lg:p-8 hover:shadow-xl transition-all duration-300 h-full flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center space-x-4">
          <div
            class="w-14 h-14 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Type class="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900">
              Palabras Practicadas
            </h3>
            <p class="text-gray-600 mt-1">
              {{ glossaryCount }} términos dominados
            </p>
          </div>
        </div>
        <div class="text-right">
          <span
            class="text-3xl font-black text-indigo-600 dark:text-indigo-400"
          >
            {{ glossaryCount }}
          </span>
        </div>
      </div>

      <!-- Score Circle -->
      <div class="flex items-center justify-center mb-8">
        <div class="relative">
          <div class="relative w-32 h-32">
            <svg class="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
              <!-- Background circle -->
              <path
                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                fill="none"
                stroke="#e5e7eb"
                class="dark:stroke-slate-700"
                stroke-width="3"
              />
              <!-- Progress arc -->
              <path
                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                fill="none"
                stroke="url(#wordsGradient)"
                stroke-width="3"
                :stroke-dasharray="`${finalScore}, 100`"
                stroke-linecap="round"
                class="transition-all duration-1000"
              />
              <defs>
                <linearGradient
                  id="wordsGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    style="stop-color: #8b5cf6; stop-opacity: 1"
                  />
                  <stop
                    offset="100%"
                    style="stop-color: #3b82f6; stop-opacity: 1"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="text-center">
                <Trophy class="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                <span class="text-2xl font-bold text-gray-900">
                  {{ finalScore }}
                </span>
                <span class="text-lg text-gray-500">/100</span>
                <p class="text-xs text-gray-500 mt-1">Puntuación</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Word Items -->
      <div class="space-y-4">
        <div
          v-for="(term, i) in topTerms"
          :key="term.id || i"
          class="group relative overflow-hidden bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl border border-indigo-100 dark:border-indigo-800/30 p-4 hover:shadow-md hover:from-indigo-100 hover:to-purple-100 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
        >
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div
                class="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
              >
                <span class="text-white text-sm font-bold">
                  {{ (term.term || "").charAt(0) }}
                </span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">
                  {{ term.term }}
                </h4>
                <div class="flex items-center space-x-3 mt-1">
                  <div class="flex items-center space-x-1">
                    <Volume2 class="w-3 h-3 text-gray-400 dark:text-gray-500" />
                    <span class="text-xs text-gray-500 dark:text-gray-400"
                      >1x</span
                    >
                  </div>
                  <div class="flex items-center space-x-1">
                    <span
                      class="w-4 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-sm"
                    ></span>
                    <span
                      class="text-xs font-medium text-gray-600 dark:text-gray-300"
                    >
                      B2
                    </span>
                  </div>
                  <span
                    class="text-xs font-bold text-indigo-600 dark:text-indigo-400"
                  >
                    76 Pts.
                  </span>
                </div>
              </div>
            </div>
            <ChevronDown
              class="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
