<template>
  <div class="login">
    <div class="blackout"></div>
    <LoginForm class="login_form"/>
  </div>
</template>

<script>
import LoginForm from "./components/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style scoped lang="scss">
.blackout {
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: #000000;
  opacity: 0.5;
}
.login {
  width: 100vw;
  height: 100vh;
  background: url("../../assets/wallpaper@2x.png") center;
  background-size: auto 100%;
}
.login_form {
  width: 90%;
  height: 434px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  justify-content: center;
}
@media screen and (min-aspect-ratio: 3080/1926) {
  .login {
    background-size: 100% auto;
  }
}
@media screen and (min-width: 720px) {
  .login_form {
    width: 626px;
    height: 434px;
  }
}
@media (-webkit-min-device-pixel-ratio: 2.5){
  .login {
    background: url("../../assets/wallpaper@3x.png") center;
  }
}
</style>