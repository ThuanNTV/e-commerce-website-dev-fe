<template>
  <div class="p-4 bg-white shadow rounded-lg">
    <h2 class="text-2xl font-semibold mb-6">Thêm Sản phẩm Mới</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- Tên sản phẩm -->
        <div class="col-span-2">
          <label for="name" class="block text-sm font-medium text-gray-700">
            Tên sản phẩm <span class="text-red-500">*</span>
          </label>
          <input
            v-model="product.name"
            type="text"
            id="name"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập tên sản phẩm"
            required
          />
        </div>

        <!-- Giá và Danh mục -->
        <div>
          <label for="price" class="block text-sm font-medium text-gray-700">
            Giá <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <input
              v-model="product.price"
              type="number"
              id="price"
              class="mt-1 block w-full pl-8 pr-2 py-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
              placeholder="Nhập giá sản phẩm"
              required
              min="0"
            />
            <span class="absolute left-2 top-3 text-gray-400">₫</span>
          </div>
        </div>

        <div>
          <label for="category" class="block text-sm font-medium text-gray-700">
            Danh mục <span class="text-red-500">*</span>
          </label>
          <select
            v-model="product.category"
            id="category"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            required
          >
            <option value="">Chọn danh mục</option>
            <option value="Danh mục 1">Danh mục 1</option>
            <option value="Danh mục 2">Danh mục 2</option>
            <option value="Danh mục 3">Danh mục 3</option>
          </select>
        </div>

        <!-- SKU và Cân nặng -->
        <div>
          <label for="sku" class="block text-sm font-medium text-gray-700">
            SKU
          </label>
          <input
            v-model="product.sku"
            type="text"
            id="sku"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập mã SKU"
          />
        </div>

        <div>
          <label for="weight" class="block text-sm font-medium text-gray-700">
            Cân nặng (kg)
          </label>
          <input
            v-model="product.weight"
            type="number"
            id="weight"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập cân nặng sản phẩm"
          />
        </div>

        <!-- Kích thước và Chiết khấu -->
        <div>
          <label
            for="dimensions"
            class="block text-sm font-medium text-gray-700"
          >
            Kích thước (cm)
          </label>
          <input
            v-model="product.dimensions"
            type="text"
            id="dimensions"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Dài x Rộng x Cao"
          />
        </div>

        <div>
          <label
            for="discountPercentage"
            class="block text-sm font-medium text-gray-700"
          >
            Chiết khấu (%)
          </label>
          <input
            v-model="product.discountPercentage"
            type="number"
            id="discountPercentage"
            class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
            placeholder="Nhập chiết khấu (%)"
            min="0"
            max="100"
          />
        </div>
      </div>

      <!-- Mô tả -->
      <div>
        <label
          for="description"
          class="block text-sm font-medium text-gray-700"
        >
          Mô tả <span class="text-red-500">*</span>
        </label>
        <textarea
          v-model="product.description"
          id="description"
          class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nhập mô tả sản phẩm"
          rows="4"
          required
        ></textarea>
      </div>

      <!-- Hình ảnh -->
      <div>
        <label for="imageUrl" class="block text-sm font-medium text-gray-700">
          Hình ảnh
        </label>
        <input
          v-model="product.imageUrl"
          type="url"
          id="imageUrl"
          class="mt-1 block w-full p-2 border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nhập URL hình ảnh"
        />
      </div>

      <!-- Checkboxes -->
      <div class="flex flex-col space-y-2">
        <div class="flex items-center">
          <input
            v-model="product.isActive"
            type="checkbox"
            id="isActive"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="isActive" class="ml-2 text-sm font-medium text-gray-700">
            Sản phẩm hoạt động
          </label>
        </div>
        <div class="flex items-center">
          <input
            v-model="product.featured"
            type="checkbox"
            id="featured"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label for="featured" class="ml-2 text-sm font-medium text-gray-700">
            Nổi bật
          </label>
        </div>
      </div>

      <!-- Nút Submit -->
      <div class="flex justify-end pt-4">
        <button
          :disabled="loading"
          type="submit"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span v-if="!loading">Thêm sản phẩm</span>
          <span v-else class="flex items-center">
            <svg
              class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Đang xử lý...
          </span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

import { ref } from "vue";
const { $toast } = useNuxtApp();
const router = useRouter();

const product = ref({
  name: "",
  price: "",
  category: "",
  description: "",
  sku: "",
  weight: "",
  dimensions: "",
  imageUrl: "",
  discountPercentage: 0,
  isActive: true,
  featured: false,
});

const loading = ref(false);

const handleSubmit = async () => {
  try {
    if (
      !product.value.name ||
      !product.value.price ||
      !product.value.category ||
      !product.value.description
    ) {
      $toast.error("Vui lòng điền đầy đủ các trường bắt buộc");
      return;
    }

    loading.value = true;

    // Giả lập API call
    const response = await $fetch("/api/products", {
      method: "POST",
      body: product.value,
    });

    if (response) {
      $toast.success("Thêm sản phẩm thành công!");
      await router.push("/admin/products");
    }
  } catch (error) {
    console.error(error);
    $toast.error("Đã có lỗi xảy ra khi thêm sản phẩm");
  } finally {
    loading.value = false;
  }
};
</script>
