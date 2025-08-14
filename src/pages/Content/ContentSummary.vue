<script setup lang="ts">
import { computed } from "vue";
import {
  Type,
  Star,
  MessageSquare,
  Volume2,
  ChevronDown,
  Trophy,
  Target,
} from "lucide-vue-next";
import { useGlossaryStore } from "@/stores/glossary";
import { useConversationStore } from "@/stores/conversation";
import { useSettingsStore } from "@/stores/settings";
import type { GlossaryTerm } from "@/types";

const glossaryStore = useGlossaryStore();
const conversationStore = useConversationStore();
const settingsStore = useSettingsStore();

const glossaryCount = computed(() => glossaryStore.terms.length);
const phraseCount = computed(() => glossaryStore.phrases.length);

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
const topPhrases = computed(() => glossaryStore.phrases.slice(0, 2));

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

// Score color based on performance
const getScoreColor = (score: number) => {
  if (score >= 90) return "text-green-600 dark:text-green-400";
  if (score >= 80) return "text-blue-600 dark:text-blue-400";
  if (score >= 70) return "text-yellow-600 dark:text-yellow-400";
  if (score >= 60) return "text-orange-600 dark:text-orange-400";
  return "text-red-600 dark:text-red-400";
};

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
      <!-- Words Practiced Section -->
      <div class="space-y-6">
        <div
          class="card p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
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
                        <Volume2
                          class="w-3 h-3 text-gray-400 dark:text-gray-500"
                        />
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

      <!-- Phrases Practiced Section -->
      <div class="space-y-6">
        <div
          class="card p-6 lg:p-8 hover:shadow-xl transition-all duration-300"
        >
          <!-- Header -->
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div
                class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
              >
                <MessageSquare class="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">
                  Frases Practicadas
                </h3>
                <p class="text-gray-600 mt-1">
                  {{ phraseCount }} expresiones aprendidas
                </p>
              </div>
            </div>
            <div class="text-right">
              <span
                class="text-3xl font-black text-emerald-600 dark:text-emerald-400"
              >
                {{ phraseCount }}
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
                    stroke="url(#phrasesGradient)"
                    stroke-width="3"
                    :stroke-dasharray="`${finalScore}, 100`"
                    stroke-linecap="round"
                    class="transition-all duration-1000"
                  />
                  <defs>
                    <linearGradient
                      id="phrasesGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: #10b981; stop-opacity: 1"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: #06b6d4; stop-opacity: 1"
                      />
                    </linearGradient>
                  </defs>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-center">
                    <Target class="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                    <span class="text-2xl font-bold text-gray-900">{{
                      finalScore
                    }}</span>
                    <span class="text-lg text-gray-500">/100</span>
                    <p class="text-xs text-gray-500 mt-1">Puntuación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Phrase Items -->
          <div class="space-y-4">
            <div
              v-for="(phrase, i) in topPhrases"
              :key="phrase.id || i"
              class="group relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl border border-emerald-100 dark:border-emerald-800/30 p-4 hover:shadow-md hover:from-emerald-100 hover:to-teal-100 dark:hover:from-emerald-900/30 dark:hover:to-teal-900/30 transition-all duration-300"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1 pr-4">
                  <h4 class="font-semibold text-gray-900 leading-relaxed mb-3">
                    {{ phrase.text }}
                  </h4>
                  <div class="flex items-center space-x-3">
                    <div class="flex items-center space-x-1">
                      <Volume2 class="w-3 h-3 text-gray-400" />
                      <span class="text-xs text-gray-500">1x</span>
                    </div>
                    <div class="flex items-center space-x-1">
                      <span
                        class="w-4 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-sm"
                      ></span>
                      <span class="text-xs font-medium text-gray-600">B2</span>
                    </div>
                    <span class="text-xs font-bold text-emerald-600"
                      >94 Pts.</span
                    >
                  </div>
                </div>
                <ChevronDown
                  class="w-5 h-5 text-gray-400 group-hover:text-emerald-600 transition-colors flex-shrink-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
          <span :class="`text-sm font-medium ${getScoreColor(finalScore)}`">
            {{
              finalScore >= 90
                ? "Excelente"
                : finalScore >= 80
                  ? "Muy Bueno"
                  : finalScore >= 70
                    ? "Bueno"
                    : finalScore >= 60
                      ? "Regular"
                      : "Necesita Mejorar"
            }}
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
                glossaryCount
              }}</span>
            </div>
            <div
              class="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
                :style="{
                  width: `${Math.min((glossaryCount / 10) * 100, 100)}%`,
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
                phraseCount
              }}</span>
            </div>
            <div
              class="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            >
              <div
                class="h-full bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full transition-all duration-1000"
                :style="{
                  width: `${Math.min((phraseCount / 10) * 100, 100)}%`,
                }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
