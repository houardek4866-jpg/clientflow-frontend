import { ref, computed } from 'vue'
export function useFilter<T extends Record<string, any>>(
items: T[],
filterFn?: (item: T, filters: Record<string, any>) => boolean
) {
const filters = ref<Record<string, any>>({})
const filteredItems = computed(() => {
if (Object.keys(filters.value).length === 0) return items
return items.filter(item => {
if (filterFn) {
return filterFn(item, filters.value)
}
return Object.entries(filters.value).every(([key, value]) => {
if (!value) return true
const itemValue = item[key]
if (typeof itemValue === 'string') {
return itemValue.toLowerCase().includes(String(value).toLowerCase())
}
return itemValue === value
})
})
})
const setFilter = (key: string, value: any) => {
filters.value[key] = value
}
const clearFilters = () => {
filters.value = {}
}
const removeFilter = (key: string) => {
delete filters.value[key]
}
return {
filters,
filteredItems,
setFilter,
clearFilters,
removeFilter,
}
}
