import api from './api'
import type { Payment, PaymentCreate, PaymentUpdate } from '../types/payment'
export const paymentsService = {
// Lister les paiements
    list: () => api.getPayments(),
// Obtenir un paiement par ID
    get: (id: number) => api.client.get(`/payments/${id}/`),
// Créer un paiement
    create: (data: PaymentCreate) =>
        api.client.post('/payments/', data),
// Mettre à jour un paiement
    update: (id: number, data: PaymentUpdate) =>
        api.client.put(`/payments/${id}/`, data),
// Marquer comme payé
    markAsPaid: (id: number) =>
        api.client.patch(`/payments/${id}/mark_as_paid/`),
// Supprimer un paiement
    delete: (id: number) => api.client.delete(`/payments/${id}/`),
}
export default paymentsService
