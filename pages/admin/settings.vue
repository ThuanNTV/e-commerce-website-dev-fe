<template>
  <div class="max-w-4xl mx-auto bg-white p-6 rounded shadow space-y-6">
    <h2 class="text-2xl font-bold text-green-700">⚙️ Cài Đặt Hệ Thống</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <label class="block mb-1 font-medium text-gray-700">Tên website</label>
        <input
          v-model="form.siteName"
          class="w-full border rounded px-3 py-2"
          type="text"
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700"
          >Email liên hệ</label
        >
        <input
          v-model="form.contactEmail"
          class="w-full border rounded px-3 py-2"
          type="email"
        />
      </div>

      <div class="md:col-span-2">
        <label class="block mb-1 font-medium text-gray-700">Mô tả SEO</label>
        <textarea
          v-model="form.seoDescription"
          class="w-full border rounded px-3 py-2"
          rows="3"
        />
      </div>

      <div class="flex items-center space-x-3 mt-4">
        <input type="checkbox" v-model="form.maintenanceMode" class="w-5 h-5" />
        <span class="text-gray-700">Bật chế độ bảo trì</span>
      </div>
    </div>

    <div class="pt-4">
      <button
        @click="saveSettings"
        class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        💾 Lưu cài đặt
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

// Sửa cách import toast
import toastification from "vue-toastification";
const { useToast } = toastification;
const toast = useToast();

const form = ref({
  siteName: "",
  contactEmail: "",
  seoDescription: "",
  maintenanceMode: false,
});

// Sử dụng useAsyncData thay vì onMounted để SSR
const { data, error } = await useAsyncData("settings", async () => {
  try {
    return await $fetch("/api/settings"); // Sử dụng $fetch của Nuxt
  } catch (err) {
    toast.error("Không tải được cài đặt");
    console.error("Lỗi API:", err);
    return null;
  }
});

// Xử lý lỗi server-side
if (error.value) {
  throw createError({
    statusCode: 500,
    message: "Lỗi tải cài đặt từ server",
  });
}

// Cập nhật form khi có data
if (data.value) {
  form.value = data.value;
}

const saveSettings = async () => {
  try {
    await $fetch("/api/settings", {
      method: "PUT",
      body: form.value,
    });
    toast.success("Đã lưu cài đặt!");
  } catch (err) {
    toast.error("Lỗi khi lưu cài đặt");
    console.error("Lỗi API:", err);
  }
};
</script>
