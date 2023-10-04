<template>
    <section class="collapse-menu scroll-menu" id="sidebar">
      <ul class="sidebar-menu">
        <div class="sticky-top sidebar-header py-1">
          <h4 class="p-1 text-center">
          <router-link to="/"> 
            <span>Inventory</span>
          </router-link></h4>
        </div>      
        <div class="py-1 d-flex ms-3">
          <div class="mt-2 ">
              <img src="/assets/img/admin-avatar.png" style="width:30px;" />
          </div>        
          <div class="admin-info ms-2">
            <div class="font-strong">User Name</div>           
          </div>            
        </div>
        <router-link to="/">
        <li class="sidebar-dashboard">         
            <i class="fa fa-dashboard"></i> <span>Dashboards</span>          
        </li>  
        </router-link>     
        <li> 
            <a href="#">
              <i class="fa fa-users"></i> <span> Products</span>
              <i class="fa fa-angle-left position-absolute end-0"></i>
            </a>
            <ul class="sidebar-submenu">             
              <li>
                <router-link to="/products"> 
                  <i class="fa-regular fa-circle"></i> Product list
                </router-link>
              </li>               
            </ul>
        </li>
      </ul>
    </section>
</template>
<script setup>
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router'

onMounted(() => {
  initSidebarDropdownMenu();
});

const initSidebarDropdownMenu = () => {
  // Your jQuery code can be translated into Vue here

  // Define your sidebar menu function
  const sidebarMenu = (menu) => {
    const subMenuSelector = '.sidebar-submenu';

    if (menu) {
      menu.querySelectorAll('li a').forEach(($this) => {
        $this.addEventListener('click', (e) => {
          const checkElement = $this.nextElementSibling;

          if (checkElement && checkElement.matches(subMenuSelector) && checkElement.style.display === 'block') {
            checkElement.style.display = 'none';
            checkElement.classList.remove('menu-open');
            $this.parentElement.classList.remove('active');

          } else if (checkElement && checkElement.matches(subMenuSelector)) {
            const parent = $this.closest('ul');
            const uls = parent.querySelectorAll('ul');
            uls.forEach((ul) => {
              ul.style.display = 'none';
              ul.classList.remove('menu-open');
            });

            if (checkElement) {
              checkElement.style.display = 'block';
              checkElement.classList.add('menu-open');
              parent.querySelectorAll('li.active').forEach((li) => {
                li.classList.remove('active');
              });
              $this.parentElement.classList.add('active');
            }

            e.preventDefault();
          }
        });
      });
    }
  };
  // Call your sidebar menu function
  sidebarMenu(document.querySelector('.sidebar-menu'));
};

</script>

<style scoped>
/* Sidebar submenu */
.sidebar-submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease; /* Adjust the duration as needed */
}

/* Active class for active menu items */
.sidebar-menu .active > .sidebar-submenu {
  max-height: initial;
}
</style>
