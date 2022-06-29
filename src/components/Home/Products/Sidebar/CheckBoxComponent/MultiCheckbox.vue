<template>
  <div class="checkbox">
    <div class="boxes">
      <div v-if="generalOptionsLists">
        <pre>comming from 1 - {{ JSON.stringify(test, null, 2) }}</pre>
        <!-- <div class="general" v-if="generalOptionsLists"><pre>comming from - {{ JSON.stringify(generalOptionsLists, null, 2) }}</pre></div> -->
        <check-box
          v-for="option in generalOptionsLists"
          :checked="value.includes(option.id)"
          @update:checked="check(option.value, $event)"
          :fieldId="option.label"
          :label="option.label"
          :key="option"
        />
      </div>

      <div v-if="faultyOptionsLists">
        <pre>comming from 2 - {{ JSON.stringify(test, null, 2) }}</pre>
        <check-box
          v-for="option in faultyOptionsLists"
          :checked="value.includes(option.id)"
          @update:checked="check(option.value, $event)"
          :fieldId="option.label"
          :label="option.label"
          :key="option"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "./Checkbox.vue";

export default {
  emits: ["update:value"],
  props: {
    test: {
      type: String,
      required: false,
    },
    value: {
      type: Array,
      required: true,
    },
    generalOptionsLists: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) =>
          Object.keys(option).includes("label")
        );
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes("id")
        );
        // console.log('validator: ', hasNameKey,  hasIdKey)
        return hasNameKey && hasIdKey;
      },
    },
    faultyOptionsLists: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) =>
          Object.keys(option).includes("label")
        );
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes("id")
        );
        return hasNameKey && hasIdKey;
      },
    },
  },
  setup(props, context) {
    // console.log("props general options: ", props.generalOptionsLists);
    const check = (optionId, checked) => {
      let updatedValue = [...props.value];
      console.log(optionId, checked, updatedValue)
      if (checked) {
        updatedValue.push(optionId);
      } else {
        updatedValue.splice(updatedValue.indexOf(optionId), 1);
      }
      context.emit("update:value", updatedValue);
    };

    return {
      check,
    };
  },
  components: {
    "check-box": Checkbox,
  },
};
</script>
