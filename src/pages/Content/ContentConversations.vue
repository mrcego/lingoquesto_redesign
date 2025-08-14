<script setup lang="ts">
import { onMounted } from "vue";
import { Mic, Square, MessageCircle, Play } from "lucide-vue-next";
import { useConversationStore } from "@/stores/conversation";
import MessageBubble from "@/components/conversation/MessageBubble.vue";
import GradingPanel from "@/components/conversation/GradingPanel.vue";
import Button from "@/components/ui/Button.vue";
import { mockConversationMessages } from "@/mock/data";

const conversationStore = useConversationStore();

const toggleRecording = () => {
  conversationStore.setRecording(!conversationStore.isRecording);
  if (conversationStore.isRecording) {
    conversationStore.setCurrentTranscript("Hola, ¿cómo está usted?");
  } else {
    conversationStore.setCurrentTranscript("");
  }
};

onMounted(() => {
  if (!conversationStore.messages.length)
    conversationStore.setMessages(mockConversationMessages);
});
</script>

<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-bold text-gray-600">Conversación en Vivo</h3>
      <div class="flex items-center space-x-2">
        <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        <span class="text-sm font-medium text-green-600 dark:text-green-400"
          >Sesión Activa</span
        >
      </div>
    </div>

    <!-- Messages -->
    <div
      class="card rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 max-h-96 overflow-y-auto"
    >
      <div v-if="conversationStore.messages.length" class="space-y-4">
        <MessageBubble
          v-for="message in conversationStore.messages"
          :key="message.id"
          :message="message"
        />
      </div>
      <div v-else class="text-center py-12">
        <div
          class="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4"
        >
          <MessageCircle class="w-8 h-8 text-gray-400 dark:text-gray-500" />
        </div>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          No hay mensajes en esta conversación
        </p>
        <Button variant="primary" :icon-left="Play"
          >Iniciar Conversación</Button
        >
      </div>
    </div>

    <!-- Recording Controls + Grading -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <div
          class="card rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6"
        >
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center space-x-3">
              <button
                class="px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow hover:shadow-md flex items-center space-x-2"
                @click="toggleRecording"
              >
                <component
                  :is="conversationStore.isRecording ? Square : Mic"
                  class="w-4 h-4"
                />
                <span>{{
                  conversationStore.isRecording ? "Detener" : "Grabar"
                }}</span>
              </button>
            </div>
            <div class="text-right">
              <p class="text-sm text-gray-500">Estado</p>
              <p
                class="font-semibold"
                :class="
                  conversationStore.isRecording
                    ? 'text-red-600'
                    : 'text-gray-700 dark:text-gray-300'
                "
              >
                {{ conversationStore.isRecording ? "Grabando..." : "Inactivo" }}
              </p>
            </div>
          </div>

          <div
            v-if="conversationStore.currentTranscript"
            class="mt-4 p-4 card rounded-2xl"
          >
            <p class="text-sm text-gray-600 mb-1">
              Transcripción en tiempo real:
            </p>
            <p class="font-medium text-gray-900">
              {{ conversationStore.currentTranscript }}
            </p>
          </div>
        </div>
      </div>

      <div class="lg:col-span-1">
        <GradingPanel />
      </div>
    </div>
  </div>
</template>
