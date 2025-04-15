export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.client) {
    // Chỉ sử dụng localStorage khi chạy trên client
    const token = localStorage.getItem("token");
    // Chặn nếu chưa đăng nhập
    if (!token && to.path.startsWith("/admin")) {
      return navigateTo("/admin/login");
    }

    // Nếu đã có token, kiểm tra quyền truy cập
    if (token && to.path.startsWith("/admin")) {
      try {
        const res = await $fetch("http://localhost:3000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res?.data || res.data.role !== "admin") {
          return navigateTo("/403"); // Trang cấm truy cập
        }
      } catch (err) {
        console.error("Middleware error:", err);
        return navigateTo("/admin/login"); // fallback nếu token lỗi
      }
    }
  }
});
