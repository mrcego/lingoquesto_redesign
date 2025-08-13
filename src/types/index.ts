export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: 'teacher' | 'student'
}

export interface Scenario {
  id: string
  title: string
  description: string
  language: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: number
  status: 'active' | 'completed' | 'draft'
  createdAt: Date
  updatedAt: Date
}

export interface Metrics {
  totalStudents: number
  activeScenarios: number
  completionRate: number
  averageScore: number
  engagementTime: number
  progressData: Array<{
    date: string
    value: number
  }>
}

export interface GlossaryTerm {
  id: string
  term: string
  definition: string
  pronunciation?: string
  audioUrl?: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  examples: string[]
}

export interface Phrase {
  id: string
  text: string
  translation: string
  context: string
  audioUrl?: string
  difficulty: 'easy' | 'medium' | 'hard'
  usage: string[]
}

export interface ConversationMessage {
  id: string
  sender: 'teacher' | 'student'
  content: string
  timestamp: Date
  audioUrl?: string
  feedback?: string
  score?: number
  corrections?: string[]
}

export interface Evaluation {
  id: string
  studentId: string
  scenarioId: string
  overallScore: number
  pronunciation: number
  grammar: number
  vocabulary: number
  fluency: number
  feedback: string
  completedAt: Date
}

export interface Settings {
  theme: 'light' | 'dark'
  language: string
  notifications: boolean
  autoSave: boolean
  gradingMode: 'automatic' | 'manual'
  audioQuality: 'low' | 'medium' | 'high'
}