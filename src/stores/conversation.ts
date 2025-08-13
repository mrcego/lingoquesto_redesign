import { defineStore } from 'pinia'
import type { ConversationMessage } from '@/types'

export const useConversationStore = defineStore('conversation', {
  state: () => ({
    messages: [] as ConversationMessage[],
    isRecording: false,
    currentTranscript: ''
  }),

  getters: {
    teacherMessages: (state) => state.messages.filter(m => m.sender === 'teacher'),
    studentMessages: (state) => state.messages.filter(m => m.sender === 'student'),
    messagesWithFeedback: (state) => state.messages.filter(m => m.feedback)
  },

  actions: {
    setMessages(messages: ConversationMessage[]) {
      this.messages = messages
    },

    addMessage(message: ConversationMessage) {
      this.messages.push(message)
    },

    updateMessage(id: string, updates: Partial<ConversationMessage>) {
      const index = this.messages.findIndex(m => m.id === id)
      if (index !== -1) {
        this.messages[index] = { ...this.messages[index], ...updates }
      }
    },

    setRecording(recording: boolean) {
      this.isRecording = recording
    },

    setCurrentTranscript(transcript: string) {
      this.currentTranscript = transcript
    }
  },

  persist: true
})