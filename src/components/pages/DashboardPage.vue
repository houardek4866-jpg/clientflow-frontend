DashboardPage.vue << 'EOF'
<template>
  <MainLayout>
    <div class="space-y-6">
      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card title="Total Companies">
          <p class="text-3xl font-bold text-primary-600">{{ stats.companies }}</p>
        </Card>
        <Card title="Active Projects">
          <p class="text-3xl font-bold text-primary-600">{{ stats.projects }}</p>
        </Card>
        <Card title="Total Clients">
          <p class="text-3xl font-bold text-primary-600">{{ stats.clients }}</p>
        </Card>
        <Card title="Pending Payments">
          <p class="text-3xl font-bold text-red-600">{{ stats.payments }}</p>
        </Card>
      </div>

      <!-- Recent Projects -->
      <Card title="Recent Projects">
        <div v-if="recentProjects.length" class="space-y-3">
          <div
            v-for="project in recentProjects"
            :key="project.id"
            class="flex justify-between items-center p-3 border rounded hover:bg-gray-50"
          >
            <div>
              <h4 class="font-semibold">{{ project.title }}</h4>
              <p class="text-sm text-gray-500">{{ project.client_name }}</p>
            </div>
            <div class="text-right">
              <div class="w-24 bg-gray-200 rounded-full h-2">
                <div
                  class="bg-primary-600 h-2 rounded-full"
                  :style="{ width: ${project.progress_percentage}% }"
                ></div>
              </div>
              <p class="text-sm text-gray-500">{{ project.progress_percentage }}%</p>
            </div>
          </div>
        </div>
        <p v-else class="text-gray-500">No projects yet</p>
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'

const stats = ref({
  companies: 0,
  projects: 0,
  clients: 0,
  payments: 0,
})

const recentProjects = ref<any[]>([])

onMounted(async () => {
  try {
    // Fetch companies
    const companiesRes = await api.getCompanies()
    stats.value.companies = companiesRes.data.length

    // Fetch projects
    const projectsRes = await api.getProjects()
    stats.value.projects = projectsRes.data.length
    recentProjects.value = projectsRes.data.slice(0, 5)

    // Fetch clients
    const clientsRes = await api.getClients()
    stats.value.clients = clientsRes.data.length

    // Fetch payments
    const paymentsRes = await api.getPayments()
    stats.value.payments = paymentsRes.data.filter((p: any) => p.status === 'pending').length
  } catch (err) {
    console.error('Failed to fetch dashboard data:', err)
  }
})
</script>
