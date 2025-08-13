import { defineStore } from 'pinia'
import type { User } from '@/types'

export const useUserStore = defineStore('user', {
  state: () => ({
    currentUser: null as User | null,
    isAuthenticated: false
  }),

  getters: {
    userName: (state) => state.currentUser?.name || 'Guest',
    userAvatar: (state) => state.currentUser?.avatar || '/default-avatar.png'
  },

  actions: {
    setUser(user: User) {
      this.currentUser = user
      this.isAuthenticated = true
    },

    logout() {
      this.currentUser = null
      this.isAuthenticated = false
    }
  },

  persist: true
})