<template>
  <div class="login-container">
    <div class="login-header">
      <h1>Create Account</h1>
      <p>Let’s get you signed up</p>
    </div>

    <form @submit.prevent="handleRegister">
      <div class="input-group">
        <input
          v-model="email"
          type="email"
          required
          placeholder="Email Address"
        />
        <div v-if="emailError" class="error-message">{{ emailError }}</div>
      </div>

      <div class="input-group">
        <input
          v-model="password"
          type="password"
          required
          placeholder="Password"
        />
        <div v-if="passwordError" class="error-message">
          {{ passwordError }}
        </div>
      </div>

      <button type="submit" class="submit-btn" :disabled="isLoading">
        {{ isLoading ? "Creating..." : "Register" }}
      </button>
    </form>

    <div class="links">
      <a href="/admin/login">Already have an account?</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAdminStore } from "@/stores/admin";

const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const isLoading = ref(false);
const router = useRouter();
const adminStore = useAdminStore();

const handleRegister = async () => {
  emailError.value = "";
  passwordError.value = "";

  if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    return;
  }

  if (password.value.length < 8) {
    passwordError.value = "Password must be at least 8 characters";
    return;
  }

  isLoading.value = true;

  try {
    const res = await adminStore.register(email.value, password.value);

    if (res.success) {
      alert("Register success!");
      router.push("/admin/login");
    } else {
      alert("Register failed: " + res.message);
    }
  } catch (err) {
    alert("Something went wrong!");
  } finally {
    isLoading.value = false;
  }
};

const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
</script>

<style scoped>
/* Tái sử dụng style từ login.vue */
.login-container {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 400px;
  margin: 50px auto 0;
}
.input-group {
  margin-bottom: 30px;
}
.input-group input {
  width: 100%;
  padding: 15px;
  border: none;
  border-bottom: 2px solid #ddd;
  font-size: 16px;
  background: transparent;
}
.submit-btn {
  width: 100%;
  padding: 15px;
  background: #4ecdc4;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}
.submit-btn:disabled {
  background: #ccc;
}
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
