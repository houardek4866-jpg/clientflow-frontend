import { ref, computed } from 'vue'
export function useSearch<T extends Record<string, any>>(
items: T[],
searchableFields: (keyof T)[]
) {
const searchQuery = ref('')
const searchResults = computed(() => {
if (!searchQuery.value.trim()) return items
const query = searchQuery.value.toLowerCase()
return items.filter(item =>
searchableFields.some(field => {
const value = item[field]
return String(value).toLowerCase().includes(query)
})
)
})
const setSearchQuery = (query: string) => {
searchQuery.value = query
}
const clearSearch = () => {
searchQuery.value = ''
}
return {
searchQuery,
searchResults,
setSearchQuery,
clearSearch,
}
}
