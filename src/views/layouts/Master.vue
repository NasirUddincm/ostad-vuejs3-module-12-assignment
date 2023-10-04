<script setup>
import SidebarComponent from '@/components/partials/SidebarComponent.vue'
import HeaderComponent from '@/components/partials/HeaderComponent.vue'
</script>
<template>    
    <!-- sidebar start -->
    <SidebarComponent/>
    <!-- sidebar ends -->
    <div class="page-content"  id="content">
      <!-- start header -->
      <HeaderComponent/>         
      <!-- end header -->      
      <!-- start main content -->
      <div class="px-3 py-2">
        <RouterView/>
       
      </div>
      <!-- end main content -->
    </div>
   
</template>