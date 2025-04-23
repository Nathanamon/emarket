<template>
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <img class="mx-auto h-10 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="Logo" />
        <h2 class="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          {{ isLogin ? 'Connexion à votre compte' : 'Créer un compte' }}
        </h2>
      </div>
  
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Adresse e-mail</label>
            <div class="mt-2">
              <input v-model="email" type="email" id="email" required autocomplete="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
            </div>
          </div>
  
          <div>
            <label for="password" class="block text-sm font-medium text-gray-900">Mot de passe</label>
            <div class="mt-2">
              <input v-model="password" type="password" id="password" required autocomplete="current-password"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm" />
            </div>
          </div>
  
          <div>
            <button type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-indigo-600">
              {{ isLogin ? 'Se connecter' : 'S’inscrire' }}
            </button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          {{ isLogin ? "Pas encore de compte ?" : "Déjà inscrit ?" }}
          <RouterLink :to="isLogin ? '/register' : '/login'" class="font-semibold text-indigo-600 hover:text-indigo-500">
            {{ isLogin ? 'Créer un compte' : 'Se connecter' }}
          </RouterLink>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    isLogin: Boolean,
  })
  
  const email = ref('')
  const password = ref('')
  
  const handleSubmit = () => {
    if (props.isLogin) {
      // Logique de connexion
      console.log('Connexion avec :', email.value, password.value)
    } else {
      // Logique d'inscription
      console.log('Inscription avec :', email.value, password.value)
    }
  }
  </script>
  