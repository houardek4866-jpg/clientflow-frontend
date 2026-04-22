<template>
  <MainLayout>
    <div class="space-y-6">
      <h1 class="text-2xl font-bold">Notifications</h1>

      <Card>
        <div class="space-y-3">
          <div
            v-for="notification in notifications"
            :key="notification.id"
            :class="[
              'p-4 border rounded cursor-pointer hover:bg-gray-50',
              { 'bg-blue-50 border-blue-200': !notification.is_read },
            ]"
            @click="markAsRead(notification)"
          >
            <h4 class="font-semibold">{{ notification.title }}</h4>
            <p class="text-sm text-gray-600">{{ notification.message }}</p>
            <p class="text-xs text-gray-400 mt-1">{{ formatDate(notification.created_at) }}</p>
          </div>
        </div>
      </Card>
    </div>
  </MainLayout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import api from '@/services/api'
import MainLayout from '@/components/layouts/MainLayout.vue'
import Card from '@/components/common/Card.vue'

const notifications = ref<any[]>([])

onMounted(async () => {
  await fetchNotifications()
})

const fetchNotifications = async () => {
  try {
    const res = await api.getNotifications()
    notifications.value = res.data
  } catch (err) {
    console.error('Failed to fetch notifications:', err)
  }
}

const markAsRead = async (notification: any) => {
  try {
    await api.markNotificationAsRead(notification.id)
    notification.is_read = true
  } catch (err) {
    console.error('Failed to mark notification as read:', err)
  }
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString()
}
</script>
