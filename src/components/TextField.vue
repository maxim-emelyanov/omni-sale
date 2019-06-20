<template>
  <div :class="['text-field', `_${type}`]">
    <input
      v-model="inputValue"
      v-bind="{name, type, required, pattern, placeholder, maxlength}"
      :class="inputClasses"
      v-field="type"
      @input="validation"
    >
    <input type="text" v-if="type === 'password'" :value="passwordDot" class="input pass-dots">
    <span class="validation-display">
      <span v-if="isInvalid" :title="errorText" class="invalid">!</span>
      <span v-if="!isInvalid && type !== 'password'" class="correct">
        <svg width="18" height="17" fill="transparent">
          <g>
            <path fill="#ffffff" stroke="#ffffff" stroke-width="1" d="M1,9L8,17"></path>
            <path fill="#ffffff" stroke="#ffffff" stroke-width="1" d="M8,17L18,0"></path>
          </g>
        </svg>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: "",
      type: String
    },
    type: {
      default: "text",
      type: String
    },
    required: {
      default: false,
      type: Boolean
    },
    pattern: {
      default: ".",
      type: String
    },
    placeholder: {
      default: "...",
      type: String
    },
    maxlength: {
      default: 10,
      type: Number
    },
    errorText: {
      default: "Неккоректное значение",
      type: String
    },
    value: {
      default: "",
      type: [String, Number]
    }
  },
  data() {
    return {
      inputValue: this.value
    };
  },
  computed: {
    isInvalid() {
      return !RegExp(this.pattern).test(this.inputValue) && !this.isEmpty;
    },
    passwordDot() {
      return this.inputValue.replace(/./g, "*");
    },
    isEmpty() {
      return !this.inputValue && this.inputValue !== 0;
    },
    inputClasses() {
      return [
        "input",
        "_" + this.type,
        this.isEmpty ? "_empty" : "",
        !this.isInvalid ? "_correct" : "",
        this.isInvalid ? "_error" : ""
      ];
    }
  },
  methods: {
    validation() {
      if (!this.isInvalid) {
        this.$emit("input", this.inputValue);
      }
    }
  },
  watch: {
    value(val) {
      this.inputValue = val;
    }
  }
};
</script>

<style scoped lang="scss">
$placeholder-color: #bbbbbb;
$text-active-color: #000000;
$text-color-correct: #ffffff;
$text-color-error: #b40000;

.text-field {
  width: 100%;
  height: 48px;
  border-radius: 24px;
  overflow: hidden;
  box-sizing: border-box;
  border: 1px solid #ffffff;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.input {
  border: 0;
  outline: none;
  width: 100%;
  height: 100%;
  background: transparent;
  text-align: center;
  color: $text-active-color;
  font-family: "HelveticaNeueCyr", sans-serif;
  font-size: 18px;
  &::-ms-clear {
    display: none;
  }
  &._tel {
    letter-spacing: 1px;
  }
  &._password:not(._empty) {
    color: transparent;
    caret-color: $text-active-color;
    user-select: none;
    font-size: 24.7px;
    letter-spacing: 5px;
  }
  &:focus,
  &._error {
    background: #ffffff;
  }
  &._error,
  &._error ~ .pass-dots {
    color: $text-color-error;
  }

  &._password:focus ~ .pass-dots,
  &._password:not(:focus):not(._empty) ~ .pass-dots {
    display: block;
  }
  &:not(:focus):not(._password)._correct,
  &:not(:focus)._password._correct ~ .pass-dots {
    color: $text-color-correct;
  }
}
.pass-dots {
  display: none;
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  color: $text-active-color;
  padding-top: 8px;
  font-size: 35px;
  font-weight: 300;
  letter-spacing: 5px;
  line-height: 48px;
}
::placeholder {
  color: $placeholder-color;
  letter-spacing: initial;
  font-size: 18px;
}

:-ms-input-placeholder {
  color: $placeholder-color;
  letter-spacing: initial;
  font-size: 18px;
}

::-ms-input-placeholder {
  color: $placeholder-color;
  letter-spacing: initial;
  font-size: 18px;
}
.validation-display {
  display: block;
  right: 0;
  width: 32px;
  height: 32px;
  margin-left: -42px;
  border-radius: 16px;
  overflow: hidden;
  line-height: 32px;
  font-size: 25px;
  color: #ffffff;
}
.invalid {
  display: block;
  width: 100%;
  height: 100%;
  background-color: $text-color-error;
}
</style>
