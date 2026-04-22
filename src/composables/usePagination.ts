import { ref, computed } from 'vue'

export function usePagination<T>(items: T[], pageSize = 10) {
  const currentPage = ref(1)

  const totalPages = computed(() => Math.ceil(items.length / pageSize))
  const paginatedItems = computed(() => {
    const start = (currentPage.value - 1) * pageSize
    const end = start + pageSize
    return items.slice(start, end)
  })

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
    currentPage,
    totalPages,
    paginatedItems,
    nextPage,
    prevPage,
  }
}
