<script setup lang="ts">
import { ref } from "vue";
import { Play, Pause } from "lucide-vue-next";
import type { ConversationMessage } from "@/types";

interface Props {
  message: ConversationMessage;
}

defineProps<Props>();

const isPlaying = ref(false);

const formatTime = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

const toggleAudio = () => {
  isPlaying.value = !isPlaying.value;
  // Audio playback logic would go here
};
</script>

<template>
  <div
    :class="[
      'flex mb-6',
      message.sender === 'teacher' ? 'justify-end' : 'justify-start',
    ]"
  >
    <div
      :class="[
        'message-bubble',
        message.sender === 'teacher' ? 'message-teacher' : 'message-student',
      ]"
    >
      <p class="text-base font-medium">{{ message.content }}</p>

      <div class="flex items-center justify-between mt-3">
        <span
          :class="[
            'text-sm font-medium',
            message.sender === 'teacher' ? 'text-white/70' : 'text-gray-500',
          ]"
        >
          {{ formatTime(message.timestamp) }}
        </span>

        <div class="flex items-center space-x-2">
          <button
            v-if="message.audioUrl"
            @click="toggleAudio"
            :class="[
              'p-2 rounded-xl transition-all duration-300 hover:scale-110',
              message.sender === 'teacher'
                ? 'hover:bg-white/20'
                : 'hover:bg-indigo-100',
            ]"
          >
            <Play v-if="!isPlaying" class="w-4 h-4" />
            <Pause v-else class="w-4 h-4" />
          </button>

          <div
            v-if="message.score"
            class="score-badge"
            :class="
              message.score >= 8
                ? 'score-excellent'
                : message.score >= 6
                  ? 'score-good'
                  : 'score-needs-work'
            "
          >
            <Star class="w-3 h-3" />
            {{ message.score }}/10
          </div>
        </div>
      </div>

      <div
        v-if="message.feedback"
        class="mt-4 pt-3 border-t"
        :class="
          message.sender === 'teacher' ? 'border-white/30' : 'border-gray-200'
        "
      >
        <div class="flex items-center space-x-2 mb-2">
          <div
            class="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
          >
            <Star class="w-3 h-3 text-white" />
          </div>
          <span
            class="text-sm font-bold"
            :class="
              message.sender === 'teacher' ? 'text-white/90' : 'text-gray-700'
            "
            >Retroalimentación:</span
          >
        </div>
        <p
          class="text-sm font-medium"
          :class="
            message.sender === 'teacher' ? 'text-white/80' : 'text-gray-600'
          "
        >
          {{ message.feedback }}
        </p>
      </div>

      <div
        v-if="message.corrections?.length"
        class="mt-4 pt-3 border-t border-gray-200"
      >
        <div class="flex items-center space-x-2 mb-2">
          <div
            class="w-5 h-5 bg-blue-400 rounded-full flex items-center justify-center"
          >
            <MessageCircle class="w-3 h-3 text-white" />
          </div>
          <span class="text-sm font-bold text-gray-700">💡 Sugerencias:</span>
        </div>
        <ul class="text-sm text-gray-600 space-y-2">
          <li
            v-for="correction in message.corrections"
            :key="correction"
            class="flex items-start"
          >
            <span
              class="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
            ></span>
            {{ correction }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
