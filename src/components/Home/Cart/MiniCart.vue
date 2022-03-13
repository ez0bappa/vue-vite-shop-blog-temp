<script setup lang="ts">
    import { computed } from 'vue';
    import { useCartStore } from '../../../store/Cart';

    const cartStore = useCartStore();

    let cart = computed(function () {
        return cartStore.$state.cart
    });

    let totalPrice = computed(function(){
        return cart.value.reduce((total: any, next: any) => {
            return total + (next.quantity * next.price)
        }, 0)
    })

</script>

<template>
    <div class="mini-cart">
        <div class="card-body">
            <h5 class="card-title">Your Cart</h5>
            <p v-if="cart.length == 0"> Your Cart is Empty</p>
        </div>
        <ul class="list-group list-group-flush">
            <li v-for="item in cart" :key="item.id" class="list-group-item d-flex justify-content-between align-items-center">
                {{item.name}}
                <span class="badge badge-warning badge-pill" style="color: black !important;">{{item.quantity}}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                Price <b>${{totalPrice}}</b>
            </li>
        </ul>

        <div class="card-body">
            <router-link to="/cart" class="btn btn-primary btn-block">Checkout</router-link>
        </div>
    </div>
</template>



<style scoped>

</style>