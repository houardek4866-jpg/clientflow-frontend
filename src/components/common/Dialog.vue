<template>
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <slot />
        </div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    isOpen: Boolean,
})
</script>

