<template>
  <div class="group flex flex-col justify-between overflow-hidden rounded-2xl p-4
              bg-white/50 backdrop-blur-md border border-white/40 
              shadow-[0_8px_32px_rgba(31,38,135,0.1)] 
              dark:bg-slate-800/40 dark:border-slate-700/50 dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
              transition-all duration-300 animate-levitate hover:shadow-[0_12px_40px_rgba(79,70,229,0.2)] dark:hover:shadow-[0_12px_40px_rgba(34,211,238,0.2)]">
    
    <!-- Image Wrapper -->
    <div class="relative h-48 w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-slate-800">
      <img :src="product.thumbnail" :alt="product.title" class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
      <div v-if="product.discountPercentage > 10" class="absolute top-2 left-2 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-md">
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
import type { Product } from '@/types'

defineProps<{ product: Product }>()
defineEmits<{ (e: 'add-to-cart', p: Product): void }>()
</script>
