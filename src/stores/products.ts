import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockElectronics } from '@/data/products'
import type { Product } from '@/types'

export const useProductStore = defineStore('products', () => {
  const allProducts = ref<Product[]>([])
  const isNewArrivalsOnly = ref(false)
  const selectedCategory = ref<string | null>(null)
  const searchQuery = ref('')

  const filteredProducts = computed(() => {
    let products = allProducts.value

    if (isNewArrivalsOnly.value) {
      // Simulate new arrivals as products with higher IDs
      products = [...products].sort((a, b) => b.id - a.id).slice(0, 12)
    }

    if (selectedCategory.value) {
      products = products.filter(p => p.category.toLowerCase() === selectedCategory.value.toLowerCase())
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

  const isLoading = ref(false)
  const error = ref<string | null>(null)

  const fetchProducts = async () => {
    isLoading.value = true
    error.value = null
    try {
      const response = await fetch('https://dummyjson.com/products?limit=100')
      // For more variety, we could fetch multiple categories or just /products
      // But let's stick to a robust fetch.
      const data = await response.json()
      allProducts.value = data.products
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Failed to fetch products'
    } finally {
      isLoading.value = false
    }
  }

  const setCategory = (category: string | null) => {
    isNewArrivalsOnly.value = false
    selectedCategory.value = category
  }

  const setSearchQuery = (query: string) => {
    isNewArrivalsOnly.value = false
    searchQuery.value = query
  }

  const setNewArrivals = (val: boolean) => {
    isNewArrivalsOnly.value = val
    if (val) {
      selectedCategory.value = null
      searchQuery.value = ''
    }
  }

  return {
    allProducts,
    selectedCategory,
    searchQuery,
    isNewArrivalsOnly,
    filteredProducts,
    isLoading,
    error,
    setCategory,
    setSearchQuery,
    setNewArrivals,
    fetchProducts
  }
})
