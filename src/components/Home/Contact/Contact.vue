<script setup lang="ts">
    import { ref } from 'vue'

    const isOpen = ref(false)

</script>

<template>
  <div id="nav" class="bg-danger bg-gradient p-3">
    <router-link to="/">Todo</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/phone-contacts">Phone contacts</router-link>
  </div>
  <!-- <router-view /> -->
  <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
  </router-view>
</template>



<style scoped>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>