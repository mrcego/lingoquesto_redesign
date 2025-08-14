<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";

import ContentHero from "@/components/content/ContentHero.vue";

import { useGlossaryStore } from "@/stores/glossary";
import { useConversationStore } from "@/stores/conversation";
import {
  mockGlossaryTerms,
  mockPhrases,
  mockConversationMessages,
} from "@/mock/data";

const glossaryStore = useGlossaryStore();
const conversationStore = useConversationStore();

const route = useRoute();

const toggleRecording = () => {
  conversationStore.setRecording(!conversationStore.isRecording);

  if (conversationStore.isRecording) {
    // Simulate real-time transcription
    conversationStore.setCurrentTranscript("Hola, ¿cómo está usted?");
  } else {
    conversationStore.setCurrentTranscript("");
  }
};

onMounted(() => {
  glossaryStore.setTerms(mockGlossaryTerms);
  glossaryStore.setPhrases(mockPhrases);
  conversationStore.setMessages(mockConversationMessages);
});
</script>

<template>
  <div class="space-y-6 lg:space-y-8">
    <!-- Main Content with Tabs -->
    <div class="card p-6 hover:shadow-xl transition-all duration-300">
      <!-- Current Session Header -->
      <ContentHero />

      <!-- Tab Content -->
      <div class="mt-8">
        <router-view v-slot="{ Component, route }">
          <div class="router-view-container">
            <transition
              :name="String(route.meta.transition || 'slide-left')"
              mode="out-in"
              appear
            >
              <component :is="Component" :key="route.path" />
            </transition>
          </div>
        </router-view>
      </div>
    </div>
  </div>
</template>
