<template>
    <div class="max-w-7xl mx-auto p-6 lg:flex lg:gap-12">
      <!-- Cart Items -->
      <div class="flex-1">
        <h2 class="text-2xl font-bold mb-6">Shopping Cart</h2>
        <ul class="divide-y divide-gray-200">
          <li v-for="item in cartItems" :key="item.id" class="py-6 flex gap-6">
            <img :src="item.image" alt="" class="w-24 h-24 rounded object-cover" />
            <div class="flex-1">
              <h3 class="text-sm font-medium text-gray-900">{{ item.name }}</h3>
              <p class="text-sm text-gray-500">{{ item.color }} &bull; {{ item.size }}</p>
              <p class="text-sm font-semibold text-gray-900 mt-2">${{ item.price }}</p>
              <div class="mt-2 flex items-center space-x-2">
                <select class="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option v-for="n in 10" :key="n" :value="n" :selected="item.quantity === n">{{ n }}</option>
                </select>
                <span v-if="item.inStock" class="text-sm text-green-600 flex items-center">
                  ✔ In stock
                </span>
                <span v-else class="text-sm text-gray-500 flex items-center">
                  ⏳ Ships in {{ item.shipping }}
                </span>
              </div>
            </div>
            <button class="text-gray-400 hover:text-red-500">
              &times;
            </button>
          </li>
        </ul>
      </div>
  
      <!-- Order Total Price -->
      <div class="mt-12 lg:mt-0 lg:w-80">
        <div class="bg-gray-50 p-6 rounded-lg shadow-sm space-y-4">
          <h3 class="text-lg font-semibold">Order summary</h3>
          <div class="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${{ summary.subtotal.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span>
              Shipping estimate
              <span class="text-gray-400 cursor-help" title="Standard shipping fee">?</span>
            </span>
            <span>${{ summary.shipping.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between text-sm">
            <span>
              Tax estimate
              <span class="text-gray-400 cursor-help" title="Estimated taxes">?</span>
            </span>
            <span>${{ summary.tax.toFixed(2) }}</span>
          </div>
          <div class="flex justify-between font-bold text-base border-t pt-4">
            <span>Order total</span>
            <span>${{ summary.total.toFixed(2) }}</span>
          </div>
          <router-link to="/checkout" class="p-2 relative text-gray-500 hover:text-indigo-600">
            <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded">
              Checkout
            </button>
          </router-link>

        </div>
      </div>
    </div>
    <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="text-2xl font-bold tracking-tight text-gray-900">Most Loved Products</h2>

            <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                <div v-for="product in products" :key="product.id" class="group relative">
                    <img
                        :src="product.imageSrc"
                        :alt="product.imageAlt"
                        class="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                    />
                    <div class="mt-4 flex justify-between">
                        <div>
                            <h3 class="text-sm text-gray-700">
                                <a :href="product.href">
                                    <span aria-hidden="true" class="absolute inset-0" />
                                    {{ product.name }}
                                </a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                        </div>
                        <p class="text-sm font-medium text-gray-900">{{ product.price }}</p>
                    </div>
                </div>
            </div>
        </div>
  </template>
  
  <script setup>
  const products = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '/products/1',
        imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
];
  
  const cartItems = [
    {
      id: 1,
      name: 'Basic Tee',
      color: 'Sienna',
      size: 'Large',
      price: 32,
      quantity: 1,
      inStock: true,
      image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
    },
    {
      id: 2,
      name: 'Basic Tee',
      color: 'Black',
      size: 'Large',
      price: 32,
      quantity: 1,
      inStock: false,
      shipping: '3–4 weeks',
      image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
    },
    {
      id: 3,
      name: 'Nomad Tumbler',
      color: 'White',
      size: '',
      price: 35,
      quantity: 1,
      inStock: true,
      image: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
    }
  ]
  
  const summary = {
    subtotal: 99.00,
    shipping: 5.00,
    tax: 8.32,
    get total() {
      return this.subtotal + this.shipping + this.tax
    }
  }
  </script>
  