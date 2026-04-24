export interface Event {
    id: number
    project: number
    title: string
    description: string
    event_type: string
    start_datetime: string
    end_datetime?: string
    location?: string
    participants: number[]
    created_at: string
    updated_at: string
}
export interface EventCreate {
    project: number
    title: string
    description: string
    event_type: string
    start_datetime: string
    end_datetime?: string
    location?: string
}
export interface EventUpdate extends Partial<Omit<EventCreate, 'project'>> {}
export type EventList = Event[]
