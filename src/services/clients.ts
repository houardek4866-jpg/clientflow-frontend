import api from './api'
import type { Client, ClientCreate, ClientUpdate } from '@/types'
export const clientsService = {
    // Lister tous les clients
    list: () => api.getClients(),
    // Obtenir un client par ID
    get: (id: number) => api.client.get(`/clients/${id}/`),
    // Créer un client
    create: (data: ClientCreate) => api.createClient(data),
    // Mettre à jour un client
    update: (id: number, data: ClientUpdate) =>
    api.client.put(`/clients/${id}/`, data),
    // Supprimer un client
    delete: (id: number) => api.client.delete(`/clients/${id}/`),
    // Lister les clients d'une entreprise
    listByCompany: (companyId: number) =>
        api.client.get('/clients/', { params: { company: companyId } }),
}
export default clientsService
