<template>
  <div class="check-box">
    <input v-bind="{ name, checked, id }" class="input" type="checkbox" @change="emitChange">
    <label :for="id" :class="switchClasses">
      <div class="switcher">
        <div class="dot"/>
      </div>Запомнить
    </label>
  </div>
</template>

<script>
import { uniqueId } from "lodash-es";

export default {
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    name: {
      default: "",
      type: String
    },
    checked: {
      default: false,
      type: Boolean
    }
  },
  computed: {
    switchClasses() {
      return ["label", this.disabled ? "_disabled" : ""];
    },
    id() {
      return uniqueId("switch");
    }
  },
  methods: {
    emitChange(event) {
      if (this.disabled) {
        return;
      }
      this.$emit("change", event.target.checked);
    }
  }
};
</script>

<style scoped lang="scss">
$switch-color: #ffffff;
$switch-dot-color: #ffffff;
$switch-text-color: #ffffff;

.switch-box {
  display: inline-block;
  position: relative;
}
.input {
  height: 0;
  width: 0;
  position: absolute;
  visibility: hidden;
  &:checked + .label .dot {
    margin-left: 16px;
    opacity: 1;
  }
}
.label {
  cursor: pointer;
  color: $switch-text-color;
  display: inline-flex;
  align-items: center;
}
.switcher {
  display: flex;
  align-items: center;
  border-radius: 12px;
  position: relative;
  height: 24px;
  width: 44px;
  box-sizing: border-box;
  border: 1px solid $switch-color;
  background: transparent;
  margin-right: 10px;
}
.dot {
  background-color: $switch-dot-color;
  opacity: 0.3;
  border-radius: 8px;
  height: 16px;
  width: 22px;
  margin-left: 4px;
  transition: all 0.2s ease-out;
}
</style>
