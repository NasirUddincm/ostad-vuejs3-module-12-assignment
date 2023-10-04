<script setup>
import { computed } from 'vue'
import { products } from '@/components/database/products.js';
import { useRoute } from 'vue-router';

const route = useRoute();
const productId = computed(() => route.params.id);

let product = computed(() => {
  return products.find(product => product.id == productId.value);

});
</script>
<template>
    <div class="card">
        <div class="card-header row mx-0">
            <div class="col">
                <span class="mt-1">Product Details</span>
            </div>
            <div class="col d-flex justify-content-end">                
                <!-- Button trigger modal -->
                <router-link to="/products"
                    class="btn btn-success">
                    <i class="fa fa-list"></i> Product List
                </router-link>

            </div>
        </div>
        <div class="card-body">
            <section class="py-5 my-5">
                <div class="container-fluid">
                <div class="row">   
                    <div class="col-lg-5 col-6 mx-lg-0 mx-auto px-lg-0 px-md-0 my-auto">
                        <img class="w-100 border-radius-lg shadow img-thumbnail" :src="product.image">
                    </div>         
                    <div class="col-lg-4 col-10 d-flex justify-content-center flex-column mx-auto text-lg-start text-center">
                    <h2 class="mb-0 mt-lg-0 mt-4 text-gradient text-info">
                        {{product.title}} Details       
                    </h2>      
                    <h3>Unit Price: {{product.unitPrice}}</h3>
                    <p class="lead my-2">
                        {{product.description}}
                    </p>   
                    
                    </div>            
                </div>
                </div>
            </section>
        
        </div>
    </div>
</template>