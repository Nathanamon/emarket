<!-- CheckoutView.vue -->
<template>
  <div class="bg-gray-50 min-h-screen py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold text-gray-900 mb-12">Finalisation de la commande</h1>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <!-- Formulaire -->
        <div class="lg:col-span-7">
          <CheckoutForm :cart="cart" @submit-order="handleOrderSubmit" />
        </div>

        <!-- Récapitulatif -->
        <div class="lg:col-span-5">
          <OrderSummary :cart="cart" :shipping="shippingOptions" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import CheckoutForm from '../components/checkout/CheckoutForm.vue'
import OrderSummary from '../components/checkout/OrderSummary.vue'

const router = useRouter()

const cart = ref({
  items: [
    {
      id: 1,
      name: 'T-shirt Basic',
      price: 29.99,
      quantity: 2,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
      imageAlt: 'T-shirt basic'
    },
    {
      id: 2,
      name: 'Chaussures de sport',
      price: 89.99,
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
      imageAlt: 'Chaussures de sport'
    }
  ],
  subtotal: 29.99 * 2 + 89.99,
  tax: 29.99,
  shipping: 0
})

const shippingOptions = ref([
  { id: 'standard', name: 'Livraison standard', price: 0, estimated: '3-5 jours' },
  { id: 'express', name: 'Express', price: 9.99, estimated: '1-2 jours' }
])

const handleOrderSubmit = (formData) => {
  console.log('Commande soumise :', formData)
  router.push({ name: 'OrderConfirmation', params: { id: '123' } })
}
</script>
