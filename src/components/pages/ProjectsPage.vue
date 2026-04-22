<template>
  <MainLayout>
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Projects</h1>
        <Button variant="primary" @click="showCreateModal = true">
          + New Project
        </Button>
      </div>

      <!-- Filters -->
      <div class="flex space-x-4">
        <Input
          id="search"
          v-model="searchQuery"
          type="text"
          placeholder="Search projects..."
        />
        <select v-model="statusFilter" class="form-input">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="in_progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <!-- Projects List -->
      <Card>
        <Table
          :columns="[
            { key: 'title', label: 'Title' },
            { key: 'client_name', label: 'Client' },
            { key: 'status', label: 'Status' },
            { key: 'progress_percentage', label: 'Progress' },
          ]"
          :items="filteredProjects"
          :actions="[
            { label: 'View', callback: viewProject },
            { label: 'Edit', callback: editProject },
          ]"
        ></Table>
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'
import Button from '@/components/common/Button.vue'
import Table from '@/components/common/Table.vue'
import Input from '@/components/common/Input.vue'

const router = useRouter()
const projects = ref<any[]>([]) // Initialisé comme tableau vide
const searchQuery = ref('')
const statusFilter = ref('')
const showCreateModal = ref(false)

onMounted(async () => {
  await fetchProjects()
})

const fetchProjects = async () => {
  try {
    const res = await api.getProjects()
    projects.value = res.data || []
  } catch (err) {
    console.error('Erreur de connexion au Backend d\'Amira:', err)
  }
}

const filteredProjects = computed(() => {
  // Sécurité : si la liste est vide, on s'arrête là
  if (!projects.value) return []

  return projects.value.filter((project) => {
    // Sécurité : on gère les cas où les données seraient nulles
    const title = (project.title || '').toLowerCase()
    const client = (project.client_name || '').toLowerCase()
    const search = searchQuery.value.toLowerCase()

    const matchesSearch = title.includes(search) || client.includes(search)
    const matchesStatus = !statusFilter.value || project.status === statusFilter.value
    
    return matchesSearch && matchesStatus
  })
})

const viewProject = (project: any) => {
  if (project?.id) {
    router.push(`/projects/${project.id}`) // FIX: Backticks ajoutés
  }
}

const editProject = (project: any) => {
  console.log("Edit project:", project.id)
}
</script>
