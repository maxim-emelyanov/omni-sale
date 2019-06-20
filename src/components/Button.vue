<template>
  <input :class="buttonClasses" v-bind="{ disabled, type, value}" @click="emitClick">
</template>

<script>
export default {
  props: {
    value: {
      default: "Войти",
      type: String
    },
    disabled: {
      default: true,
      type: Boolean
    },
    type: {
      default: "button",
      type: String
    }
  },
  computed: {
    buttonClasses() {
      return ["button", "_" + this.type, this.disabled ? "_disabled" : ""];
    }
  },
  methods: {
    emitClick(event) {
      if (!this.disabled) {
        this.$emit("click", event);
      }
    }
  }
};
</script>

<style scoped lang="scss">
$btn-color: #ffffff;

.button {
  font-family: "HelveticaNeueCyr", sans-serif;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  font-weight: 500;
  border-radius: 24px;
  border: 1px solid $btn-color;
  text-transform: uppercase;
  &._disabled {
    opacity: 0.2;
    color: $btn-color;
    background: transparent;
  }
}
._submit {
  background: #ffffff;
  font-size: 12px;
  letter-spacing: 2.53px;
  color: #000000;
}
</style>
