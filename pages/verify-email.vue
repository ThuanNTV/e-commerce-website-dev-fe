<!-- pages/verify-email.vue -->
<template>
  <div v-if="success">Xác nhận thành công!</div>
  <div v-else>Đang xác nhận...</div>
</template>

<script setup>
const route = useRoute();
const { data: success } = await useFetch(
  `/api/auth/verify?token=${route.query.token}`
);
</script>
