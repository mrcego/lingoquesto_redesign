# Vue 3 Language Teacher Dashboard

A modern, comprehensive dashboard for language teachers to manage scenarios, track student progress, and evaluate conversations.

## Features

### 🎯 Merged Views
- **Dashboard**: Combined Summary + Settings/Evaluation with key metrics, student progress charts, and quick settings
- **Content**: Tabbed interface combining Words & Phrases + Conversation management

### 🎨 Design Principles
- Clean, modern interface with attention to detail
- Gamified elements with progress rings and badges
- Responsive design for all screen sizes
- Light/Dark mode support

### 🛠 Tech Stack
- **Vue 3** with Composition API + TypeScript
- **Vite** for fast development
- **Pinia** for state management with persistence
- **Vue Router** for navigation
- **TailwindCSS v4** with CSS variables
- **Lucide Vue** for icons
- **@vueuse/core** for utilities

### 🎨 Branding & Theme
- **Font**: Satoshi with system fallbacks
- **Colors**: Custom brand palette with CSS variables
- **Gradients**: Four custom gradient combinations
- **Design**: Large radius, soft shadows, pill buttons

## Project Structure

```
src/
├── assets/
├── components/
│   ├── layout/
│   │   └── AppShell.vue
│   ├── ui/
│   │   ├── Card.vue
│   │   ├── StatCard.vue
│   │   ├── ProgressBar.vue
│   │   └── Tabs.vue
│   ├── conversation/
│   │   ├── MessageBubble.vue
│   │   └── GradingPanel.vue
│   └── vocabulary/
│       ├── WordCard.vue
│       └── PhraseCard.vue
├── pages/
│   ├── Dashboard.vue
│   └── Content.vue
├── stores/
│   ├── user.ts
│   ├── scenario.ts
│   ├── metrics.ts
│   ├── glossary.ts
│   ├── conversation.ts
│   └── settings.ts
├── types/
│   └── index.ts
├── mock/
│   └── data.ts
├── router/
│   └── index.ts
└── styles/
    └── main.css
```

## Setup Instructions

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Key Features

### Dashboard
- **Metrics Overview**: Total students, active scenarios, completion rates, average scores
- **Progress Visualization**: Interactive charts showing student progress over time
- **Current Scenario**: Quick view of active scenario with details
- **Quick Settings**: Toggle auto-grading, notifications, and theme

### Content Management
- **Vocabulary Tab**: 
  - Searchable glossary terms with definitions
  - Pronunciation guides and audio support
  - Difficulty levels and categories
  - Common phrases with translations
- **Conversation Tab**:
  - Real-time conversation transcripts
  - Message bubbles with teacher/student distinction
  - Audio playback controls
  - Grading panel with detailed scoring
  - Recording functionality

### State Management
- **Pinia stores** with TypeScript support
- **Persistent state** using localStorage
- **Reactive data** with computed properties
- **Actions** for data manipulation

### Responsive Design
- **Mobile-first** approach
- **Collapsible sidebar** on mobile
- **Adaptive layouts** for different screen sizes
- **Touch-friendly** interactions

## Mock Data
The application includes comprehensive mock data for immediate functionality:
- Sample user profiles
- Multiple scenarios with different languages and levels
- Progress metrics and charts
- Glossary terms and phrases
- Conversation messages with feedback
- Evaluation records

## Accessibility
- **WCAG AA** contrast compliance
- **ARIA roles** and labels
- **Keyboard navigation** support
- **Screen reader** friendly

## Development
- **ESLint** for code quality
- **Prettier** for code formatting
- **TypeScript** for type safety
- **Hot reload** for fast development

The application is fully functional and ready for production use with a complete feature set for language teaching scenarios.