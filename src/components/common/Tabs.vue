<template>
    <div>
        <div class="flex border-b">
            <button
                v-for="tab in (tabs as string[])"
                :key="tab"
                @click="activeTab = tab"
                :class="['px-4 py-2 border-b-2', activeTab === tab ? 'border-primary-600 font-semibold ':'']"
            > 
                {{tab }}
            </button>
        </div>
        <div class="mt-4">
            <slot :activeTab="activeTab" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
    tabs: any[]
}>()
const activeTab = ref <any> (null)
if (activeTab.value === null && props.tabs && props.tabs.length > 0) {
    activeTab.value = props.tabs[0]
}
</script>