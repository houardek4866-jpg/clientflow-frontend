import { ref, watch, Ref } from 'vue'
export function useLocalStorage<T>(
key: string,
initialValue: T
): [Ref<T>, (value: T) => void] {
const storedValue = localStorage.getItem(key)
const value = ref<T>(
storedValue ? JSON.parse(storedValue) : initialValue
)
const updateValue = (newValue: T) => {
value.value = newValue
localStorage.setItem(key, JSON.stringify(newValue))
}
watch(value, updateValue, { deep: true })
return [value, updateValue]
}
