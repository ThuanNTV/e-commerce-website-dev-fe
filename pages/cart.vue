<!-- pages/cart/index.vue -->
<template>
  <div class="cart-container">
    <h2 class="text-2xl font-bold mb-6">Giỏ hàng của bạn</h2>

    <div v-if="cartItems.length === 0" class="empty-cart">Giỏ hàng trống</div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="cart-item p-4 border rounded-lg"
      >
        <h3 class="font-semibold">{{ item.product.name }}</h3>
        <p>Số lượng: {{ item.quantity }}</p>
        <p>Giá: {{ formatCurrency(item.product.price) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const cartItems = ref([]);

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

onMounted(async () => {
  try {
    const response = await fetch("/api/cart");
    cartItems.value = await response.json();
  } catch (error) {
    console.error("Lỗi tải giỏ hàng:", error);
  }
});
</script>
