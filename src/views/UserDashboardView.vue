<!-- CustomerDashboard.vue -->
<template>
    <div class="max-w-6xl mx-auto p-6">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">Mon Tableau de Bord</h1>
  
      <div class="flex space-x-4 mb-6">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          @click="currentTab = tab.key"
          :class="[currentTab === tab.key ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800', 'px-4 py-2 rounded-xl font-medium transition-all']"
        >
          {{ tab.label }}
        </button>
      </div>
  
      <component :is="currentComponent" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import DashboardOverview from '../components/user/DashboardOverview.vue'
  import DashboardOrders from '../components/user/DashboardOrders.vue'
  import DashboardProfile from '../components/user/DashboardProfile.vue'
  
  const currentTab = ref('overview')
  
  const tabs = [
    { key: 'overview', label: 'Aperçu' },
    { key: 'orders', label: 'Mes commandes' },
    { key: 'profile', label: 'Mes informations' }
  ]
  
  const currentComponent = computed(() => {
    switch (currentTab.value) {
      case 'orders':
        return DashboardOrders
      case 'profile':
        return DashboardProfile
      default:
        return DashboardOverview
    }
  })
  </script>
  
  <style scoped>
  button:focus {
    outline: none;
  }
  </style>
  