<template>
  <header class="bg-white shadow p-4">
    <div class="flex justify-between items-center">
      <h1 class="text-xl font-semibold">Dashboard</h1>
      <div>
        <button class="text-gray-600">Logout</button>
      </div>
    </div>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  background-color: #fff;
}

header button {
  background: none;
  border: none;
  color: #4caf50;
  cursor: pointer;
}

header button:hover {
  text-decoration: underline;
}
</style>
