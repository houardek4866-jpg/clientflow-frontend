<template>
  <nav
    :class="[
      'w-64 bg-white shadow-lg h-screen flex flex-col transition-transform duration-300 fixed md:relative z-40',
      isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
    ]"
  >
    <div class="p-6 border-b">
      <h1 class="text-2xl font-bold text-blue-600">ClientFlow</h1>
    </div>

    <div class="mt-6 flex-grow overflow-y-auto px-4">
      <ul class="space-y-2">
        <slot />
      </ul>
    </div>

    <div class="p-4 border-t border-gray-100">
      <button
        @click="handleLogout"
        type="button"
        class="w-full flex items-center justify-center gap-2 px-4 py-2 text-red-600 font-medium hover:bg-red-50 rounded-lg transition-colors"
      >
        <span>Logout</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Correction des Props
defineProps<{
  isOpen: boolean
}>()

// Correction des Emits avec typage TypeScript
const emit = defineEmits<{
  (e: 'logout'): void
}>()

const handleLogout = () => {
  emit('logout')
}
</script>