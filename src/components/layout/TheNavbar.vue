<template>
  <nav class="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/70 dark:bg-slate-900/70 border-b border-gray-200 dark:border-slate-800 transition-colors duration-300">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2 text-indigo-600 dark:text-cyan-400">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.364 7.636a3.003 3.003 0 0 1 0 4.242M5.636 7.636a3.003 3.003 0 0 1 4.242 0M5.636 16.364a3.003 3.003 0 0 1 4.242 0M14.364 16.364a3.003 3.003 0 0 1 0-4.242M8.136 10.136 15.864 17.864M15.864 10.136 8.136 17.864M12 12h.01" />
        </svg>
        <span class="font-black text-xl tracking-tight">APEXLANKA</span>
      </router-link>

      <!-- Actions -->
      <div class="flex items-center space-x-6">
        <button @click="toggleDarkMode" class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>

        <button @click="isCartOpen = true" class="relative text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <span v-if="cartStore.totalItems > 0" class="absolute -top-2 -right-2 bg-indigo-600 dark:bg-cyan-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
            {{ cartStore.totalItems }}
          </span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useDarkMode } from '@/composables/useDarkMode'

const cartStore = useCartStore()
const isCartOpen = inject('isCartOpen') as { value: boolean }

const { isDark, toggleTheme: toggleDarkMode } = useDarkMode()
</script>
