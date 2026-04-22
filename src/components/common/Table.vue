<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead class="bg-gray-50 border-b">
        <tr>
          <th
            v-for="column in columns"
            :key="column.key"
            class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
          >
            {{ column.label }}
          </th>
          <th v-if="actions" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
            Actions
          </th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="(item, index) in items" :key="index" class="hover:bg-gray-50">
          <td v-for="column in columns" :key="column.key" class="px-6 py-4 text-sm text-gray-900">
            {{ item[column.key] }}
          </td>
          <td v-if="actions" class="px-6 py-4 text-sm space-x-2">
            <button
              v-for="action in actions"
              :key="action.label"
              @click="action.callback(item)"
              :class="[
                'px-3 py-1 text-xs rounded',
                action.variant === 'danger'
                  ? 'bg-red-100 text-red-700 hover:bg-red-200'
                  : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
              ]"
            >
              {{ action.label }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
interface Column {
  key: string
  label: string
}

interface Action {
  label: string
  callback: (item: any) => void
  variant?: 'primary' | 'danger'
}

defineProps({
  columns: {
    type: Array as any,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
  actions: Array as any,
})
</script>
