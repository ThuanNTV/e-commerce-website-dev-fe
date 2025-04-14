// plugins/axios.ts
import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const axiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL || "http://localhost:3000", // Hoặc URL của API của bạn
  });

  nuxtApp.provide("axios", axiosInstance); // Cung cấp axios instance
});
