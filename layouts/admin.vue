<template>
  <div class="admin-layout flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <main class="flex-1 bg-gray-100">
      <Navbar />
      <section class="p-6">
        <slot />
      </section>
    </main>
  </div>
</template>

<script setup>
import Sidebar from "~/components/Sidebar.vue";
import Navbar from "~/components/Navbar.vue";
</script>

<style scoped>
.admin-layout {
  display: flex;
  flex-direction: row;
}

main {
  flex: 1;
}
</style>
