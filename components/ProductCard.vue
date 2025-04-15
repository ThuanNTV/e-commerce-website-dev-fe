<template>
  <div
    class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
  >
    <!-- Product Image -->
    <img
      :src="product.image"
      :alt="product.name"
      class="w-full h-64 object-cover"
    />

    <div class="p-4 space-y-3">
      <!-- Product Name -->
      <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>

      <!-- Product Category -->
      <p class="text-sm text-gray-500">{{ product.category }}</p>

      <!-- Product Description -->
      <p class="text-sm text-gray-600 truncate">{{ product.description }}</p>

      <!-- Price & Add to Cart Button -->
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-primary">{{
          formatCurrency(product.price)
        }}</span>
        <button
          @click="addToCart"
          class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useCart } from "@/stores/cart";

// Define product props
const props = defineProps<{
  product: {
    id: number;
    name: string;
    image: string;
    category: string;
    price: number;
    description: string;
  };
}>();

// Add to cart function
const cartStore = useCart();
function addToCart() {
  cartStore.addProduct(props.product);
}

// Currency formatting function
function formatCurrency(value: number) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
}
</script>

<style scoped>
/* Tùy chỉnh hover hoặc animations */
.bg-white:hover {
  transform: translateY(-5px);
}
</style>
