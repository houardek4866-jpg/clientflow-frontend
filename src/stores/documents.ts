import { defineStore } from 'pinia'
import { ref } from 'vue'
import documentsService from '../services/documents'
import type { Document, DocumentCreate } from '../types/document'
export const useDocumentsStore = defineStore('documents', () => {
    const documents = ref<Document[]>([])
    const isLoading = ref(false)
    const error = ref<string | null>(null)
    const fetchDocuments = async () => {
        isLoading.value = true
        error.value = null
        try {
            const res = await documentsService.list()
            documents.value = res.data
            } catch (err: any) {
            error.value = err.message
            } finally {
            isLoading.value = false
            }
        }
    const createDocument = async (data: DocumentCreate) => {
        try {
        const res = await documentsService.create(data)
        documents.value.push(res.data)
        return res.data
        } catch (err: any) {
        error.value = err.message
        throw err
        }
    }
    const updateDocument = async (id: number, data: any) => {
        try {
            const res = await documentsService.update(id, data)
            const index = documents.value.findIndex(d => d.id === id)
            if (index > -1) {
                documents.value[index] = res.data
            }

            return res.data
            } catch (err: any) {
            error.value = err.message
            throw err
            }
        }
    const deleteDocument = async (id: number) => {
        try {
            await documentsService.delete(id)
            documents.value = documents.value.filter(d => d.id !== id)
        } catch (err: any) {
        error.value = err.message
        throw err
        }
    }
    return {
        documents,  
        isLoading,
        error,
        fetchDocuments,
        createDocument,
        updateDocument,
        deleteDocument,
    }
})
