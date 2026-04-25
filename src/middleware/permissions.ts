import { useAuthStore } from '../stores'
import type { Router, RouteLocationNormalized } from 'vue-router'

export function setupPermissionGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, _from, next) => {
    const authStore = useAuthStore()
    const requiredPermission = to.meta?.permission as string | undefined

    if (requiredPermission) {
      const userPermissions = authStore.user?.permissions || []
      const hasPermission = userPermissions.includes(requiredPermission)

      if (!hasPermission) {
        // Si l'utilisateur n'a pas le droit, on l'envoie vers une page 403
        return next('/403')
      }
    }
    next()
  })
}

