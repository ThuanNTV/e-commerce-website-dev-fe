<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h2 class="text-2xl font-bold mb-4">👤 Chi tiết người dùng</h2>

    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">
        Thông tin cá nhân
      </h3>
      <ul class="text-gray-800 space-y-1">
        <li><strong>ID:</strong> {{ user.id }}</li>
        <li><strong>Email:</strong> {{ user.email }}</li>
        <li><strong>Vai trò:</strong> {{ user.role }}</li>
        <li>
          <strong>Trạng thái:</strong>
          <span :class="user.isVerified ? 'text-green-600' : 'text-yellow-500'">
            {{ user.isVerified ? "Đã xác minh" : "Chưa xác minh" }}
          </span>
        </li>
        <li><strong>Ngày tạo:</strong> {{ formatDate(user.createdAt) }}</li>
      </ul>
    </div>

    <div class="mb-6">
      <h3 class="text-lg font-semibold text-gray-700 mb-2">
        🧾 Lịch sử đơn hàng
      </h3>
      <table class="min-w-full table-auto border">
        <thead class="bg-gray-100 text-left">
          <tr>
            <th class="px-4 py-2">Mã đơn</th>
            <th class="px-4 py-2">Ngày đặt</th>
            <th class="px-4 py-2">Trạng thái</th>
            <th class="px-4 py-2">Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id" class="border-t">
            <td class="px-4 py-2">{{ order.code }}</td>
            <td class="px-4 py-2">{{ formatDate(order.date) }}</td>
            <td class="px-4 py-2">
              <span
                :class="{
                  'text-green-600': order.status === 'Đã giao',
                  'text-yellow-600': order.status === 'Đang xử lý',
                  'text-red-600': order.status === 'Đã huỷ',
                }"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="px-4 py-2">{{ order.total.toLocaleString() }}₫</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div>
      <h3 class="text-lg font-semibold text-gray-700 mb-2">
        ⚙️ Hoạt động gần đây
      </h3>
      <ul class="text-sm text-gray-600 list-disc ml-6">
        <li v-for="(log, index) in activityLogs" :key="index">
          {{ log }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});

import { useRoute } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const userId = route.params.id;

const user = ref({
  id: userId,
  email: "cus@company.com",
  role: "customer",
  isVerified: false,
  createdAt: "2025-04-15T04:28:10Z",
});

const orders = ref([
  {
    id: 1,
    code: "ORD12345",
    date: "2025-04-10T09:00:00Z",
    status: "Đã giao",
    total: 120000,
  },
  {
    id: 2,
    code: "ORD12346",
    date: "2025-04-13T14:30:00Z",
    status: "Đang xử lý",
    total: 85000,
  },
]);

const activityLogs = ref([
  "🛒 Đặt đơn hàng ORD12345",
  "📝 Cập nhật thông tin tài khoản",
  "🔐 Đăng nhập từ IP 192.168.1.5",
]);

const formatDate = (iso) => {
  const date = new Date(iso);
  return date.toLocaleDateString("vi-VN");
};
</script>
