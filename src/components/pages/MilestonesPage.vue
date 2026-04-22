<template>
  <MainLayout>
    <div class="space-y-6">
      <h1 class="text-2xl font-bold">Milestones</h1>

      <Card>
        <Table
          :columns="[
            { key: 'title', label: 'Title' },
            { key: 'status', label: 'Status' },
            { key: 'planned_date', label: 'Planned Date' },
          ]"
          :items="milestones"
        />
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'
import Table from '@/components/common/Table.vue'

const milestones = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await api.getMilestones()
    milestones.value = res.data
  } catch (err) {
    console.error('Failed to fetch milestones:', err)
  }
})
</script>
