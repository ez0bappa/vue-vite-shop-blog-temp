<template>
    <div class="map">
        <h2>Map - Locate us</h2>
        <div class="row mb-5">
            <div class="col-lg-12 mx-auto">
                <h5 class="font-weight-light mb-4 font-italic text-white">Underlined search bars with buttons</h5>
                <div class="bg-white p-5 rounded shadow mb-3">
                    <form>
                        <div class="row mb-4">
                            <div class="form-group col-md-9">
                                <input id="searchLocation" type="text" placeholder="Search location..." v-model="location" class="form-control form-control-underlined">
                            </div>
                            <div class="form-group col-md-3">
                                <button type="submit" :disabled="!isLocationFilled" @click.prevent="submitLocationForm" class="btn btn-primary rounded-pill btn-block shadow w-75">Search</button>
                            </div>
                            <div>{{ location }}</div>
                        </div>
                    </form>

                </div>

                <div class="shadow mt-3">
                    <div class="responsive-map">
                        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
                        <!-- <GMapMap
                            :center="center"
                            :zoom="10"
                            map-type-id="terrain"
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
                        </GMapMap> -->
                    
                        <GoogleMap 
                            api-key="" 
                            style="width: 100%; height: 500px" 
                            :center="center" 
                            :zoom="15"
                        >
                            <Marker :options="{ position: center }" />
                        </GoogleMap>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { computed, reactive, ref } from "vue"
    import { GoogleMap, Marker } from "vue3-google-map"

    const location = ref('')
    const center = reactive({ lat: 51.093048, lng: 6.84212 })
    const markerOptions = { position: center, label: "L", title: "LADY LIBERTY" };
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
        console.log(location.value)
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
    padding-bottom:56.25%;
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
    position: relative !important;
    overflow: unset !important;
    min-height: 55rem !important;
}
/* Override default vue map style end */
</style>