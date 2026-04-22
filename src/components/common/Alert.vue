<template>
  <div
    :class="[
      'px-4 py-3 rounded border',
      {
        'bg-red-50 border-red-200 text-red-700': type === 'error',
        'bg-green-50 border-green-200 text-green-700': type === 'success',
        'bg-blue-50 border-blue-200 text-blue-700': type === 'info',
        'bg-yellow-50 border-yellow-200 text-yellow-700': type === 'warning',
      },
    ]"
  >
    {{ message }}
  </div>
</template>

<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value: string) => ['error', 'success', 'info', 'warning'].includes(value),
  },
  message: {
    type: String,
    required: true,
  },
})
</script>
