<template>
  <footer class="bg-gray-800 text-white pt-12 pb-6">
    <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Column 1: Logo + Description -->
      <div>
      <router-link to="/" class="flex items-center mb-4">
        <img 
        src="../../assets/vue.svg" 
        alt="Logo" 
        class="h-8 w-auto"
        />
        <span class="ml-2 text-xl font-bold">E-Shop</span>
      </router-link>
      <p class="text-gray-400 text-sm">
        Your favorite online store for quality products.
      </p>
      </div>
  
      <!-- Column 2: Quick Links -->
      <div>
      <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
      <ul class="space-y-2">
        <li><router-link to="/products" class="text-gray-400 hover:text-white transition">Shop</router-link></li>
        <li><router-link to="/about" class="text-gray-400 hover:text-white transition">About</router-link></li>
        <li><router-link to="/contact" class="text-gray-400 hover:text-white transition">Contact</router-link></li>
        <li><router-link to="/faq" class="text-gray-400 hover:text-white transition">FAQ</router-link></li>
      </ul>
      </div>
  
      <!-- Column 3: Customer Service -->
      <div>
      <h3 class="text-lg font-semibold mb-4">Customer Service</h3>
      <ul class="space-y-2">
        <li><router-link to="/shipping" class="text-gray-400 hover:text-white transition">Shipping</router-link></li>
        <li><router-link to="/returns" class="text-gray-400 hover:text-white transition">Returns</router-link></li>
        <li><router-link to="/privacy" class="text-gray-400 hover:text-white transition">Privacy</router-link></li>
      </ul>
      </div>
  
      <!-- Column 4: Newsletter -->
      <div>
      <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
      <p class="text-gray-400 text-sm mb-4">
        Subscribe to receive our special offers.
      </p>
      <div class="flex">
        <input 
        type="email" 
        placeholder="Your email" 
        class="px-3 py-2 bg-gray-700 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
        >
        <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r transition">
        OK
        </button>
      </div>
      <div class="mt-4 flex space-x-4">
        <a href="#" class="text-gray-400 hover:text-white transition">
        <span class="sr-only">Facebook</span>
        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
        </svg>
        </a>
        <!-- Add other social media icons here -->
      </div>
      </div>
    </div>
  
    <!-- Copyright -->
    <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
      © {{ new Date().getFullYear() }} E-Shop. All rights reserved.
    </div>
    </div>
  </footer>
  </template>
  
  <script setup>
  // No logic needed for this basic footer
  </script>