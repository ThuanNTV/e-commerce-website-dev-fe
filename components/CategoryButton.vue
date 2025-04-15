<template>
  <button
    class="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition duration-200"
  >
    {{ category }}
  </button>
</template>

<script setup lang="ts">
defineProps({
  category: String,
});
</script>

<style scoped>
/* Tùy chỉnh nếu cần */
</style>
