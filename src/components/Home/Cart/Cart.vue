<script setup lang="ts">
    import { useCartStore } from '../../../store/Cart';
    import { computed, onMounted, reactive, ref, watchEffect } from 'vue';

    const cartStore = useCartStore();
    const itemQty = ref(2);

    let cart = computed(() => {
        return cartStore.$state.cart
    });

    const removeItem = (item: any) => {
        if(item) {
            deleteItemInCart: cartStore.deleteItemInCart(item)
        }
    }

    let totalPrice = computed(function(){
        return cart.value.reduce((total: any, next: any) => {
            console.log(total, next.price)
            return total + (next.price)
        }, 0)
    });

    watchEffect(() => {
        
    }) 
    
</script>

<template>
    <div class="cart">
        <section class="h-100 h-custom" style="background-color: #d2c9ff;">
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-12">
                        <div class="card card-registration card-registration-2" style="border-radius: 15px;">
                            <div class="card-body p-0">
                                <div class="row g-0">
                                    <div class="col-lg-8">
                                        <div class="p-5">
                                            <div class="d-flex justify-content-between align-items-center mb-5">
                                                <h1 class="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <h6 class="mb-0 text-muted">{{ cart.length }} items</h6>
                                            </div>
                                            <hr class="my-4">

                                            <!-- Loop from here Start -->
                                            <!-- <pre>{{ JSON.stringify(cart, null, 2) }}</pre> -->
                                            <div class="product-item-elems" v-if="totalPrice > 0">
                                                <div 
                                                v-for="(item, index) in cart" :key="index"
                                                class="row mb-4 d-flex justify-content-between align-items-center">
                                                    <div class="col-md-2 col-lg-2 col-xl-2">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp" class="img-fluid rounded-3" alt="Cotton T-shirt">
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-3">
                                                        <!-- <h6 class="text-muted">Shirt</h6> -->
                                                        <h6 class="text-black mb-0">{{ item.name }}</h6>
                                                    </div>
                                                    <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                        <button class="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                            <i class="fas fa-minus"></i>
                                                        </button>

                                                        <input
                                                            :v-model="itemQty"
                                                            id="form1" min="0" name="quantity" value="1" type="number"
                                                            class="form-control form-control-sm" />

                                                        <button class="btn btn-link px-2"
                                                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                            <i class="fas fa-plus"></i>
                                                        </button>
                                                    </div>
                                                    <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                        <h6 class="mb-0">{{ item.price }}</h6>
                                                    </div>
                                                    <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                                                        <!-- <a href="#!" class="text-muted"><fa icon="trash" /></a> -->
                                                        <button @click.prevent="removeItem(item)" class="btn btn-light btn-block">
                                                            <fa icon="trash" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="no-product-in-cart" v-else>
                                                No product
                                            </div>

                                            <!-- Loop from here End -->

                                            <hr class="my-4">

                                            <div class="pt-5">
                                                <h6 class="mb-0"><router-link to="/shop">Back to shop</router-link></h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-4 bg-grey">
                                        <div class="p-5">
                                        <h3 class="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                        <hr class="my-4">

                                        <div class="glimpse-product-data">
                                            <!-- <h5 class="text-uppercase">{{ item.name }}</h5>
                                            <h5>{{ item.price }}</h5> -->
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(item, index) in cart" :key="index">
                                                        <td>{{ item.id }}</td>
                                                        <td>{{ item.name }}</td>
                                                        <td>{{ item.price }}</td>
                                                    </tr>
                                                </tbody>
                                                <td></td>
                                                <td>Total</td>
                                                <td>{{ totalPrice }}</td>
                                            </table>
                                        </div>

                                        <h5 class="text-uppercase mb-3">Shipping</h5>

                                        <div class="mb-4 pb-2">
                                            <select class="select">
                                            <option value="1">Standard-Delivery- €5.00</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                            <option value="4">Four</option>
                                            </select>
                                        </div>

                                        <h5 class="text-uppercase mb-3">Give code</h5>

                                        <div class="mb-5">
                                            <div class="form-outline">
                                            <input type="text" id="form3Examplea2" class="form-control form-control-lg" />
                                            <label class="form-label" for="form3Examplea2">Enter your code</label>
                                            </div>
                                        </div>

                                        <hr class="my-4">

                                        <div class="d-flex justify-content-between mb-5">
                                            <h5 class="text-uppercase">Total price</h5>
                                            <h5>€ {{ totalPrice }}</h5>
                                        </div>

                                        <button type="button" class="btn btn-dark btn-block btn-lg"
                                            data-mdb-ripple-color="dark">Register</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    </div>
</template>

<style scoped>
    @media (min-width: 1025px) {
    .h-custom {
    height: 100vh !important;
    }
    }

    .card-registration .select-input.form-control[readonly]:not([disabled]) {
    font-size: 1rem;
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
    }

    .card-registration .select-arrow {
    top: 13px;
    }

    .bg-grey {
    background-color: #eae8e8;
    }

    @media (min-width: 992px) {
    .card-registration-2 .bg-grey {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    }
    }

    @media (max-width: 991px) {
    .card-registration-2 .bg-grey {
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    }
    }
</style>