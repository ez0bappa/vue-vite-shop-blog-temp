<script setup lang="ts">
    import { computed, onMounted, reactive, ref } from "vue"
    import { GoogleMap, Marker } from "vue3-google-map"

    interface Props {
        searchedLocation: String
    }

    const props = defineProps<Props>()

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

        // var geocoder = new google.maps.Geocoder();
        console.log(props.searchedLocation)
    }

    function geoLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log('latitude=>', position.coords.latitude, ' longitude=>' ,position.coords.longitude)
        })

        // center.lat = 22.5958
        // center.lng = 88.2636
        // console.log('Default Latitude: ', center.lat , 'Default Longitude: ', center.lng , ': Kolkata Region')
    }
</script>

<template>
    <div class="google_map">
        Google map - 
        You searched for: {{ searchedLocation }}
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> -->
                        
                        
            <!-- <GMapMap
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
            </GMapMap> -->

            <!-- npm install vue3-google-map -->
            <GoogleMap 
                api-key=""
                style="width: 100%; height: 110vh" 
                :center="center" 
                :zoom="12"
                :clickable="true"
                :draggable="true"
            >
                <Marker :options="markerOptions" />
                <Marker :options="{ position: center }" />
            </GoogleMap>
    </div>
</template>

<style scoped>

</style>