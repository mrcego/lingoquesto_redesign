<template>
  <div class="space-y-6 lg:space-y-8">
    <!-- Main Content with Tabs -->
    <div class="card p-6 hover:shadow-xl transition-all duration-300">
      <!-- Current Session Header -->
      <div
        class="relative overflow-hidden bg-white dark:bg-gradient-to-br dark:from-indigo-600 dark:via-purple-600 dark:to-pink-500 rounded-3xl p-8 border border-gray-200 dark:border-transparent shadow-lg dark:shadow-2xl mb-8"
      >
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center space-x-4">
              <div
                class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl float-animation"
              >
                <BookOpen class="w-8 h-8 text-white" />
              </div>
              <div>
                <h2
                  class="text-3xl font-bold text-gray-900 dark:text-white mb-1"
                >
                  Navegando una Entrevista Desafiante de AWS
                </h2>
                <div class="flex items-center space-x-4">
                  <span
                    class="px-3 py-1 bg-green-100 dark:bg-white/20 text-green-700 dark:text-white rounded-full text-sm font-semibold"
                    >Completado</span
                  >
                  <span class="text-gray-600 dark:text-white/80 text-sm"
                    >28/07/2025, 12:05</span
                  >
                </div>
              </div>
            </div>
            <div class="text-right">
              <div class="flex items-center space-x-2 mb-2">
                <Star class="w-5 h-5 text-yellow-400" />
                <span
                  class="text-sm font-medium text-gray-600 dark:text-white/80"
                  >Calificación Actual</span
                >
              </div>
              <p class="text-2xl font-bold text-gray-900 dark:text-white">
                no tiene calificaciones
              </p>
            </div>
          </div>

          <div class="flex items-center space-x-2 mb-6">
            <span class="text-sm text-gray-600 dark:text-white/70"
              >Asignado por</span
            >
            <span class="font-semibold text-gray-900 dark:text-white"
              >Teacher</span
            >
            <span class="text-sm text-gray-600 dark:text-white/70"
              >• Asignado a estudiante</span
            >
            <span class="font-semibold text-gray-900 dark:text-white"
              >Tomas Vallejo</span
            >
          </div>

          <!-- Simple Navigation Tabs (Summary, Words and Phrases, Conversation) -->
          <div class="flex items-center justify-between">
            <div
              class="flex items-center space-x-1 bg-gray-100 dark:bg-white/20 backdrop-blur-sm rounded-xl p-1 border border-gray-200 dark:border-white/30"
            >
              <button
                @click="activeTab = 'summary'"
                :class="[
                  'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
                  activeTab === 'summary'
                    ? 'bg-white dark:bg-white/30 text-gray-900 dark:text-white shadow-md'
                    : 'text-gray-700 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20',
                ]"
              >
                <BarChart3 class="w-4 h-4" />
                <span>Resumen</span>
              </button>

              <button
                @click="activeTab = 'vocabulary'"
                :class="[
                  'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
                  activeTab === 'vocabulary'
                    ? 'bg-white dark:bg-white/30 text-gray-900 dark:text-white shadow-md'
                    : 'text-gray-700 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20',
                ]"
              >
                <BookOpen class="w-4 h-4" />
                <span>Palabras y Frases</span>
                <span
                  class="bg-indigo-100 dark:bg-white/30 text-indigo-600 dark:text-white text-xs font-bold px-2 py-1 rounded-full"
                  >4</span
                >
              </button>

              <button
                @click="activeTab = 'conversations'"
                :class="[
                  'flex items-center space-x-2 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200',
                  activeTab === 'conversations'
                    ? 'bg-white dark:bg-white/30 text-gray-900 dark:text-white shadow-md'
                    : 'text-gray-700 dark:text-white/80 hover:bg-white/50 dark:hover:bg-white/20',
                ]"
              >
                <MessageCircle class="w-4 h-4" />
                <span>Conversación</span>
              </button>
            </div>

            <div
              class="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg"
            >
              <Star class="w-4 h-4 text-white" />
              <span class="text-white font-bold">Score: 79 Pts.</span>
            </div>
          </div>
        </div>

        <!-- Background decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 opacity-5 dark:opacity-20">
          <div
            class="w-full h-full bg-gradient-to-br from-indigo-600 dark:from-white to-transparent rounded-full transform rotate-12"
          ></div>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="mt-8">
        <!-- Vocabulary Tab -->
        <div v-if="activeTab === 'vocabulary'" class="space-y-8">
          <!-- Enhanced Main Navigation Tabs for Vocabulary Sub-sections -->
          <div
            class="flex items-center justify-between card backdrop-blur-sm rounded-2xl p-2 border border-gray-200 dark:border-slate-700/50 shadow-lg"
          >
            <div class="flex items-center space-x-2">
              <button
                @click="mainTab = 'vocabulary'"
                :class="[
                  'flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group',
                  mainTab === 'vocabulary'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:scale-105'
                    : 'text-gray-600 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-slate-200',
                ]"
              >
                <div
                  :class="[
                    'w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110',
                    mainTab === 'vocabulary'
                      ? 'bg-white/20'
                      : 'bg-gradient-to-br from-indigo-400 to-purple-500',
                  ]"
                >
                  <BookOpen class="w-4 h-4 text-white" />
                </div>
                <span>Vocabulario</span>
                <div
                  :class="[
                    'px-2 py-1 rounded-full text-xs font-bold min-w-[24px] h-6 flex items-center justify-center',
                    mainTab === 'vocabulary'
                      ? 'bg-white/20 text-white'
                      : 'bg-indigo-100 dark:bg-indigo-900 text-indigo-100 dark:text-indigo-300',
                  ]"
                >
                  {{ glossaryStore.terms.length }}
                </div>
              </button>

              <button
                @click="mainTab = 'phrases'"
                :class="[
                  'flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 group',
                  mainTab === 'phrases'
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xl hover:shadow-2xl hover:scale-105'
                    : 'text-gray-600 dark:text-gray-800 hover:bg-gray-50 dark:hover:bg-slate-200',
                ]"
              >
                <div
                  :class="[
                    'w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110',
                    mainTab === 'phrases'
                      ? 'bg-white/20'
                      : 'bg-gradient-to-br from-emerald-400 to-teal-500',
                  ]"
                >
                  <MessageSquare class="w-4 h-4 text-white" />
                </div>
                <span>Frases</span>
                <div
                  :class="[
                    'px-2 py-1 rounded-full text-xs font-bold min-w-[24px] h-6 flex items-center justify-center',
                    mainTab === 'phrases'
                      ? 'bg-white/20 text-white'
                      : 'bg-emerald-100 dark:bg-emerald-900 text-emerald-100 dark:text-emerald-300',
                  ]"
                >
                  {{ glossaryStore.phrases.length }}
                </div>
              </button>
            </div>

            <div
              class="flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl shadow-lg"
            >
              <Star class="w-5 h-5 text-white" />
              <div class="text-white">
                <span class="text-sm font-medium">Total:</span>
                <span class="text-2xl font-bold ml-2">{{
                  glossaryStore.terms.length + glossaryStore.phrases.length
                }}</span>
                <span class="text-sm opacity-80 ml-1">Items</span>
              </div>
            </div>
          </div>

          <!-- Sub-tab Content -->
          <div v-if="mainTab === 'vocabulary'" class="space-y-6">
            <!-- Search and Actions -->
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1 relative">
                <Search
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
                />
                <input
                  v-model="glossaryStore.searchQuery"
                  type="text"
                  placeholder="Buscar términos o definiciones..."
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <div class="flex space-x-2">
                <select
                  v-model="glossaryStore.selectedCategory"
                  class="px-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                >
                  <option value="all">Todas las categorías</option>
                  <option
                    v-for="category in glossaryStore.categories.filter(
                      (c) => c !== 'all'
                    )"
                    :key="category"
                    :value="category"
                  >
                    {{ category }}
                  </option>
                </select>
                <Button variant="primary" :icon-left="Plus">
                  Nuevo Término
                </Button>
              </div>
            </div>

            <!-- Terms Grid -->
            <div
              v-if="glossaryStore.filteredTerms.length"
              class="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <WordCard
                v-for="term in glossaryStore.filteredTerms"
                :key="term.id"
                :term="term"
              />
            </div>

            <div v-else class="text-center py-12">
              <div
                class="w-24 h-24 bg-gray-100 dark:bg-slate-700 rounded-3xl flex items-center justify-center mx-auto mb-4"
              >
                <BookOpen class="w-12 h-12 text-gray-400 dark:text-gray-500" />
              </div>
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
              >
                No se encontraron términos
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Intenta ajustar tu búsqueda o crea un nuevo término
              </p>
              <Button variant="primary" :icon-left="Plus">
                Crear Primer Término
              </Button>
            </div>
          </div>

          <!-- Frases Sub-tab -->
          <div v-if="mainTab === 'phrases'" class="space-y-6">
            <!-- Search and Actions -->
            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex-1 relative">
                <Search
                  class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500"
                />
                <input
                  v-model="glossaryStore.searchQuery"
                  type="text"
                  placeholder="Buscar frases o traducciones..."
                  class="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-slate-700 focus:bg-white dark:focus:bg-slate-600 transition-all text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
              <Button variant="success" :icon-left="Plus"> Nueva Frase </Button>
            </div>

            <!-- Phrases Grid -->
            <div
              v-if="glossaryStore.filteredPhrases.length"
              class="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <PhraseCard
                v-for="phrase in glossaryStore.filteredPhrases"
                :key="phrase.id"
                :phrase="phrase"
              />
            </div>

            <div v-else class="text-center py-12">
              <div
                class="w-24 h-24 bg-gray-100 dark:bg-slate-700 rounded-3xl flex items-center justify-center mx-auto mb-4"
              >
                <MessageSquare
                  class="w-12 h-12 text-gray-400 dark:text-gray-500"
                />
              </div>
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-2"
              >
                No se encontraron frases
              </h3>
              <p class="text-gray-600 dark:text-gray-300 mb-6">
                Intenta ajustar tu búsqueda o crea una nueva frase
              </p>
              <Button variant="success" :icon-left="Plus">
                Crear Primera Frase
              </Button>
            </div>
          </div>

          <!-- Conversaciones Sub-tab -->
        </div>

        <!-- Conversations Tab -->
        <div v-if="activeTab === 'conversations'" class="space-y-6">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <!-- Conversation Messages -->
            <div class="lg:col-span-2 space-y-6">
              <div class="flex items-center justify-between">
                <h3 class="text-2xl font-bold text-gray-600">
                  Conversación en Vivo
                </h3>
                <div class="flex items-center space-x-2">
                  <div
                    class="w-3 h-3 bg-green-400 rounded-full animate-pulse"
                  ></div>
                  <span
                    class="text-sm font-medium text-green-600 dark:text-green-400"
                    >Sesión Activa</span
                  >
                </div>
              </div>

              <div
                class="card rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 max-h-96 overflow-y-auto"
              >
                <div v-if="conversationStore.messages.length" class="space-y-4">
                  <MessageBubble
                    v-for="message in conversationStore.messages"
                    :key="message.id"
                    :message="message"
                  />
                </div>

                <div v-else class="text-center py-12">
                  <div
                    class="w-16 h-16 bg-gray-100 dark:bg-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  >
                    <MessageCircle
                      class="w-8 h-8 text-gray-400 dark:text-gray-500"
                    />
                  </div>
                  <p class="text-gray-600 dark:text-gray-300 mb-4">
                    No hay mensajes en esta conversación
                  </p>
                  <Button variant="primary" :icon-left="Play">
                    Iniciar Conversación
                  </Button>
                </div>
              </div>

              <!-- Recording Controls -->
              <div
                class="card rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center space-x-4">
                    <Button
                      :variant="
                        conversationStore.isRecording ? 'danger' : 'primary'
                      "
                      :icon-left="conversationStore.isRecording ? Square : Mic"
                      @click="toggleRecording"
                    >
                      {{ conversationStore.isRecording ? "Detener" : "Grabar" }}
                    </Button>

                    <div
                      v-if="conversationStore.isRecording"
                      class="flex items-center space-x-2"
                    >
                      <div class="waveform">
                        <div class="waveform-bar"></div>
                        <div class="waveform-bar"></div>
                        <div class="waveform-bar"></div>
                        <div class="waveform-bar"></div>
                        <div class="waveform-bar"></div>
                      </div>
                      <span class="text-sm text-gray-700 font-bold pulse-record"
                        >Grabando...</span
                      >
                    </div>
                  </div>

                  <div class="flex items-center space-x-2">
                    <Button variant="outline" size="sm" :icon-left="Download">
                      Exportar
                    </Button>
                    <Button variant="outline" size="sm" :icon-left="Settings">
                      Configurar
                    </Button>
                  </div>
                </div>

                <div
                  v-if="conversationStore.currentTranscript"
                  class="mt-4 p-4 card rounded-2xl"
                >
                  <p class="text-sm text-gray-600 mb-1">
                    Transcripción en tiempo real:
                  </p>
                  <p class="font-medium text-gray-900">
                    {{ conversationStore.currentTranscript }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Grading Panel -->
            <div class="lg:col-span-1">
              <GradingPanel />
            </div>
          </div>
        </div>

        <!-- Summary Tab -->
        <div v-if="activeTab === 'summary'" class="space-y-6">
          <!-- Words and Phrases Grid -->
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Words Practiced Section -->
            <div class="space-y-6">
              <div class="card p-6 hover:shadow-xl transition-all duration-300">
                <div class="flex items-center space-x-3 mb-6">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center"
                  >
                    <Type class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-medium text-gray-600 mb-1">
                      Palabras Practicadas
                    </h3>
                    <span
                      class="text-3xl font-black text-indigo-600 dark:text-indigo-400"
                      >2</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-center mb-8">
                  <div class="relative w-32 h-32">
                    <svg
                      class="w-32 h-32 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        class="dark:stroke-slate-600"
                        stroke-width="2"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="url(#gradient1)"
                        stroke-width="2"
                        stroke-dasharray="81, 100"
                        stroke-linecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient1"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            style="stop-color: #8b5cf6; stop-opacity: 1"
                          />
                          <stop
                            offset="100%"
                            style="stop-color: #3b82f6; stop-opacity: 1"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <div class="text-center">
                        <Star class="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                        <span class="text-2xl font-bold text-gray-600"
                          >81/100</span
                        >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Final Score
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Word Items -->
                <div class="space-y-4">
                  <div
                    class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-slate-700 dark:to-indigo-900/30 rounded-2xl border border-gray-100 dark:border-slate-600 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300 group"
                  >
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center"
                      >
                        <span class="text-white text-sm font-bold">S</span>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">
                          Scalability
                        </h4>
                        <div class="flex items-center space-x-2 mt-1">
                          <div class="flex items-center space-x-1">
                            <Volume2
                              class="w-3 h-3 text-gray-400 dark:text-gray-500"
                            />
                            <span
                              class="text-xs text-gray-500 dark:text-gray-400"
                              >1x</span
                            >
                          </div>
                          <div class="flex items-center space-x-1">
                            <span class="w-4 h-3 bg-red-500 rounded-sm"></span>
                            <span
                              class="text-xs font-medium text-gray-600 dark:text-gray-300"
                              >B2</span
                            >
                          </div>
                          <span
                            class="text-xs font-bold text-indigo-600 dark:text-indigo-400"
                            >76 Pts.</span
                          >
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      class="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    />
                  </div>

                  <div
                    class="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-indigo-50 dark:from-slate-700 dark:to-indigo-900/30 rounded-2xl border border-gray-100 dark:border-slate-600 hover:border-indigo-200 dark:hover:border-indigo-700 transition-all duration-300 group"
                  >
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center"
                      >
                        <span class="text-white text-sm font-bold">A</span>
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-900 dark:text-white">
                          Architecture
                        </h4>
                        <div class="flex items-center space-x-2 mt-1">
                          <div class="flex items-center space-x-1">
                            <Volume2
                              class="w-3 h-3 text-gray-400 dark:text-gray-500"
                            />
                            <span
                              class="text-xs text-gray-500 dark:text-gray-400"
                              >1x</span
                            >
                          </div>
                          <div class="flex items-center space-x-1">
                            <span class="w-4 h-3 bg-red-500 rounded-sm"></span>
                            <span
                              class="text-xs font-medium text-gray-600 dark:text-gray-300"
                              >B2</span
                            >
                          </div>
                          <span
                            class="text-xs font-bold text-indigo-600 dark:text-indigo-400"
                            >86 Pts.</span
                          >
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      class="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- Phrases Practiced Section -->
            <div class="space-y-6">
              <div class="card p-6 hover:shadow-xl transition-all duration-300">
                <div class="flex items-center space-x-3 mb-6">
                  <div
                    class="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center"
                  >
                    <MessageSquare class="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 class="text-xl font-medium text-gray-600 mb-1">
                      Frases Practicadas
                    </h3>
                    <span
                      class="text-3xl font-black text-emerald-600 dark:text-emerald-400"
                      >2</span
                    >
                  </div>
                </div>

                <div class="flex items-center justify-center mb-8">
                  <div class="relative w-32 h-32">
                    <svg
                      class="w-32 h-32 transform -rotate-90"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        class="dark:stroke-slate-600"
                        stroke-width="2"
                      />
                      <path
                        d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                        fill="none"
                        stroke="url(#gradient2)"
                        stroke-width="2"
                        stroke-dasharray="81, 100"
                        stroke-linecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="gradient2"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            style="stop-color: #10b981; stop-opacity: 1"
                          />
                          <stop
                            offset="100%"
                            style="stop-color: #06b6d4; stop-opacity: 1"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div
                      class="absolute inset-0 flex items-center justify-center"
                    >
                      <div class="text-center">
                        <Star class="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                        <span class="text-2xl font-bold text-gray-600 mb-1"
                          >81/100</span
                        >
                        <p class="text-xs text-gray-500 dark:text-gray-400">
                          Final Score
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Phrase Items -->
                <div class="space-y-4">
                  <div
                    class="p-4 bg-gradient-to-r from-gray-50 to-emerald-50 dark:from-slate-700 dark:to-emerald-900/30 rounded-2xl border border-gray-100 dark:border-slate-600 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300"
                  >
                    <div class="flex items-start justify-between mb-3">
                      <h4
                        class="font-semibold text-gray-900 dark:text-white leading-relaxed"
                      >
                        How do you ensure the security of data stored in AWS S3
                        buckets?
                      </h4>
                      <div class="flex items-center space-x-2 ml-4">
                        <div class="flex items-center space-x-1">
                          <Volume2
                            class="w-3 h-3 text-gray-400 dark:text-gray-500"
                          />
                          <span class="text-xs text-gray-500 dark:text-gray-400"
                            >1x</span
                          >
                        </div>
                        <div class="flex items-center space-x-1">
                          <span class="w-4 h-3 bg-red-500 rounded-sm"></span>
                          <span
                            class="text-xs font-medium text-gray-600 dark:text-gray-300"
                            >B2</span
                          >
                        </div>
                        <span
                          class="text-xs font-bold text-emerald-600 dark:text-emerald-400"
                          >All Pts.</span
                        >
                        <ChevronDown
                          class="w-4 h-4 text-gray-400 dark:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="p-4 bg-gradient-to-r from-gray-50 to-emerald-50 dark:from-slate-700 dark:to-emerald-900/30 rounded-2xl border border-gray-100 dark:border-slate-600 hover:border-emerald-200 dark:hover:border-emerald-700 transition-all duration-300"
                  >
                    <div class="flex items-start justify-between mb-3">
                      <h4
                        class="font-semibold text-gray-900 dark:text-white leading-relaxed"
                      >
                        What strategies would you recommend for optimizing AWS
                        costs for a startup?
                      </h4>
                      <div class="flex items-center space-x-2 ml-4">
                        <div class="flex items-center space-x-1">
                          <Volume2
                            class="w-3 h-3 text-gray-400 dark:text-gray-500"
                          />
                          <span class="text-xs text-gray-500 dark:text-gray-400"
                            >1x</span
                          >
                        </div>
                        <div class="flex items-center space-x-1">
                          <span class="w-4 h-3 bg-red-500 rounded-sm"></span>
                          <span
                            class="text-xs font-medium text-gray-600 dark:text-gray-300"
                            >B2</span
                          >
                        </div>
                        <span
                          class="text-xs font-bold text-emerald-600 dark:text-emerald-400"
                          >94 Pts.</span
                        >
                        <ChevronDown
                          class="w-4 h-4 text-gray-400 dark:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  BookOpen,
  Plus,
  Search,
  MessageSquare,
  MessageCircle,
  Play,
  Mic,
  Square,
  Download,
  Settings,
  Star,
  BarChart3,
  Type,
  Volume2,
  ChevronDown,
} from "lucide-vue-next";
import { useGlossaryStore } from "@/stores/glossary";
import { useConversationStore } from "@/stores/conversation";
import WordCard from "@/components/vocabulary/WordCard.vue";
import PhraseCard from "@/components/vocabulary/PhraseCard.vue";
import MessageBubble from "@/components/conversation/MessageBubble.vue";
import GradingPanel from "@/components/conversation/GradingPanel.vue";
import Button from "@/components/ui/Button.vue";
import {
  mockGlossaryTerms,
  mockPhrases,
  mockConversationMessages,
} from "@/mock/data";

const glossaryStore = useGlossaryStore();
const conversationStore = useConversationStore();

const activeTab = ref("vocabulary");
const mainTab = ref("vocabulary");

const toggleRecording = () => {
  conversationStore.setRecording(!conversationStore.isRecording);

  if (conversationStore.isRecording) {
    // Simulate real-time transcription
    conversationStore.setCurrentTranscript("Hola, ¿cómo está usted?");
  } else {
    conversationStore.setCurrentTranscript("");
  }
};

onMounted(() => {
  glossaryStore.setTerms(mockGlossaryTerms);
  glossaryStore.setPhrases(mockPhrases);
  conversationStore.setMessages(mockConversationMessages);
});
</script>
