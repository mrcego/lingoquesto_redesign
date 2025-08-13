<template>
  <div id="app">
    <AppShell>
      <router-view v-slot="{ Component, route }">
        <transition 
          :name="route.meta.transition || 'fade'"
          mode="out-in"
          appear
        >
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </AppShell>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppShell from '@/components/layout/AppShell.vue'
import { useUserStore } from '@/stores/user'
import { useSettingsStore } from '@/stores/settings'
import { mockUser } from '@/mock/data'

const userStore = useUserStore()
const settingsStore = useSettingsStore()

onMounted(() => {
  // Initialize user
  userStore.setUser(mockUser)
  
  // Apply theme
  document.documentElement.setAttribute('data-theme', settingsStore.settings.theme)
  // Also set the class for better compatibility
  if (settingsStore.settings.theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
</script>

<style>
#app {
  min-height: 100vh;
}
</style>