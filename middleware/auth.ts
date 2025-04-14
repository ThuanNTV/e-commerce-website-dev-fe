export default defineNuxtRouteMiddleware((to, from) => {
  const token = localStorage.getItem("token");

  // Nếu không có token và truy cập vào các trang yêu cầu đăng nhập (ví dụ: /admin/*)
  if (!token && to.path.startsWith("/admin")) {
    return navigateTo("/admin/login");
  }
});
