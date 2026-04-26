<template>
  <div class="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
    <!-- Centered Login Card -->
    <div class="w-full max-w-md p-8 rounded-2xl bg-white/20 dark:bg-slate-900/40 backdrop-blur-xl border border-white/40 dark:border-cyan-400/30 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(34,211,238,0.15)] animate-levitate">
      
      <div class="text-center mb-8">
        <h1 class="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 tracking-tight">
          System Access
        </h1>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Enter your credentials to continue</p>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-6">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email"
            class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-cyan-500 focus:border-cyan-400 dark:focus:border-cyan-500 transition-all duration-300 shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            placeholder="operative@apexlanka.com"
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

        <div class="flex items-center justify-between">
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

        <button 
          type="submit" 
          class="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-500 dark:text-slate-900 dark:hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-cyan-400 dark:focus:ring-offset-slate-900 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-indigo-500/30 dark:hover:shadow-cyan-500/50"
        >
          Initialize Login sequence
        </button>
      </form>
      
      <div class="mt-6 text-center text-sm">
        <span class="text-gray-600 dark:text-gray-400">Don't have clearance? </span>
        <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors">
          Request access
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Login attempt with:', { email: email.value, password: password.value })
}
</script>
