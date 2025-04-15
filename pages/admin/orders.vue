<template>
  <div class="p-6 bg-white shadow rounded-lg">
    <h2 class="text-2xl font-bold mb-6">📑 Quản lý Đơn hàng</h2>

    <div class="overflow-x-auto">
      <table class="min-w-full table-auto">
        <thead class="bg-gray-100 text-gray-700 text-left">
          <tr>
            <th class="py-3 px-4">Mã đơn</th>
            <th class="py-3 px-4">Khách hàng</th>
            <th class="py-3 px-4">Tổng tiền</th>
            <th class="py-3 px-4">Trạng thái</th>
            <th class="py-3 px-4">Ngày tạo</th>
            <th class="py-3 px-4">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in orders"
            :key="order.id"
            class="border-b hover:bg-gray-50 transition"
          >
            <td class="py-3 px-4 font-medium">#{{ order.code }}</td>
            <td class="py-3 px-4">{{ order.customer }}</td>
            <td class="py-3 px-4">{{ formatCurrency(order.total) }}</td>
            <td class="py-3 px-4">
              <span
                :class="[
                  'px-2 py-1 rounded text-sm font-medium',
                  order.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : order.status === 'completed'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                ]"
              >
                {{ formatStatus(order.status) }}
              </span>
            </td>
            <td class="py-3 px-4">{{ formatDate(order.createdAt) }}</td>
            <td class="py-3 px-4">
              <NuxtLink
                :to="`/admin/orders/${order.id}`"
                class="text-blue-600 hover:underline"
              >
                🔍 Xem
              </NuxtLink>
              <button
                @click="cancelOrder(order.id)"
                class="ml-3 text-red-500 hover:underline"
              >
                ❌ Hủy
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

const orders = ref([
  {
    id: 1,
    code: "DH001",
    customer: "Nguyễn Văn A",
    total: 150000,
    status: "pending",
    createdAt: "2025-04-14T10:30:00",
  },
  {
    id: 2,
    code: "DH002",
    customer: "Trần Thị B",
    total: 290000,
    status: "completed",
    createdAt: "2025-04-13T09:00:00",
  },
]);

const formatCurrency = (value) =>
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleString("vi-VN");
};

const formatStatus = (status) => {
  switch (status) {
    case "pending":
      return "Chờ xử lý";
    case "completed":
      return "Hoàn tất";
    case "canceled":
      return "Đã hủy";
    default:
      return status;
  }
};

const cancelOrder = (id) => {
  if (confirm("Xác nhận hủy đơn hàng này?")) {
    // TODO: Gọi API hủy đơn hàng
    orders.value = orders.value.map((o) =>
      o.id === id ? { ...o, status: "canceled" } : o
    );
  }
};
</script>
