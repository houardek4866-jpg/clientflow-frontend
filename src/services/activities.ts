import api from './api'
export const activitiesService = {
// Lister les activités
    list: () => api.client.get('/activities/'),
// Obtenir une activité par ID
    get: (id: number) => api.client.get(`/activities/${id}/`),
// Lister les activités d'un projet
    getByProject: (projectId: number) =>
        api.client.get('/activities/', { params: { project: projectId } }),
}
export default activitiesService
