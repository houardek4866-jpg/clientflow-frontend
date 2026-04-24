export interface SuccessResponse<T> {
    success: true
    data: T
    message?: string
}
export interface ErrorResponse {
    success: false
    error: string
    details?: Record<string, any>
    code?: string
}
export interface PaginatedList<T> {
    items: T[]
    total: number
    page: number
    pageSize: number
    hasMore: boolean
}
