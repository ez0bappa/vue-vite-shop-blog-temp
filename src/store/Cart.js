import { defineStore } from "pinia";

export const useCartStore = defineStore("Cart", {
    state: () => {
        return {
            cart: []
        }
    },
    actions: {
        async addToCart(item) {
            this.cart.push(item)
        }
    },
    getters: {
        
    },
})