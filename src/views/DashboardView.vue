<script setup>
import {  onMounted } from 'vue';
import  ProductComponent  from '@/views/Products.vue';
onMounted(() => {
});

</script>

<template>
  <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-1">
      <li class="breadcrumb-item active" aria-current="page">
          <h4>Dashboard</h4>
      </li>
      </ol>
  </nav>    
    <ProductComponent/>
</template>
<style scoped>
.chart-container {
  max-width: 100%;
}
</style>