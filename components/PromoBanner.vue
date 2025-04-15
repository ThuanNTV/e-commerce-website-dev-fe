<template>
  <div
    class="relative w-full h-96 bg-green-600 rounded-lg overflow-hidden mb-8"
  >
    <img
      :src="promo.image"
      alt="promo.title"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center"
    >
      <h1 class="text-white text-4xl font-bold">{{ promo.title }}</h1>
      <p class="text-white text-lg mt-2">{{ promo.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  promo: Object,
});
</script>

<style scoped>
/* Tùy chỉnh nếu cần */
</style>
