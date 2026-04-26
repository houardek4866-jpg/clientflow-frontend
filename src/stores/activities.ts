import { defineStore } from 'pinia'
import { ref } from 'vue'
import activitiesService from '../services/activities'
import type { Activity } from '../types/activity'
export const useActivitiesStore = defineStore('activities', () => {
const activities = ref<Activity[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const fetchActivities = async () => {
isLoading.value = true
error.value = null
try {
const res = await activitiesService.list()
activities.value = res.data
} catch (err: any) {
error.value = err.message
} finally {
isLoading.value = false
}
}
const fetchActivitiesByProject = async (projectId: number) => {
isLoading.value = true
error.value = null
try {
const res = await activitiesService.getByProject(projectId)
activities.value = res.data
} catch (err: any) {
error.value = err.message
} finally {
isLoading.value = false
}
}
return {
activities,
isLoading,
error,
fetchActivities,
fetchActivitiesByProject,
}
})
