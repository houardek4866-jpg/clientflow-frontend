// API Types
export interface ApiResponse<T> {
    data: T
    status: number
    message?: string
}
export interface ApiError {
    detail: string
    code: string
    status: number
}
export interface PaginatedResponse<T> {
    count: number
    next: string | null
    previous: string | null
    results: T[]
}
export interface ApiRequestConfig {
    headers?: Record<string, string>
    params?: Record<string, any>
    data?: any
}
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
