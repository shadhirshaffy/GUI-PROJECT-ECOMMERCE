import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockElectronics } from '@/data/products'
import type { Product } from '@/types'

export const useProductStore = defineStore('products', () => {
  const allProducts = ref<Product[]>(mockElectronics)
  const selectedCategory = ref<string | null>(null)
  const searchQuery = ref('')

  const filteredProducts = computed(() => {
    let products = allProducts.value

    if (selectedCategory.value) {
      products = products.filter(p => p.category === selectedCategory.value)
    }

    if (searchQuery.value.trim()) {
      const query = searchQuery.value.toLowerCase().trim()
      products = products.filter(p => 
        p.title.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query)
      )
    }

    return products
  })

  const setCategory = (category: string | null) => {
    selectedCategory.value = category
    // Clear search when switching categories? Usually better to keep it or clear it. 
    // Let's clear it for a fresh view, or keep it for refinement.
    // User asked for search feature, usually they expect search to work across categories.
  }

  const setSearchQuery = (query: string) => {
    searchQuery.value = query
  }

  return {
    allProducts,
    selectedCategory,
    searchQuery,
    filteredProducts,
    setCategory,
    setSearchQuery
  }
})
