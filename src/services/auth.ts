import api from './api'

interface LoginResponse {
  access: string
  refresh: string
  email: string
  username: string
}

export class AuthService {
  async login(username: string, password: string): Promise<LoginResponse> {
    const response = await api.login(username, password)
    const data = response.data

    // Stocker les tokens
    localStorage.setItem('access_token', data.access)
    localStorage.setItem('refresh_token', data.refresh)
    localStorage.setItem('user_email', data.email)
    localStorage.setItem('username', data.username)

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
