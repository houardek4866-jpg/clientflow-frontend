import { ApiError } from './errors'

export const handleApiError = (error: any) => {
  if (error.response) {
    const { status, data } = error.response
    const message = data?.detail || data?.message || 'An error occurred'
    const code = data?.code || `ERROR_${status}`
    return new ApiError(status, code, message)
  }
  return error
}


