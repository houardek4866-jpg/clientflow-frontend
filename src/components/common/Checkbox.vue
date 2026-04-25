<template>
    <div class="form-group">
        <label :for="id" class="flex items-center cursor-pointer">
            <input
                :id="id"
                type="checkbox"
                :checked="modelValue"
                :disabled="disabled"
                class="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
            />
            <span v-if="label" class="ml-2 text-sm text-gray-700">{{ label }}</span>
        </label>
    </div>
</template>
<script setup lang="ts">
defineProps({
    id: String,
    modelValue: Boolean,
    label: String,
    disabled: Boolean,
})
defineEmits(['update:modelValue'])
</script>