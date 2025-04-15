<template>
  <div class="p-4 bg-white shadow rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Dashboard Quản Trị</h2>
    <p class="text-gray-700">
      Chào mừng bạn đến với bảng điều khiển quản trị của trang web!
    </p>
    <DashboardStats />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: "auth",
});
import DashboardStats from "~/components/DashboardStats.vue";
</script>

<style scoped></style>
