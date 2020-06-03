<template>
  <div id="app">
    <nav id="nav">
      <div class="nav-start">
        <div class="logo"></div>
      </div>
      <div class="nav-end">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    background-image: url("./assets/logo.png");
    background-size: cover;
    height: 52.4px;
    width: 96.5px;
  }

  a {
    font-weight: bold;
    color: #f2eeee;
    text-decoration: none;
    font-size: 1.5rem;
    padding: 0 0.5em;

    &.router-link-exact-active {
      color: rgb(148, 153, 196);
    }
  }
}
body {
  background: #221d30;
  margin: 0;
}
</style>
