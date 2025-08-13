<script setup lang="ts">
import { onMounted } from "vue";
import {
  Users,
  BookOpen,
  TrendingUp,
  TrendingDown,
  Award,
  Target,
  Settings,
  Globe,
  Clock,
  Play,
  Calendar,
  MessageCircle,
  Plus,
  MoreHorizontal,
  ChevronRight,
  BarChart3,
  Eye,
  Star,
} from "lucide-vue-next";
import { useMetricsStore } from "@/stores/metrics";
import { useScenarioStore } from "@/stores/scenario";
import { useUserStore } from "@/stores/user";
import { mockMetrics, mockScenarios } from "@/mock/data";

const metricsStore = useMetricsStore();
const scenarioStore = useScenarioStore();
const userStore = useUserStore();

onMounted(() => {
  metricsStore.setMetrics(mockMetrics);
  scenarioStore.setScenarios(mockScenarios);
  scenarioStore.setCurrentScenario(mockScenarios[0]);
});
</script>

<template>
  <div class="space-y-6 lg:space-y-8">
    <!-- Welcome Section -->
    <div
      class="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 text-white dark:from-indigo-800 dark:via-purple-800 dark:to-pink-800"
    >
      <div class="relative z-10">
        <div class="flex items-center justify-between">
          <div>
            <h1 class="text-3xl font-bold mb-2">
              ¡Bienvenido de vuelta, {{ userStore.userName }}! 👋
            </h1>
            <p class="text-indigo-100 text-lg">
              ¿Listo para empoderar a tus estudiantes hoy?
            </p>
          </div>
          <div class="mascot float-animation">
            <MessageCircle class="w-16 h-16 text-white" />
          </div>
        </div>

        <div class="mt-8 flex items-center space-x-6">
          <button
            class="btn-secondary bg-white/20 border-white/30 text-white hover:bg-white hover:text-indigo-600"
          >
            Iniciar Nueva Sesión
          </button>
          <div class="flex items-center space-x-2 text-indigo-100">
            <Calendar class="w-4 h-4" />
            <span>{{
              new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })
            }}</span>
          </div>
        </div>
      </div>

      <!-- Background decoration -->
      <div class="absolute top-0 right-0 w-64 h-64 opacity-20">
        <div
          class="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full transform rotate-12"
        ></div>
      </div>
    </div>

    <!-- Key Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="card p-6 hover:shadow-xl transition-all duration-300">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 mb-1">
              Total de Estudiantes
            </p>
            <p class="text-3xl font-bold text-gray-900">
              {{ metricsStore.metrics?.totalStudents || 0 }}
            </p>
            <div class="flex items-center mt-2">
              <TrendingUp class="w-4 h-4 text-green-500 mr-1" />
              <span class="text-sm font-medium text-green-600">+5.2%</span>
              <span class="text-sm text-gray-500 ml-1">vs semana pasada</span>
            </div>
          </div>
          <div
            class="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Users class="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div class="card p-6 hover:shadow-xl transition-all duration-300">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 mb-1">
              Escenarios Activos
            </p>
            <p class="text-3xl font-bold text-gray-900">
              {{ metricsStore.metrics?.activeScenarios || 0 }}
            </p>
            <div class="flex items-center mt-2">
              <TrendingUp class="w-4 h-4 text-green-500 mr-1" />
              <span class="text-sm font-medium text-green-600">+12.1%</span>
              <span class="text-sm text-gray-500 ml-1">vs semana pasada</span>
            </div>
          </div>
          <div
            class="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center shadow-lg"
          >
            <BookOpen class="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div class="card p-6 hover:shadow-xl transition-all duration-300">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 mb-1">
              Tasa de Finalización
            </p>
            <p class="text-3xl font-bold text-gray-900">
              {{ metricsStore.metrics?.completionRate || 0 }}%
            </p>
            <div class="flex items-center mt-2">
              <TrendingUp class="w-4 h-4 text-green-500 mr-1" />
              <span class="text-sm font-medium text-green-600">+3.8%</span>
              <span class="text-sm text-gray-500 ml-1">vs semana pasada</span>
            </div>
          </div>
          <div
            class="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Target class="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div class="card p-6 hover:shadow-xl transition-all duration-300">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600 mb-1">
              Puntuación Promedio
            </p>
            <p class="text-3xl font-bold text-gray-900">
              {{ metricsStore.averageScoreFormatted }}
            </p>
            <div class="flex items-center mt-2">
              <TrendingDown class="w-4 h-4 text-red-500 mr-1" />
              <span class="text-sm font-medium text-red-600">-1.2%</span>
              <span class="text-sm text-gray-500 ml-1">vs semana pasada</span>
            </div>
          </div>
          <div
            class="w-16 h-16 gradient-warm rounded-2xl flex items-center justify-center shadow-lg"
          >
            <Award class="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </div>

    <!-- Progress Chart and Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Progress Chart -->
      <div class="lg:col-span-2">
        <div class="card p-6 lg:p-8">
          <div class="flex items-center justify-between mb-6">
            <div>
              <h2 class="text-2xl font-bold text-gray-900">
                Progreso de Estudiantes
              </h2>
              <p class="text-gray-600 mt-1">
                Seguimiento de resultados de aprendizaje a lo largo del tiempo
              </p>
            </div>
            <div class="flex space-x-2">
              <button
                class="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
              >
                7D
              </button>
              <button
                class="px-4 py-2 text-sm gradient-primary text-white rounded-xl shadow-lg"
              >
                30D
              </button>
              <button
                class="px-4 py-2 text-sm bg-gray-100 text-gray-600 rounded-xl hover:bg-gray-200 transition-colors"
              >
                90D
              </button>
            </div>
          </div>

          <!-- Chart Area -->
          <div
            class="h-64 flex items-end space-x-2 bg-gradient-to-t from-indigo-50 to-transparent rounded-2xl p-4"
          >
            <div
              v-for="(point, index) in metricsStore.metrics?.progressData || []"
              :key="index"
              class="flex-1 gradient-cool rounded-t-lg transition-all duration-500 hover:opacity-80 cursor-pointer min-h-[20px]"
              :style="{ height: `${(point.value / 100) * 100}%` }"
              :title="`${point.date}: ${point.value}%`"
            ></div>
          </div>

          <div class="flex justify-between mt-4 text-sm text-gray-500">
            <span
              v-for="(point, index) in metricsStore.metrics?.progressData || []"
              :key="index"
              class="flex-1 text-center"
            >
              {{
                new Date(point.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            </span>
          </div>
        </div>
      </div>

      <!-- Right Sidebar -->
      <div class="space-y-4">
        <!-- Current Scenario Detail -->
        <div class="card p-6">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-xl font-bold text-gray-900">Escenario Activo</h3>
            <button class="p-2 rounded-xl hover:bg-gray-100 transition-colors">
              <MoreHorizontal class="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <div v-if="scenarioStore.currentScenario" class="space-y-4">
            <div class="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2"
                alt="Scenario"
                class="w-full h-32 object-cover rounded-2xl"
              />
              <div class="absolute top-3 right-3">
                <span class="level-badge">{{
                  scenarioStore.currentScenario.level
                }}</span>
              </div>
            </div>

            <div>
              <h4 class="font-bold text-gray-900 text-lg">
                {{ scenarioStore.currentScenario.title }}
              </h4>
              <p class="text-gray-600 text-sm mt-2">
                {{ scenarioStore.currentScenario.description }}
              </p>
            </div>

            <div
              class="flex items-center justify-between pt-4 border-t border-gray-100"
            >
              <div class="flex items-center space-x-2">
                <Globe class="w-4 h-4 text-gray-400" />
                <span class="text-sm text-gray-600">{{
                  scenarioStore.currentScenario.language
                }}</span>
              </div>
              <div class="flex items-center space-x-2">
                <Clock class="w-4 h-4 text-gray-400" />
                <span class="text-sm text-gray-600"
                  >{{ scenarioStore.currentScenario.duration }}min</span
                >
              </div>
            </div>

            <button class="w-full btn-primary mt-4">
              <Play class="w-4 h-4 mr-2" />
              Continuar Sesión
            </button>
          </div>

          <div v-else class="text-center py-12">
            <BookOpen class="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p class="text-gray-500 mb-4">No hay escenario activo</p>
            <button class="btn-primary">Crear Escenario</button>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="card p-6">
          <h3 class="text-xl font-bold text-gray-900 mb-6">Acciones Rápidas</h3>

          <div class="space-y-3">
            <button
              class="w-full flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl hover:from-indigo-100 hover:to-purple-100 transition-all duration-300 group"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center"
                >
                  <MessageCircle class="w-5 h-5 text-white" />
                </div>
                <div class="text-left">
                  <p class="font-semibold text-gray-900">
                    Iniciar Conversación
                  </p>
                  <p class="text-xs text-gray-500">
                    Comenzar una nueva sesión de práctica
                  </p>
                </div>
              </div>
              <ChevronRight
                class="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors"
              />
            </button>

            <button
              class="w-full flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center"
                >
                  <BookOpen class="w-5 h-5 text-white" />
                </div>
                <div class="text-left">
                  <p class="font-semibold text-gray-900">Añadir Vocabulario</p>
                  <p class="text-xs text-gray-500">
                    Crear nuevo contenido de aprendizaje
                  </p>
                </div>
              </div>
              <ChevronRight
                class="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors"
              />
            </button>

            <button
              class="w-full flex items-center justify-between p-4 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl hover:from-orange-100 hover:to-amber-100 transition-all duration-300 group"
            >
              <div class="flex items-center space-x-3">
                <div
                  class="w-10 h-10 gradient-warm rounded-xl flex items-center justify-center"
                >
                  <BarChart3 class="w-5 h-5 text-white" />
                </div>
                <div class="text-left">
                  <p class="font-semibold text-gray-900">Ver Analíticas</p>
                  <p class="text-xs text-gray-500">
                    Información detallada de rendimiento
                  </p>
                </div>
              </div>
              <ChevronRight
                class="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Activity -->
    <div class="card p-6 lg:p-8">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h2 class="text-2xl font-bold text-gray-900">
            Actividad Reciente de Estudiantes
          </h2>
          <p class="text-gray-600 mt-1">
            Últimas evaluaciones y actualizaciones de progreso
          </p>
        </div>
        <button class="btn-secondary">Ver Todo</button>
      </div>

      <div class="overflow-x-auto -mx-6">
        <div class="min-w-full px-6">
          <table class="min-w-full">
            <thead>
              <tr class="border-b border-gray-200">
                <th
                  class="text-left py-4 px-2 sm:px-4 lg:px-6 font-semibold text-gray-700"
                >
                  Estudiante
                </th>
                <th
                  class="text-left py-4 px-2 sm:px-4 lg:px-6 font-semibold text-gray-700"
                >
                  Escenario
                </th>
                <th
                  class="text-left py-4 px-2 sm:px-4 lg:px-6 font-semibold text-gray-700"
                >
                  Puntuación
                </th>
                <th
                  class="text-left py-4 px-2 sm:px-4 lg:px-6 font-semibold text-gray-700"
                >
                  Progreso
                </th>
                <th
                  class="text-left py-4 px-2 sm:px-4 lg:px-6 font-semibold text-gray-700"
                >
                  Fecha
                </th>
                <th
                  class="text-left py-4 px-2 sm:px-4 lg:px-6 font-semibold text-gray-700"
                >
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                <td class="py-4 px-2 sm:px-4 lg:px-6">
                  <div class="flex items-center space-x-3">
                    <div
                      class="w-8 h-8 sm:w-10 sm:h-10 gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0"
                    >
                      <span class="text-sm font-bold text-white">S</span>
                    </div>
                    <div class="min-w-0">
                      <p class="font-semibold text-gray-900 truncate text-sm">
                        student1
                      </p>
                      <p class="text-xs text-gray-500 truncate hidden sm:block">
                        ID de Estudiante
                      </p>
                    </div>
                  </div>
                </td>
                <td class="py-4 px-2 sm:px-4 lg:px-6">
                  <div class="min-w-0">
                    <p class="font-medium text-gray-900 truncate text-sm">
                      Pedidos en Restaurante
                    </p>
                    <p class="text-xs text-gray-500 truncate hidden sm:block">
                      Español • Intermedio
                    </p>
                  </div>
                </td>
                <td class="py-4 px-2 sm:px-4 lg:px-6">
                  <div class="score-badge score-excellent text-xs">
                    <Star class="w-3 h-3 flex-shrink-0" />
                    <span class="hidden sm:inline">8.5/10</span>
                    <span class="sm:hidden">8.5</span>
                  </div>
                </td>
                <td class="py-4 px-2 sm:px-4 lg:px-6">
                  <div class="flex items-center space-x-2 min-w-0">
                    <div
                      class="w-12 sm:w-16 lg:w-20 h-2 bg-gray-200 rounded-full overflow-hidden flex-shrink-0"
                    >
                      <div
                        class="h-full gradient-primary transition-all duration-500"
                        style="width: 85%"
                      ></div>
                    </div>
                    <span
                      class="text-xs font-medium text-gray-600 hidden sm:inline"
                      >85%</span
                    >
                  </div>
                </td>
                <td class="py-4 px-2 sm:px-4 lg:px-6 text-gray-600">
                  <span class="hidden sm:inline">20/1/2024</span>
                  <span class="sm:hidden text-xs">20/1</span>
                </td>
                <td class="py-4 px-2 sm:px-4 lg:px-6">
                  <Button
                    variant="outline"
                    size="xs"
                    :icon-right="Eye"
                    class="sm:hidden"
                  >
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    class="hidden sm:inline-flex"
                  >
                    <span class="hidden sm:inline">Detalles</span>
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
