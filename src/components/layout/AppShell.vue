<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 flex">
    <!-- Sidebar -->
    <aside
      :class="[
        'fixed inset-y-0 left-0 z-50 w-80 md:w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 overflow-y-auto sidebar',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <!-- Logo Section -->
      <div
        class="flex items-center justify-between h-20 md:h-24 px-4 md:px-6 border-b border-gray-100 bg-gradient-to-r from-white to-indigo-50"
      >
        <div class="flex items-center space-x-3">
          <div
            class="w-10 h-10 md:w-14 md:h-14 gradient-primary rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle class="w-5 h-5 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1
              class="text-lg md:text-2xl font-black text-gray-900 tracking-tight"
            >
              LingoQuesto
            </h1>
            <p class="text-xs md:text-sm text-indigo-600 font-semibold">
              Panel de Profesor
            </p>
          </div>
        </div>
        <button
          @click="toggleSidebar"
          class="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <X class="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <!-- Main Navigation -->
      <nav class="mt-4 md:mt-6 px-3 md:px-4">
        <!-- Navigation Header -->
        <div class="mb-4 md:mb-6 px-2 md:px-4">
          <h3
            class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3"
          >
            Navegación
          </h3>
        </div>

        <div class="space-y-3">
          <router-link
            to="/dashboard"
            class="sidebar-item group relative overflow-hidden px-3 md:px-4 py-3"
            :class="{ active: $route.path === '/dashboard' }"
            @click="sidebarOpen = false"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                :class="
                  $route.path === '/dashboard'
                    ? 'bg-white/20'
                    : 'bg-gray-100 group-hover:bg-indigo-100'
                "
              >
                <BarChart3
                  class="w-5 h-5"
                  :class="
                    $route.path === '/dashboard'
                      ? 'text-white'
                      : 'text-gray-600 group-hover:text-indigo-600'
                  "
                />
              </div>
              <div>
                <span class="text-sm md:text-base font-semibold"
                  >Dashboard</span
                >
                <p class="text-xs opacity-75 hidden md:block">
                  Analíticas y Resumen
                </p>
              </div>
            </div>
            <ChevronRight
              class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hidden md:block"
              :class="
                $route.path === '/dashboard' ? 'text-white' : 'text-gray-400'
              "
            />
          </router-link>

          <router-link
            to="/content"
            class="sidebar-item group relative overflow-hidden px-3 md:px-4 py-3"
            :class="{ active: $route.path.includes('content') }"
            @click="sidebarOpen = false"
          >
            <div class="flex items-center space-x-4">
              <div
                class="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                :class="
                  $route.path.includes('content')
                    ? 'bg-white/20'
                    : 'bg-gray-100 group-hover:bg-cyan-100'
                "
              >
                <BookOpen
                  class="w-5 h-5"
                  :class="
                    $route.path.includes('content')
                      ? 'text-white'
                      : 'text-gray-600 group-hover:text-cyan-600'
                  "
                />
              </div>
              <div>
                <span class="text-sm md:text-base font-semibold"
                  >Centro de Contenido</span
                >
                <p class="text-xs opacity-75 hidden md:block">
                  Vocabulario y Conversaciones
                </p>
              </div>
            </div>
            <ChevronRight
              class="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 hidden md:block"
              :class="
                $route.path.includes('content') ? 'text-white' : 'text-gray-400'
              "
            />
          </router-link>
        </div>

        <!-- Divider -->
        <div class="my-6 md:my-8 px-2 md:px-4">
          <div
            class="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
          ></div>
        </div>

        <!-- Current Scenario Card -->
        <div class="mx-2 md:mx-4 mb-4 md:mb-6">
          <h3
            class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 px-2"
          >
            Sesión Activa
          </h3>
        </div>

        <div
          class="mx-2 md:mx-4 p-4 md:p-5 session-card rounded-2xl md:rounded-3xl border-2 transition-all duration-300 hover:shadow-lg"
        >
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xs md:text-sm font-bold text-gray-800">
              Escenario en Vivo
            </h3>
            <div class="flex items-center space-x-2">
              <div
                class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              ></div>
              <span class="text-xs font-medium text-green-600">Activo</span>
            </div>
          </div>

          <div v-if="currentScenario" class="space-y-3">
            <div>
              <h4 class="font-bold text-gray-900 text-sm md:text-base">
                {{ currentScenario.title }}
              </h4>
              <p class="text-xs md:text-sm text-gray-600 mt-1 leading-relaxed">
                {{ currentScenario.description }}
              </p>
            </div>

            <div class="flex items-center justify-between pt-2">
              <div class="flex items-center space-x-2">
                <span
                  class="px-2 md:px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold rounded-full uppercase tracking-wide"
                  >{{ currentScenario.level }}</span
                >
              </div>
              <div
                class="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full"
              >
                <Clock class="w-3 h-3 text-indigo-600" />
                <span class="text-xs font-semibold text-indigo-700"
                  >{{ currentScenario.duration }}min</span
                >
              </div>
            </div>

            <Button
              variant="primary"
              :icon-left="Play"
              full-width
              gradient
              class="mt-4 py-2 md:py-3 text-sm md:text-base"
            >
              Continuar Sesión
            </Button>
          </div>

          <div v-else class="text-center py-6">
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto mb-3"
            >
              <BookOpen class="w-6 h-6 md:w-8 md:h-8 text-gray-400" />
            </div>
            <p class="text-xs md:text-sm text-gray-500 mb-3">
              No hay escenario activo
            </p>
            <Button variant="primary" size="sm" gradient>
              Crear Escenario
            </Button>
          </div>
        </div>

        <!-- Quick Stats -->
        <div class="mx-2 md:mx-4 mt-6 md:mt-8 space-y-3">
          <h3
            class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2"
          >
            Estadísticas Rápidas
          </h3>

          <div
            class="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-white to-indigo-50 rounded-xl md:rounded-2xl shadow-sm border border-indigo-100 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center space-x-2">
              <div
                class="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg md:rounded-xl flex items-center justify-center"
              >
                <Users class="w-4 h-4 text-white" />
              </div>
              <span class="text-xs md:text-sm font-semibold text-gray-700"
                >Estudiantes en Línea</span
              >
            </div>
            <div class="flex items-center space-x-2">
              <span class="text-base md:text-lg font-black text-indigo-600">{{
                metricsStore.metrics?.totalStudents || 0
              }}</span>
              <div
                class="w-2 h-2 bg-green-400 rounded-full animate-pulse"
              ></div>
            </div>
          </div>

          <div
            class="flex items-center justify-between p-3 md:p-4 bg-gradient-to-r from-white to-green-50 rounded-xl md:rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-all duration-300"
          >
            <div class="flex items-center space-x-2">
              <div
                class="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg md:rounded-xl flex items-center justify-center"
              >
                <TrendingUp class="w-4 h-4 text-white" />
              </div>
              <span class="text-xs md:text-sm font-semibold text-gray-700"
                >Tasa de Finalización</span
              >
            </div>
            <div class="flex items-center space-x-1">
              <span class="text-base md:text-lg font-black text-green-600"
                >{{ metricsStore.metrics?.completionRate || 0 }}%</span
              >
              <div
                class="w-5 h-5 md:w-6 md:h-6 bg-green-100 rounded-full flex items-center justify-center"
              >
                <TrendingUp class="w-3 h-3 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <!-- User Profile -->
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col lg:ml-0">
      <!-- Enhanced Top Header -->
      <header
        class="bg-white shadow-sm border-b border-gray-100 h-16 md:h-20 lg:h-24 flex items-center justify-between px-4 md:px-6 lg:px-8 relative overflow-hidden header"
      >
        <!-- Background Gradient -->
        <div
          class="absolute inset-0 bg-gradient-to-r from-white via-indigo-50/30 to-purple-50/30"
        ></div>

        <div class="relative z-10 flex items-center space-x-6">
          <button
            @click="toggleSidebar"
            class="lg:hidden p-2 md:p-3 rounded-xl md:rounded-2xl hover:bg-indigo-100 transition-all duration-300"
          >
            <Menu class="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <div class="flex items-center space-x-3 md:space-x-4">
            <div
              class="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 gradient-primary rounded-2xl md:rounded-3xl flex items-center justify-center shadow-xl"
            >
              <component
                :is="pageIcon"
                class="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white"
              />
            </div>
            <div>
              <div class="flex items-center space-x-3">
                <h1
                  class="text-lg md:text-2xl lg:text-3xl font-black text-gray-900 tracking-tight"
                >
                  Bienvenida {{ userStore.userName.split(" ")[0] }}
                </h1>
                <div
                  class="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Star
                    class="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-white"
                  />
                </div>
              </div>
              <p
                class="text-sm md:text-base text-indigo-600 font-semibold hidden sm:block"
              >
                ¿Lista para empoderar a tus estudiantes hoy?
              </p>
            </div>
          </div>
        </div>

        <div class="relative z-10 flex items-center space-x-2 md:space-x-4">
          <!-- Enhanced Achievement Badges -->
          <div class="hidden lg:flex items-center space-x-3">
            <!-- Streak Indicator -->
            <div
              class="flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Zap class="w-4 h-4" />
              <span class="font-bold text-sm">25 Días</span>
            </div>

            <!-- Points -->
            <div
              class="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Star class="w-4 h-4" />
              <span class="font-bold text-sm">1,250</span>
            </div>
          </div>

          <!-- Enhanced Action Buttons -->
          <div class="flex items-center space-x-2 md:space-x-3">
            <!-- Theme Toggle -->
            <button
              @click="settingsStore.toggleTheme"
              class="p-2 md:p-3 rounded-xl md:rounded-2xl hover:bg-indigo-100 transition-all duration-300 hover:scale-110 group"
            >
              <Sun
                v-if="settingsStore.isDarkMode"
                class="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-indigo-600"
              />
              <Moon
                v-else
                class="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-indigo-600"
              />
            </button>

            <!-- Notifications -->
            <button
              class="relative p-2 md:p-3 rounded-xl md:rounded-2xl hover:bg-indigo-100 transition-all duration-300 hover:scale-110 group"
            >
              <Bell
                class="w-5 h-5 md:w-6 md:h-6 text-gray-600 group-hover:text-indigo-600"
              />
              <span
                class="absolute -top-1.5 -right-1.5 w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-red-400 to-pink-500 text-white text-xs rounded-full flex items-center justify-center font-bold shadow-lg"
                >3</span
              >
            </button>

            <!-- User Menu -->
            <div class="relative">
              <!-- Debug indicator -->
              <div
                v-if="showUserMenu"
                class="fixed top-4 left-4 bg-red-500 text-white px-2 py-1 rounded z-[10000]"
              >
                MENU OPEN: {{ showUserMenu }}
              </div>

              <button
                @click.stop="showUserMenu = !showUserMenu"
                class="flex items-center space-x-2 md:space-x-3 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl md:rounded-2xl px-3 md:px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div class="relative">
                  <img
                    :src="userStore.userAvatar"
                    :alt="userStore.userName"
                    class="w-6 h-6 md:w-8 md:h-8 rounded-lg md:rounded-xl object-cover"
                  />
                  <div
                    class="absolute -bottom-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full border-2 border-white shadow-sm"
                  ></div>
                </div>
                <span
                  class="font-semibold text-gray-900 hidden md:block text-sm md:text-base"
                  >{{ userStore.userName }}</span
                >
                <ChevronDown
                  class="w-4 h-4 text-gray-500 transition-transform duration-200"
                  :class="{ 'rotate-180': showUserMenu }"
                />
              </button>

              <!-- User Dropdown Menu -->
              <Teleport to="body">
                <div
                  v-if="showUserMenu"
                  class="fixed inset-0 z-[9998]"
                  @click="showUserMenu = false"
                ></div>
              </Teleport>

              <Teleport to="body">
                <div
                  v-if="showUserMenu"
                  class="fixed top-20 right-8 w-48 md:w-56 bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 py-2 z-[9999]"
                  @click.stop
                >
                  <div class="px-4 py-3 border-b border-gray-100">
                    <div class="flex items-center space-x-3">
                      <img
                        :src="userStore.userAvatar"
                        :alt="userStore.userName"
                        class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover"
                      />
                      <div>
                        <p
                          class="font-semibold text-gray-900 text-sm md:text-base"
                        >
                          {{ userStore.userName }}
                        </p>
                        <p class="text-xs md:text-sm text-gray-500">
                          Profesora de Idiomas
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="py-2">
                    <button
                      @click="openSettings"
                      class="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm md:text-base"
                    >
                      <Settings class="w-4 h-4" />
                      <span>Configuración</span>
                    </button>
                    <button
                      @click="logout"
                      class="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors text-sm md:text-base"
                    >
                      <LogOut class="w-4 h-4" />
                      <span>Cerrar sesión</span>
                    </button>
                  </div>
                </div>
              </Teleport>

              <div
                v-if="showUserMenu"
                class="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 py-2 z-[9999] opacity-0 pointer-events-none"
                @click.stop
              >
                <div class="px-4 py-3 border-b border-gray-100">
                  <div class="flex items-center space-x-3">
                    <img
                      :src="userStore.userAvatar"
                      :alt="userStore.userName"
                      class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl object-cover"
                    />
                    <div>
                      <p
                        class="font-semibold text-gray-900 text-sm md:text-base"
                      >
                        {{ userStore.userName }}
                      </p>
                      <p class="text-xs md:text-sm text-gray-500">
                        Profesora de Idiomas
                      </p>
                    </div>
                  </div>
                </div>

                <div class="py-2">
                  <button
                    @click="openSettings"
                    class="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm md:text-base"
                  >
                    <Settings class="w-4 h-4" />
                    <span>Configuración</span>
                  </button>
                  <button
                    @click="logout"
                    class="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 transition-colors text-sm md:text-base"
                  >
                    <LogOut class="w-4 h-4" />
                    <span>Cerrar sesión</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main
        class="flex-1 overflow-auto p-4 md:p-6 bg-gradient-to-br from-slate-50 to-indigo-50"
      >
        <slot />
      </main>
    </div>

    <!-- Mobile Overlay -->
    <div
      v-if="sidebarOpen"
      @click="toggleSidebar"
      class="fixed inset-0 bg-purple-100/20 backdrop-blur-sm z-40 lg:hidden"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import {
  BookOpen,
  BarChart3,
  Menu,
  X,
  Bell,
  Sun,
  Moon,
  Settings,
  MessageCircle,
  Users,
  TrendingUp,
  Clock,
  Zap,
  Star,
  ChevronRight,
  ChevronDown,
  Play,
  LogOut,
} from "lucide-vue-next";
import { useUserStore } from "@/stores/user";
import { useScenarioStore } from "@/stores/scenario";
import { useSettingsStore } from "@/stores/settings";
import { useMetricsStore } from "@/stores/metrics";
import Button from "@/components/ui/Button.vue";

