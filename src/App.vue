<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">

@font-face {
  font-family: "HelveticaNeueCyr";
  src: url("./fonts/HelveticaNeueCyr-Roman.eot");
  src: local("HelveticaNeueCyr-Roman"),
    url("./fonts/HelveticaNeueCyr-Roman.eot?#iefix") format("embedded-opentype"),
    url("./fonts/HelveticaNeueCyr-Roman.woff") format("woff"),
    url("./fonts/HelveticaNeueCyr-Roman.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0;
  font-family: "HelveticaNeueCyr", sans-serif;
  min-width: 320px;
}
</style>
