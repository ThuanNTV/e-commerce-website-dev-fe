<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-white px-4"
  >
    <LottieAnimation
      :animation-data="animationData"
      :loop="true"
      class="w-80 h-80"
    />
    <h1 class="text-4xl font-bold mt-6 text-gray-800">
      404 - Không tìm thấy trang
    </h1>
    <p class="mt-2 text-gray-600">
      Trang bạn đang cố truy cập không tồn tại hoặc đã bị xoá.
    </p>
    <NuxtLink
      to="/"
      class="mt-6 bg-blue-500 text-white px-5 py-3 rounded-full hover:bg-blue-600 transition"
    >
      Về trang chủ
    </NuxtLink>
  </div>
</template>

<script setup>
import LottieAnimation from "vue3-lottie";
import animationData from "../assets/lottie/404.json"; // Import file Lottie
</script>
