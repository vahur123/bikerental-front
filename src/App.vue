<template>
  <div id="app">
    <div id="nav">
      <router-link to="/avaleht">Avaleht</router-link> |
      <router-link to="/ostukorv">Ostukorv</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/admin">Admin</router-link> |
      <router-link to="/meist">Meist</router-link> |
      <router-link to="/renditingimused">Renditingimused</router-link> |
      <router-link to="/kontakt">Kontakt</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
