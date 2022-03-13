import { defineStore } from "pinia";

export const useCartStore = defineStore("Cart", {
    state: () => {
        return {
            productQty: 1,
            cart: []
        }
    },
    actions: {
        async addToCart(item) {
            item.quantity = 1;
            this.cart.push(item)
        },

        async deleteItemInCart(item) { 
            this.cart.splice(this.cart.indexOf(item) ,1);
        },

        async updateCartItem(updatedItem) {
            this.cart = this.cart.map((cartItem) => {
                if(cartItem.id == updatedItem.id) {
                    return updatedItem
                }
                return cartItem;
            })
        }
    },
    getters: {
        
    },
})