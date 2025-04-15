<script setup lang="ts">
import ProductCard from "@/components/ProductCard.vue";
import CategoryButton from "@/components/CategoryButton.vue";
import PromoBanner from "@/components/PromoBanner.vue";
import HeroBanner from "@/components/HeroBanner.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const categories = [
  "Phân bón",
  "Thuốc trừ sâu",
  "Dụng cụ canh tác",
  "Hạt giống",
];

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
];

const promo = {
  title: "Giảm giá 20% cho Phân bón NPK",
  description: "Mua phân bón NPK giảm ngay 20% cho đơn hàng từ 500,000đ",
  image: "/promo/fertilizer-discount.jpg",
};

const banner = {
  title: "Chào mừng đến với Thanh Dũng!",
  description: "Cung cấp các sản phẩm vật tư nông nghiệp chất lượng, uy tín",
  image: "/banner-agriculture.jpg",
};

function viewAllProducts() {
  router.push("/products"); // Điều hướng đến trang tất cả sản phẩm
}
</script>

<template>
  <div>
    <!-- Hero Banner -->
    <HeroBanner :banner="banner" />

    <!-- Banner khuyến mãi -->
    <PromoBanner :promo="promo" />

    <!-- Danh mục phân loại -->
    <div class="flex justify-center space-x-4 mb-8">
      <CategoryButton
        v-for="category in categories"
        :key="category"
        :category="category"
      />
    </div>

    <!-- Sản phẩm nổi bật -->
    <section class="max-w-7xl mx-auto">
      <h2 class="text-2xl font-semibold text-green-700 mb-6">
        Sản phẩm nổi bật
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        <ProductCard v-for="item in products" :key="item.id" :product="item" />
      </div>

      <!-- Nút xem tất cả sản phẩm -->
      <div class="text-center mt-8">
        <button
          class="px-6 py-2 bg-green-700 text-white font-semibold rounded hover:bg-green-800"
          @click="viewAllProducts"
        >
          Xem tất cả sản phẩm
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-green-700 text-white py-6 mt-16">
      <div class="max-w-7xl mx-auto text-center">
        <p>&copy; 2025 Cửa Hàng Vật Tư Nông Nghiệp Thanh Dũng</p>
        <p>
          Địa chỉ: 107, ấp 4, Đức Huệ, Long An, Việt Nam | Liên hệ: +84 345 891
          727
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Tùy chỉnh các style nếu cần */
</style>
