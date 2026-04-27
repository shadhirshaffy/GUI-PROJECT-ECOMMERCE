<template>
  <div class="min-h-screen bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
    <Header />
    <main class="w-full">
      <router-view />
    </main>
    <CartModal v-if="isCartOpen" @close="isCartOpen = false" />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue'
import Header from '@/components/layout/Header.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import CartModal from '@/components/features/CartModal.vue'
import { useDarkMode } from '@/composables/useDarkMode'

const { initTheme } = useDarkMode()

onMounted(() => {
  initTheme()
})

const isCartOpen = ref(false)
provide('isCartOpen', isCartOpen)
</script>
