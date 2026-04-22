import { defineStore } from 'pinia'
import { ref } from 'vue'
import api from '@/services/api'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref<any[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchProjects = async (filters?: any) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.getProjects(filters)
      projects.value = response.data
    } catch (err: any) {
      error.value = err.message
    } finally {
      isLoading.value = false
    }
  }

  const updateProgress = async (id: number, progress: number) => {
    try {
      await api.updateProjectProgress(id, progress)
      const project = projects.value.find((p) => p.id === id)
      if (project) {
        project.progress_percentage = progress
      }
    } catch (err: any) {
      error.value = err.message
      throw err
    }
  }

  return {
    projects,
    isLoading,
    error,
    fetchProjects,
    updateProgress,
  }
})
