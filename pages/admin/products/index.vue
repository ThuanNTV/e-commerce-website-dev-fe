<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold">📦 Quản lý Sản phẩm</h2>
      <NuxtLink
        to="/admin/products/create"
        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all"
      >
        ➕ Thêm sản phẩm mới
      </NuxtLink>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto text-sm">
        <thead class="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th class="py-3 px-4">Tên</th>
            <th class="py-3 px-4">Giá</th>
            <th class="py-3 px-4">Giảm giá</th>
            <th class="py-3 px-4">Danh mục</th>
            <th class="py-3 px-4">Mô tả</th>
            <th class="py-3 px-4">SKU</th>
            <th class="py-3 px-4">Khối lượng</th>
            <th class="py-3 px-4">Kích thước</th>
            <th class="py-3 px-4">Hình ảnh</th>
            <th class="py-3 px-4">Nổi bật</th>
            <th class="py-3 px-4">Trạng thái</th>
            <th class="py-3 px-4">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="product in products"
            :key="product.id"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="py-3 px-4">{{ product.name }}</td>
            <td class="py-3 px-4">{{ formatCurrency(product.price) }}</td>
            <td class="py-3 px-4">{{ product.discountPercentage }}%</td>
            <td class="py-3 px-4">{{ product.category }}</td>
            <td class="py-3 px-4 truncate max-w-[200px]">
              {{ product.description }}
            </td>
            <td class="py-3 px-4">{{ product.sku }}</td>
            <td class="py-3 px-4">{{ product.weight }}</td>
            <td class="py-3 px-4">{{ product.dimensions }}</td>
            <td class="py-3 px-4">
              <img
                :src="product.imageUrl"
                alt="Ảnh"
                class="w-10 h-10 object-cover rounded"
              />
            </td>
            <td class="py-3 px-4">
              <span
                class="px-2 py-1 text-xs rounded-full"
                :class="
                  product.featured
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-gray-200 text-gray-600'
                "
              >
                {{ product.featured ? "✔️ Có" : "—" }}
              </span>
            </td>
            <td class="py-3 px-4">
              <span
                class="px-2 py-1 text-xs rounded-full"
                :class="
                  product.isActive
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                "
              >
                {{ product.isActive ? "Hiển thị" : "Ẩn" }}
              </span>
            </td>
            <td class="py-3 px-4">
              <NuxtLink
                :to="`/admin/products/edit/${product.id}`"
                class="text-blue-600 hover:underline"
              >
                ✏️ Sửa
              </NuxtLink>
              <button
                @click="deleteProduct(product.id)"
                class="ml-3 text-red-500 hover:underline"
              >
                🗑️ Xóa
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

import { ref } from "vue";

// Dữ liệu mẫu mở rộng
const products = ref([
  {
    id: 1,
    name: "Thuốc trừ sâu A",
    price: 20000,
    discountPercentage: 10,
    category: "Bảo vệ thực vật",
    description: "Hiệu quả cao, an toàn cho môi trường",
    sku: "BVTV-A001",
    weight: "500g",
    dimensions: "10x15x5 cm",
    imageUrl: "/products/pesticide-a.jpg",
    isActive: true,
    featured: false,
  },
  {
    id: 2,
    name: "Phân bón NPK",
    price: 250000,
    discountPercentage: 0,
    category: "Phân bón",
    description: "Tăng trưởng nhanh, bền vững",
    sku: "PNPK-002",
    weight: "5kg",
    dimensions: "20x30x10 cm",
    imageUrl:
      "https://vietpatservice.com/wp-content/uploads/2014/10/phan-bon-NPK.png",
    isActive: true,
    featured: true,
  },
]);

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

const deleteProduct = (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
    products.value = products.value.filter((p) => p.id !== id);
    // TODO: Gọi API xóa sản phẩm từ server ở đây
  }
};
</script>
