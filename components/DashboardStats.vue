<template>
  <div class="grid grid-cols-3 gap-6 mt-8">
    <!-- Tổng số đơn hàng -->
    <div class="bg-green-100 p-6 rounded-lg shadow">
      <h3 class="text-xl font-semibold">Tổng Đơn Hàng</h3>
      <p class="text-lg font-bold text-green-600">1,250</p>
    </div>
    <!-- Tổng số sản phẩm -->
    <div class="bg-blue-100 p-6 rounded-lg shadow">
      <h3 class="text-xl font-semibold">Tổng Sản Phẩm</h3>
      <p class="text-lg font-bold text-blue-600">250</p>
    </div>
    <!-- Tổng số người dùng -->
    <div class="bg-yellow-100 p-6 rounded-lg shadow">
      <h3 class="text-xl font-semibold">Tổng Người Dùng</h3>
      <p class="text-lg font-bold text-yellow-600">1,000</p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>
