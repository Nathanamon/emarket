<template>
    <div class="bg-white p-6 rounded-2xl shadow-lg ring-1 ring-gray-100">
      <h2 class="text-2xl font-semibold text-gray-900">Récapitulatif de la commande</h2>
  
      <ul class="divide-y divide-gray-200 mt-6">
        <li v-for="item in cart.items" :key="item.id" class="flex py-5 gap-4">
          <img :src="item.imageSrc" :alt="item.imageAlt" class="w-24 h-24 rounded-xl object-cover border border-gray-200">
          <div class="flex-1">
            <h3 class="text-base font-medium text-gray-900">{{ item.name }}</h3>
            <p class="text-sm text-gray-500 mt-1">Quantité : {{ item.quantity }}</p>
          </div>
          <div class="text-base font-semibold text-gray-900">{{ formatPrice(item.price * item.quantity) }}</div>
        </li>
      </ul>
  
      <dl class="mt-8 space-y-4 text-sm text-gray-700">
        <div class="flex justify-between">
          <dt>Sous-total</dt>
          <dd>{{ formatPrice(cart.subtotal) }}</dd>
        </div>
        <div class="flex justify-between">
          <dt>Taxes</dt>
          <dd>{{ formatPrice(cart.tax) }}</dd>
        </div>
        <div class="flex justify-between">
          <dt>Livraison</dt>
          <dd>{{ cart.shipping === 0 ? 'Gratuite' : formatPrice(cart.shipping) }}</dd>
        </div>
      </dl>
  
      <div class="mt-6 pt-4 border-t border-gray-200 flex justify-between text-lg font-bold text-gray-900">
        <span>Total</span>
        <span>{{ formatPrice(cart.subtotal + cart.tax + cart.shipping) }}</span>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    cart: Object,
    shipping: Array
  })
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(price)
  }
  </script>