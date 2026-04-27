<template>
  <footer class="bg-[#1a1a1a] text-gray-400 py-12 border-t border-gray-800">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Column 1: Identity -->
        <div class="space-y-6">
          <div class="flex items-center space-x-3">
            <div class="w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-lg shadow-[0_0_15px_rgba(79,70,229,0.4)]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.364 7.636a3.003 3.003 0 0 1 0 4.242M5.636 7.636a3.003 3.003 0 0 1 4.242 0M5.636 16.364a3.003 3.003 0 0 1 4.242 0M14.364 16.364a3.003 3.003 0 0 1 0-4.242M8.136 10.136 15.864 17.864M15.864 10.136 8.136 17.864M12 12h.01" />
              </svg>
            </div>
            <span class="text-white font-bold text-xl tracking-tight uppercase">ApexLanka Machine</span>
          </div>
          
          <div class="space-y-4 text-sm">
            <div class="flex items-start space-x-3">
              <MapPinIcon class="w-5 h-5 text-indigo-500 mt-0.5" />
              <p>Malwanahinna, Akurana, Sri Lanka.</p>
            </div>
            <div class="flex items-center space-x-3">
              <PhoneIcon class="w-5 h-5 text-indigo-500" />
              <p>+94765343214</p>
            </div>
            <div class="flex items-center space-x-3">
              <EnvelopeIcon class="w-5 h-5 text-indigo-500" />
              <p>apexlankamachience@gmail.com</p>
            </div>
          </div>
        </div>

        <!-- Column 2: Spacer -->
        <div class="hidden md:block"></div>

        <!-- Column 3: Useful Links -->
        <div class="space-y-6">
          <h3 class="text-white font-semibold text-lg uppercase tracking-wider">Useful Links</h3>
          <ul class="space-y-3 text-sm">
            <li v-for="link in usefulLinks" :key="link.name">
              <a :href="link.href" class="hover:text-indigo-400 transition-colors duration-300 flex items-center space-x-2">
                <span class="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
                <span>{{ link.name }}</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Social / Footer Menu -->
        <div class="space-y-6">
          <h3 class="text-white font-semibold text-lg uppercase tracking-wider">Follow Us</h3>
          <ul class="space-y-3 text-sm">
            <li v-for="social in socials" :key="social.name">
              <a 
                :href="social.href" 
                class="inline-block hover:text-indigo-400 hover:animate-levitate transition-colors duration-300"
              >
                {{ social.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright Area -->
      <div class="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        <p>&copy; {{ new Date().getFullYear() }} ApexLanka Machine. All rights reserved. Designed for the Antigravity theme.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/vue/24/outline'

const usefulLinks = [
  { name: 'About Us', href: '#' },
  { name: 'Contact Us', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Warranty', href: '#' },
]

const socials = [
  { name: 'Instagram', href: '#' },
  { name: 'Facebook', href: '#' },
  { name: 'Tiktok', href: '#' },
  { name: 'Youtube', href: '#' },
  { name: 'Latest News', href: '#' },
]
</script>

<style scoped>
/* Any additional styling if needed */
</style>
