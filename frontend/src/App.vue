<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/common/Navbar.vue';
import Footer from './components/common/Footer.vue';
import ToastNotifications from './components/common/ToastNotification.vue';
</script>

<template>
  <div id="app">
    <Navbar />

    <main class="min-h-[calc(100vh-160px)]">
        <router-view />
    </main>

    <Footer />
    <ToastNotifications />
  </div>
</template>

<style scoped>

</style>
