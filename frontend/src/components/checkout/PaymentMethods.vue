<template>
  <div class="space-y-4">
    <div class="flex items-center gap-3">
      <input id="credit-card" v-model="selectedMethod" type="radio" value="credit-card" class="radio">
      <label for="credit-card" class="text-sm font-medium text-gray-700">Carte de crédit</label>
    </div>

    <div v-if="selectedMethod === 'credit-card'" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="sm:col-span-2">
        <label for="card-number" class="block text-sm font-medium text-gray-700">Numéro de carte</label>
        <input type="text" id="card-number" placeholder="4242 4242 4242 4242" class="input">
      </div>
      <div>
        <label for="expiry-date" class="block text-sm font-medium text-gray-700">Date d'expiration</label>
        <input type="text" id="expiry-date" placeholder="MM/AA" class="input">
      </div>
      <div>
        <label for="cvc" class="block text-sm font-medium text-gray-700">CVC</label>
        <input type="text" id="cvc" placeholder="123" class="input">
      </div>
    </div>

    <div class="flex items-center gap-3">
      <input id="paypal" v-model="selectedMethod" type="radio" value="paypal" class="radio">
      <label for="paypal" class="text-sm font-medium text-gray-700">PayPal</label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const selectedMethod = ref(props.modelValue || 'credit-card')

watch(selectedMethod, (value) => emit('update:modelValue', value))
</script>

<style scoped>
/* .input {
  @apply mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm;
}
.radio {
  @apply h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500;
} */
</style>
