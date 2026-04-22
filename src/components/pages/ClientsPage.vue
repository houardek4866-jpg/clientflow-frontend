<template>
  <MainLayout>
    <div class="space-y-6">
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Clients</h1>
        <Button variant="primary" @click="showCreateModal = true">
          + New Client
        </Button>
      </div>

      <Card>
        <Table
          :columns="[
            { key: 'first_name', label: 'First Name' },
            { key: 'last_name', label: 'Last Name' },
            { key: 'email', label: 'Email' },
            { key: 'phone', label: 'Phone' },
          ]"
          :items="safeClients" 
        />
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'
import Button from '@/components/common/Button.vue'
import Table from '@/components/common/Table.vue'

const clients = ref<any[]>([])
const showCreateModal = ref(false)

onMounted(async () => {
  console.log("Chargement des clients...")
  await fetchClients()
})

const fetchClients = async () => {
  try {
    const res = await api.getClients()
    // Sécurité : on s'assure d'avoir un tableau, même vide
    clients.value = res.data || []
    console.log("Clients chargés :", clients.value.length)
  } catch (err) {
    console.error('Erreur lors de la récupération des clients:', err)
  }
}

// Sécurité : évite que le tableau plante si "clients" est temporairement null
const safeClients = computed(() => {
  return clients.value || []
})
</script>
