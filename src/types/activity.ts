export interface Activity {
    id: number
    project: number
    action: string
    description: string 
    performed_by: number
    changes: Record<string, any>
    created_at: string
}
export type ActivityList = Activity[]
