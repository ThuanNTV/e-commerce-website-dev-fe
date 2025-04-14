<template>
  <div class="login-container">
    <div class="login-header">
      <h1>Welcome Back</h1>
      <p>Please login to continue</p>
    </div>

    <form @submit.prevent="handleLogin">
      <div class="input-group">
        <input
          v-model="email"
          type="email"
          id="email"
          required
          placeholder="Email Address"
        />
        <div v-if="emailError" class="error-message">{{ emailError }}</div>
      </div>

      <div class="input-group">
        <input
          v-model="password"
          type="password"
          id="password"
          required
          placeholder="Password"
        />
        <div v-if="passwordError" class="error-message">
          {{ passwordError }}
        </div>
      </div>

      <div class="show-password">
        <input type="checkbox" v-model="showPassword" />
        <label for="showPassword">Show Password</label>
      </div>

      <button type="submit" class="submit-btn" :disabled="isLoading">
        {{ isLoading ? "Logging in..." : "Login" }}
      </button>
    </form>

    <div class="links">
      <a href="#">Forgot Password?</a>
      <span> | </span>
      <a href="/admin/register">Create Account</a>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAdminStore } from "@/stores/admin"; // Import admin store

const email = ref("");
const password = ref("");
const emailError = ref("");
const passwordError = ref("");
const isLoading = ref(false);
const showPassword = ref(false);
const adminStore = useAdminStore();
const router = useRouter();

const handleLogin = async () => {
  emailError.value = "";
  passwordError.value = "";

  // Basic validation
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
    const response = await adminStore.login(email.value, password.value);

    if (response.success) {
      // Redirect to the dashboard page after successful login
      router.push("/admin/dashboard");
    } else {
      alert("Login failed: " + response.message);
    }
  } catch (error) {
    alert("Login failed: " + error.message);
  } finally {
    isLoading.value = false;
  }
};

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
</script>

<style scoped>
/* Tailwind or custom styles can be added here */
.login-container {
  background: rgba(255, 255, 255, 0.95);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  width: 400px;
  /* Remove centering */
  margin-top: 50px; /* You can adjust this margin if needed */
  margin-left: auto;
  margin-right: auto;
}

.input-group {
  position: relative;
  margin-bottom: 30px;
}

.input-group input {
  width: 100%;
  padding: 15px;
  border: none;
  border-bottom: 2px solid #ddd;
  outline: none;
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
