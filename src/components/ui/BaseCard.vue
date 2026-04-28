<template>
  <div class="group flex flex-col justify-between overflow-hidden rounded-2xl p-4
              bg-white/50 backdrop-blur-md border border-white/40 
              shadow-[0_8px_32px_rgba(31,38,135,0.1)] 
              dark:bg-slate-800/40 dark:border-cyan-500/30 dark:shadow-[0_8px_32px_rgba(6,182,212,0.3)]
              transition-all duration-300 animate-levitate hover:shadow-[0_12px_40px_rgba(79,70,229,0.2)] dark:hover:shadow-[0_12px_40px_rgba(6,182,212,0.6)]">
    
    <!-- Image Wrapper -->
    <div class="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-800 animate-levitate shadow-inner">
      <template v-if="!imageError && product.thumbnail">
        <img 
          :src="resolvedImage" 
          :alt="product.title" 
          @error="handleImageError"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
          loading="lazy" 
        />
      </template>
      <template v-else>
        <!-- Themed Fallback Placeholder -->
        <div class="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-indigo-900/50 to-slate-900/50 border border-cyan-500/20 shadow-[inset_0_0_20px_rgba(34,211,238,0.1)]">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-cyan-400 mb-2 opacity-80 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
          <span class="text-[10px] font-bold text-cyan-400 tracking-widest uppercase">Antigravity Tech Loading...</span>
        </div>
      </template>

      <div v-if="product.discountPercentage > 10" class="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
        -{{ Math.round(product.discountPercentage) }}%
      </div>
    </div>

    <!-- Product Info -->
    <div class="mt-4 flex-grow">
      <div class="flex justify-between items-start">
        <h3 class="truncate text-lg font-bold text-gray-800 dark:text-gray-100" :title="product.title">{{ product.title }}</h3>
        <span class="flex items-center text-sm font-medium text-amber-500">
          ★ {{ product.rating }}
        </span>
      </div>
      <p class="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{{ product.description }}</p>
    </div>

    <!-- Actions -->
    <div class="mt-4 flex items-center justify-between">
      <div class="flex flex-col">
        <span class="text-2xl font-black text-indigo-600 dark:text-cyan-400">${{ product.price }}</span>
        <span class="text-xs text-gray-500 dark:text-gray-500 line-through" v-if="product.discountPercentage > 10">
          ${{ Math.round(product.price / (1 - product.discountPercentage / 100)) }}
        </span>
      </div>
      <button 
        @click="$emit('add-to-cart', product)"
        class="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:-translate-y-1 active:translate-y-0 dark:bg-cyan-600 dark:hover:bg-cyan-500 dark:shadow-cyan-600/30"
      >
        Add to Cart
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '@/types'

const props = defineProps<{ product: Product }>()
defineEmits<{ (e: 'add-to-cart', p: Product): void }>()

const imageError = ref(false)

const handleImageError = () => {
  imageError.value = true
}

/**
 * Dynamic Image Resolver using Vite's import.meta.url
 * Handles external URLs (like DummyJSON) or local assets in src/assets
 */
const getImageUrl = (path: string) => {
  if (!path) return ''
  
  // If it's an external URL, data URI, or a public root path (starting with /), return as-is
  if (path.startsWith('http') || path.startsWith('data:') || path.startsWith('/')) {
    return path
  }
  
  // For other relative paths, try to resolve from assets (fallback)
  try {
    // Note: This project currently uses the public folder for product images
    return new URL(`../assets/${path}`, import.meta.url).href
  } catch (err) {
    return path
  }
}

const resolvedImage = computed(() => getImageUrl(props.product.thumbnail))
</script>
