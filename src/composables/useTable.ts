import { ref, computed } from 'vue'
export interface TableColumn {
key: string
label: string
sortable?: boolean
}
export function useTable<T extends Record<string, any>>(
items: T[],
columns: TableColumn[]
) {
const sortBy = ref<string | null>(null)
const sortOrder = ref<'asc' | 'desc'>('asc')
const pageSize = ref(10)
const currentPage = ref(1)
const sortedItems = computed(() => {
if (!sortBy.value) return items
const sorted = [...items].sort((a, b) => {
const aVal = a[sortBy.value!]
const bVal = b[sortBy.value!]
const comparison = aVal < bVal ? -1 : aVal > bVal ? 1 : 0
return sortOrder.value === 'asc' ? comparison : -comparison
})
return sorted
})
const totalPages = computed(() =>
Math.ceil(sortedItems.value.length / pageSize.value)
)
const paginatedItems = computed(() => {
const start = (currentPage.value - 1) * pageSize.value
const end = start + pageSize.value
return sortedItems.value.slice(start, end)
})
const setSortBy = (key: string) => {
if (sortBy.value === key) {
sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
} else {
sortBy.value = key
sortOrder.value = 'asc'
}
currentPage.value = 1
}
const setPageSize = (size: number) => {
pageSize.value = size
currentPage.value = 1
}
const nextPage = () => {
if (currentPage.value < totalPages.value) {
currentPage.value++
}
}
const prevPage = () => {
if (currentPage.value > 1) {
currentPage.value--
}
}
return {
columns,
paginatedItems,
sortBy,
sortOrder,
pageSize,
currentPage,
totalPages,
setSortBy,
setPageSize,
nextPage,
prevPage,
}
}
