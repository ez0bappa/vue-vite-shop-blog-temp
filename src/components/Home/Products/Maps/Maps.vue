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
                            <button type="button" @click="data(22.572645, 88.363892)" class="btn btn-primary">(22.572645, 88.363892)</button>
                            <button type="button" @click="data(22.595770, 88.263641)" class="btn btn-secondary">(22.595770, 88.263641)</button>
                            <button type="button" @click="data(20.9517, 85.0985)" class="btn btn-success">(20.9517, 85.0985)</button>
                            <button type="button" @click="data(15.2993, 74.1240)" class="btn btn-danger">(15.2993, 74.1240)</button>
                        </div>
                    </div>

                </div>

                <div class="shadow mt-3">
                    <div class="responsive-map">
                        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
                        <GMapMap
                            :center="center"
                            :zoom="10"
                            map-type-id="terrain"
                            style="width: 100vw; height: 20rem;"
                        >
                            <GMapCluster :zoomOnClick="true">
                                <GMapMarker
                                    :key="index"
                                    v-for="(m, index) in markers"
                                    :position="m.position"
                                    :clickable="true"
                                    :draggable="true"
                                    @click="center = m.position"
                                />
                            </GMapCluster>
                        </GMapMap>
                    
                        <!-- <GoogleMap 
                            api-key=""
                            style="width: 100%; height: 110vh" 
                            :center="center" 
                            :zoom="12"
                        >
                            <Marker :options="markerOptions" />
                            <Marker :options="{ position: center }" />
                        </GoogleMap> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, onMounted, reactive, ref } from "vue"
    import { GoogleMap, Marker } from "vue3-google-map"

    const location = ref('')
    const center = reactive({ lat: 22.5726, lng: 88.3639 })
    // const center = { lat: 22.5726, lng: 88.3639 };
    
    const markerOptions = { position: center, label: "B", title: "Bappa Home" };
    const markers = [
                {
                    position: {
                        lat: 51.093048,
                        lng: 6.84212,
                    },
                },
                    {
                    position: {
                            lat: 51.198429,
                            lng: 6.69529,
                        },
                },
                    {
                    position: {
                        lat: 51.165218,
                        lng: 7.067116,
                    },
                },
                    {
                    position: {
                        lat: 51.09256,
                        lng: 6.84074,
                    },
                },
    ]
    const isLocationFilled = computed(() => location.value.length > 0)

    function submitLocationForm() {
        // console.log(location.value)
    }

    function data(lat: any, lng: any) {
        console.log(lat, lng)
        center.lat = lat
        center.lng = lng
    }

    onMounted: {
        geoLocation()
    }

    function geoLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log('latitude=>', position.coords.latitude, ' longitude=>' ,position.coords.longitude)
        })

        // center.lat = 22.5958
        // center.lng = 88.2636
        console.log('Default Latitude: ', center.lat , 'Default Longitude: ', center.lng , ': Kolkata Region')
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
.vue-map {
    position: absolute !important;
    overflow: unset !important;
    min-height: 16rem !important;
}
/* Override default vue map style end */
</style>