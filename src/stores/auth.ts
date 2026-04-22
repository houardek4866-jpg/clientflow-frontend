import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import authService from '@/services/auth'

export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref(authService.isAuthenticated())
  const username = ref(authService.getUsername())
  const email = ref(authService.getUserEmail())
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const login = async (username: string, password: string) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await authService.login(username, password)
      isAuthenticated.value = true
      username.value = response.username
      email.value = response.email
      return response
    } catch (err: any) {
      error.value = err.response?.data?.detail || 'Login failed'
      throw err
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    authService.logout()
    isAuthenticated.value = false
    username.value = null
    email.value = null
  }

  return {
    isAuthenticated,
    username,
    email,
    isLoading,
    error,
    login,
    logout,
  }
})
