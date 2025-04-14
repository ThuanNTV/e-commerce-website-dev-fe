// middleware/index.ts
import { defineNuxtRouteMiddleware } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  // Nếu route chứa "/admin" và không có token thì chuyển hướng
  const token = localStorage.getItem("token");
  if (to.path.startsWith("/admin") && !token) {
    return navigateTo("/admin/login");
  }
});
