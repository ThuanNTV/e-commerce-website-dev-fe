<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';

// Mock data for products
const products = [
  { id: 1, name: 'Áo thun basic', image: '/products/shirt.jpg', price: 199000, category: 'Thời trang nam' },
  { id: 2, name: 'Giày sneaker', image: '/products/shoes.jpg', price: 599000, category: 'Giày dép' },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :product="item"
    />
  </div>
</template>
