<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">
      👤 Thông tin khách hàng #{{ id }}
    </h2>

    <div class="bg-white shadow p-6 rounded-lg mb-6">
      <h3 class="text-xl font-bold mb-2">Thông tin cơ bản</h3>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <p>
        <strong>Trạng thái:</strong>
        <span :class="user.isVerified ? 'text-green-600' : 'text-yellow-500'">
          {{ user.isVerified ? "Đã xác minh" : "Chưa xác minh" }}
        </span>
      </p>
      <p><strong>Vai trò:</strong> {{ user.role }}</p>
      <p><strong>Ngày tạo:</strong> {{ formatDate(user.createdAt) }}</p>
    </div>

    <div class="bg-white shadow p-6 rounded-lg">
      <h3 class="text-xl font-bold mb-2">📦 Lịch sử đơn hàng</h3>
      <table class="min-w-full mt-3">
        <thead class="bg-green-100 text-left">
          <tr>
            <th class="py-2 px-3">Mã đơn</th>
            <th class="py-2 px-3">Ngày</th>
            <th class="py-2 px-3">Tổng tiền</th>
            <th class="py-2 px-3">Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in orders"
            :key="order.id"
            class="border-t hover:bg-gray-50"
          >
            <td class="py-2 px-3">#{{ order.id }}</td>
            <td class="py-2 px-3">{{ formatDate(order.date) }}</td>
            <td class="py-2 px-3">{{ order.total | currency }}</td>
            <td class="py-2 px-3">
              <span
                :class="{
                  'text-green-600': order.status === 'hoàn thành',
                  'text-yellow-500': order.status === 'đang xử lý',
                }"
              >
                {{ order.status }}
              </span>
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

import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";

const route = useRoute();
const id = route.params.id;

// 🔧 Giả lập API
const user = ref({
  id,
  email: "nongdan123@green.vn",
  role: "customer",
  isVerified: true,
  createdAt: "2025-04-01T11:28:00Z",
});

const orders = ref([
  {
    id: 1001,
    date: "2025-04-10T10:00:00Z",
    total: 480000,
    status: "hoàn thành",
  },
  {
    id: 1002,
    date: "2025-04-13T13:45:00Z",
    total: 210000,
    status: "đang xử lý",
  },
]);

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
</script>

<script>
// 📦 Currency pipe
export default {
  filters: {
    currency(value) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
      }).format(value);
    },
  },
};
</script>
