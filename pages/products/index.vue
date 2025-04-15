<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";

const products = [
  {
    id: 1,
    name: "Phân bón NPK",
    image: "/products/fertilizer-npk.jpg",
    price: 120000,
    category: "Phân bón",
    description: "Phân bón NPK chuyên dụng cho cây trồng",
  },
  {
    id: 2,
    name: "Thuốc trừ sâu Anphat",
    image: "/products/pesticide-anphat.jpg",
    price: 50000,
    category: "Thuốc trừ sâu",
    description: "Thuốc trừ sâu Anphat hiệu quả, an toàn cho cây trồng.",
  },
  {
    id: 3,
    name: "Dụng cụ làm vườn",
    image: "/products/gardening-tools.jpg",
    price: 150000,
    category: "Dụng cụ canh tác",
    description: "Bộ dụng cụ làm vườn tiện lợi và dễ sử dụng.",
  },
  {
    id: 4,
    name: "Hạt giống cà chua",
    image: "/products/tomato-seeds.jpg",
    price: 30000,
    category: "Hạt giống",
    description: "Hạt giống cà chua chất lượng cao, dễ trồng.",
  },
  {
    id: 5,
    name: "Phân bón hữu cơ",
    image: "/products/organic-fertilizer.jpg",
    price: 250000,
    category: "Phân bón",
    description: "Phân bón hữu cơ giúp tăng năng suất cây trồng.",
  },
  {
    id: 6,
    name: "Thuốc trừ sâu Sinh học",
    image: "/products/biological-pesticide.jpg",
    price: 70000,
    category: "Thuốc trừ sâu",
    description: "Thuốc trừ sâu sinh học an toàn cho môi trường.",
  },
  {
    id: 7,
    name: "Bình xịt côn trùng",
    image: "/products/insecticide-spray.jpg",
    price: 80000,
    category: "Dụng cụ canh tác",
    description: "Bình xịt côn trùng tiện lợi và dễ sử dụng.",
  },
  {
    id: 8,
    name: "Hạt giống rau mầm",
    image: "/products/sprout-seeds.jpg",
    price: 20000,
    category: "Hạt giống",
    description: "Hạt giống rau mầm dễ trồng, năng suất cao.",
  },
];
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <ProductCard v-for="item in products" :key="item.id" :product="item" />
  </div>
</template>

<style scoped>
/* Tùy chỉnh các style nếu cần */
</style>
