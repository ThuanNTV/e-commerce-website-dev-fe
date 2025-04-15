<template>
  <div class="p-4 bg-white shadow rounded-lg">
    <h2 class="text-2xl font-semibold mb-6">Thêm Sản phẩm Mới</h2>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700"
          >Tên sản phẩm</label
        >
        <input
          v-model="product.name"
          type="text"
          id="name"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập tên sản phẩm"
          required
        />
      </div>

      <div>
        <label for="price" class="block text-sm font-medium text-gray-700"
          >Giá</label
        >
        <input
          v-model="product.price"
          type="number"
          id="price"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập giá sản phẩm"
          required
          min="0"
        />
      </div>

      <div>
        <label for="category" class="block text-sm font-medium text-gray-700"
          >Danh mục</label
        >
        <select
          v-model="product.category"
          id="category"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          required
        >
          <option value="">Chọn danh mục</option>
          <option value="Danh mục 1">Danh mục 1</option>
          <option value="Danh mục 2">Danh mục 2</option>
          <option value="Danh mục 3">Danh mục 3</option>
        </select>
      </div>

      <div>
        <label for="sku" class="block text-sm font-medium text-gray-700"
          >SKU</label
        >
        <input
          v-model="product.sku"
          type="text"
          id="sku"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập mã SKU"
        />
      </div>

      <div>
        <label for="weight" class="block text-sm font-medium text-gray-700"
          >Cân nặng (kg)</label
        >
        <input
          v-model="product.weight"
          type="number"
          id="weight"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập cân nặng sản phẩm"
        />
      </div>

      <div>
        <label for="dimensions" class="block text-sm font-medium text-gray-700"
          >Kích thước (cm)</label
        >
        <input
          v-model="product.dimensions"
          type="text"
          id="dimensions"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập kích thước sản phẩm (dài, rộng, cao)"
        />
      </div>

      <div>
        <label for="description" class="block text-sm font-medium text-gray-700"
          >Mô tả</label
        >
        <textarea
          v-model="product.description"
          id="description"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập mô tả sản phẩm"
          required
        ></textarea>
      </div>

      <div>
        <label for="imageUrl" class="block text-sm font-medium text-gray-700"
          >Hình ảnh</label
        >
        <input
          v-model="product.imageUrl"
          type="url"
          id="imageUrl"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập URL hình ảnh"
        />
      </div>

      <div>
        <label
          for="discountPercentage"
          class="block text-sm font-medium text-gray-700"
          >Chiết khấu (%)</label
        >
        <input
          v-model="product.discountPercentage"
          type="number"
          id="discountPercentage"
          class="mt-1 block w-full p-2 border border-gray-300 rounded"
          placeholder="Nhập chiết khấu (%)"
          min="0"
          max="100"
        />
      </div>

      <div>
        <label for="isActive" class="block text-sm font-medium text-gray-700"
          >Sản phẩm hoạt động</label
        >
        <input
          v-model="product.isActive"
          type="checkbox"
          id="isActive"
          class="mt-1"
        />
      </div>

      <div>
        <label for="featured" class="block text-sm font-medium text-gray-700"
          >Nổi bật</label
        >
        <input
          v-model="product.featured"
          type="checkbox"
          id="featured"
          class="mt-1"
        />
      </div>

      <div class="flex justify-end">
        <button
          :disabled="loading"
          type="submit"
          class="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Thêm sản phẩm
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
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import axios from "axios";

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

const toast = useToast();
const router = useRouter();
const loading = ref(false);

const handleSubmit = async () => {
  try {
    // Kiểm tra xem các trường có hợp lệ không
    if (
      !product.value.name ||
      !product.value.price ||
      !product.value.category ||
      !product.value.description
    ) {
      toast.error("Vui lòng điền đầy đủ thông tin sản phẩm.");
      return;
    }

    loading.value = true;

    // Gửi request tạo sản phẩm mới
    const response = await axios.post("/api/products", product.value);

    if (response.status === 201) {
      toast.success("Sản phẩm đã được thêm thành công!");
      router.push("/admin/products"); // Điều hướng về trang quản lý sản phẩm
    } else {
      toast.error("Tạo sản phẩm thất bại. Vui lòng thử lại.");
    }
  } catch (error) {
    console.error(error);
    toast.error("Đã có lỗi xảy ra khi tạo sản phẩm");
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Tùy chỉnh các style nếu cần */
</style>
