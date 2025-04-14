<template>
  <div
    class="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-gray-200"
  >
    <!-- Product Image -->
    <NuxtLink :to="`/products/${product.id}`">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-64 object-cover"
      />
    </NuxtLink>

    <div class="p-4 space-y-3">
      <!-- Product Name -->
      <NuxtLink :to="`/products/${product.id}`">
        <h3
          class="text-lg font-semibold text-gray-800 hover:text-primary truncate"
        >
          {{ product.name }}
        </h3>
      </NuxtLink>

      <!-- Product Category -->
      <p class="text-sm text-gray-500 truncate">
        {{ product.category }}
      </p>

      <!-- Price & Add to Cart Button -->
      <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-primary">
          {{ formatCurrency(product.price) }}
        </span>
        <PrimeButton
          icon="pi pi-shopping-cart"
          label="Add to Cart"
          class="p-button-success"
          @click="addToCart"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useCart } from "@/stores/cart";
import PrimeButton from "primevue/button";

// Define product props
const props = defineProps<{
  product: {
    id: string | number;
    name: string;
    image: string;
    category: string;
    price: number;
  };
}>();

// Add to cart function
const { addProduct } = useCart();

function addToCart() {
  addProduct(props.product); // Access product through props
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
/* Add a custom hover effect */
.bg-white:hover {
  transform: translateY(-5px);
}
</style>
