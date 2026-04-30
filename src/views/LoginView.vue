<template>
  <div class="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
    <!-- Centered Login Card -->
    <div class="w-full max-w-md p-8 rounded-2xl bg-white/20 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-cyan-400/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(34,211,238,0.15)] animate-levitate">
      
      <div class="text-center mb-8">
        <h1 class="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 tracking-tight">
          {{ isLoginMode ? 'System Access' : 'Register Operative' }}
        </h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {{ isLoginMode ? 'Enter your credentials to continue' : 'Provide details for clearance creation' }}
        </p>
        <!-- Credential Tip -->
        <div v-if="isLoginMode" class="mt-4 p-2 bg-indigo-50 dark:bg-slate-800/50 rounded-lg border border-indigo-100 dark:border-cyan-400/20 text-[10px] text-indigo-600 dark:text-cyan-400 font-mono">
          TIP: Use "emilys" / "emilyspass"
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="authStore.error" class="mb-6 p-3 bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-500/30 rounded-lg text-xs text-rose-600 dark:text-rose-400 animate-pulse">
        {{ authStore.error }}
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-6">
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-if="!isLoginMode">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
            <input 
              type="text" 
              id="name" 
              v-model="name"
              class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-300 shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              placeholder="John Doe"
              :required="!isLoginMode"
            />
          </div>
        </Transition>

        <div>
          <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username</label>
          <input 
            type="text" 
            id="username" 
            v-model="username"
            class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-300 shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            placeholder="emilys"
            required
          />
        </div>

        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Passcode</label>
          <input 
            type="password" 
            id="password" 
            v-model="password"
            class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-300 shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            placeholder="••••••••"
            required
          />
        </div>

        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-2"
        >
          <div v-if="isLoginMode" class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" type="checkbox" class="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded dark:bg-slate-800 dark:border-slate-600">
              <label for="remember-me" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors">
                Forgot password?
              </a>
            </div>
          </div>
        </Transition>

        <button 
          type="submit" 
          :disabled="authStore.isLoading"
          class="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <template v-if="authStore.isLoading">
            <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white dark:text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </template>
          <template v-else>
            {{ isLoginMode ? 'Initialize Login sequence' : 'Signup' }}
          </template>
        </button>
      </form>
      
      <div class="mt-6 text-center text-sm">
        <span class="text-gray-600 dark:text-gray-400">
          {{ isLoginMode ? "Don't have clearance?" : "Already have clearance?" }}
        </span>
        <button 
          type="button"
          @click="isLoginMode = !isLoginMode" 
          class="ml-1 font-medium text-indigo-600 hover:text-indigo-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors focus:outline-none"
        >
          {{ isLoginMode ? "Request access" : "Initialize Login" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const isLoginMode = ref(true)
const name = ref('')
const username = ref('')
const password = ref('')

const handleSubmit = async () => {
  try {
    if (isLoginMode.value) {
      await authStore.login(username.value, password.value)
    } else {
      // Mock signup since DummyJSON doesn't have a real persistent signup
      await authStore.login(username.value, password.value)
    }
    router.push('/')
  } catch (e) {
    // Error is handled in the store and displayed in UI
  }
}
</script>
