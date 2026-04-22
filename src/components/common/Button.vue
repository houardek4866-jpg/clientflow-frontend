<template>
  <button
    :aria-label="ariaLabel"
    :aria-busy="loading"
    :aria-disabled="disabled"
    :disabled="disabled || loading"
    :class="[
      'btn transition-colors duration-200',
      `btn-${variant}`,
      {
        'opacity-50 cursor-not-allowed': disabled || loading,
        'w-full': fullWidth,
      },
    ]"
    @click="$emit('click')"
  >
    <span v-if="loading" class="inline-block mr-2">
      <svg
        class="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </span>
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value: string) =>
      ['primary', 'secondary', 'danger'].includes(value),
  },
  disabled: Boolean,
  loading: Boolean,
  fullWidth: Boolean,
  ariaLabel: String,
})

defineEmits(['click'])
</script>