const route = useRoute();
const userStore = useUserStore();
const scenarioStore = useScenarioStore();
const settingsStore = useSettingsStore();
const metricsStore = useMetricsStore();

const sidebarOpen = ref(false);
const showUserMenu = ref(false);

const currentScenario = computed(() => scenarioStore.currentScenario);

const pageIcon = computed(() => {
  switch (route.name) {
    case "dashboard":
      return BarChart3;
    case "content":
      return BookOpen;
    default:
      return MessageCircle;
  }
});

const pageTitle = computed(() => {
  switch (route.name) {
    case "dashboard":
      return "Teaching Dashboard";
    case "content":
      return "Content Management";
    default:
      return "LingoQuesto";
  }
});

const pageSubtitle = computed(() => {
  switch (route.name) {
    case "dashboard":
      return "Monitor student progress and manage scenarios";
    case "content":
      return "Create and organize learning materials";
    default:
      return "Language Learning Platform";
  }
});

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const openSettings = () => {
  showUserMenu.value = false;
  // Settings logic here
  console.log("Opening settings");
};

const logout = () => {
  showUserMenu.value = false;
  userStore.logout();
  // Redirect logic here
  console.log("Logging out");
};

// Close user menu when clicking outside
const handleClickOutside = () => {
  showUserMenu.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>
