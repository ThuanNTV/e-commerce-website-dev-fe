<template>
  <div class="min-h-screen bg-gray-50 text-gray-900">
    <header class="p-4 shadow bg-white">
      <h1 class="text-xl font-semibold">🛍️ E-Commerce</h1>
    </header>

    <main class="p-4">
      <NuxtPage />
    </main>

    <footer class="p-4 text-sm text-center text-gray-500">
      &copy; {{ new Date().getFullYear() }} Your Shop — All rights reserved.
    </footer>
  </div>
</template>
