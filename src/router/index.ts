import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes: RouteRecordRaw[] = [
  { 
    path: '/', 
    redirect: '/dashboard' 
  },
  { 
    path: '/login', 
    name: 'Login', 
    component: () => import('@/components/pages/LoginPage.vue') 
  },
  { 
    path: '/register', 
    name: 'Register', 
    component: () => import('@/components/pages/RegisterPage.vue') 
  },
  { 
    path: '/dashboard', 
    name: 'Dashboard',
    component: () => import('@/components/pages/DashboardPage.vue'),
    meta: { requiresAuth: true } 
  },
  { 
    path: '/companies', 
    name: 'Companies',
    component: () => import('@/components/pages/CompaniesPage.vue'),
    meta: { requiresAuth: true } 
  },
  { 
    path: '/projects', 
    name: 'Projects',
    component: () => import('@/components/pages/ProjectsPage.vue'),
    meta: { requiresAuth: true } 
  },
  { 
    path: '/projects/:id', 
    name: 'ProjectDetail',
    component: () => import('@/components/pages/ProjectDetailPage.vue'),
    meta: { requiresAuth: true } 
  },
  { 
    path: '/clients', 
    name: 'Clients',
    component: () => import('@/components/pages/ClientsPage.vue'),
    meta: { requiresAuth: true } 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Protection des routes : Redirige vers Login si l'utilisateur n'est pas connecté
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else {
    next()
  }
})

export default router
