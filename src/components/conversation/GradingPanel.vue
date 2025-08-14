<script setup lang="ts">
import { ref, reactive } from "vue";
import Card from "@/components/ui/Card.vue";
import Button from "@/components/ui/Button.vue";
import RangeInput from "@/components/ui/RangeInput.vue";

const gradingMode = ref<"automatic" | "manual">("automatic");
const feedback = ref("");

const scores = reactive({
  overall: 8.5,
  pronunciation: 8.0,
  grammar: 9.0,
  vocabulary: 8.5,
  fluency: 8.0,
});

const saveGrading = () => {
  // Save grading logic
  console.log("Guardando calificación:", { scores, feedback: feedback.value });
};

const resetGrading = () => {
  scores.overall = 0;
  scores.pronunciation = 0;
  scores.grammar = 0;
  scores.vocabulary = 0;
  scores.fluency = 0;
  feedback.value = "";
};
</script>

<template>
  <Card>
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold text-gray-900">Calificación Rápida</h3>
      <div class="flex items-center space-x-2">
        <button
          @click="gradingMode = 'automatic'"
          :class="[
            'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
            gradingMode === 'automatic'
              ? 'bg-brand-violet text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          Automático
        </button>
        <button
          @click="gradingMode = 'manual'"
          :class="[
            'px-3 py-1 rounded-lg text-sm font-medium transition-colors',
            gradingMode === 'manual'
              ? 'bg-brand-violet text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200',
          ]"
        >
          Manual
        </button>
      </div>
    </div>

    <div class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"
          >Puntuación General</label
        >
        <RangeInput v-model="scores.overall" />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Pronunciación</label
          >
          <RangeInput v-model="scores.overall" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Gramática</label
          >
          <RangeInput v-model="scores.overall" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Vocabulario</label
          >
          <RangeInput v-model="scores.overall" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Fluidez</label
          >
          <RangeInput v-model="scores.overall" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2"
            >Fluidez</label
          >
          <div class="flex items-center space-x-4">
            <input
              v-model="scores.overall"
              type="range"
              min="0"
              max="10"
              step="0.1"
              class="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span class="text-lg font-bold text-brand-violet w-12">{{
              scores.overall
            }}</span>
          </div>
        </div>
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-2"
          >Retroalimentación</label
        >
        <textarea
          v-model="feedback"
          rows="3"
          class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-violet focus:border-transparent resize-none"
          placeholder="Añadir retroalimentación constructiva para el estudiante..."
        ></textarea>
      </div>

      <div class="flex space-x-3">
        <Button variant="primary" full-width @click="saveGrading">
          Guardar Calificación
        </Button>
        <Button variant="outline" @click="resetGrading"> Reiniciar </Button>
      </div>
    </div>
  </Card>
</template>
