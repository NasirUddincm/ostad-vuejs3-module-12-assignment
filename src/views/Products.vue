<script setup>
import {ref} from 'vue'
import { products } from '@/components/database/products.js'

const columns = ref([
    {label: 'Title',field: 'title'},
    {label: 'Unit Price',field: 'unitPrice'},
    {label: 'Number Of Item',field: 'numberOfItems'},
    {label: 'Action',field: 'action'},
])

</script>
<template>
    <div>
        <vue-good-table
            :search-options="{
                enabled: true
            }"
            :pagination-options="{
                enabled: true,
                mode: 'records',
                nextLabel: 'next',
                prevLabel: 'prev',
            }"
            :columns="columns"
            :rows="products">
            <template #table-row="props">
                <span v-if="props.column.field == 'action'">
                    <router-link :to="`/product/`+props.row.id" 
                        class="btn btn-info">
                        View Details
                    </router-link>
                </span>
            </template>
        </vue-good-table>
    </div>
</template>