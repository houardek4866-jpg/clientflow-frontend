import api from './api'

// Cette interface définit exactement ce que le Backend renvoie
interface LoginResponse {
  access: string
  refresh: string
  user: {
    id: number
    username: string
    email: string
    first_name: string
    last_name: string
  }
}

export class AuthService {
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await api.login(username, password)
    const data = response.data

    // On stocke tout dans le localStorage pour rester connecté après un refresh
    localStorage.setItem('access_token', data.access)
    localStorage.setItem('refresh_token', data.refresh)
    
    // On extrait les infos depuis l'objet 'user' imbriqué
    localStorage.setItem('user_email', data.user.email)
    localStorage.setItem('username', data.user.username)

    return data
  }

  async register(data: any): Promise<any> {
    return api.register(data)
  }

  logout(): void {
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('user_email')
    localStorage.removeItem('username')
    // On redirige vers le login proprement
    window.location.href = '/login'
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('access_token')
  }

  getToken(): string | null {
    return localStorage.getItem('access_token')
  }

  getUsername(): string | null {
    return localStorage.getItem('username')
  }

  getUserEmail(): string | null {
    return localStorage.getItem('user_email')
  }
}

export default new AuthService()
