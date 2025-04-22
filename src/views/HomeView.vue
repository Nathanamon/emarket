<template>
    <div class="relative isolate overflow-hidden bg-gray-900">
        <!-- Background image -->
        <img
            src="/shoes.png"
            alt="Fresh Asian noodles"
            class="absolute inset-0 -z-10 h-full w-full object-cover opacity-60"
        />

        <!-- Gradient effect -->
        <div
            class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none"
            aria-hidden="true"
        />

        <div class="mx-auto max-w-2xl px-6 py-32 sm:py-48 lg:py-56 lg:px-8 text-center">
            <!-- Promotion badge -->
            <div
                class="mb-8 inline-flex items-center rounded-full bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 ring-1 ring-inset ring-amber-500/20"
            >
                New - Discover exclusive brands and products
            </div>

            <!-- Main title -->
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Your shopping destination for unique products
            </h1>

            <!-- Description -->
            <p class="mt-6 text-lg leading-8 text-gray-300">
                Explore an exclusive selection of quality products, carefully curated to meet all your desires.
            </p>

            <!-- CTA buttons -->
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <router-link
                    to="/products"
                    class="rounded-md bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                    Discover our products
                </router-link>
            </div>
        </div>
    </div>

    <section class="bg-gray-50 py-16">
        <div class="max-w-7xl mx-auto px-6">
            <!-- Section title (optional) -->
            <div class="text-center mb-12">
                <h2 class="text-3xl font-bold text-gray-900">Our Commitments</h2>
                <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Services designed for your satisfaction
                </p>
            </div>

            <!-- Benefits grid -->
            <div class="bg-white rounded-xl shadow-sm p-8 sm:p-10 lg:p-12 max-w-6xl mx-auto">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    <div
                        v-for="(benefit, index) in benefits"
                        :key="index"
                        class="flex flex-col items-center text-center p-4 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                        <div class="bg-indigo-50 p-4 rounded-full mb-4">
                            <img
                                :src="benefit.icon"
                                :alt="benefit.title"
                                class="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ benefit.title }}</h3>
                        <p class="text-sm text-gray-600 flex-grow">{{ benefit.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="bg-white">
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

            <!-- CTA button -->
            <div class="mt-10 flex justify-center">
                <router-link
                    to="/products"
                    class="rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
                >
                    All Products
                </router-link>
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
const benefits = [
    {
        title: 'Free returns',
        description: 'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
        icon: '/product-return.png',
    },
    {
        title: 'Same day delivery',
        description: 'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
        icon: '/delivery.png',
    },
    {
        title: 'All year discount',
        description: 'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
        icon: '/discount.png',
    },
    {
        title: 'For the planet',
        description: 'We’ve pledged 1% of sales to the preservation and restoration of the natural environment.',
        icon: '/worldwide.png',
    },
];
</script>
