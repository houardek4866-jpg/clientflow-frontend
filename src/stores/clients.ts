import { defineStore } from 'pinia'
import { ref } from 'vue'
import clientsService from '@/services/clients'
import type { Client, ClientCreate } from '@/types'
export const useClientsStore = defineStore('clients', () => {
const clients = ref<Client[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const fetchClients = async () => {
isLoading.value = true
error.value = null
try {
const res = await clientsService.list()
clients.value = res.data
} catch (err: any) {
error.value = err.message
} finally {
isLoading.value = false
}
}
const createClient = async (data: ClientCreate) => {
try {
const res = await clientsService.create(data)
clients.value.push(res.data)
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const updateClient = async (id: number, data: any) => {
try {
const res = await clientsService.update(id, data)
const index = clients.value.findIndex(c => c.id === id)
if (index > -1) {
clients.value[index] = res.data
}
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const deleteClient = async (id: number) => {
try {
await clientsService.delete(id)
clients.value = clients.value.filter(c => c.id !== id)
} catch (err: any) {
error.value = err.message
throw err
}
}
return {
clients,
isLoading,
error,
fetchClients,
createClient,
updateClient,
deleteClient,
}
})
