import api from './api'
import type { Event, EventCreate, EventUpdate } from '../types/event'
export const eventsService = {
// Lister les événements
    list: () => api.getEvents(),
// Obtenir un événement par ID
    get: (id: number) => api.client.get(`/events/${id}/`),
// Créer un événement
    create: (data: EventCreate) =>
        api.client.post('/events/', data),
// Mettre à jour un événement
    update: (id: number, data: EventUpdate) =>
        api.client.put(`/events/${id}/`, data),
// Supprimer un événement
    delete: (id: number) => api.client.delete(`/events/${id}/`),
}
export default eventsService
