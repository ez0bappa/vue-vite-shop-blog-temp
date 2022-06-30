<script setup lang="ts">
    import { useUserStore } from '../../../store/User';
    import { onMounted, ref } from 'vue';
    import { faL } from '@fortawesome/free-solid-svg-icons';

    const store = useUserStore();

    const name = <any>ref('');
    const email = <any>ref('');
    const password = <any>ref('');
    const confirmPassword = <any>ref('');

    function signUp() {
        if(!name.value || !email.value || !password.value || !confirmPassword.value) {
            alert('All fields are required!...')
            return false
        } else {
            signUp: store.signUp({
                id:'_' + Math.random().toString(36).substr(1, 9),
                name: name.value,
                email: email.value,
                password: password.value,
                confirmPassword: confirmPassword.value
            })
        }
    }
    
    onMounted(() => {
        let user = localStorage.getItem('user-info')
        // console.log('Regster page', user)
        if(user) {
            // @ts-ignore
            window.location = "http://localhost:3000/dashboard";
        }
    })
</script>

<template>
    <div class="register mt-4">
        <div class="row">
            <form @submit.prevent="signUp">
                <h4 class="mb-4">Regsiter</h4>
                <div class="col-12">
                    <div class="row g-3 align-items-center">
                        <div class="col-4 text-start">
                            <label for="name" class="col-form-label">Name</label>
                        </div>
                        <div class="col-4">
                            <input type="text" id="name" v-model="name" class="form-control">
                        </div>
                        <div class="col-4">
                            <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div><br>

                    <!-- Email -->
                    <div class="row g-3 align-items-center">
                        <div class="col-4 text-start">
                            <label for="inputPassword6" class="col-form-label">Email</label>
                        </div>
                        <div class="col-4">
                            <input type="text" v-model="email" id="email" class="form-control">
                        </div>
                        <div class="col-4">
                            <!-- <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span> -->
                        </div>
                    </div><br>

                    <!-- Password -->
                    <div class="row g-3 align-items-center">
                        <div class="col-4 text-start">
                            <label for="password" class="col-form-label">Password</label>
                        </div>
                        <div class="col-4">
                            <input type="password" v-model="password" id="password" class="form-control">
                        </div>
                        <div class="col-4">
                            <!-- <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span> -->
                        </div>
                    </div><br>
                    
                    <!-- Confirm Password -->
                    <div class="row g-3 align-items-center">
                        <div class="col-4 text-start">
                            <label for="confirm-password" class="col-form-label">Confirm-Password</label>
                        </div>
                        <div class="col-4">
                            <input type="password" v-model="confirmPassword" id="confirm-password" class="form-control">
                        </div>
                        <div class="col-4">
                            <!-- <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span> -->
                        </div>
                    </div>
                    
                    <!-- Submit button -->
                    <div class="row g-3 align-items-center mt-4">
                        <div class="col-md-12 text-center">
                            <router-link to="login">Login</router-link>
                            <button type="button" class="btn btn-danger me-2 ms-5">Danger</button>
                            <button type="submit" class="btn btn-success">Success</button>
                        </div>
                    </div>
                    
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
  .register {
    max-width: 50%;
    margin: 125px auto !important;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  }
</style>