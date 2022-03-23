import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("User", {
    state: () => {
        return {
            user: null
        }
    },

    actions: {
        async signUp(userData) {
            let result = await axios.post('http://localhost:8000/users', userData)
            if(result.status === 201) {
                localStorage.setItem("user-info", JSON.stringify(result.data))
                // this.$router.push({name: 'Home'})
                window.location = "http://localhost:3000/login";
            }
        },

        async login(userdata) {
            let result = await axios.get(`http://localhost:8000/users?email=${userdata.email}&password=${userdata.password}`)
            if(result.status === 200 && result.data.length > 0) {
                localStorage.setItem('user-info', JSON.stringify(result.data[0]))
                window.location = "http://localhost:3000/dashboard";
            } else {
                alert('Bad credentials')
            }
        },
    },

    getters: {
        
    },
})