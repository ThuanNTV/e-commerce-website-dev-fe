<!-- pages/admin/products/index.vue -->
<template>
  <AdminLayout>
    <DataTable :value="products">
      <Column field="name" header="Tên sản phẩm"></Column>
      <Column header="Hành động">
        <template #body="slotProps">
          <Button
            icon="pi pi-trash"
            @click="deleteProduct(slotProps.data.id)"
          />
        </template>
      </Column>
    </DataTable>
  </AdminLayout>
</template>

<script setup>
const { data: products } = await useFetch("/api/admin/products");
</script>
