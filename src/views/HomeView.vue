<template>
  <div class="py-8">
    <div class="text-center mb-16">
      <h1 class="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-cyan-400 dark:to-blue-500 tracking-tight animate-fade-in-up">
        ApexLanka
      </h1>
      <p class="mt-4 text-xl text-gray-600 dark:text-gray-400">Premium tailoring and embroidery machines for professionals and enthusiasts.</p>
    </div>

    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-cyan-400"></div>
    </div>

    <div v-else-if="error" class="text-center py-20 text-rose-500">
      <p>{{ error }}</p>
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <BaseCard 
        v-for="(product, index) in products" 
        :key="product.id" 
        :product="product" 
        @add-to-cart="cartStore.addToCart"
        :style="{ animationDelay: `${index * 0.1}s` }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import { useCartStore } from '@/stores/cart'
import type { Product } from '@/types'
import { mockTailoringMachines } from '@/data/products'

const cartStore = useCartStore()
const products = ref<Product[]>([])
const loading = ref(true)
const error = ref('')

onMounted(async () => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800))
    products.value = mockTailoringMachines
  } catch (e: any) {
    error.value = e.message || 'An error occurred'
  } finally {
    loading.value = false
  }
})
</script>
