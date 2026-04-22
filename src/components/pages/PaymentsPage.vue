PaymentsPage.vue << 'EOF'
<template>
  <MainLayout>
    <div class="space-y-6">
      <h1 class="text-2xl font-bold">Payments</h1>

      <!-- Filter by status -->
      <div class="flex space-x-4">
        <select v-model="statusFilter" class="form-input">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="failed">Failed</option>
        </select>
      </div>

      <Card>
        <Table
          :columns="[
            { key: 'amount', label: 'Amount' },
            { key: 'status', label: 'Status' },
            { key: 'payment_method', label: 'Method' },
            { key: 'due_date', label: 'Due Date' },
          ]"
          :items="filteredPayments"
        />
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'
import Table from '@/components/common/Table.vue'

const payments = ref<any[]>([])
const statusFilter = ref('')

onMounted(async () => {
  try {
    const res = await api.getPayments()
    payments.value = res.data
  } catch (err) {
    console.error('Failed to fetch payments:', err)
  }
})

const filteredPayments = computed(() => {
  return statusFilter.value
    ? payments.value.filter((p) => p.status === statusFilter.value)
    : payments.value
})
</script>


