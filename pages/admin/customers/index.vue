<template>
  <div>
    <h2 class="text-2xl font-semibold mb-6">👨‍🌾 Quản lý Khách hàng</h2>

    <div class="mb-4 text-right">
      <input
        v-model="search"
        type="text"
        placeholder="Tìm theo email hoặc ID..."
        class="border px-3 py-2 rounded w-72"
      />
    </div>

    <table class="min-w-full bg-white shadow rounded-md overflow-hidden">
      <thead class="bg-green-100 text-left">
        <tr>
          <th class="py-3 px-4">ID</th>
          <th class="py-3 px-4">Email</th>
          <th class="py-3 px-4">Trạng thái</th>
          <th class="py-3 px-4">Ngày tham gia</th>
          <th class="py-3 px-4">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in filteredCustomers"
          :key="user.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="py-3 px-4">{{ user.id }}</td>
          <td class="py-3 px-4">{{ user.email }}</td>
          <td class="py-3 px-4">
            <span
              :class="user.isVerified ? 'text-green-600' : 'text-yellow-500'"
            >
              {{ user.isVerified ? "✅ Đã xác minh" : "⚠️ Chưa xác minh" }}
            </span>
          </td>
          <td class="py-3 px-4">{{ formatDate(user.createdAt) }}</td>
          <td class="py-3 px-4 space-x-2">
            <NuxtLink
              :to="`/admin/users/${user.id}`"
              class="text-blue-600 hover:underline"
              >Chi tiết</NuxtLink
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

import { ref, computed } from "vue";

// 🔧 Dữ liệu mẫu, có thể thay bằng API fetch sau
const users = ref([
  {
    id: 2,
    email: "cus@company.com",
    role: "customer",
    isVerified: false,
    createdAt: "2025-04-15T04:28:10Z",
  },
  {
    id: 4,
    email: "nongdan123@green.vn",
    role: "customer",
    isVerified: true,
    createdAt: "2025-04-01T11:28:00Z",
  },
  {
    id: 5,
    email: "nongthon@thuoc.com",
    role: "admin",
    isVerified: true,
    createdAt: "2025-03-28T10:00:00Z",
  },
]);

const search = ref("");

const filteredCustomers = computed(() =>
  users.value.filter(
    (u) =>
      u.role === "customer" &&
      (u.email.toLowerCase().includes(search.value.toLowerCase()) ||
        u.id.toString().includes(search.value))
  )
);

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
</script>
