<!-- pages/products/index.vue -->
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script setup>
const { data: products } = await useFetch("https://api.example.com/products");
const cartStore = useCartStore();
</script>
