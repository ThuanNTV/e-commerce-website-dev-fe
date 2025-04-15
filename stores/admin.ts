import { defineStore } from "pinia";
import axios from "axios"; // Dùng axios trực tiếp

export const useAdminStore = defineStore("admin", {
  state: () => ({
    user: null as null | { id: number; email: string; role: string },
    token: "" as string,
  }),

  actions: {
    async login(
      email: string,
      password: string
    ): Promise<{ success: boolean; message?: string; roleUser?: string }> {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/login",
          {
            email,
            password,
          }
        );

        if (response.data.success) {
          const { accessToken, user } = response.data.data;

          this.user = user;
          this.token = accessToken;
          localStorage.setItem("token", accessToken);

          return { success: true, roleUser: user.role };
        } else {
          return {
            success: false,
            message: response.data.message || "Login failed",
          };
        }
      } catch (error: any) {
        console.error("Login error:", error);
        return {
          success: false,
          message: error?.response?.data?.message || "Login failed",
        };
      }
    },

    logout() {
      this.user = null;
      this.token = "";
      localStorage.removeItem("token");
    },

    async register(
      email: string,
      password: string
    ): Promise<{ success: boolean; message?: string }> {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/auth/register",
          {
            email,
            password,
          }
        );

        if (response.data.success && response.data.data) {
          // Có thể lưu thông tin user nếu muốn:
          this.user = response.data.data;

          return { success: true };
        } else {
          return { success: false, message: "Register failed" };
        }
      } catch (error: any) {
        return {
          success: false,
          message: error?.response?.data?.message || "Something went wrong",
        };
      }
    },
  },
});
