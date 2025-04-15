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

import { ref, onMounted } from "vue";
import { useToast } from "vue-toastification";

const toast = useToast();

const form = ref({
  siteName: "",
  contactEmail: "",
  seoDescription: "",
  maintenanceMode: false,
});

onMounted(async () => {
  // Load settings từ API
  const res = await fetch("/api/settings");
  const data = await res.json();
  form.value = data;
});

const saveSettings = async () => {
  const res = await fetch("/api/settings", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form.value),
  });
  if (res.ok) {
    toast.success("Đã lưu cài đặt!");
  } else {
    toast.error("Lỗi khi lưu cài đặt.");
  }
};
</script>
