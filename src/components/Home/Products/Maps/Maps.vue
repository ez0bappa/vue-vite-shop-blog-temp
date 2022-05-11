<template>
    <div class="map">
        <h2>Map - Locate us</h2>
        <div class="row mb-5">
            <div class="col-lg-12 mx-auto">
                <h5 class="font-weight-light mb-4 font-italic text-success">Locate shop locations...</h5>
                <div class="bg-white p-5 rounded shadow mb-3">
                    <form>
                        <div class="row mb-4">
                            <div class="form-group col-md-9">
                                <input id="searchLocation" type="text" placeholder="Search location..." v-model="location" class="form-control form-control-underlined">
                            </div>
                            <div class="form-group col-md-3">
                                <button 
                                    type="submit"
                                    :disabled="!isLocationFilled" 
                                    @click.prevent="submitLocationForm" 
                                    class="rounded-pill btn-block shadow w-75"
                                    :class="isLocationFilled ? 'btn btn-primary' : 'btn btn-secondary' "
                                    >Search</button>
                            </div>
                            <!-- <div>{{ location }}</div> -->
                        </div>
                    </form>

                    <div class="row mb-12">
                        <div class="form-group col-md-12">
                            <!-- <button type="button" @click="data(22.572645, 88.363892)" class="btn btn-primary">(22.572645, 88.363892)</button>
                            <button type="button" @click="data(22.595770, 88.263641)" class="btn btn-secondary">(22.595770, 88.263641)</button>
                            <button type="button" @click="data(20.9517, 85.0985)" class="btn btn-success">(20.9517, 85.0985)</button>
                            <button type="button" @click="data(15.2993, 74.1240)" class="btn btn-danger">(15.2993, 74.1240)</button> -->
                        </div>
                    </div>

                </div>

                <div class="shadow mt-3">
                    <div class="responsive-map">
                        <GoogleMapVue :searched-location="searchedLocation" :key="searchedLocation"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, reactive, ref } from "vue"
    import { GoogleMap, Marker } from "vue3-google-map"
    import GoogleMapVue from "./GoogleMap.vue";

    const location = ref('')
    const searchedLocation = ref('')

    const isLocationFilled = computed(() => location.value.length > 0)

    function submitLocationForm() {
        searchedLocation.value = location.value
    }
    

</script>

<style scoped>
.form-control::placeholder {
  font-size: 0.95rem;
  color: #aaa;
  font-style: italic;
}

.form-control:focus {
  box-shadow: none;
}

.form-control-underlined {
  border-width: 0;
  border-bottom-width: 1px;
  border-radius: 0;
  padding-left: 0;
}

/* Map */
.responsive-map{
    overflow: hidden;
    padding-bottom:39.25%;
    position:relative;
    height:0;
}
.responsive-map iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}

/* Override default vue map style Start */
.vue-map-container .vue-map {
    position: absolute !important;
    overflow: unset !important;
    min-height: 16rem !important;
}
/* Override default vue map style end */
</style>