import api from './api'
import type { Document, DocumentCreate, DocumentUpdate } from '../types/document'
export const documentsService = {
// Lister les documents
    list: () => api.getDocuments(),
// Obtenir un document par ID
    get: (id: number) => api.client.get(`/documents/${id}/`),
// Créer un document
    create: (data: DocumentCreate) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('doc_type', data.doc_type)
        formData.append('file', data.file)
        if (data.version) {
            formData.append('version', data.version.toString())
    }
        return api.client.post('/documents/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        })
    },
// Mettre à jour un document
    update: (id: number, data: DocumentUpdate) =>
        api.client.put(`/documents/${id}/`, data),
// Supprimer un document
    delete: (id: number) => api.client.delete(`/documents/${id}/`),
// Télécharger un document
    download: (id: number) =>
        api.client.get(`/documents/${id}/download/`, { responseType: 'blob' }),
}
export default documentsService
