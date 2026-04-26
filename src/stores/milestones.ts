import { defineStore } from 'pinia'
import { ref } from 'vue'
import milestonesService from '@/services/milestones'
import type { Milestone, MilestoneCreate } from '@/types'
export const useMilestonesStore = defineStore('milestones', () => {
const milestones = ref<Milestone[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const fetchMilestones = async (projectId?: number) => {
isLoading.value = true
error.value = null
try {
const res = await milestonesService.list(projectId)
milestones.value = res.data
} catch (err: any) {
error.value = err.message
} finally {
isLoading.value = false
}
}
const createMilestone = async (data: MilestoneCreate) => {
try {
const res = await milestonesService.create(data)
milestones.value.push(res.data)
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const updateMilestone = async (id: number, data: any) => {
try {
const res = await milestonesService.update(id, data)
const index = milestones.value.findIndex(m => m.id === id)
if (index > -1) {
milestones.value[index] = res.data
}
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const deleteMilestone = async (id: number) => {
try {
await milestonesService.delete(id)
milestones.value = milestones.value.filter(m => m.id !== id)
} catch (err: any) {
error.value = err.message
throw err
}
}
return {
milestones,
isLoading,
error,
fetchMilestones,
createMilestone,
updateMilestone,
deleteMilestone,
}
})
