<template>
  <div id="app">
    <nav id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
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
  justify-content: center;

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
    background: #221D30;
    margin: 0;
  }
</style>
