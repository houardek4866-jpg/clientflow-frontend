export function useDateTime() {
const formatDate = (date: string | Date, format = 'dd/MM/yyyy') => {
const d = new Date(date)
const options: Intl.DateTimeFormatOptions = {
year: 'numeric',
month: '2-digit',
day: '2-digit',
}
return d.toLocaleDateString('en-US', options)
}
const formatDateTime = (date: string | Date) => {
const d = new Date(date)
return d.toLocaleString('en-US')
}
const formatTime = (date: string | Date) => {
const d = new Date(date)
return d.toLocaleTimeString('en-US')
}
const isToday = (date: string | Date) => {
const d = new Date(date)
const today = new Date()
return d.toDateString() === today.toDateString()
}
const daysUntil = (date: string | Date) => {
const d = new Date(date)
const today = new Date()
const diff = d.getTime() - today.getTime()
return Math.ceil(diff / (1000 * 60 * 60 * 24))
}
return {
formatDate,
formatDateTime,
formatTime,
isToday,
daysUntil,
}
}
