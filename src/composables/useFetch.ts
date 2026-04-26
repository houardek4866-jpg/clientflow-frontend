import { ref, onMounted } from 'vue'
export function useFetch<T>(
url: string,
options?: RequestInit
) {
const data = ref<T | null>(null)
const isLoading = ref(false)
const error = ref<Error | null>(null)
const execute = async () => {
isLoading.value = true
error.value = null
try {
const response = await fetch(url, options)
if (!response.ok) throw new Error(`HTTP ${response.status}`)
data.value = await response.json()
} catch (err) {
error.value = err instanceof Error ? err : new Error(String(err))
} finally {
isLoading.value = false
}
}
onMounted(() => {
execute()
})
return {
data,
isLoading,
error,
execute,
}
}
