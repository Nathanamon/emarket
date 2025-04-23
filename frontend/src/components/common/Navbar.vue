<template>
  <header class="bg-white sticky top-0 z-50 shadow-sm">
    <!-- Promotional Banner -->
    <div class="bg-amber-500 text-white text-center py-2 px-4 text-sm">
    Free shipping for orders over €100
    </div>
  
    <!-- Main Navigation -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between border-b border-gray-200">
      <!-- Logo + Mobile Menu -->
      <div class="flex items-center">
      <button @click="mobileMenuOpen = true" class="lg:hidden p-2 text-gray-500">
        <Bars3Icon class="h-6 w-6" />
      </button>
      <router-link to="/" class="flex items-center">
        <img src="../../assets/vue.svg" alt="Logo" class="h-8" />
        <span class="ml-2 text-xl font-bold hidden sm:inline">E-Shop</span>
      </router-link>
      </div>
  
      <!-- Desktop Menu -->
      <div class="hidden lg:flex lg:space-x-8 lg:items-center">
      <router-link 
        v-for="item in navItems" 
        :key="item.name"
        :to="item.to"
        class="text-gray-700 hover:text-indigo-600 font-medium"
        active-class="text-indigo-600 border-b-2 border-indigo-600"
      >
        {{ item.name }}
      </router-link>
      </div>
  
      <!-- User Actions -->
      <div class="flex items-center space-x-4">
      <router-link to="/search" class="p-2 text-gray-500 hover:text-indigo-600">
        <MagnifyingGlassIcon class="h-6 w-6" />
      </router-link>
      
      <router-link to="/cart" class="p-2 relative text-gray-500 hover:text-indigo-600">
        <ShoppingBagIcon class="h-6 w-6" />
        <span v-if="cartCount > 0" class="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
        {{ cartCount }}
        </span>
      </router-link>
      
      <router-link to="/login" class="hidden md:inline text-gray-700 hover:text-indigo-600 font-medium">
        Login
      </router-link>
      <router-link to="/register" class="hidden md:inline text-gray-700 hover:text-indigo-600 font-medium">
        Sign Up
      </router-link>
      </div>
    </div>
    </nav>
  
    <!-- Mobile Menu -->
    <TransitionRoot as="template" :show="mobileMenuOpen">
    <Dialog as="div" class="lg:hidden fixed inset-0 z-50" @close="mobileMenuOpen = false">
      <TransitionChild
      enter="transition-opacity ease-linear duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
      >
      <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>
  
      <TransitionChild
      enter="transition ease-in-out duration-300 transform"
      enter-from="-translate-x-full"
      enter-to="translate-x-0"
      leave="transition ease-in-out duration-300 transform"
      leave-from="translate-x-0"
      leave-to="-translate-x-full"
      >
      <DialogPanel class="relative w-full max-w-xs bg-white shadow-xl h-full">
        <div class="flex justify-end p-4">
        <button @click="mobileMenuOpen = false" class="p-2 text-gray-500">
          <XMarkIcon class="h-6 w-6" />
        </button>
        </div>
  
        <div class="px-4 pb-4 space-y-6">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.to"
          @click="mobileMenuOpen = false"
          class="block py-2 text-gray-900 hover:text-indigo-600 font-medium border-b border-gray-100"
          active-class="text-indigo-600"
        >
          {{ item.name }}
        </router-link>
        
        <router-link 
          to="/login" 
          @click="mobileMenuOpen = false"
          class="block py-2 text-gray-900 hover:text-indigo-600 font-medium"
        >
          Login
        </router-link>
        <router-link 
          to="/login" 
          @click="mobileMenuOpen = false"
          class="block py-2 text-gray-900 hover:text-indigo-600 font-medium"
        >
          Sign Up
        </router-link>
        </div>
      </DialogPanel>
      </TransitionChild>
    </Dialog>
    </TransitionRoot>
  </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel } from '@headlessui/vue'
  
  const mobileMenuOpen = ref(false)
  
  const navItems = [
  { name: 'Shop', to: '/products' },
  { name: 'Noodles', to: '/categories' },
  { name: 'New Arrivals', to: '/new' },
  { name: 'Contact', to: '/contact' },
  ]
  
  const cartCount = 3 // Replace with a Pinia store
  </script>