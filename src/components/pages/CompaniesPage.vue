<template>
  <MainLayout>
    <div class="space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <h1 class="text-2xl font-bold">Companies</h1>
        <Button variant="primary" @click="showCreateModal = true">
          + New Company
        </Button>
      </div>

      <!-- Companies List -->
      <Card>
        <div v-if="companies.length" class="space-y-3">
          <div
            v-for="company in companies"
            :key="company.id"
            class="p-4 border rounded hover:bg-gray-50 flex justify-between items-center"
          >
            <div>
              <h3 class="font-semibold">{{ company.name }}</h3>
              <p class="text-sm text-gray-500">{{ company.email }}</p>
            </div>
            <div class="space-x-2">
              <Button variant="secondary" size="sm" @click="editCompany(company)">
                Edit
              </Button>
              <Button variant="secondary" size="sm" @click="deleteCompany(company.id)">
                Delete
              </Button>
            </div>
          </div>
        </div>
        <p v-else class="text-gray-500">No companies found</p>
      </Card>

      <!-- Create/Edit Modal -->
      <Modal
        :is-open="showCreateModal"
        :title="editingCompany ? 'Edit Company' : 'New Company'"
        @close="showCreateModal = false"
        @confirm="saveCompany"
      >
        <Form class="space-y-4">
          <Input
            id="company-name"
            v-model="form.name"
            label="Company Name"
            placeholder="Enter company name"
            required
          />
          <Input
            id="company-email"
            v-model="form.email"
            type="email"
            label="Email"
            placeholder="company@example.com"
            required
          />
          <Input
            id="company-phone"
            v-model="form.phone"
            label="Phone"
            placeholder="+212 600 000 000"
          />
          <Input
            id="company-address"
            v-model="form.address"
            label="Address"
            placeholder="Enter address"
          />
        </Form>
      </Modal>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'
import Button from '@/components/common/Button.vue'
import Modal from '@/components/common/Modal.vue'
import Form from '@/components/common/Form.vue'
import Input from '@/components/common/Input.vue'

const companies = ref<any[]>([])
const showCreateModal = ref(false)
const editingCompany = ref<any>(null)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
})

onMounted(async () => {
  await fetchCompanies()
})

const fetchCompanies = async () => {
  try {
    const res = await api.getCompanies()
    companies.value = res.data
  } catch (err) {
    console.error('Failed to fetch companies:', err)
  }
}

const editCompany = (company: any) => {
  editingCompany.value = company
  form.name = company.name
  form.email = company.email
  form.phone = company.phone
  form.address = company.address
  showCreateModal.value = true
}

const saveCompany = async () => {
  try {
    if (editingCompany.value) {
      await api.updateCompany(editingCompany.value.id, form)
    } else {
      await api.createCompany(form)
    }
    await fetchCompanies()
    showCreateModal.value = false
    editingCompany.value = null
    form.name = ''
    form.email = ''
    form.phone = ''
    form.address = ''
  } catch (err) {
    console.error('Failed to save company:', err)
  }
}

const deleteCompany = async (id: number) => {
  if (confirm('Are you sure?')) {
    try {
      await api.deleteCompany(id)
      await fetchCompanies()
    } catch (err) {
      console.error('Failed to delete company:', err)
    }
  }
}
</script>
