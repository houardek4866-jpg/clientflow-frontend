import api from './api'
import type { Project, ProjectCreate, ProjectUpdate } from '../types/project'
export const projectsService = {
// Lister tous les projets
    list: (params?: any) => api.getProjects(params),
    // Obtenir un projet par ID
    get: (id: number) => api.getProjectDetail(id),
    // Créer un projet
    create: (data: ProjectCreate) => api.createProject(data),
    // Mettre à jour un projet
    update: (id: number, data: ProjectUpdate) =>
    api.client.put(`/projects/${id}/`, data),
    // Mettre à jour la progression
    updateProgress: (id: number, progress: number) =>
    api.updateProjectProgress(id, progress),
    // Changer le statut
    updateStatus: (id: number, status: string) =>
        api.updateProjectStatus(id, status),
    // Supprimer un projet
    delete: (id: number) => api.client.delete(`/projects/${id}/`),
    // Lister les projets d'une entreprise
    listByCompany: (companyId: number) =>
        api.client.get('/projects/', { params: { company: companyId } }),
    // Lister les projets d'un client
    listByClient: (clientId: number) =>
        api.client.get('/projects/', { params: { client: clientId } }),
}
export default projectsService
