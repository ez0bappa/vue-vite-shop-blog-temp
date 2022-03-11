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
        },

        async deleteItemInCart(item) { 
            this.cart.splice(this.cart.indexOf(item) ,1);
        }
    },
    getters: {
        
    },
})