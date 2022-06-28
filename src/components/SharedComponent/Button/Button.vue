<template>
    <button :class="[dark ? ['dark'] : 'light', 'baseButton', 'button']">
        {{ buttonText }}
    </button>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: () => "button",
            required: true
        },
        buttonText: {
            type: String,
            default: () => "Label",
            required: true,
        },
        bgColor: {
            type: String,
            default: () => "none",
            required: true
        },
        light: {
            type: Boolean,
            default: () => true
        },
        dark: {
            type: Boolean,
            default: () => false
        }
    },
    setup () {
        
        return {
            
        }
    }
}
</script>

<style scoped>
.button {
  border-radius: 20px;
  color: #333;
  font-weight: bold;
  padding: 10px 20px;
  text-decoration: none;
  transition: all 100ms ease-in-out;
}
.button:hover {
  background-color: #e6e6e6;
}


.baseButton {
    border: none;
    padding: 5px 10px 5px 10px;
}
.light{
    background: #fff;
    color: black;
    border: 1px solid grey;
}

.dark{
    background: black;
    color: #fff;
}

button.baseButton.btn.btn-primary {
    width: 30%;
}
</style>