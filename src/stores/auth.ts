import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(JSON.parse(localStorage.getItem('apexlanka-user') || 'null'))
  const isAuthenticated = computed(() => !!user.value)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const login = async (username: string, password: string) => {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 60, // optional
        })
      })

      if (!response.ok) {
        throw new Error('Invalid credentials. (Try "emilys" / "emilyspass")')
      }

      const data: User = await response.json()
      user.value = data
      localStorage.setItem('apexlanka-user', JSON.stringify(data))
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Login failed'
      throw e
    } finally {
      isLoading.value = false
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('apexlanka-user')
  }

  return { user, isAuthenticated, isLoading, error, login, logout }
})
