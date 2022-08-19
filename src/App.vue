<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/databinding">DataBinding</router-link> |
    <router-link to="/inputtext">InputText</router-link> |
    <router-link to="/inputnumber">InputNumber</router-link> |
    <router-link to="/select">Select</router-link> |
    <router-link to="/checkbox">Checkbox</router-link> |
    <router-link to="/checkbox2">Checkbox2</router-link> |
    <router-link to="/radiobutton">Radiobutton</router-link> |

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
