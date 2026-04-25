<template>
    <ul class="space-y-2">
        <li v-for="item in items" :key="item.path">
            <RouterLink
                :to="item.path"
                :class="[
                    'block px-4 py-2 rounded transition',
                    isActive(item.path)
                        ? 'bg-primary-100 text-primary-600 font-semibold'
                        : 'hover:bg-gray-100',
                ]"
            > 
                {{item.label }}
            </RouterLink>
        </li>
    </ul>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
interface NavItem {
    label: string
    path: string
}
defineProps({
    items: {
        type: Array as any,
        required: true,
    },
})
const route = useRoute()
const isActive = (path: string) => route.path.startsWith(path)
</script>