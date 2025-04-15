<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h2 class="text-2xl font-bold mb-6">👤 Quản lý Người dùng</h2>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead class="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th class="py-3 px-4">ID</th>
            <th class="py-3 px-4">Email</th>
            <th class="py-3 px-4">Vai trò</th>
            <th class="py-3 px-4">Trạng thái</th>
            <th class="py-3 px-4">Ngày tạo</th>
            <th class="py-3 px-4">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="py-3 px-4">{{ user.id }}</td>
            <td class="py-3 px-4">{{ user.email }}</td>
            <td class="py-3 px-4 capitalize">
              <span
                :class="[
                  'px-2 py-1 rounded text-sm font-medium',
                  user.role === 'admin'
                    ? 'bg-blue-100 text-blue-800'
                    : user.role === 'staff'
                    ? 'bg-purple-100 text-purple-800'
                    : 'bg-green-100 text-green-800',
                ]"
              >
                {{ user.role }}
              </span>
            </td>
            <td class="py-3 px-4">
              <span
                :class="
                  user.isVerified
                    ? 'text-green-600 font-medium'
                    : 'text-yellow-500 font-medium'
                "
              >
                {{ user.isVerified ? "Đã xác minh" : "Chưa xác minh" }}
              </span>
            </td>
            <td class="py-3 px-4">{{ formatDate(user.createdAt) }}</td>
            <td class="py-3 px-4">
              <NuxtLink
                :to="`/admin/users/${user.id}`"
                class="text-blue-600 hover:underline"
              >
                🔍 Xem
              </NuxtLink>
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

const users = ref([
  {
    id: 1,
    email: "admin@company.com",
    role: "admin",
    isVerified: true,
    createdAt: "2025-04-01T08:00:00Z",
  },
  {
    id: 2,
    email: "staff@company.com",
    role: "staff",
    isVerified: true,
    createdAt: "2025-04-10T10:20:00Z",
  },
  {
    id: 3,
    email: "cus@company.com",
    role: "customer",
    isVerified: false,
    createdAt: "2025-04-15T04:28:10Z",
  },
]);

const formatDate = (iso) => {
  const date = new Date(iso);
  return date.toLocaleDateString("vi-VN");
};
</script>
