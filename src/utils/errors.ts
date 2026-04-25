export class ApiError extends Error {
    constructor(
        public statusCode: number,
        public code: string,
        message: string
    ) {
        super(message)
        this.name = 'ApiError'
}
}
export class ValidationError extends Error {
    constructor(
        public errors: Record<string, string>
    ) {
        super('Validation failed')
        this.name = 'ValidationError'
    }
}
export class AuthError extends Error {
    constructor(message = 'Authentication failed') {
        super(message)
        this.name = 'AuthError'
    }
}