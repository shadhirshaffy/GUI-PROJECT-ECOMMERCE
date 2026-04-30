<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900 py-12 px-4 transition-colors duration-300">
    <div class="container mx-auto max-w-6xl">
      <!-- Back Button -->
      <button 
        @click="router.back()" 
        class="mb-8 flex items-center space-x-2 text-indigo-600 dark:text-cyan-400 font-bold hover:translate-x-1 transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
        </svg>
        <span>Back to Store</span>
      </button>

      <div v-if="loading" class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-cyan-400"></div>
      </div>

      <div v-else-if="error" class="text-center py-20 text-rose-500">
        <p>{{ error }}</p>
      </div>

      <div v-else-if="product" class="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <!-- Product Images -->
        <div class="space-y-4">
          <div class="relative aspect-square overflow-hidden rounded-3xl bg-white dark:bg-slate-800 border border-white/40 dark:border-cyan-400/20 shadow-2xl">
            <img 
              :src="activeImage" 
              :alt="product.title"
              class="h-full w-full object-contain p-8 transition-transform duration-500"
            />
            <div v-if="product.discountPercentage > 10" class="absolute top-6 left-6 bg-rose-500 text-white text-sm font-black px-4 py-2 rounded-xl shadow-lg">
              SAVE {{ Math.round(product.discountPercentage) }}%
            </div>
          </div>
          
          <div class="grid grid-cols-4 gap-4">
            <button 
              v-for="(img, idx) in product.images" 
              :key="idx"
              @click="activeImage = img"
              :class="[
                'aspect-square rounded-xl overflow-hidden bg-white dark:bg-slate-800 border-2 transition-all',
                activeImage === img ? 'border-indigo-600 dark:border-cyan-400 shadow-lg scale-105' : 'border-transparent opacity-60 hover:opacity-100'
              ]"
            >
              <img :src="img" class="h-full w-full object-cover" />
            </button>
          </div>
        </div>

        <!-- Product Details -->
        <div class="flex flex-col justify-center">
          <div class="inline-block px-3 py-1 mb-4 text-xs font-black tracking-widest uppercase text-indigo-600 bg-indigo-50 dark:text-cyan-400 dark:bg-slate-800 rounded-full w-fit">
            {{ product.category }}
          </div>
          <h1 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-2 leading-tight">
            {{ product.title }}
          </h1>
          <div class="flex items-center space-x-4 mb-8">
            <span class="flex items-center text-amber-500 font-bold">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {{ product.rating }}
            </span>
            <span class="text-gray-400 dark:text-gray-500">|</span>
            <span class="text-gray-600 dark:text-gray-400 font-medium">{{ product.stock }} in stock</span>
          </div>

          <p class="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
            {{ product.description }}
          </p>

          <div class="bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 border border-white/40 dark:border-cyan-400/20 shadow-xl mb-8">
            <div class="flex items-end space-x-4 mb-6">
              <span class="text-5xl font-black text-indigo-600 dark:text-cyan-400">${{ product.price }}</span>
              <span v-if="product.discountPercentage > 10" class="text-xl text-gray-500 line-through mb-1">
                ${{ Math.round(product.price / (1 - product.discountPercentage / 100)) }}
              </span>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <button 
                @click="addToCart"
                class="flex-1 bg-indigo-600 hover:bg-indigo-700 dark:bg-cyan-600 dark:hover:bg-cyan-500 text-white font-black py-4 px-8 rounded-2xl shadow-lg shadow-indigo-600/30 dark:shadow-cyan-600/30 transition-all hover:-translate-y-1 active:translate-y-0 flex items-center justify-center space-x-3"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Add to Cart</span>
              </button>
              
              <button class="bg-white dark:bg-slate-700 text-slate-900 dark:text-white border border-gray-200 dark:border-slate-600 font-bold py-4 px-8 rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-600 transition-all flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Features/Specs Grid -->
          <div class="grid grid-cols-2 gap-4">
            <div class="p-4 rounded-2xl bg-gray-100 dark:bg-slate-800/40">
              <span class="block text-xs font-bold text-gray-500 uppercase mb-1">Brand</span>
              <span class="font-bold text-slate-800 dark:text-gray-200">{{ product.brand }}</span>
            </div>
            <div class="p-4 rounded-2xl bg-gray-100 dark:bg-slate-800/40">
              <span class="block text-xs font-bold text-gray-500 uppercase mb-1">SKU</span>
              <span class="font-bold text-slate-800 dark:text-gray-200">#{{ product.id * 1234 }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types'

const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()

const product = ref<Product | null>(null)
const loading = ref(true)
const error = ref('')
const activeImage = ref('')

onMounted(async () => {
  const id = route.params.id
  try {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    if (!response.ok) throw new Error('Product not found')
    product.value = await response.json()
    if (product.value) {
      activeImage.value = product.value.thumbnail
    }
  } catch (e: unknown) {
    error.value = e instanceof Error ? e.message : 'An error occurred'
  } finally {
    loading.value = false
  }
})

const addToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value)
  }
}
</script>
