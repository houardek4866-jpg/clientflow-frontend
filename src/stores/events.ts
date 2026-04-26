import { defineStore } from 'pinia'
import { ref } from 'vue'
import eventsService from '@/services/events'
import type { Event, EventCreate } from '@/types'
export const useEventsStore = defineStore('events', () => {
const events = ref<Event[]>([])
const isLoading = ref(false)
const error = ref<string | null>(null)
const fetchEvents = async () => {
isLoading.value = true
error.value = null
try {
const res = await eventsService.list()
events.value = res.data
} catch (err: any) {
error.value = err.message
} finally {
isLoading.value = false
}
}
const createEvent = async (data: EventCreate) => {
try {
const res = await eventsService.create(data)
events.value.push(res.data)
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const updateEvent = async (id: number, data: any) => {
try {
const res = await eventsService.update(id, data)
const index = events.value.findIndex(e => e.id === id)
if (index > -1) {
events.value[index] = res.data
}
return res.data
} catch (err: any) {
error.value = err.message
throw err
}
}
const deleteEvent = async (id: number) => {
try {
await eventsService.delete(id)
events.value = events.value.filter(e => e.id !== id)
} catch (err: any) {
error.value = err.message
throw err
}
}
return {
events,
isLoading,
error,
fetchEvents,
createEvent,
updateEvent,
deleteEvent,
}
})
