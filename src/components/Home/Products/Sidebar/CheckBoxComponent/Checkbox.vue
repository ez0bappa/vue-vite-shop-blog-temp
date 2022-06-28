<template>
  <div class="loop-data boxes">
    <input
        @input="(event) => $emit('update:checked', event.target.checked)"
        type="checkbox"
        :checked="checked"
        :id="fieldId"
        class=""
    />
    <label
        :for="fieldId"
        class="text-start"
    >
        <i
        class="fa mr-2"
        :class="{
            'fa-check-square text-blue-600': checked,
            'fa-square text-gray-500': !checked,
        }"
        ></i>
        {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.boxes {
  background-color: #484848;
  margin: auto;
  padding: 10px;
  border: 1px solid grey;
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
