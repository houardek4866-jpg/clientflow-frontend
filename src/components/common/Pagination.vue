<template>
    <div class="flex items-center justify-center space-x-2">
        <button
            @click="$emit('prev')"
            :disabled="currentPage === 1"
            class="px-3 py-1 border rounded disabled:opacity-50"
        > 
            ←Previous
        </button>
        <span class="text-sm">Page {{ currentPage }} of {{ totalPages }}</span>
        <button
            @click="$emit('next')"
            :disabled="currentPage === totalPages"
            class="px-3 py-1 border rounded disabled:opacity-50"
        > 
            Next→
        </button>
    </div>
</template>
<script setup lang="ts">
defineProps({
    currentPage: Number,
    totalPages: Number,
})
defineEmits(['prev', 'next'])
</script>