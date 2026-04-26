import { reactive, ref, computed } from 'vue'
export function useForm<T extends Record<string, any>>(
initialValues: T,
onSubmit: (values: T) => Promise<void> | void
) {
const values = reactive<T>({ ...initialValues })
const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const touched = reactive<Record<string, boolean>>({})
const isDirty = computed(() => {
return JSON.stringify(values) !== JSON.stringify(initialValues)
})
const isValid = computed(() => {
return Object.keys(errors).length === 0
})
const handleSubmit = async (e?: Event) => {
if (e) e.preventDefault()
isSubmitting.value = true
try {
await onSubmit(values)
} catch (err: any) {
if (err.response?.data) {
Object.assign(errors, err.response.data)
}
} finally {
isSubmitting.value = false
}
}
const resetForm = () => {
Object.assign(values, initialValues)
Object.assign(errors, {})
Object.assign(touched, {})
}
const setFieldValue = (field: keyof T, value: any) => {
values[field] = value
}
const setFieldError = (field: string, error: string) => {
errors[field] = error
}
const setFieldTouched = (field: string, isTouched = true) => {
touched[field] = isTouched
}
return {
values,
errors,
touched,
isSubmitting,
isDirty,
isValid,
handleSubmit,
resetForm,
setFieldValue,
setFieldError,
setFieldTouched,
}
}
