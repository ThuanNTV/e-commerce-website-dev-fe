<template>
  <aside class="w-64 bg-gray-800 text-white">
    <div class="py-6 px-4 text-center">
      <h2 class="text-2xl font-bold">Admin Panel</h2>
    </div>
    <nav class="mt-6">
      <ul>
        <li>
          <NuxtLink
            to="/admin/dashboard"
            class="block px-4 py-2 hover:bg-gray-700"
          >
            Dashboard
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/products"
            class="block px-4 py-2 hover:bg-gray-700"
          >
            Sản phẩm
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/orders"
            class="block px-4 py-2 hover:bg-gray-700"
          >
            Đơn hàng
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/admin/users" class="block px-4 py-2 hover:bg-gray-700">
            Người dùng
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/customers"
            class="block px-4 py-2 hover:bg-gray-700"
          >
            Khách hàng
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/admin/settings"
            class="block px-4 py-2 hover:bg-gray-700"
          >
            Cài đặt
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup></script>

<style scoped>
aside {
  min-width: 250px;
}
</style>
