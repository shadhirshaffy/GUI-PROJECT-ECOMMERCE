<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
    <TheNavbar />
    <main class="container mx-auto px-4 py-8">
      <router-view />
    </main>
    <CartModal v-if="isCartOpen" @close="isCartOpen = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import TheNavbar from '@/components/layout/TheNavbar.vue'
import CartModal from '@/components/features/CartModal.vue'

const isCartOpen = ref(false)
provide('isCartOpen', isCartOpen)
</script>
