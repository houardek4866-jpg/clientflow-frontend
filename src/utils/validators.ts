export const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}
export const validatePassword = (password: string) =>
    password.length >= 8
export const validatePhoneNumber = (phone: string) => {
    const regex = /^[\d\s\-\+\(\)]+$/
    return regex.test(phone) && phone.length >= 10
}
export const validateUrl = (url: string) => {
    try {
        new URL(url)
        return true
} catch {
    return false
    }
}