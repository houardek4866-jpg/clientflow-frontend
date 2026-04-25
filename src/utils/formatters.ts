export const formatDate = (date: string | Date) => {
    return new Date(date).toLocaleDateString('en-US')
}
export const formatDateTime = (date: string | Date) => {
    return new Date(date).toLocaleString('en-US')
}
export const formatTime = (date: string | Date) => {
    return new Date(date).toLocaleTimeString('en-US')
}
export const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i]
}