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
    <router-link to="/attribute">Attribute</router-link> |
    <router-link to="/class">Class</router-link> |
    <router-link to="/class2">Class2</router-link> |
    <router-link to="/style">Style</router-link> 
    <br>
    <router-link to="/list">List</router-link> |
    <router-link to="/vif">V-if</router-link> |
    <router-link to="/eventclick">EventClick</router-link> |
    <router-link to="/eventchange">EventChange</router-link> |
    <router-link to="/eventkey">EventKey</router-link> |
    <router-link to="/computed">ComputedChange</router-link> |
    <router-link to="/watch">WatchChange</router-link> |
    <br>
    <router-link to="/databindinglist2">MockServerList</router-link> |
    <router-link to="/nested">NestedComponent</router-link> |
    <router-link to="/childevent">ChildComponentEvent</router-link> |
    <br>
    <router-link to="/store">Vuex</router-link> |

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
