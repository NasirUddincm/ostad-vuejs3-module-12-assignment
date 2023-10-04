<script setup>
import { onMounted } from 'vue';
onMounted(() => {
  collapsSidebar()
});

// sidebar toggle menu
const collapsSidebar = () => {
  const sidebarCollapse = document.querySelector("#sidebarCollapse");
  sidebarCollapse.addEventListener("click", function () {
    const sidebar = document.querySelector("#sidebar");
    const content = document.querySelector("#content");
    sidebar.classList.toggle("active");
    content.classList.toggle("active");
  });
}
</script>
<template>
     <nav class="py-2 sticky-top bg-light border-bottom" id="topbar">
        <div class="d-flex flex-wrap">
          <ul class="nav me-auto">
            <a id="sidebarCollapse"  class="btn ms-2  btn-sm" href="#">
              <i class="fa fa-bars"></i>
            </a>
            <h5 class="mx-2">Company Name</h5>            
          </ul>        
        </div>
    </nav>   
</template>