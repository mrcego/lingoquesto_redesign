<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  BookOpen,
  MessageSquare,
  Star,
  Plus,
  Download,
  Settings,
  Search,
} from "lucide-vue-next";
import { useGlossaryStore } from "@/stores/glossary";
import WordCard from "@/components/vocabulary/WordCard.vue";
import PhraseCard from "@/components/vocabulary/PhraseCard.vue";
import Button from "@/components/ui/Button.vue";
import { mockGlossaryTerms, mockPhrases } from "@/mock/data";
import { storeToRefs } from "pinia";

const mainTab = ref<"vocabulary" | "phrases">("vocabulary");
const glossaryStore = useGlossaryStore();

const { terms, phrases } = storeToRefs(glossaryStore);

onMounted(() => {
  if (!terms.value.length) glossaryStore.setTerms(mockGlossaryTerms);
  if (!phrases.value.length) glossaryStore.setPhrases(mockPhrases);
});
</script>

<template>
  <div class="space-y-8">
    <!-- Sub tabs: Vocabulary / Phrases -->
    <div
      class="flex items-center justify-between card backdrop-blur-sm rounded-2xl p-2 border border-gray-200 dark:border-slate-700/50 shadow-lg"
    >
      <div class="flex items-center space-x-2">
        <button
          @click="mainTab = 'vocabulary'"
          :class="[
            'flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group',
            mainTab === 'vocabulary'
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-105'
              : 'text-gray-600 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-slate-200',
          ]"
        >
          <div
            :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110',
              mainTab === 'vocabulary'
                ? 'bg-white/20'
                : 'bg-gradient-to-br from-indigo-400 to-purple-500',
            ]"
          >
            <BookOpen class="w-4 h-4 text-white" />
          </div>
          <span>Vocabulario</span>
          <div
            :class="[
              'px-2 py-1 rounded-full text-xs font-bold min-w-[24px] h-6 flex items-center justify-center',
              mainTab === 'vocabulary'
                ? 'bg-white/20 text-white'
                : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-100 dark:text-indigo-300',
            ]"
          >
            {{ terms.length }}
          </div>
        </button>

        <button
          @click="mainTab = 'phrases'"
          :class="[
            'flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group',
            mainTab === 'phrases'
              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl hover:shadow-2xl hover:scale-105'
              : 'text-gray-600 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-slate-200',
          ]"
        >
          <div
            :class="[
              'w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110',
              mainTab === 'phrases'
                ? 'bg-white/20'
                : 'bg-gradient-to-br from-emerald-400 to-teal-500',
            ]"
          >
            <MessageSquare class="w-4 h-4 text-white" />
          </div>
          <span>Frases</span>
          <div
            :class="[
              'px-2 py-1 rounded-full text-xs font-bold min-w-[24px] h-6 flex items-center justify-center',
              mainTab === 'phrases'
                ? 'bg-white/20 text-white'
                : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-100 dark:text-emerald-300',
            ]"
          >
            {{ phrases.length }}
          </div>
        </button>
      </div>

      <div
        class="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg"
      >
        <Star class="w-5 h-5 text-white" />
        <div class="text-white">
          <span class="text-sm font-medium">Total:</span>
          <span class="text-2xl font-bold ml-2">{{
            terms.length + phrases.length
          }}</span>
          <span class="text-sm opacity-80 ml-1">Items</span>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div v-if="mainTab === 'vocabulary'" class="space-y-6">
      <div class="flex items-center justify-between">
        <div class="relative">
          <Search
            class="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            class="pl-10 pr-4 py-2 rounded-xl border border-indigo-200 focus:outline-none focus:ring-offset-2 focus:ring-brand-violet/20 focus:border-2 focus:border-indigo-600 bg-white"
            placeholder="Buscar palabras..."
          />
        </div>
        <div class="flex items-center space-x-2">
          <Button variant="secondary" size="sm">
            <Plus class="w-6 h-4 mr-1" /> Añadir
          </Button>
          <Button variant="secondary" size="sm">
            <Download class="w-4 h-4 mr-1" /> Exportar
          </Button>
          <Button variant="secondary" size="sm">
            <Settings class="w-4 h-4 mr-1" /> Ajustes
          </Button>
        </div>
      </div>

      <!-- Words Grid -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <WordCard v-for="(term, i) in terms" :key="i" :term="term" />
      </div>
    </div>

    <div v-else class="space-y-6">
      <!-- Phrases Grid -->
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <PhraseCard v-for="(p, i) in phrases" :key="i" :phrase="p" />
      </div>
    </div>
  </div>
</template>
