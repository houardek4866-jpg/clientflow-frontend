<template>
    <div class="relative">
        <button @click="isOpen = !isOpen" class="btn btn-secondary">
            {{ label }} ▼
        </button>
        <div v-if="isOpen" class="absolute top-full left-0 bg-white border border-gray-200 rounded">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
defineProps({
    label: String,
})
const isOpen = ref(false)
</script>
