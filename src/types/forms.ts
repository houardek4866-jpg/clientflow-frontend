export interface FormError {
    field: string
    message: string
}
export interface FormState {
    values: Record<string, any>
    errors: Record<string, string>
    isSubmitting: boolean
    isDirty: boolean
    isValid: boolean
}
export interface ValidationRule {
    validate: (value: any) => boolean | string
    message: string
}
export type FormSubmitCallback = (values: Record<string, any>) => Promise<void> | void
