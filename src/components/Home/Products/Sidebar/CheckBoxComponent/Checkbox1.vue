<template>
  <div class="checkbox">
    <div class="boxes text-start" v-for="option in options" :key="option.id">
      <input 
        type="checkbox" 
        :id="option.value" 
        :name="option.value" 
        :value="option.value" 
        v-model="selectedProducts" 
        @change="selectBox(option.value ,$event)"
        @click="faultyvalidate('singleFaultyCheck')"
      >
      <label :for="option.value">{{ option.text }}</label>
    </div>
  </div>
  <div class="toggle">
    Bappa
    <pre>{{ JSON.stringify(selectedProducts, null, 2) }}</pre>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
  export default {
    data() {
      return {
        selectedProducts: false,
        toggle: false
      }
    },
    setup() {
      var isFaultyChecked = ref(false)
      // const selectedProducts = ref([]);

      const options = [
        {id:1, value: 'Laravel', text: 'Laravel'},
        {id:2, value: 'Vuejs', text: 'Vuejs'},
        {id:3, value: 'Magento', text: 'Magento'},
        {id:4, value: 'Angularjs', text: 'Angularjs'},
        {id:5, value: 'JSON', text: 'JSON'},
        {id:6, value: 'JavaScript', text: 'JavaScript'},
        {id:7, value: 'PHP', text: 'PHP'},
        {id:8, value: 'HTML', text: 'HTML'},
        {id:9, value: 'faulty', text: 'Faulty', 
                                data: [
                                  {id:1, value: 'Laravel', text: 'Laravel'},
                                  {id:2, value: 'Vuejs', text: 'Vuejs'},
                                  {id:3, value: 'Magento', text: 'Magento'},
                                  {id:4, value: 'Angularjs', text: 'Angularjs'},
                                ] 
        }
      ]

      function selectBox(value, e) {
        if(value == 'faulty') {
          var faultyCheckbox = document.getElementsByName('faulty');
          if(faultyCheckbox[0].checked) {
            console.log('1')
            this.toggle = !this.toggle
          }

          // console.log(`Checkbox is ${e.target.checked}`)
          // console.log(`You selelected ${value}`)
          // this.selectedProducts = !this.selectedProducts
        } else {
          console.log('2')
          this.toggle = false
        }
      }

      function faultyvalidate(data) {
        console.log(data)
      }

      const showContent = computed(() => {
        return true
      })

      return {
        options,
        selectBox,
        showContent,
        faultyvalidate
      }
    },
  }
</script>

<style scoped>
.boxes {
  background-color: #484848;
  margin: auto;
  padding: 10px;
}

/*Checkboxes styles*/
input[type="checkbox"] { display: none; }

input[type="checkbox"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font: 14px/20px 'Open Sans', Arial, sans-serif;
  color: #ddd;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="checkbox"] + label:last-child { margin-bottom: 0; }

input[type="checkbox"] + label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #6cc0e5;
  position: absolute;
  left: 0;
  top: 0;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="checkbox"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>