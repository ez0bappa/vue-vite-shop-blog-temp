<script setup lang="ts">

</script>

<template>
    <div class="map">
        <h2>Map - Locate us</h2>
        <div class="row mb-5">
            <div class="col-lg-12 mx-auto">
                <h5 class="font-weight-light mb-4 font-italic text-white">Underlined search bars with buttons</h5>
                <div class="bg-white p-5 rounded shadow mb-3">

                    <!-- Underlined search bars with buttons -->
                    <form>
                        <div class="row mb-4">
                            <div class="form-group col-md-9">
                            <input id="exampleFormControlInput5" type="email" placeholder="What're you searching for?" class="form-control form-control-underlined">
                            </div>
                            <div class="form-group col-md-3">
                            <button type="submit" class="btn btn-primary rounded-pill btn-block shadow-sm">Search</button>
                            </div>
                        </div>
                    </form>
                    <!-- End -->

                </div>

                <div class="shadow mt-3">
                    <div class="responsive-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
</style>