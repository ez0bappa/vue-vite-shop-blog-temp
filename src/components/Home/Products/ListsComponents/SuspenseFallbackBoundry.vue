<template>
    <div class="suspense-fallback-boundry">
        <h4>Suspense Fallback Boundry</h4>
        <div class="users-section" v-for="user in users" :key="user.id">
            {{ user }}
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    async setup () {
        const error = ref(null)
        const users = ref(null)

        try {
            const usersResponse = await fetch('https://reqres.in/api/users?delay=3')
            users.value = await usersResponse.json()
        } catch (e) {
            error.value = e
        }
        return { users, error }
    }
}
</script>

<style scoped>

</style>