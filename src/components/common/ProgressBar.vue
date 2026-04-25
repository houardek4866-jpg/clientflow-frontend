<template>
    <div class="w-full bg-gray-200 rounded-full h-2">
        <div
            class="bg-primary-600 h-2 rounded-full transition-all"
            :style="{ width: ${value}% }"
        ></div>
    </div>
</template>
<script setup lang="ts">
defineProps({
    value: {
        type: Number,
        required: true,
    },
})
</script>
