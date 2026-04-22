<template>
  <div class="card">
    <div v-if="title" class="mb-4 pb-4 border-b border-gray-200">
      <h3 class="text-lg font-semibold text-gray-900">{{ title }}</h3>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
})
</script>
