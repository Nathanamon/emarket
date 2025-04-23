<template>
    <div class="bg-white rounded-2xl shadow p-6 space-y-6">
      <h2 class="text-xl font-semibold text-gray-800">Mes informations</h2>
      <form class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Nom</label>
          <input type="text" v-model="user.name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" v-model="user.email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm" />
        </div>
        <button type="submit" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-500">
          Mettre à jour
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const user = ref({
    name: 'Jean Dupont',
    email: 'jean.dupont@email.com'
  })
  </script>
  