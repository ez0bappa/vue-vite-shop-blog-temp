import { defineStore } from "pinia";

export const useProductStore = defineStore("Products", {
    state: () => {
        return {
            products: [
                {
                  id: 1,
                  name: "Chelsea Shoes",
                  price: 200,
                  marketPrice: 500,
                  shortdesc: "Best Drip in the Market",
                  url: "https://picsum.photos/200/200"
                },
                {
                  id: 2,
                  name: "A Kimono",
                  price: 50,
                  marketPrice: 150,
                  shortdesc: "Classy, Stylish, Dope",
                  url: "https://picsum.photos/200/200"
                },
                {
                  id: 3,
                  name: "Erigo",
                  price: 100,
                  marketPrice: 499,
                  shortdesc: "Erigo, Stylish, Dope",
                  url: "https://picsum.photos/200/200"
                },
                {
                  id: 4,
                  name: "Ericson",
                  price: 500,
                  marketPrice: 1599,
                  shortdesc: "Ericson, Stylish, Dope",
                  url: "https://picsum.photos/200/200"
                },
                {
                  id: 5,
                  name: "Bags trolley",
                  price: 1000,
                  marketPrice: 1599,
                  shortdesc: "Ericson, Stylish, Dope",
                  url: "https://picsum.photos/200/200"
                },
                {
                  id: 6,
                  name: "Marco Polo",
                  price: 200,
                  marketPrice: 1599,
                  shortdesc: "Marco Polo, Stylish, Dope",
                  url: "https://picsum.photos/200/200"
                },
                {
                  id: 7,
                  name: "Nevia",
                  price: 400,
                  marketPrice: 1599,
                  shortdesc: "Nevia, Stylish, Dope",
                  url: "https://picsum.photos/200/200"
                },
              ],
            cart: []
        }
    },
    actions: {

    },
    getters: {
        getProducts(state) {
            return state.produ
        }
    },
})