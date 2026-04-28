import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { mockElectronics } from '@/data/products'
import type { Product } from '@/types'

export const useProductStore = defineStore('products', () => {
  const allProducts = ref<Product[]>(mockElectronics)
  const selectedCategory = ref<string | null>(null)

  const filteredProducts = computed(() => {
    if (!selectedCategory.value) {
      return allProducts.value
    }
    return allProducts.value.filter(p => p.category === selectedCategory.value)
  })

  const setCategory = (category: string | null) => {
    selectedCategory.value = category
  }

  return {
    allProducts,
    selectedCategory,
    filteredProducts,
    setCategory
  }
})
