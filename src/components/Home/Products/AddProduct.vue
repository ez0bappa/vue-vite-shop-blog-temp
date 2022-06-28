<script>
    import { defineComponent } from '@vue/runtime-core'
    import { v4 as uuidv4 } from 'uuid'
    import { useProductStore } from '../../../store/Product'

    export default defineComponent({
        data() {
            return {
                product: {
                    id: '',
                    name: '',
                    price: '',
                    shortdesc: '',
                    url: '',
                    status: false
                }
            }
        },
        setup() {
            const store = useProductStore();

            function insertProduct() {
                const product = {
                    uuid: uuidv4(),
                    ...this.product,
                }

                store.addProduct(product)
            }

            return {
                store,
                insertProduct
            }
        }
    })
</script>

<template>
    <div class="add-product">
        <div class="add-product-section">
            <h1 class="mb-3 pb-3">Add Product</h1>
            <div class="col-12 mt-3 pt-3">
                    <div class="row g-3 align-items-center">
                        <div class="col-4 text-start">
                            <label for="name" class="col-form-label">Product name</label>
                        </div>
                        <div class="col-4">
                            <input type="text" id="name" v-model="product.name" class="form-control" placeholder="Enter product name...">
                        </div>
                        <div class="col-4">
                            <span id="passwordHelpInline" class="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div><br>

                    <!-- Price -->
                    <div class="row g-3 align-items-center">
                        <div class="col-4 text-start">
                            <label for="price" class="col-form-label">Product price</label>
                        </div>
                        <div class="col-4">
                            <input type="text" id="name" v-model="product.price" class="form-control" placeholder="Enter price...">
                        </div>
                        <div class="col-4">
                            
                        </div>
                    </div><br>

                    <!-- Short Description -->
                    <div class="row g-3 align-items-center">
                        <div class="col-4 text-start">
                            <label for="description" class="col-form-label">Short Description</label>
                        </div>
                        <div class="col-4">
                            <input type="textarea" v-model="product.shortdesc" class="form-control" placeholder="Enter short description...">
                        </div>
                        <div class="col-4">
                            
                        </div>
                    </div><br>
                    
                    <!-- Submit button -->
                    <div class="row g-3 align-items-center mt-4 text-center">
                        <div class="col-md-12 text-center">
                            <div class="col-sm-12 form-froup">
                                <button type="submit" @click.prevent="insertProduct" class="btn btn-success ms-2">Add product</button>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<style scoped>
.add-product-section {
    /* max-width: 80%; */
    /* margin: 125px auto !important; */
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
  }
</style>