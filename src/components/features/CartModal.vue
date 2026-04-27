<template>
  <div class="fixed inset-0 z-[100] flex justify-end">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" @click="$emit('close')"></div>
    
    <!-- Slide-over -->
    <div class="relative w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl h-full flex flex-col transition-transform transform border-l border-gray-200 dark:border-slate-800">
      
      <!-- Header -->
      <div class="px-6 py-4 border-b border-gray-200 dark:border-slate-800 flex justify-between items-center">
        <div class="flex items-center space-x-3">
          <button v-if="isCheckoutMode && !orderConfirmed" @click="isCheckoutMode = false" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200" aria-label="Back to Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ orderConfirmed ? 'Order Complete' : (isCheckoutMode ? 'Delivery Details' : 'Your Cart') }}
          </h2>
        </div>
        <button @click="$emit('close')" class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-6 space-y-6">
        <template v-if="orderConfirmed">
          <div class="text-center py-10">
            <div class="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Clearance Approved</h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Your order is being processed and will be dispatched shortly to {{ deliveryForm.city }}.</p>
          </div>
        </template>
        
        <template v-else-if="isCheckoutMode">
          <form class="space-y-4" @submit.prevent="handleConfirmOrder" id="checkout-form">
            <div>
              <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Delivery Address</label>
              <input type="text" id="address" v-model="deliveryForm.address" required class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]" placeholder="123 Main St" />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Phone Number</label>
              <input type="tel" id="phone" v-model="deliveryForm.phone" required class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]" placeholder="+94 77 123 4567" />
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="city" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">City</label>
                <input type="text" id="city" v-model="deliveryForm.city" required class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]" placeholder="Colombo" />
              </div>
              <div>
                <label for="zip" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Postal Area Code</label>
                <input type="text" id="zip" v-model="deliveryForm.zip" required class="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all shadow-[0_0_0_0_rgba(34,211,238,0)] focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]" placeholder="00100" />
              </div>
            </div>
          </form>
        </template>

        <template v-else>
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
        </template>
      </div>

      <!-- Footer -->
      <div v-if="!orderConfirmed && cartStore.items.length > 0" class="border-t border-gray-200 dark:border-slate-800 p-6 bg-gray-50 dark:bg-slate-900/50">
        <div class="flex justify-between text-base font-medium text-gray-900 dark:text-white mb-4">
          <p>Total Amount</p>
          <p>${{ cartStore.totalPrice.toFixed(2) }}</p>
        </div>
        <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400 mb-6">Shipping and taxes included.</p>
        
        <button v-if="!isCheckoutMode" @click="isCheckoutMode = true" class="w-full flex items-center justify-center rounded-xl border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-all duration-300">
          Proceed to Checkout
        </button>
        <button v-else type="submit" form="checkout-form" class="w-full flex items-center justify-center rounded-xl border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-all duration-300 transform hover:-translate-y-0.5">
          Confirm Order
        </button>
      </div>
      
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

defineEmits<{ (e: 'close'): void }>()
const cartStore = useCartStore()

const isCheckoutMode = ref(false)
const orderConfirmed = ref(false)

const deliveryForm = ref({
  address: '',
  phone: '',
  city: '',
  zip: ''
})

const handleConfirmOrder = () => {
  // Simulate API request processing
  console.log('Order processed for:', deliveryForm.value)
  orderConfirmed.value = true
  cartStore.clearCart()
}
</script>
