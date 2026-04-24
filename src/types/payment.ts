export type PaymentStatus = 'pending' | 'completed' | 'failed'
export interface Payment {
id: number
project: number
amount: number
status: PaymentStatus
payment_method: string
stripe_id?: string
description?: string
due_date?: string
created_at: string
updated_at: string
}
export interface PaymentCreate {
project: number
amount: number
status: PaymentStatus
payment_method: string
description?: string
due_date?: string
}
export interface PaymentUpdate extends Partial<Omit<PaymentCreate, 'project'>> {}
export type PaymentList = Payment[]
