import api from './api'
export const notificationsService = {
// Lister les notifications
    list: () => api.getNotifications(),
// Obtenir une notification par ID
    get: (id: number) => api.client.get(`/notifications/${id}/`),
// Marquer comme lu
    markAsRead: (id: number) =>
        api.markNotificationAsRead(id),
// Marquer tous comme lu
    markAllAsRead: () =>
        api.client.patch('/notifications/mark_all_as_read/'),
// Supprimer une notification
    delete: (id: number) =>
        api.client.delete(`/notifications/${id}/`),
}
export default notificationsService
