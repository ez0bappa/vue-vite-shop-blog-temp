<template>
    <div class="approved-products">
        <table class="table table-success table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Short Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in approvedProducts" :key="product">
                    <th scope="row">{{ product.id }}</th>
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
                    <td>{{ product.shortdesc }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { computed } from "@vue/runtime-core"
    import { useProductStore } from '../../../../store/Product'

    const store = useProductStore()

    let approvedProducts = computed(() => {
        return store.$state.products
    })
</script>

<style scoped>

</style>