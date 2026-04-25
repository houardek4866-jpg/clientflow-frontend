import { useUiStore } from '../stores'

export function setupErrorHandling() {
  // On récupère le store à l'intérieur de la fonction
  const uiStore = useUiStore()

  // Capture les erreurs d'exécution (JS crash)
  window.addEventListener('error', (event: ErrorEvent) => {
    const message = event.error?.message || 'Une erreur système est survenue'
    uiStore.addToast(message, 'error')
  })

  // Capture les promesses rejetées (Erreurs API non capturées)
  window.addEventListener('unhandledrejection', (event: PromiseRejectionEvent) => {
    const message = event.reason?.message || 'Erreur de communication avec le serveur'
    uiStore.addToast(message, 'error')
  })
}

