<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'
import { useProductStore } from '../../../store/Product'
import { useRouter } from 'vue-router'
import maintainanceReturn from '../../../services/MaintanceMode.js'
// import Product from './Product.vue'
// import MiniCart from '../Cart/MiniCart.vue'

const router = useRouter()
const store = useProductStore();

const search = ref('');

if(maintainanceReturn.MaintainanceMode()) {
    console.log('we are in maintaince')
    router.push('/maintainance-page')
} else {
    console.log('Normal mode')
}

let products = computed(() => {
    return store.$state.products
})

let searchedProducts = computed(() => {
    return products.value.filter((post: any) => {
        return post.name.toLowerCase().includes(search.value.toLowerCase())
    })
})

// Async components
const ProductComponent = defineAsyncComponent(() => {
    return import(/*webpackChunkName: 'Product component' */ './Product.vue')
})

const MiniCartComponent  = defineAsyncComponent(() => {
    return import(/*webpackChunkName: 'MIniCart component' */ '../Cart/MiniCart.vue')
})
</script>

<template>
    <div class="shop">
        <!-- <div class="home container">
            <div class="row">
                <div class="col-md-9 pt-5">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                        <Product v-for="product in searchedProducts" :product="product" :key="product.id" />
                    </div>
                </div>
                <div class="col-md-3 pt-5">
                    <MiniCart />
                </div>
            </div>
        </div> -->

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
                        <input type="text" v-model="search" class="form-control" placeholder="Search Product..">
                        <!-- <pre>{{ JSON.stringify(search, null, 2) }}</pre> -->
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
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-9 pt-5">
                                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 row-cols-xl-3">
                                    <ProductComponent v-for="product in searchedProducts" :product="product" :key="product.id" />
                                </div>
                            </div>
                            <div class="col-md-3 pt-5">
                                <MiniCartComponent />
                            </div>
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
