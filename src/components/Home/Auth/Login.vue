<script setup lang="ts">
    import { useUserStore } from '../../../store/User';
    import { ref } from 'vue';

    const store = useUserStore();

    const email = <any>ref('');
    const password = <any>ref('');

    function login() {
        if(!email.value || !password.value) {
            alert('All fields are required!...')
            return false
        } else {
            login: store.login({
                email: email.value,
                password: password.value,
            })
        }
    }
</script>

<template>
    <div class="register mt-4">
        <div class="row">
            <form @submit.prevent="login">
                <h4 class="mb-4">Login</h4>
                <div class="col-12">
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
                    
                    <!-- Submit button -->
                    <div class="row g-3 align-items-center mt-4">
                        <div class="col-md-12 text-center">
                            <router-link to="login">Login</router-link>
                            <button type="submit" class="btn btn-success ms-4">Login</button>
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