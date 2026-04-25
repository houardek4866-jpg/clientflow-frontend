<template>
    <header class="bg-white shadow sticky top-0 z-40">
        <div class="px-6 py-4 flex justify-between items-center">
            <h2 class="text-xl font-semibold text-gray-900">{{ title }}</h2>
            <div class="flex items-center space-x-4">
                <slot name="actions" />
                <div class="flex items-center space-x-3">
                    <span class="text-gray-600">{{ username }}</span>
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        class="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
defineProps({
title: String,
username: String,
})
</script>