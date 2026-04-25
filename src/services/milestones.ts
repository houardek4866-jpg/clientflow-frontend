import api from './api'
import type { Milestone, MilestoneCreate, MilestoneUpdate } from '../types/milestone'
export const milestonesService = {
// Lister les milestones
    list: (projectId?: number) => api.getMilestones(projectId),
// Obtenir un milestone par ID
    get: (id: number) => api.client.get(`/milestones/${id}/`),
// Créer un milestone
    create: (data: MilestoneCreate) =>
        api.client.post('/milestones/', data),
// Mettre à jour un milestone
    update: (id: number, data: MilestoneUpdate) =>
        api.client.put(`/milestones/${id}/`, data),
// Changer le statut
    updateStatus: (id: number, status: string) =>
        api.client.patch(`/milestones/${id}/change_status/`, { status }),
// Supprimer un milestone
    delete: (id: number) => api.client.delete(`/milestones/${id}/`),
}
export default milestonesService
