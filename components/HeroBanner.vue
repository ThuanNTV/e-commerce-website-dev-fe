<template>
  <div
    class="relative w-full h-96 bg-green-700 rounded-lg overflow-hidden mb-8"
  >
    <img
      :src="banner.image"
      alt="banner.title"
      class="w-full h-full object-cover"
    />
    <div
      class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="text-center text-white">
        <h1 class="text-4xl font-bold">{{ banner.title }}</h1>
        <p class="text-lg mt-4">{{ banner.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  banner: Object,
});
</script>

<style scoped>
/* Tùy chỉnh nếu cần */
</style>
