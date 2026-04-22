<template>
  <MainLayout>
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Events</h1>
        <Button variant="primary" @click="showCreateModal = true">
          + New Event
        </Button>
      </div>

      <Card>
        <Table
          :columns="[
            { key: 'title', label: 'Title' },
            { key: 'event_type', label: 'Type' },
            { key: 'start_datetime', label: 'Start Date' },
            { key: 'location', label: 'Location' },
          ]"
          :items="events"
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
import Button from '@/components/common/Button.vue'
import Table from '@/components/common/Table.vue'

const events = ref<any[]>([])
const showCreateModal = ref(false)

onMounted(async () => {
  try {
    const res = await api.getEvents()
    events.value = res.data
  } catch (err) {
    console.error('Failed to fetch events:', err)
  }
})
</script>
