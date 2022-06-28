<template>
    <div class="un-approved-products">
        <div v-if="loading" class="loading">Loading...</div>
        <div v-else>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Pass</th>
                        <th scope="col">#(id)</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(product, index) in unapprovedProductsData.value" :key="index">
                        <td>
                            <div v-if="product.status" class="long-arrow-left" v-on:click="passToStore($event, product)"></div>
                        </td>
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.price }}</td>
                        <td>{{ product.shortdesc }}</td>
                        <td>{{ product.status }}</td>
                        <td>
                            <!-- {{ product.status }} -->
                            <button class="mini ui button toggle" :class="product.status ? 'teal' : 'red'" @click="toggle(product)">{{ product.status ? 'Active' : 'Inactive' }}</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref } from '@vue/runtime-core'
    import axios from 'axios';

    const loading = ref(true)
    const unapprovedProductsData = reactive([]);
    var productStatus = ref('false')

    const toggle = (product) => {
        unapprovedProductsData.value.map(async item => {
            if(item.uuid === product.uuid) {
                item.status = productStatus.value ? true : false;
                
                try {
                    await axios.patch(`http://localhost:8000/products/${product.id}`, {status: item.status})
                } catch (err) {
                    console.error("Wasn't able to update property.", err)
                }

            }
        })
        
        productStatus.value = productStatus.value ? false : true;
    }

    const passToStore = async (event, product) => {
        try {
            let result = await axios.delete(`http://localhost:8000/products/${product.id}`)
        } catch (err) {
            console.error("Wasn't able to update property.", err)
        }
        var newArray = unapprovedProductsData.value.filter((item) => item.id !== product.id);
        console.log(newArray);
        unapprovedProductsData.value = newArray
    }

    onUpdated: () => {
        console.log('updated')
    }
    
    const unapprovedProducts = async () => {
        try {
            let result = await axios.get('http://localhost:8000/products')
            if(result.status === 200) {
                loading.value = false
                unapprovedProductsData.value = result.data
            }
        } catch (e) {
            console.log(e)
        }
    }

    unapprovedProducts();
</script>

<style lang="scss" scoped>

</style>