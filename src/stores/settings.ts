import { defineStore } from 'pinia'
import type { Settings } from '@/types'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    settings: {
      theme: 'light',
      language: 'en',
      notifications: true,
      autoSave: true,
      gradingMode: 'automatic',
      audioQuality: 'medium'
    } as Settings
  }),

  getters: {
    isDarkMode: (state) => state.settings.theme === 'dark'
  },

  actions: {
    updateSetting<K extends keyof Settings>(key: K, value: Settings[K]) {
      this.settings[key] = value
      
      if (key === 'theme') {
        document.documentElement.setAttribute('data-theme', value as string)
        // Also update the html element class for better compatibility
        if (value === 'dark') {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    },

    toggleTheme() {
      const newTheme = this.settings.theme === 'light' ? 'dark' : 'light'
      this.updateSetting('theme', newTheme)
    }
  },

  persist: true
})