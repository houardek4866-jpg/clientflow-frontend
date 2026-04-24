export interface Company {
    id: number
    owner: number
    name: string
    slug: string
    email: string
    phone: string
    address?: string
    industry?: string
    created_at: string
    updated_at: string
    is_active: boolean
}
export interface CompanyCreate {
    name: string
    email: string
    phone?: string
    address?: string
    industry?: string
}
export interface CompanyUpdate extends Partial<CompanyCreate> {}
export type CompanyList = Company[]
