import { defineStore } from 'pinia'
import type { Scenario } from '@/types'

export const useScenarioStore = defineStore('scenario', {
  state: () => ({
    scenarios: [] as Scenario[],
    currentScenario: null as Scenario | null
  }),

  getters: {
    activeScenarios: (state) => state.scenarios.filter(s => s.status === 'active'),
    completedScenarios: (state) => state.scenarios.filter(s => s.status === 'completed')
  },

  actions: {
    setScenarios(scenarios: Scenario[]) {
      this.scenarios = scenarios
    },

    setCurrentScenario(scenario: Scenario) {
      this.currentScenario = scenario
    },

    addScenario(scenario: Scenario) {
      this.scenarios.push(scenario)
    },

    updateScenario(id: string, updates: Partial<Scenario>) {
      const index = this.scenarios.findIndex(s => s.id === id)
      if (index !== -1) {
        this.scenarios[index] = { ...this.scenarios[index], ...updates }
      }
    }
  },

  persist: true
})