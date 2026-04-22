<template>
  <form @submit.prevent="$emit('submit')" class="space-y-6">
    <slot />
  </form>
</template>

<script setup lang="ts">
defineEmits(['submit'])
</script>
