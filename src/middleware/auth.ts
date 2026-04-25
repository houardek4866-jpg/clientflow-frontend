import { useAuthStore } from '../stores'
import type { Router, RouteLocationNormalized } from 'vue-router'

export function setupAuthGuard(router: Router) {
  router.beforeEach((to: RouteLocationNormalized, _from, next) => {
    const authStore = useAuthStore()
    
    // On force TypeScript à accepter requiresAuth
    const requiresAuth = to.meta?.requiresAuth as boolean | undefined

    if (requiresAuth && !authStore.isAuthenticated) {
      next({ name: 'login', query: { redirect: to.fullPath } })
    } else if (to.path === '/login' && authStore.isAuthenticated) {
      next('/dashboard')
    } else {
      next()
    }
  })
}

