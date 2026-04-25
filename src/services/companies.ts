import api from './api'
import type { Company, CompanyCreate, CompanyUpdate } from '../types/company'
export const companiesService = {
// Lister toutes les entreprises
    list: () => api.getCompanies(),
// Obtenir une entreprise par ID
    get: (id: number) => api.client.get(`/companies/${id}/`),
// Créer une entreprise
    create: (data: CompanyCreate) => api.createCompany(data),
// Mettre à jour une entreprise
    update: (id: number, data: CompanyUpdate) => api.updateCompany(id, data),
// Supprimer une entreprise
    delete: (id: number) => api.deleteCompany(id),
}
export default companiesService
