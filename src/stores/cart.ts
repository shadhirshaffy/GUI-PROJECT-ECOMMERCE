import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'
import type { Product, CartItem } from '@/types'

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>(JSON.parse(localStorage.getItem('apexlanka-cart') || '[]'))

  watch(items, (newItems) => {
    localStorage.setItem('apexlanka-cart', JSON.stringify(newItems))
  }, { deep: true })

  const addToCart = (product: Product) => {
    const existing = items.value.find(item => item.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      items.value.push({ ...product, quantity: 1 })
    }
  }

  const removeFromCart = (productId: number) => {
    items.value = items.value.filter(item => item.id !== productId)
  }
  
  const updateQuantity = (productId: number, qty: number) => {
    const item = items.value.find(i => i.id === productId)
    if (item) {
        if (qty <= 0) {
            removeFromCart(productId)
        } else {
            item.quantity = qty
        }
    }
  }

  const clearCart = () => {
    items.value = []
  }

  const totalItems = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))
  const totalPrice = computed(() => items.value.reduce((total, item) => total + (item.price * item.quantity), 0))

  return { items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }
})
