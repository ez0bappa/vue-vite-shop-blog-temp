import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("User", {
    state: () => {
        return {
            // name: '',
            // email: '',
            // password: ''
            user: null
        }
    },

    actions: {
        async registerUser(userData) {
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common['Authorization'] = `Bearer ${
                userData.token
            }`

            console.log(localStorage.getItem('user'))

            // return axios.post('//localhost:3000/register', userData).then(
            //     ({ data }) => {
            //         console.log(data)
            //         state.user = data
            //         localStorage.setItem('user', JSON.stringify(userData))
            //         axios.defaults.headers.common['Authorization'] = `Bearer ${
            //             userData.token
            //         }`
            //         console.log(localStorage.getItem('user'))
            //     }
            // )
        }
    },

    getters: {
        
    },
})