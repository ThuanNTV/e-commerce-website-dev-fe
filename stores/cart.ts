import { defineStore } from "pinia";

// Định nghĩa store cho giỏ hàng
export const useCart = defineStore("cart", {
  state: () => ({
    items: [] as Array<any>, // Mảng sản phẩm trong giỏ hàng
  }),

  actions: {
    addProduct(product: any) {
      // Thêm sản phẩm vào giỏ hàng
      this.items.push(product);
    },

    removeProduct(productId: string | number) {
      // Xóa sản phẩm khỏi giỏ hàng
      this.items = this.items.filter((item) => item.id !== productId);
    },
  },

  getters: {
    totalPrice(): number {
      // Tính tổng giá trị của giỏ hàng
      return this.items.reduce((total, item) => total + item.price, 0);
    },
  },
});
