<template>
    <div class="form-group">
        <label v-if="label" :for="id" class="form-label">{{ label }}</label>
        <select
            :id="id"
            :value="modelValue"
            :disabled="disabled"
            class="form-input"
            @input="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        > 
            <option v-if= "placeholder" value="">{{ placeholder }}</option>
            <option v-for= "option in (options as any[])" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
    </div>
</template>
<script setup lang="ts">
defineProps({
    id: String,
    modelValue: String,
    label: String,
    placeholder: String,
    disabled: Boolean,
    options: {
        type: Array,
        required: true,
    },
})
defineEmits(['update:modelValue'])
</script>
