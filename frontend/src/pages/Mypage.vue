<template>
  <div id="app">
    <router-view />
    <Profile :state="state" />
  </div>
</template>

<script setup>
import Profile from "../components/Profile.vue";
import axios from "axios";
import { ref } from "vue";

const state = ref({
  username: "",
  email: "",
  password: "",
  telephone: "",
});
axios.get("/api/weather").then((res) => {
  state.value = res.data.data[0];
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
