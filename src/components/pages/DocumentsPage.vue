<template>
  <MainLayout>
    <div class="space-y-6">
      <h1 class="text-2xl font-bold">Documents</h1>

      <Card>
        <Table
          :columns="[
            { key: 'title', label: 'Title' },
            { key: 'doc_type', label: 'Type' },
            { key: 'version', label: 'Version' },
          ]"
          :items="documents"
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

const documents = ref<any[]>([])

onMounted(async () => {
  try {
    const res = await api.getDocuments()
    documents.value = res.data
  } catch (err) {
    console.error('Failed to fetch documents:', err)
  }
})
</script>
