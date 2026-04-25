export const transformApiError = (error: any) => {
    if (error.response?.data?.detail) {
        return error.response.data.detail
    }
    if (error.response?.data) {
        return JSON.stringify(error.response.data)
    }

    return error.message || 'An error occurred'
}
export const transformToFormData = (obj: Record<string, any>) => {
    const formData = new FormData()
    Object.entries(obj).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
            formData.append(key, value)
        }
    })
    return formData
}