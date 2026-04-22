import axios, { AxiosInstance, AxiosError } from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://100.95.146.107:8000/api'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    // Add token to requests
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem('access_token')
      if (token) {
        config.headers = config.headers || {}
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    })

    // Handle errors (401)
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          localStorage.removeItem('access_token')
          window.location.href = '/login'
        }
        return Promise.reject(error)
      }
    )
  }

  // Auth
  login(username: string, password: string) {
    return this.client.post('/auth/login/', { username, password })
  }

  register(data: any) {
    return this.client.post('/auth/register/', data)
  }

  getUserProfile() {
    return this.client.get('/auth/user-profile/')
  }

  // Companies
  getCompanies() {
    return this.client.get('/companies/')
  }

  createCompany(data: any) {
    return this.client.post('/companies/', data)
  }

  updateCompany(id: number, data: any) {
    return this.client.put(`/companies/${id}/`, data)
  }

  deleteCompany(id: number) {
    return this.client.delete(`/companies/${id}/`)
  }

  // Clients
  getClients() {
    return this.client.get('/clients/')
  }

  createClient(data: any) {
    return this.client.post('/clients/', data)
  }

  // Projects
  getProjects(params?: any) {
    return this.client.get('/projects/', { params })
  }

  getProjectDetail(id: number) {
    return this.client.get(`/projects/${id}/`)
  }

  createProject(data: any) {
    return this.client.post('/projects/', data)
  }

  updateProjectProgress(id: number, progress: number) {
    return this.client.patch(`/projects/${id}/update_progress/`, {
      progress_percentage: progress,
    })
  }

  updateProjectStatus(id: number, status: string) {
    return this.client.patch(`/projects/${id}/change_status/`, { status })
  }

  // Milestones
  getMilestones(projectId?: number) {
    const params = projectId ? { project: projectId } : undefined
    return this.client.get('/milestones/', { params })
  }

  // Payments
  getPayments() {
    return this.client.get('/payments/')
  }

  // Documents
  getDocuments() {
    return this.client.get('/documents/')
  }

  // Events
  getEvents() {
    return this.client.get('/events/')
  }

  // Notifications
  getNotifications() {
    return this.client.get('/notifications/')
  }

  markNotificationAsRead(id: number) {
    return this.client.patch(`/notifications/${id}/mark_as_read/`)
  }
}

export default new ApiClient()
