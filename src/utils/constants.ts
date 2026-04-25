export const API_ENDPOINTS = {
    COMPANIES: '/companies/',
    CLIENTS: '/clients/',
    PROJECTS: '/projects/',
    MILESTONES: '/milestones/',
    DOCUMENTS: '/documents/',
    PAYMENTS: '/payments/',
    EVENTS: '/events/',
    NOTIFICATIONS: '/notifications/',
    ACTIVITIES: '/activities/',
}
export const PROJECT_STATUSES = [
    { value: 'pending', label: 'Pending' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
]
export const MILESTONE_STATUSES = [
    { value: 'pending', label: 'Pending' },
    { value: 'in_progress', label: 'In Progress' },
    { value: 'completed', label: 'Completed' },
]
export const DOCUMENT_TYPES = [
    { value: 'delivery', label: 'Delivery' },
    { value: 'quote', label: 'Quote' },
    { value: 'contract', label: 'Contract' },
    { value: 'invoice', label: 'Invoice' },
]
export const PAYMENT_STATUSES = [
    { value: 'pending', label: 'Pending' },
    { value: 'completed', label: 'Completed' },
    { value: 'failed', label: 'Failed' },
]
export const PAYMENT_METHODS = [
    { value: 'card', label: 'Credit Card' },
    { value: 'bank_transfer', label: 'Bank Transfer' },
    { value: 'check', label: 'Check' },
    { value: 'cash', label: 'Cash' },
]