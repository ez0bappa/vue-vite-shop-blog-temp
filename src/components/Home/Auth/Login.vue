<script setup lang="ts">
    import { useUserStore } from '../../../store/User';
    import { ref } from 'vue';
    import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
    import { useRouter } from 'vue-router'

    const router = useRouter();
    const store = useUserStore();

    const email = <any>ref('');
    const password = <any>ref('');
    const formError = <any>ref('');


    // const jsonServerSignIn = () => {
    //     if(!email.value || !password.value) {
    //         alert('All fields are required!...')
    //         return false
    //     } else {
    //         login: store.login({
    //             email: email.value,
    //             password: password.value,
    //         })
    //     }
    // }

    const firebaseSignIn = () => {
        const auth = getAuth()          //from firebase auth

        if(email.value || password.value) {
            signInWithEmailAndPassword(auth, email.value, password.value)
            .then((data: any) => {
                // localStorage.setItem("user-info", JSON.stringify(result.data))
                router.push("/dashboard");
            })
            .catch((error: any) => {
                switch(error.code) {
                    case "auth/invalid-email":
                        formError.value = "Invald Email";
                        break;
                    case "auth/user-not-found":
                        formError.value = "User not found";
                        break;
                    case "auth/wrong-password":
                        formError.value = "Incorrect password";
                    default:
                        formError.value = "Email or password was incorrect";
                        break;
                }
            })   
        } else {
            formError.value = 'All fields are required!...'
        }
    }
</script>

<template>
    <div class="register mt-4">
        <div class="row">
            <form>
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
                            <span id="emailHelpInline" class="form-text">
                                <p v-if="formError">{{ formError }}</p>
                            </span>
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
                            <span id="emailHelpInline" class="form-text">
                                <p v-if="passwordError">{{ passwordError }}</p>
                            </span>
                        </div>
                    </div><br>
                    
                    <!-- Submit button -->
                    <div class="row g-3 align-items-center mt-4">
                        <div class="col-md-12 text-center">
                            <router-link to="login">Login</router-link>
                            <!-- <button type="submit" @click.prevent="jsonServerSignIn" class="btn btn-success ms-4">Login</button> -->
                            <button type="submit" @click.prevent="firebaseSignIn" class="btn btn-success ms-4">Firebase Login</button>
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