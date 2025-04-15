<template>
  <div class="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <header class="shadow bg-white">
      <div
        class="container mx-auto px-4 py-3 flex items-center justify-between"
      >
        <nav class="w-full flex justify-between items-center">
          <div class="flex items-center space-x-4">
            <NuxtLink to="/" class="text-xl font-bold text-green-700"
              >🌱 Nông Dược</NuxtLink
            >
            <ul class="hidden md:flex space-x-6 font-medium">
              <li><NuxtLink to="/products">Sản phẩm</NuxtLink></li>
              <li><NuxtLink to="/categories">Danh mục</NuxtLink></li>
              <li><NuxtLink to="/about">Giới thiệu</NuxtLink></li>
            </ul>
          </div>

          <div class="flex space-x-4 items-center">
            <NuxtLink to="/cart" class="hover:text-green-600"
              >🛒 Giỏ hàng</NuxtLink
            >
            <NuxtLink to="/admin/login" class="hover:text-green-600"
              >Đăng nhập</NuxtLink
            >
          </div>
        </nav>
      </div>
    </header>

    <!-- Add search bar here if necessary -->
    <main class="flex-1 container mx-auto px-4 py-6">
      <NuxtPage />
    </main>

    <footer class="p-4 text-sm text-center text-gray-500 border-t">
      &copy; {{ new Date().getFullYear() }} Your Shop — All rights reserved.
    </footer>
  </div>
</template>

<style scoped>
/* Add mobile responsiveness */
@media (max-width: 768px) {
  .hidden {
    display: block;
  }
  .md\\:hidden {
    display: none;
  }
  nav {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
