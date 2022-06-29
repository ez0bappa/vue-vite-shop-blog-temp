<template>
  <div class="sidebar-modal mt-4">
    <button
      type="button"
      class="btn mt-5 btn-primary"
      data-toggle="modal"
      data-target="#exampleModalRight"
    >
      Product Return
    </button>

    <!-- Modal -->
    <div
      class="modal fade drawer right-align p-0"
      id="exampleModalRight"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Product Name -</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="title-modal">
              <h2>Reasons for return</h2>
            </div>

            <div class="main-content mt-4">
              <div class="mt-4 text-gray-800 font-bold">Selected Reasons:- {{ selectedGeneralReasons }}</div>
              <div class="mt-4 text-gray-800 font-bold">General options:- {{ generalOptions }}</div>
              <MultiCheckbox
                v-model:value="selectedGeneralReasons"
                :generalOptions="generalOptions"
                :key="generalOptions"
                test="General-reasons"
              />

              <transition name="slide" type="animation">
                <div class="toggle sub faulty text-start" v-if="checkFaultyIs">
                  <MultiCheckbox
                    v-model:value="selectedFaultyReasons"
                    :faultyOptions="faultyOptions"
                    :key="generalOptions"
                    test="Faulty-reasons"
                  />
                </div>
              </transition>

            </div>
          </div>
          <div class="modal-footer">
            <app-button
              :dark="true"
              buttonText="Cancel"
              data-dismiss="modal"
            />
            <app-button :dark="false" buttonText="Save changes" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
// import CheckBox from './CheckBoxComponent/Checkbox1.vue'
import AppButton from "../../../SharedComponent/Button/Button.vue"
import MultiCheckbox from "./CheckBoxComponent/MultiCheckbox.vue"
import { ref, onMounted } from "vue";

export default {
  name: "SidebarModal",
  components: {
    AppButton,
    MultiCheckbox,
  },
  setup() {
    let selectedGeneralReasons = ref([])
    let generalOptions = ref([])

    let selectedFaultyReasons = ref([])
    let faultyOptions = ref([])

    // Check if any default general reasons - auto selected
    const defaultGeneralSelectedCheckbox = () => {
      selectedGeneralReasons.value = []
    };

    // Lists of general reasons
    const generalReasonsOptions = () => {
      generalOptions.value = [
        { id: 1, value: "laravel", name: "Laravel" },
        { id: 2, value: "vuejs", name: "Vuejs" },
        { id: 3, value: "magento", name: "Magento" },
        { id: 4, value: "angularjs", name: "Angularjs" },
        { id: 5, value: "faulty", name: "Faulty"},
      ];
    };

    // Check if faulty is selected from main general reasons
    const checkFaultyIs = computed(() => {
      var isFaultyExists = selectedGeneralReasons.value.includes("faulty");
      faultyOptions.value = [
        { id: 1, value: "reason1", name: "Reason1" },
        { id: 2, value: "reason2", name: "Reason" },
        { id: 3, value: "reason3", name: "Reason3" },
        { id: 4, value: "reason4", name: "Reason4" },
      ]
      console.log(12345, faultyOptions.value)
      return isFaultyExists;
    });

    onMounted(() => {
      generalReasonsOptions();
      defaultGeneralSelectedCheckbox();
    });

    return {
      selectedGeneralReasons,
      selectedFaultyReasons,
      generalOptions,
      checkFaultyIs,
    };
  },
};
</script>

<style scoped>
.modal {
  /*From Right/Left */
}
.modal.drawer {
  display: flex !important;
  pointer-events: none;
}
.modal.drawer * {
  pointer-events: none;
}
.modal.drawer .modal-dialog {
  margin: 0px;
  display: flex;
  flex: auto;
  transform: translate(25%, 0);
}
.modal.drawer .modal-dialog .modal-content {
  border: none;
  border-radius: 0px;
}
.modal.drawer .modal-dialog .modal-content .modal-body {
  overflow: auto;
}
.modal.drawer.show {
  pointer-events: auto;
}
.modal.drawer.show * {
  pointer-events: auto;
}
.modal.drawer.show .modal-dialog {
  transform: translate(0, 0);
}
.modal.drawer.right-align {
  flex-direction: row-reverse;
}
.modal.drawer.left-align:not(.show) .modal-dialog {
  transform: translate(-25%, 0);
}

div#exampleModalRight,
div#exampleModalLeft {
  z-index: 9999;
}

/* Animation of faulty open start */
.toggle.sub.faulty {
  background: #484848;
  display: block;
  position: relative;
  padding: 10px;
  padding-left: 35px;
  /* margin-bottom: 20px; */
  font: 14px/20px "Open Sans", Arial, sans-serif;
  color: #ddd;
  cursor: pointer;
  border-top: 1px solid grey;
  -webkit-user-select: none;
}

.slide-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slide-in 1s ease-in forwards;
  transition: opacity 0.5s;
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  opacity: 0;
  transition: opacity 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
/* Animation of faulty open end */
</style>
