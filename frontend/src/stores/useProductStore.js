import { defineStore } from 'pinia'
import productsData from '@/assets/products.json'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    isLoading: false,
  }),

  actions: {
    async fetchProducts() {
      this.isLoading = true
      // Simule un appel API avec un timeout
      await new Promise(resolve => setTimeout(resolve, 500))
      this.products = productsData
      this.isLoading = false
    },
  },

  getters: {
    productCount: (state) => state.products.length,
    getByCategory: (state) => (categoryName) =>
      state.products.filter(p => p.category === categoryName),
  },
})
