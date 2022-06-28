<template>
  <div class="checkbox">
    <!-- <pre>{{ JSON.stringify(generalOptions, null, 2) }}</pre> -->
    <pre>{{ JSON.stringify(faultyOptions, null, 2) }}</pre>
    <div class="boxes">
      <div v-if="generalOptions">
        <pre>comming from - {{ JSON.stringify(test, null, 2) }}</pre>
        <check-box
          v-for="option in generalOptions"
          :checked="value.includes(option.id)"
          @update:checked="check(option.value, $event)"
          :fieldId="option.name"
          :label="option.name"
          :key="option"
        />
      </div>
      <div v-if="faultyOptions">
        <pre>comming from - {{ JSON.stringify(test, null, 2) }}</pre>
        <!-- <check-box
          v-for="option in faultyOptions"
          :checked="value.includes(option.id)"
          @update:checked="check(option.value, $event)"
          :fieldId="option.name"
          :label="option.name"
          :key="option"
        /> -->
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
    generalOptions: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) =>
          Object.keys(option).includes("name")
        );
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes("id")
        );
        // console.log('validator: ', hasNameKey,  hasIdKey)
        return hasNameKey && hasIdKey;
      },
    },
    faultyOptions: {
      type: Array,
      required: true,
      validator: (value) => {
        const hasNameKey = value.every((option) =>
          Object.keys(option).includes("name")
        );
        const hasIdKey = value.every((option) =>
          Object.keys(option).includes("id")
        );
        return hasNameKey && hasIdKey;
      },
    },
  },
  setup(props, context) {
    // console.log("props general options: ", props.generalOptions);
    const check = (optionId, checked) => {
      let updatedValue = [...props.value];
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
