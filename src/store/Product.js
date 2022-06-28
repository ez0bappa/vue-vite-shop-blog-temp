import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("Products", {
    state: () => {
        return {
            products: [
                {
                  id: 1,
                  name: "Chelsea Shoes",
                  price: 200,
                  shortdesc: "Best Drip in the Market",
                  url: "images/chelsea-shoes.png"
                },
                {
                  id: 2,
                  name: "Kimono",
                  price: 50,
                  shortdesc: "Classy, Stylish, Dope",
                  url: "images/kimono.png"
                },
                {
                  id: 3,
                  name: "Watch",
                  price: 2500,
                  shortdesc: "Elegance built in",
                  url: "images/rolex.png"
                },
                {
                  id: 4,
                  name: "Wallet",
                  price: 80,
                  shortdesc: "Sleek, Trendy, Clean",
                  url: "images/wallet.png"
                },
                {
                  id: 5,
                  name: "Lady Handbags",
                  price: 230,
                  shortdesc: "Fabulous, Classy",
                  url: "images/handbag.png"
                },
                {
                  id: 6,
                  name: "Casual Shirts",
                  price: 30,
                  shortdesc: "Neat, Sleek, Smart",
                  url: "images/shirt.png"
                }
              ],
            cart: []
        }
    },
    actions: {
      async addProduct(product) {
        // this.products.push(product)     //directly push into product store

        // Add this data into json server, after approved by admin then to show to the users
        let productData = await axios.post('http://localhost:8000/products', product)
        console.log(productData)
      },

      // Fetch unapproved products
      async listUnapprovedProducts() {
        let results = await axios.get('http://localhost:8000/products')
        if(results.status === 200) {
          // console.log(results.data)
          return results.data
        }
      }
    },
    getters: {
        getProducts(state) {
            return state.products       //get products data from this store
        }
    },
})