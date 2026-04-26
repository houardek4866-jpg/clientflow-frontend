import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import notificationsService from '@/services/notifications'
import type { Notification } from '@/types'
export const useNotificationsStore = defineStore('notifications', () => {
const notifications = ref<Notification[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const unreadCount = computed(() =>
notifications.value.filter(n => !n.is_read).length
)
const fetchNotifications = async () => {
isLoading.value = true
error.value = null
try {
const res = await notificationsService.list()
notifications.value = res.data
} catch (err: any) {
error.value = err.message
} finally {
isLoading.value = false
}
}
const markAsRead = async (id: number) => {
try {
const res = await notificationsService.markAsRead(id)
const index = notifications.value.findIndex(n => n.id === id)
if (index > -1) {
notifications.value[index] = res.data
}
} catch (err: any) {
error.value = err.message
}
}
const markAllAsRead = async () => {
try {
await notificationsService.markAllAsRead()
notifications.value.forEach(n => (n.is_read = true))
} catch (err: any) {
error.value = err.message
}
}
const deleteNotification = async (id: number) => {
try {
await notificationsService.delete(id)
notifications.value = notifications.value.filter(n => n.id !== id)
} catch (err: any) {
error.value = err.message
}
}
return {
notifications,
isLoading,
error,
unreadCount,
fetchNotifications,
markAsRead,
markAllAsRead,
deleteNotification,
}
})
