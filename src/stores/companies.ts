import { defineStore } from 'pinia'
import { ref } from 'vue'
import companiesService from '../services/companies'
import type { Company, CompanyCreate } from '../types/company'
export const useCompaniesStore = defineStore('companies', () => {
    const companies = ref<Company[]>([])
    const isLoading = ref(false)
    const error = ref<string | null>(null)
    const fetchCompanies = async () => {
        isLoading.value = true
        error.value = null
        try {
            const res = await companiesService.list()
            companies.value = res.data
        } catch (err: any) {
            error.value = err.message
        } finally {
            isLoading.value = false
        }
    }
    const createCompany = async (data: CompanyCreate) => {
        try {
        const res = await companiesService.create(data)
        companies.value.push(res.data)
        return res.data
        } catch (err: any) {
            error.value = err.message
            throw err
        }
    }
    const updateCompany = async (id: number, data: any) => {
        try {
            const res = await companiesService.update(id, data)
            const index = companies.value.findIndex(c => c.id === id)
            if (index > -1) {
                companies.value[index] = res.data
            }
            return res.data
        } catch (err: any) {
            error.value = err.message
            throw err
        }
    }
    const deleteCompany = async (id: number) => {
        try {
            await companiesService.delete(id)
            companies.value = companies.value.filter(c => c.id !== id)
        } catch (err: any) {
            error.value = err.message
            throw err
        }
    }
    return {
        companies,  
        isLoading,
        error,
        fetchCompanies,
        createCompany,
        updateCompany,
        deleteCompany,
    }
})
