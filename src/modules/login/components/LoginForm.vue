<template>
  <form class="form" action="/login" method="GET">
    <div class="blur"></div>
    <div class="inner">
      <router-link to="/home" class="close">
        <span class="arrow-left">
          <svg width="14" height="8" fill="transparent">
            <g class="currentLayer">
              <path fill="#ffffff" stroke="#ffffff" stroke-width="1" d="M0,4L4,1"></path>
              <path fill="#ffffff" stroke="#ffffff" stroke-width="1" d="M0,4L14,4"></path>
              <path fill="#ffffff" stroke="#ffffff" stroke-width="1" d="M0,4L4,7"></path>
            </g>
          </svg>
        </span>Вернуться
      </router-link>
      <img
        class="logo"
        src="../../../assets/ulogo@2x.png"
        srcset="../../../assets/ulogo@3x.png 3x"
        alt
      >
      <TextFiled
        type="tel"
        name="phone"
        :maxlength="21"
        placeholder="Номер телефона"
        pattern="\+\d{1}\s\(\s\d{3}\s\)\s\d{3}\-\d{2}\-\d{2}"
        errorText="Номер должен иметь формат +X ( XXX ) XXX-XX-XX"
        class="textfield"
        v-model="phone"
        required
      />
      <TextFiled
        type="password"
        name="password"
        :maxlength="10"
        placeholder="Пароль"
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,10}"
        errorText="Пароль должен состоять из цифр, заглавных и прописных латинских букв и иметь длинну не менее 5 символов"
        class="textfield"
        v-model="password"
        required
      />
      <div class="remember">
        <CheckBox name="remember" v-model="remember"/>
        <router-link class="forget" to="/restore">Забыл пароль</router-link>
      </div>
      <Button class="btn" type="submit" :disabled="isCorrectForm" text="Войти"/>
    </div>
  </form>
</template>

<script>
import TextFiled from "../../../components/TextField.vue";
import CheckBox from "../../../components/CheckBox.vue";
import Button from "../../../components/Button.vue";

export default {
  name: "loginform",
  components: {
    TextFiled,
    CheckBox,
    Button
  },
  data() {
    return {
      phone: "",
      password: "",
      remember: false
    };
  },
  computed: {
    isCorrectForm() {
      return !this.phone || !this.password;
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 2px 32px rgba(0, 0, 0, 0.5);
}
.blur {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("../../../assets/wallpaper@2x.png");
  background-size: auto, auto 100vh;
  background-position: center;
  filter: blur(12px);
  box-shadow: inset 0px 0px 30px -5px #ffffff;
}
.inner {
  width: 100%;
  padding: 15px 10px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.close {
  text-transform: uppercase;
  font-size: 10px;
  letter-spacing: 1px;
  color: #ffffff;
  opacity: 0.8;
  align-self: start;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    opacity: 1;
  }
  .arrow-left {
    margin-right: 5px;
  }
}
.logo {
  width: 97px;
  height: 97px;
  border-radius: 50px;
}
.textfield {
  width: 100%;
}
.remember {
  width: 95%;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  color: #ffffff;
  font-size: 16px;
}
.forget {
  color: #ffffff;
}
.btn {
  width: 150px;
}
@media screen and (min-aspect-ratio: 3080/1926) {
  .blur {
    background-size: auto, 100vw auto;
  }
}
@media screen and (min-width: 540px) {
  .remember,
  .textfield {
    width: 370px;
  }
  .remember {
    justify-content: space-around;
  }
  .inner {
    padding: 30px;
  }
}
@media (-webkit-min-device-pixel-ratio: 2.5){
  .blur {
    background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url("../../../assets/wallpaper@3x.png");
  }
}
</style>