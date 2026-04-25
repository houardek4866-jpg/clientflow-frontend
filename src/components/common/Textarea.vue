<template>
    <div class="form-group">
        <label v-if="label" :for="id" class="form-label">{{ label }}</label>
        <textarea
            :id="id"
            :value="modelValue"
            :placeholder="placeholder"
            :disabled="disabled"
            :rows="rows"
            class="form-input"
            @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
        ></textarea>
    </div>
</template>
<script setup lang="ts">
defineProps({
    id: String,
    modelValue: String,
    label: String,
    placeholder: String,
    disabled: Boolean,
    rows: {
        type: Number,
        default: 4,
    },
})
defineEmits(['update:modelValue'])
</script>