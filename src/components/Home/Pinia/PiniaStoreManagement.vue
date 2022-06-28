<template>
    <div class="pinia-store-management">
        <h4>Pinia Store Management</h4>
        <div id="nav">
            <!-- <router-link :to="{ name: 'PostList' }">Posts</router-link> | -->
            <!-- <router-link :to="{ name: 'About' }">About</router-link>
            |
            <router-link :to="{ name: 'EventCreate' }">Create Event</router-link> -->

            <router-link to="post-list">Posts</router-link> |
            <router-link to="create-post">Create Post</router-link>
        </div>
        <router-view />
    </div>
</template>

<script>
    export default {
        name: 'PiniaStoreManagement'
    }
</script>

<style scoped>

</style>