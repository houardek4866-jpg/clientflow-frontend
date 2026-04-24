export interface Client {
    id: number
    company: number
    first_name: string
    last_name: string
    email: string
    phone: string
    company_name?: string
    address?: string
    created_at: string
    updated_at: string
}
export interface ClientCreate {
    first_name: string
    last_name: string
    email: string
    phone: string
    company_name?: string
    address?: string
}
export interface ClientUpdate extends Partial<ClientCreate> {}
export type ClientList = Client[]
export interface ClientDetail extends Client {
projects_count?: number
}
