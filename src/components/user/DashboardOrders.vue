<template>
    <div class="bg-white rounded-2xl shadow p-6">
      <h2 class="text-xl font-semibold text-gray-800 mb-4">Mes commandes</h2>
      <ul class="divide-y divide-gray-200">
        <li v-for="order in orders" :key="order.id" class="py-4">
          <div class="flex justify-between items-center">
            <div>
              <p class="font-medium text-gray-900">Commande #{{ order.id }}</p>
              <p class="text-sm text-gray-500">{{ order.date }}</p>
            </div>
            <div class="text-right">
              <p class="font-semibold text-gray-800">{{ order.total }}</p>
              <p class="text-sm text-gray-500">{{ order.status }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const orders = [
    { id: '1234', date: '2024-04-15', total: '59,99 €', status: 'Livrée' },
    { id: '5678', date: '2024-03-30', total: '89,00 €', status: 'En cours' }
  ]
  </script>
  