<template>
    <section class="bg-white py-8">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-xl font-semibold text-gray-900 mb-6">Recent reviews</h2>
  
        <div v-for="(review, index) in reviews" :key="index" class="border-t py-6">
          <div class="flex items-start justify-between">
            <div>
              <p class="font-medium text-gray-900">{{ review.name }}</p>
              <p class="text-sm text-gray-500">{{ formatDate(review.date) }}</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="flex">
                <template v-for="i in 5" :key="i">
                  <svg
                    class="h-5 w-5"
                    :class="i <= review.rating ? 'text-yellow-400' : 'text-gray-300'"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97h4.174c.969 0 1.371 1.24.588 1.81l-3.378 2.455 1.286 3.97c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.378 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97-3.378-2.455c-.783-.57-.38-1.81.588-1.81h4.174l1.286-3.97z" />
                  </svg>
                </template>
              </div>
              <p class="text-sm text-gray-700 font-medium">{{ review.rating }}</p>
            </div>
          </div>
  
          <h3 class="text-gray-900 font-semibold mt-2">{{ review.title }}</h3>
          <p class="text-sm text-gray-700 mt-2 whitespace-pre-line">{{ review.content }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const reviews = [
    {
      name: "Risako M",
      date: "2021-05-16",
      rating: 5,
      title: "Can't say enough good things",
      content: `I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!
  
  The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it… I actually have, many times!`,
    },
    {
      name: "Jackie H",
      date: "2021-04-06",
      rating: 5,
      title: "Very comfy and looks the part",
      content: `After a quick chat with customer support, I had a good feeling about this shirt and ordered three of them.
  
  Less than 48 hours later, my delivery arrived. I haven’t worn anything else since that day! These shirts are so comfortable, yet look classy enough that I can wear them at work or even some formal events. Winning!`,
    },
    {
      name: "Laura G",
      date: "2021-02-24",
      rating: 4,
      title: "The last shirts I may ever need",
      content: `I bought two of those comfy cotton shirts, and let me tell you: they’re amazing! I have been wearing them almost every day. Even after a dozen of washes, that still looks and feel good as new. Will definitely order a few more… If I ever need to!`,
    },
  ]
  
  function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }
  </script>
  