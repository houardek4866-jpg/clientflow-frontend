import { defineStore } from 'pinia'
import { ref } from 'vue'
import paymentsService from '@/services/payments'
import type { Payment, PaymentCreate } from '@/types'
export const usePaymentsStore = defineStore('payments', () => {
const payments = ref<Payment[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const fetchPayments = async () => {
isLoading.value = true
error.value = null
try {
const res = await paymentsService.list()
payments.value = res.data
} catch (err: any) {
error.value = err.message
} finally {
isLoading.value = false
}
}
const createPayment = async (data: PaymentCreate) => {
try {
const res = await paymentsService.create(data)
payments.value.push(res.data)
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const updatePayment = async (id: number, data: any) => {
try {
const res = await paymentsService.update(id, data)
const index = payments.value.findIndex(p => p.id === id)
if (index > -1) {
payments.value[index] = res.data
}
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const markAsPaid = async (id: number) => {
try {
const res = await paymentsService.markAsPaid(id)
const index = payments.value.findIndex(p => p.id === id)
if (index > -1) {
payments.value[index] = res.data
}
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const deletePayment = async (id: number) => {
try {
await paymentsService.delete(id)
payments.value = payments.value.filter(p => p.id !== id)
} catch (err: any) {
error.value = err.message
throw err
}
}
return {
payments,
isLoading,
error,
fetchPayments,
createPayment,
updatePayment,
markAsPaid,
deletePayment,
}
})

