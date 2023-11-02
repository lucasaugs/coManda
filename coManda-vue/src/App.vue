<script setup>
import { AppStore } from "./common/AppStore.js"
import { onBeforeMount } from "vue";
import Sidebar from "./components/Sidebar.vue";

onBeforeMount(() => {
  AppStore.showSidebar = false;
});
</script>

<template>
  <Sidebar />
  <div class="d-flex p-0 align-items-center justify-content-center col" :class="AppStore.showSidebar && 'col-10'">
    <router-view />
  </div>
</template>

<style scoped></style>