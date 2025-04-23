<template>
    <form @submit.prevent="submitForm" class="bg-white p-6 rounded-2xl shadow-lg ring-1 ring-gray-100 space-y-6">
      <div>
        <h2 class="text-2xl font-semibold text-gray-900">Informations de livraison</h2>
  
        <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="first-name" class="block text-sm font-medium text-gray-700">Prénom</label>
            <input v-model="form.shipping.firstName" type="text" id="first-name" class="input" required>
          </div>
  
          <div>
            <label for="last-name" class="block text-sm font-medium text-gray-700">Nom</label>
            <input v-model="form.shipping.lastName" type="text" id="last-name" class="input" required>
          </div>
  
          <div class="sm:col-span-2">
            <label for="address" class="block text-sm font-medium text-gray-700">Adresse</label>
            <input v-model="form.shipping.address" type="text" id="address" class="input" required>
          </div>
  
          <div>
            <label for="city" class="block text-sm font-medium text-gray-700">Ville</label>
            <input v-model="form.shipping.city" type="text" id="city" class="input" required>
          </div>
  
          <div>
            <label for="postal-code" class="block text-sm font-medium text-gray-700">Code postal</label>
            <input v-model="form.shipping.postalCode" type="text" id="postal-code" class="input" required>
          </div>
  
          <div class="sm:col-span-2">
            <label for="country" class="block text-sm font-medium text-gray-700">Pays</label>
            <input v-model="form.shipping.country" type="text" id="country" class="input" required>
          </div>
  
          <div class="sm:col-span-2">
            <label for="phone" class="block text-sm font-medium text-gray-700">Téléphone</label>
            <input v-model="form.shipping.phone" type="tel" id="phone" class="input" required>
          </div>
        </div>
      </div>
  
      <div>
        <h2 class="text-2xl font-semibold text-gray-900">Moyen de paiement</h2>
        <PaymentMethods v-model="form.payment.method" class="mt-4" />
      </div>
  
      <div class="pt-4">
        <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg shadow">Confirmer la commande</button>
      </div>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import PaymentMethods from './PaymentMethods.vue'
  
  const emit = defineEmits(['submit-order'])
  
  const form = ref({
    shipping: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      postalCode: '',
      country: 'France',
      phone: ''
    },
    payment: {
      method: 'credit-card'
    },
    billingSameAsShipping: true
  })
  
  const submitForm = () => {
    emit('submit-order', form.value)
  }
  </script>