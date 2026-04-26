import { ref } from 'vue'
export function useModal() {
const isOpen = ref(false)
const data = ref<any>(null)
const open = (modalData?: any) => {
data.value = modalData
isOpen.value = true
}
const close = () => {
isOpen.value = false
data.value = null
}
const toggle = () => {
isOpen.value = !isOpen.value
}
return {
isOpen,
data,
open,
close,
toggle,
}
}
