<template>
  <header class="w-full bg-white dark:bg-slate-900 shadow-sm border-b border-gray-200 dark:border-slate-800 transition-colors duration-300 z-50 sticky top-0">
    <!-- Top bar -->
    <div class="bg-indigo-900 dark:bg-slate-950 text-white text-sm py-2">
      <div class="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <div class="flex space-x-6 items-center">
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.036 11.036 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+94765343214</span>
          </span>
          <span class="flex items-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>apexlankamachience@gmail.com</span>
          </span>
        </div>
        <div class="mt-2 sm:mt-0 text-xs text-gray-300 tracking-wider uppercase font-semibold">
          Commercial Industrial Design
        </div>
      </div>
    </div>

    <!-- Main Navigation -->
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-3 text-indigo-700 dark:text-cyan-400 group">
        <div class="relative w-10 h-10 flex items-center justify-center bg-indigo-100 dark:bg-slate-800 rounded-lg group-hover:scale-105 transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.364 7.636a3.003 3.003 0 0 1 0 4.242M5.636 7.636a3.003 3.003 0 0 1 4.242 0M5.636 16.364a3.003 3.003 0 0 1 4.242 0M14.364 16.364a3.003 3.003 0 0 1 0-4.242M8.136 10.136 15.864 17.864M15.864 10.136 8.136 17.864M12 12h.01" />
          </svg>
          <div class="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0)] dark:group-hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-shadow duration-300"></div>
        </div>
        <span class="font-black text-2xl tracking-tighter uppercase">APEXLANKA</span>
      </router-link>

      <!-- Center Nav Links -->
      <nav class="hidden md:flex items-center space-x-8 z-50">
        <div class="relative group cursor-pointer py-6">
          <div class="flex items-center space-x-1 text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors">
            <span>Product Categories</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transform group-hover:-rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <!-- Dropdown Area -->
          <div class="absolute top-full left-0 w-56 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-100 dark:border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0">
            <div class="py-2">
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-cyan-400">Tailoring Machines</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-cyan-400">Embroidery Machines</a>
              <a href="#" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-slate-700 hover:text-indigo-600 dark:hover:text-cyan-400">Spare Parts</a>
            </div>
          </div>
        </div>
      </nav>

      <!-- Actions -->
      <div class="flex items-center space-x-5">
        <!-- Search -->
        <button class="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Toggle Dark Mode">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
          </svg>
        </button>

        <!-- User Login -->
        <router-link to="/login" class="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Login">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </router-link>

        <!-- Cart -->
        <button @click="isCartOpen = true" class="relative text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800" aria-label="Cart">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <span v-if="cartStore.totalItems > 0" class="absolute top-0 right-0 bg-indigo-600 dark:bg-cyan-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full shadow-lg">
            {{ cartStore.totalItems }}
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useDarkMode } from '@/composables/useDarkMode'

const cartStore = useCartStore()
const isCartOpen = inject('isCartOpen') as { value: boolean }

const { isDark, toggleTheme: toggleDarkMode } = useDarkMode()
</script>
