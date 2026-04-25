<template>
    <div
        :class="[
            'px-4 py-3 rounded shadow-lg text-white',
            {
                'bg-green-500': type === 'success',
                'bg-red-500': type === 'error',
                'bg-blue-500': type === 'info',
                'bg-yellow-500': type === 'warning',
            },
        ]"
    > 
        {{message }}
    </div>
</template>
<script setup lang="ts">
defineProps({
    message: String,
    type: {
    type: String,
    default: 'info',
    },
})
</script>