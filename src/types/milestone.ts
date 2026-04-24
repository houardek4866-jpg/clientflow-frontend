export type MilestoneStatus = 'pending' | 'in_progress' | 'completed'
export interface Milestone {
    id: number
    project: number
    title: string
    description: string
    status: MilestoneStatus
    order: number
    planned_date?: string
    actual_date?: string
    created_at: string
    updated_at: string
}
export interface MilestoneCreate {
    project: number
    title: string
    description: string
    status: MilestoneStatus
    order?: number
    planned_date?: string
}
export interface MilestoneUpdate extends Partial<Omit<MilestoneCreate, 'project'>> {}
export type MilestoneList = Milestone[]
