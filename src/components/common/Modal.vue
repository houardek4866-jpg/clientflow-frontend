
<template>
  <Teleport to="body">
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
        <div class="flex justify-between items-center px-6 py-4 border-b">
          <h3 class="text-lg font-semibold">{{ title }}</h3>
          <button @click="close" class="text-gray-400 hover:text-gray-600">
            ✕
          </button>
        </div>
        <div class="px-6 py-4">
          <slot />
        </div>
        <div class="px-6 py-4 bg-gray-50 rounded-b-lg flex justify-end space-x-3">
          <Button variant="secondary" @click="close">Cancel</Button>
          <Button variant="primary" @click="confirm">Confirm</Button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import Button from './Button.vue'

defineProps({
  isOpen: Boolean,
  title: String,
})

defineEmits(['close', 'confirm'])

const close = () => {
  const emit = defineEmits(['close', 'confirm'])
  emit('close')
}

const confirm = () => {
  const emit = defineEmits(['close', 'confirm'])
  emit('confirm')
}
</script>
