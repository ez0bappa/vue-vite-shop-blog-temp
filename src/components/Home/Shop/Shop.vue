<script setup lang="ts">
import { computed, defineComponent } from 'vue'
import { useProductStore } from '../../../store/Product'
import Product from './Product.vue'

const store = useProductStore();

let products = computed(() => {
    return store.$state.products
})

let singleProduct = computed(() => {
    return products.value.filter((product: any) => {
        return product;
    })
})

// console.log(singleProduct)
</script>

<template>
    <div class="shop">
        <div class="container-fluid">
            <div class="row content">
                <div class="col-sm-2 sidenav" style="background: linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%);">
                    <h4>Filtered Products</h4>
                    <ul class="nav nav-pills nav-stacked">
                        <li class="active"><a href="#section1">Home</a></li>
                        <li><a href="#section2">Friends</a></li>
                        <li><a href="#section3">Family</a></li>
                        <li><a href="#section3">Photos</a></li>
                    </ul><br>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search Product..">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="button">
                                <span class="glyphicon glyphicon-search"></span>
                            </button>
                        </span>
                    </div>
                </div>

                <div class="col-sm-10">
                    <h4><small>RECENT PRODUCTS</small></h4>
                    <hr>
                    <div class="container">
                        <div class="row">
                            <Product v-for="product in singleProduct" :product="product" :key="product.id" />
                        </div>
                    </div>
                    <hr>
                </div>
            </div>
        </div>

        <footer class="container-fluid"  style="background-color: grey">
            <p>Footer Text</p>
        </footer>
    </div>
</template>

<style scoped>

</style>
