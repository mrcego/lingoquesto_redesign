<script setup lang="ts">
import { computed } from "vue";
import { MessageSquare, Volume2, ChevronDown, Target } from "lucide-vue-next";
import { useGlossaryStore } from "@/stores/glossary";
import { useConversationStore } from "@/stores/conversation";

const glossaryStore = useGlossaryStore();
const conversationStore = useConversationStore();

const phraseCount = computed(() => glossaryStore.phrases.length);
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
            class="w-14 h-14 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <MessageSquare class="w-7 h-7 text-white" />
          </div>
          <div>
            <h3 class="text-2xl font-bold text-gray-900">Frases Practicadas</h3>
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
                <span class="text-xs font-bold text-emerald-600">94 Pts.</span>
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
</template>
