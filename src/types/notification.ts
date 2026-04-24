export interface Notification {
    id: number
    user: number
    notification_type: string
    title: string   
    message: string
    related_project?: number
    is_read: boolean
    created_at: string
    updated_at: string
}
export type NotificationList = Notification[]
export interface NotificationUpdate {
    is_read: boolean
}
