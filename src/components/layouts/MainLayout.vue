<template>
  <div class="flex h-screen bg-gray-50">
    <!-- Sidebar -->
    <nav class="w-64 bg-white shadow-lg">
      <div class="p-6 border-b">
        <h1 class="text-2xl font-bold text-primary-600">ClientFlow</h1>
      </div>

      <ul class="mt-6 space-y-2 px-4">
        <li>
          <RouterLink
            to="/dashboard"
            class="block px-4 py-2 rounded hover:bg-gray-100"
            :class="{ 'bg-primary-100 text-primary-600': isActive('/dashboard') }"
          >
            Dashboard
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/companies"
            class="block px-4 py-2 rounded hover:bg-gray-100"
            :class="{ 'bg-primary-100 text-primary-600': isActive('/companies') }"
          >
            Companies
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/projects"
            class="block px-4 py-2 rounded hover:bg-gray-100"
            :class="{ 'bg-primary-100 text-primary-600': isActive('/projects') }"
          >
            Projects
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/clients"
            class="block px-4 py-2 rounded hover:bg-gray-100"
            :class="{ 'bg-primary-100 text-primary-600': isActive('/clients') }"
          >
            Clients
          </RouterLink>
        </li>
      </ul>

      <div class="absolute bottom-6 left-4 right-4 border-t pt-4">
        <button
          @click="logout"
          class="w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded"
        >
          Logout
        </button>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <!-- Header -->
      <header class="bg-white shadow">
        <div class="px-6 py-4 flex justify-between items-center">
          <h2 class="text-xl font-semibold text-gray-900">
            {{ pageTitle }}
          </h2>
          <div class="flex items-center space-x-4">
            <span class="text-gray-600">{{ username }}</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              class="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-auto p-6">
        <slot />
      </main>

      <!-- Footer -->
      <footer class="bg-white border-t py-4 px-6 text-center text-gray-600 text-sm">
        &copy; 2026 ClientFlow. All rights reserved.
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const authStore = useAuthStore()

const username = computed(() => authStore.username)

const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/dashboard': 'Dashboard',
    '/companies': 'Companies',
    '/projects': 'Projects',
    '/clients': 'Clients',
  }
  return titles[route.path] || 'Page'
})

const isActive = (path: string) => route.path.startsWith(path)

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>
