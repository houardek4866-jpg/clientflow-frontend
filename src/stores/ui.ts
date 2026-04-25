import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    toasts: [] as { id: number; message: string; type: string }[]
  }),
  actions: {
    addToast(message: string, type: string = 'info') {
      const id = Date.now()
      this.toasts.push({ id, message, type })
      setTimeout(() => {
        this.toasts = this.toasts.filter(t => t.id !== id)
      }, 3000)
    }
  }
})
