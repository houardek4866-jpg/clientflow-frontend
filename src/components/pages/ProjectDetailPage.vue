<template>
  <MainLayout>
    <div v-if="project" class="space-y-6">
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold">{{ project.title }}</h1>
          <p class="text-gray-500">Client: {{ project.client.first_name }} {{ project.client.last_name }}</p>
        </div>
        <Button variant="primary" @click="showProgressModal = true">
          Update Progress
        </Button>
      </div>

      <!-- Project Info -->
      <div class="grid grid-cols-2 gap-6">
        <Card title="Project Details">
          <div class="space-y-3">
            <div>
              <p class="text-sm text-gray-500">Status</p>
              <p class="font-semibold">{{ project.status }}</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Progress</p>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div
                  class="bg-primary-600 h-2 rounded-full"
                  :style="{ width: ${project.progress_percentage}% }"
                ></div>
              </div>
              <p class="text-sm mt-1">{{ project.progress_percentage }}%</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Start Date</p>
              <p class="font-semibold">{{ formatDate(project.start_date) }}</p>
            </div>
          </div>
        </Card>

        <Card title="Financial Info">
          <div class="space-y-3">
            <div>
              <p class="text-sm text-gray-500">Quote Amount</p>
              <p class="font-semibold">{{ project.quote_amount }} DH</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Amount Paid</p>
              <p class="font-semibold">{{ project.amount_paid }} DH</p>
            </div>
            <div>
              <p class="text-sm text-gray-500">Remaining</p>
              <p class="font-semibold text-red-600">{{ project.remaining_amount }} DH</p>
            </div>
          </div>
        </Card>
      </div>

      <!-- Milestones -->
      <Card title="Milestones">
        <div class="space-y-3">
          <div
            v-for="milestone in project.milestones"
            :key="milestone.id"
            class="p-3 border rounded"
          >
            <h4 class="font-semibold">{{ milestone.title }}</h4>
            <p class="text-sm text-gray-500">Status: {{ milestone.status }}</p>
          </div>
        </div>
      </Card>

      <!-- Progress Modal -->
      <Modal :is-open="showProgressModal" title="Update Progress" @close="showProgressModal = false" @confirm="updateProgress">
        <Input
          id="progress"
          v-model.number="newProgress"
          type="range"
          min="0"
          max="100"
          label="Progress (%)"
        />
      </Modal>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'
import Button from '@/components/common/Button.vue'
import Modal from '@/components/common/Modal.vue'
import Input from '@/components/common/Input.vue'

const route = useRoute()
const project = ref<any>(null)
const showProgressModal = ref(false)
const newProgress = ref(0)

onMounted(async () => {
  const id = route.params.id as string
  try {
    const res = await api.getProjectDetail(parseInt(id))
    project.value = res.data
    newProgress.value = project.value.progress_percentage
  } catch (err) {
    console.error('Failed to fetch project:', err)
  }
})

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}

const updateProgress = async () => {
  try {
    const id = route.params.id as string
    await api.updateProjectProgress(parseInt(id), newProgress.value)
    project.value.progress_percentage = newProgress.value
    showProgressModal.value = false
  } catch (err) {
    console.error('Failed to update progress:', err)
  }
}
</script>
