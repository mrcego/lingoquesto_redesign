import { defineStore } from 'pinia'
import type { Metrics } from '@/types'

export const useMetricsStore = defineStore('metrics', {
  state: () => ({
    metrics: null as Metrics | null
  }),

  getters: {
    completionPercentage: (state) => state.metrics?.completionRate || 0,
    averageScoreFormatted: (state) => state.metrics?.averageScore?.toFixed(1) || '0.0'
  },

  actions: {
    setMetrics(metrics: Metrics) {
      this.metrics = metrics
    },

    updateMetric(key: keyof Metrics, value: any) {
      if (this.metrics) {
        this.metrics[key] = value
      }
    }
  }
})