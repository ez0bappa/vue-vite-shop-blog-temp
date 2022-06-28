<template>
    <div class="product-lists">
        <div id="page-content-wrapper">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-5 approved-products">
                        <div class="product-listing">
                            <section class="bg-secondary text-center">
                                <h1 class="text-light">Approved<span class="product-store text-muted">(Product Store)</span></h1>      
                            </section>

                            <section class="table-lists">
                                <ApprovedProducts />
                            </section>
                        </div>
                    </div>
                    <div class="col-lg-6 un-approved-products">
                        <div class="product-listing">
                            <section class="bg-info text-center">
                                <h1 class="text-light">Pending approval <span class="product-store text-muted">(Server data)</span></h1>      
                            </section>

                            <section class="table-lists">
                                <UnApprovedProducts />
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import ApprovedProducts from './ListsComponents/ApprovedProducts.vue'
    import UnApprovedProducts from './ListsComponents/UnApprovedProducts.vue'

    export default {
        name: 'ProductLists',
        components: {
            ApprovedProducts,
            UnApprovedProducts

            // ApprovedProducts: () => import(/** */ './ListsComponents/ApprovedProducts.vue'),
            // UnApprovedProducts: () => import('./ListsComponents/UnApprovedProducts')
        }
    }
</script>

<style scoped>
@import url(https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css);
span.product-store.text-muted {
    color: #260c0e !important;
    font-size: 24px;
}

/* Transfer to left arrow */
.long-arrow-left{
  display: block;
  /* margin: 30px auto; */
  width: 10px;
  height: 10px;
  border-top: 2px solid #000;
  border-left: 2px solid #000;
}
.long-arrow-left{
 cursor: pointer;
 transform: rotate(-45deg);
}
.long-arrow-left::after{
    content: "";
    display: block;
    width: 2px;
    height: 22px;
    background-color: black;
    transform: rotate(-45deg) translate(7px, 1px);
    left: 0;
    top: 0;
}
</style>