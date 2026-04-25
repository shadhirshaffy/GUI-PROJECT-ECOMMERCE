<template>
  <div class="fixed inset-0 z-[100] flex justify-end">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>
    
    <!-- Slide-over -->
    <div class="relative w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl h-full flex flex-col transition-transform transform border-l border-gray-200 dark:border-slate-800">
      
      <!-- Header -->
      <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
        <h2 class="text-xl font-bold text-gray-900 dark:text-white">Your Cart</h2>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <div v-if="cartStore.items.length === 0" class="text-center text-gray-500 mt-10">
          <p>Your cart is empty.</p>
        </div>

        <div v-for="item in cartStore.items" :key="item.id" class="flex gap-4">
          <img :src="item.thumbnail" :alt="item.title" class="w-20 h-20 object-cover rounded-lg bg-gray-100 dark:bg-slate-800" />
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h3 class="text-sm font-bold text-gray-900 dark:text-white line-clamp-1">{{ item.title }}</h3>
              <p class="text-sm text-gray-500 dark:text-gray-400">${{ item.price }}</p>
            </div>
            
            <div class="flex items-center justify-between mt-2">
              <div class="flex items-center border border-gray-200 dark:border-slate-700 rounded-md">
                <button @click="cartStore.updateQuantity(item.id, item.quantity - 1)" class="px-2 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-l-md">-</button>
                <span class="px-2 text-sm text-gray-900 dark:text-white">{{ item.quantity }}</span>
                <button @click="cartStore.updateQuantity(item.id, item.quantity + 1)" class="px-2 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-r-md">+</button>
              </div>
              <button @click="cartStore.removeFromCart(item.id)" class="text-sm text-rose-500 hover:text-rose-600">Remove</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="border-t border-gray-200 dark:border-slate-800 p-6 bg-gray-50 dark:bg-slate-900/50">
        <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
          <p>Subtotal</p>
          <p>${{ cartStore.totalPrice.toFixed(2) }}</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400 mb-6">Shipping and taxes calculated at checkout.</p>
        <button class="w-full flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 dark:bg-cyan-600 dark:hover:bg-cyan-500">
          Checkout
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

defineEmits<{ (e: 'close'): void }>()
const cartStore = useCartStore()
</script>
