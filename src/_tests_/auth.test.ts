import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { useAuthStore } from '@/stores/auth'
import authService from '@/services/auth'

describe('Authentication', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(() => {
    localStorage.clear()
  })

  describe('AuthService', () => {
    it('should check isAuthenticated when no token', () => {
      expect(authService.isAuthenticated()).toBe(false)
    })

    it('should return token from localStorage', () => {
      localStorage.setItem('access_token', 'test_token')
      expect(authService.getToken()).toBe('test_token')
    })

    it('should get username from localStorage', () => {
      localStorage.setItem('username', 'testuser')
      expect(authService.getUsername()).toBe('testuser')
    })

    it('should logout and clear localStorage', () => {
      localStorage.setItem('access_token', 'test_token')
      localStorage.setItem('username', 'testuser')
      
      authService.logout()
      
      expect(localStorage.getItem('access_token')).toBeNull()
      expect(localStorage.getItem('username')).toBeNull()
    })
  })

  describe('AuthStore (Pinia)', () => {
    it('should initialize with unauthenticated state', () => {
      const store = useAuthStore()
      expect(store.isAuthenticated).toBe(false)
    })

    it('should handle logout', () => {
      const store = useAuthStore()
      store.username = 'testuser'
      store.logout()
      
      expect(store.isAuthenticated).toBe(false)
      expect(store.username).toBeNull()
    })
  })
})
