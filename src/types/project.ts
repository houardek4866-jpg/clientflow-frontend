export type ProjectStatus = 'pending' | 'in_progress' | 'completed'
export interface Project {
    id: number
    company: number
    client: number
    client_name?: string
    title: string
    description: string
    status: ProjectStatus
    progress_percentage: number
    quote_amount: number
    amount_paid: number
    remaining_amount: number
    start_date: string
    end_date?: string
    created_at: string
    updated_at: string
}
export interface ProjectCreate {
    company: number
    client: number
    title: string
    description: string
    status: ProjectStatus
    progress_percentage?: number
    quote_amount: number
    start_date?: string
    end_date?: string
}
export interface ProjectUpdate extends Partial<Omit<ProjectCreate, 'company'>> {}
export interface ProjectDetail extends Project {
    milestones?: any[]
    documents?: any[]
    payments?: any[]
}
export type ProjectList = Project[]
