import { defineStore } from 'pinia'
import type { GlossaryTerm, Phrase } from '@/types'

export const useGlossaryStore = defineStore('glossary', {
  state: () => ({
    terms: [] as GlossaryTerm[],
    phrases: [] as Phrase[],
    searchQuery: '',
    selectedCategory: 'all'
  }),

  getters: {
    filteredTerms: (state) => {
      let filtered = state.terms
      
      if (state.searchQuery) {
        filtered = filtered.filter(term => 
          term.term.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          term.definition.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }
      
      if (state.selectedCategory !== 'all') {
        filtered = filtered.filter(term => term.category === state.selectedCategory)
      }
      
      return filtered
    },

    filteredPhrases: (state) => {
      let filtered = state.phrases
      
      if (state.searchQuery) {
        filtered = filtered.filter(phrase => 
          phrase.text.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
          phrase.translation.toLowerCase().includes(state.searchQuery.toLowerCase())
        )
      }
      
      return filtered
    },

    categories: (state) => {
      const cats = new Set(state.terms.map(term => term.category))
      return ['all', ...Array.from(cats)]
    }
  },

  actions: {
    setTerms(terms: GlossaryTerm[]) {
      this.terms = terms
    },

    setPhrases(phrases: Phrase[]) {
      this.phrases = phrases
    },

    addTerm(term: GlossaryTerm) {
      this.terms.push(term)
    },

    addPhrase(phrase: Phrase) {
      this.phrases.push(phrase)
    },

    updateSearchQuery(query: string) {
      this.searchQuery = query
    },

    setSelectedCategory(category: string) {
      this.selectedCategory = category
    }
  },

  persist: true
})