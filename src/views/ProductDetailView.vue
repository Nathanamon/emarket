<template>
    <div class="bg-white">
      <!-- Product Overview -->
      <ProductOverview :product="product" :reviews="reviewsSummary" />
  
      <!-- Product Reviews -->
      <ProductReview :reviews="reviews" class="border-t border-gray-200" />
  
      <!-- Related Products (Optionnel) -->
      <section class="bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto lg:max-w-7xl">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">Vous aimerez aussi</h2>
          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <ProductCard 
              v-for="product in relatedProducts"
              :key="product.id"
              :product="product"
            />
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import ProductOverview from '../components/products/ProductOverview.vue'
  import ProductReview from '../components/products/ProductReview.vue'
  import ProductGrid from '../components/products/ProductGrid.vue'
  
  // Données du produit
  const product = ref({
    id: 1,
    name: 'T-shirt Basic',
    price: '29.99€',
    href: '#',
    breadcrumbs: [
      { id: 1, name: 'Homme', href: '#' },
      { id: 2, name: 'Vêtements', href: '#' },
    ],
    images: [
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
        alt: 'T-shirt Basic vue de face',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
        alt: 'T-shirt Basic vue de côté',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
        alt: 'T-shirt Basic détail',
      },
      {
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
        alt: 'T-shirt Basic porté',
      },
    ],
    colors: [
      { name: 'Noir', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
      { name: 'Blanc', class: 'bg-white', selectedClass: 'ring-gray-400' },
      { name: 'Bleu', class: 'bg-blue-500', selectedClass: 'ring-blue-500' },
    ],
    sizes: [
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: false },
      { name: 'XL', inStock: true },
    ],
    description: 'Un T-shirt basique en coton bio de haute qualité, confortable et durable.',
    highlights: [
      '100% coton bio',
      'Fabriqué en France',
      'Lavage en machine',
      'Coupe moderne',
    ],
    details: 'Le T-shirt Basic est conçu pour un confort optimal tout au long de la journée. Matière respirante et résistante.',
  })
  
  // Avis et évaluations
  const reviewsSummary = ref({
    average: 4.5,
    totalCount: 24,
    href: '#reviews',
  })
  
  const reviews = ref([
    {
      name: "Jean D.",
      date: "2023-05-16",
      rating: 5,
      title: "Excellent produit",
      content: "Le T-shirt est très confortable et la qualité est au rendez-vous. Je recommande !"
    },
    {
      name: "Marie L.",
      date: "2023-04-06",
      rating: 4,
      title: "Très satisfaite",
      content: "Belle qualité, mais la taille est un peu petite. Prenez une taille au-dessus si vous hésitez."
    }
  ])
  
  // Produits similaires
  const relatedProducts = ref([
    {
      id: 2,
      name: 'T-shirt Col V',
      price: '34.99€',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "T-shirt col V noir",
      href: '#'
    },
    // Ajoutez d'autres produits...
  ])
  
  // Gestion de la sélection
  const selectedColor = ref(product.value.colors[0])
  const selectedSize = ref(product.value.sizes[2])
  
  // Fonction pour ajouter au panier
  const addToCart = () => {
    console.log('Ajout au panier:', {
      productId: product.value.id,
      color: selectedColor.value.name,
      size: selectedSize.value.name
    })
    // Ici vous devriez connecter à votre store Pinia
  }
  </script>