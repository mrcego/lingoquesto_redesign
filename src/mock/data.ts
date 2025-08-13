import type { User, Scenario, Metrics, GlossaryTerm, Phrase, ConversationMessage, Evaluation } from '@/types'

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@school.edu',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2',
  role: 'teacher'
}

export const mockScenarios: Scenario[] = [
  {
    id: '1',
    title: 'Pedidos en Restaurante',
    description: 'Practica pidiendo comida y bebidas en un restaurante',
    language: 'Español',
    level: 'intermedio',
    duration: 30,
    status: 'activo',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: '2',
    title: 'Entrevista de Trabajo',
    description: 'Habilidades de conversación profesional para entrevistas de trabajo',
    language: 'Inglés',
    level: 'avanzado',
    duration: 45,
    status: 'activo',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-18')
  },
  {
    id: '3',
    title: 'Compras de Ropa',
    description: 'Aprende vocabulario y frases para comprar ropa',
    language: 'Francés',
    level: 'principiante',
    duration: 25,
    status: 'completado',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-15')
  }
]

export const mockMetrics: Metrics = {
  totalStudents: 24,
  activeScenarios: 8,
  completionRate: 87.5,
  averageScore: 8.3,
  engagementTime: 42,
  progressData: [
    { date: '2024-01-01', value: 65 },
    { date: '2024-01-02', value: 72 },
    { date: '2024-01-03', value: 68 },
    { date: '2024-01-04', value: 78 },
    { date: '2024-01-05', value: 85 },
    { date: '2024-01-06', value: 82 },
    { date: '2024-01-07', value: 87 }
  ]
}

export const mockGlossaryTerms: GlossaryTerm[] = [
  {
    id: '1',
    term: 'Menú',
    definition: 'Una lista de comida y bebidas disponibles en un restaurante',
    pronunciation: 'meh-NOO',
    difficulty: 'fácil',
    category: 'Restaurante',
    examples: ['¿Puedo ver el menú, por favor?', 'El menú tiene muchas opciones.']
  },
  {
    id: '2',
    term: 'Camarero',
    definition: 'Una persona que sirve comida y bebidas en un restaurante',
    pronunciation: 'kah-mah-REH-roh',
    difficulty: 'medio',
    category: 'Restaurante',
    examples: ['El camarero es muy amable.', 'Llama al camarero.']
  },
  {
    id: '3',
    term: 'Cuenta',
    definition: 'La factura o cuenta para el pago',
    pronunciation: 'KWEN-tah',
    difficulty: 'fácil',
    category: 'Restaurante',
    examples: ['La cuenta, por favor.', '¿Cuánto es la cuenta?']
  }
]

export const mockPhrases: Phrase[] = [
  {
    id: '1',
    text: '¿Qué me recomienda?',
    translation: '¿Qué me recomienda?',
    context: 'Pidiendo recomendaciones en un restaurante',
    difficulty: 'medio',
    usage: ['Restaurante', 'Conversación formal']
  },
  {
    id: '2',
    text: 'La cuenta, por favor',
    translation: 'La cuenta, por favor',
    context: 'Pidiendo la cuenta en un restaurante',
    difficulty: 'fácil',
    usage: ['Restaurante', 'Frases esenciales']
  },
  {
    id: '3',
    text: 'Está muy sabroso',
    translation: 'Está muy sabroso',
    context: 'Elogiando la comida',
    difficulty: 'fácil',
    usage: ['Restaurante', 'Cumplidos']
  }
]

export const mockConversationMessages: ConversationMessage[] = [
  {
    id: '1',
    sender: 'profesor',
    content: 'Bienvenido al restaurante. ¿Tiene una reserva?',
    timestamp: new Date('2024-01-20T10:00:00'),
    feedback: 'Buena pronunciación y fluidez natural'
  },
  {
    id: '2',
    sender: 'estudiante',
    content: 'Sí, tengo una reserva para dos personas.',
    timestamp: new Date('2024-01-20T10:00:30'),
    score: 8.5,
    corrections: ['Considera usar "bajo el nombre de..." para especificar el nombre']
  },
  {
    id: '3',
    sender: 'profesor',
    content: '¿A qué nombre está la reserva?',
    timestamp: new Date('2024-01-20T10:01:00')
  },
  {
    id: '4',
    sender: 'estudiante',
    content: 'Está bajo el nombre de García.',
    timestamp: new Date('2024-01-20T10:01:15'),
    score: 9.2,
    feedback: '¡Excelente! Uso perfecto de la frase.'
  }
]

export const mockEvaluations: Evaluation[] = [
  {
    id: '1',
    studentId: 'student1',
    scenarioId: '1',
    overallScore: 8.5,
    pronunciation: 8.0,
    grammar: 9.0,
    vocabulary: 8.5,
    fluency: 8.0,
    feedback: '¡Gran progreso! Enfócate en la pronunciación de las Rs.',
    completedAt: new Date('2024-01-20T15:30:00')
  }
]