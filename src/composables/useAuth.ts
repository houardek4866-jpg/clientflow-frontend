import { computed } from 'vue'
import { useAuthStore } from '@/stores'
export function useAuth() {
const authStore = useAuthStore()
const isAuthenticated = computed(() => authStore.isAuthenticated)
const user = computed(() => authStore.username)
const email = computed(() => authStore.email)
const isLoading = computed(() => authStore.isLoading)
const error = computed(() => authStore.error)
const login = (username: string, password: string) =>
authStore.login(username, password)
const logout = () => authStore.logout()
return {
isAuthenticated,
user,
email,
isLoading,
error,
login,
logout,
}
}
