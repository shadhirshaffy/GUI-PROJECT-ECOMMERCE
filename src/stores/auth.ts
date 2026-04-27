import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<{ name: string; email: string } | null>(null)
  const isAuthenticated = ref(false)

  const login = (email: string, name: string = 'Operative') => {
    user.value = { email, name }
    isAuthenticated.value = true
  }

  const logout = () => {
    user.value = null
    isAuthenticated.value = false
  }

  return { user, isAuthenticated, login, logout }
})
