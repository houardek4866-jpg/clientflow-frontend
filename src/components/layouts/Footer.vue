<template>
    <footer class="bg-white border-t py-4 px-6 text-center text-gray-600 text-sm">
        <p>&copy; 2026 ClientFlow. All rights reserved.</p>
        <p class="mt-1">
            <RouterLink to="/privacy" class="hover:text-primary-600">Privacy</RouterLink>
            |
            <RouterLink to="/terms" class="hover:text-primary-600">Terms</RouterLink>
            |
            <RouterLink to="/contact" class="hover:text-primary-600">Contact</RouterLink>

        </p>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>