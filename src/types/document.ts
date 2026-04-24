export type DocumentType = 'delivery' | 'quote' | 'contract' | 'invoice'
export interface Document {
    id: number
    project: number
    title: string
    doc_type: DocumentType
    file: string
    version: number
    uploaded_by: number
    is_signed: boolean
    created_at: string
    updated_at: string
}
export interface DocumentCreate {
    project: number
    title: string
    doc_type: DocumentType
    file: File
    version?: number
}
export interface DocumentUpdate extends Partial<Omit<DocumentCreate, 'project'>> {}
export type DocumentList = Document[]
