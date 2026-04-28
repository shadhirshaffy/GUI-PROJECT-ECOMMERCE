<template>
  <div class="w-full">
    <Hero />
    
    <div class="container mx-auto px-4 py-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          {{ productStore.selectedCategory || 'Featured' }} <span class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500">Electronics</span>
        </h2>
        <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">Premium tech gear engineered for professionals.</p>
        
        <!-- Filter Indicator -->
        <div v-if="productStore.selectedCategory" class="mt-6 flex justify-center">
          <button 
            @click="productStore.setCategory(null)"
            class="flex items-center space-x-2 px-4 py-2 bg-indigo-50 dark:bg-slate-800 text-indigo-600 dark:text-cyan-400 rounded-full text-sm font-medium hover:bg-indigo-100 dark:hover:bg-slate-700 transition-colors"
          >
            <span>Filtering by: {{ productStore.selectedCategory }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-cyan-400"></div>
    </div>

    <div v-else-if="error" class="text-center py-20 text-rose-500">
      <p>{{ error }}</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <BaseCard 
        v-for="(product, index) in productStore.filteredProducts" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="cartStore.addToCart" 
        :style="{ animationDelay: `${index * 0.1}s` }"
      />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Hero from '@/components/ui/Hero.vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { useCartStore } from '@/stores/cart'
import { useProductStore } from '@/stores/products'
import type { Product } from '@/types'

const cartStore = useCartStore()
const productStore = useProductStore()
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800))
  } catch (e: any) {
    error.value = e.message || 'An error occurred'
  } finally {
    loading.value = false
  }
})
</script>
