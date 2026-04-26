import { defineStore } from 'pinia'
import { ref } from 'vue'
interface Toast {
id: string
message: string
type: 'success' | 'error' | 'info' | 'warning'
duration?: number
}
export const useUiStore = defineStore('ui', () => {
const isSidebarOpen = ref(true)
const isDarkMode = ref(false)
const toasts = ref<Toast[]>([])
const toggleSidebar = () => {
isSidebarOpen.value = !isSidebarOpen.value
}
const toggleDarkMode = () => {
isDarkMode.value = !isDarkMode.value
}
const addToast = (
message: string,
type: 'success' | 'error' | 'info' | 'warning' = 'info',
duration = 3000
) => {
const id = Date.now().toString()
const toast: Toast = { id, message, type, duration }
toasts.value.push(toast)
if (duration > 0) {
setTimeout(() => {
removeToast(id)
}, duration)
}
return id
}
const removeToast = (id: string) => {
toasts.value = toasts.value.filter(t => t.id !== id)
}
return {
isSidebarOpen,
isDarkMode,
toasts,
toggleSidebar,
toggleDarkMode,
addToast,
removeToast,
}
})
