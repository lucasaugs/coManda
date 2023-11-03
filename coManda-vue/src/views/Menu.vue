<script setup>
import { AppStore } from "../common/AppStore.js"
import { onBeforeMount, onBeforeUnmount, ref } from "vue";
import Btnlogin from "../components/BtnLogin.vue"
onBeforeMount(() => {
    AppStore.showSidebar = true;
});
onBeforeUnmount(() => {
    AppStore.showSidebar = false;
});

const menuData = ref([
    {
        name: "Batata Frita Pequena",
        price: 6.00,
        picture: "../assets/batata.jpg",
        restaurantId: 1
    },
    {
        name: "Batata Frita Pequena",
        price: 6.00,
        picture: "BKbatataP.jpg",
        restaurantId: 1
    },
    {
        name: "Batata Frita Pequena",
        price: 6.00,
        picture: "BKbatataP.jpg",
        restaurantId: 1
    },
])
</script>

<template>
    <div class="container-full menu-bg justify px-5">
      <div v-for="menu in menuData" class="row w-auto mx-left my-4 rounded">
        <div class="w-auto my-2 col-2">
          <img :src="menu.picture" alt="Imagem do produto" style="height: 100px;" class="my-3" />
        </div>
        <div class="w-auto my-2 col-4 d-flex align-items-center">
          <p v-text="menu.name" class="mb-0"></p>
        </div>
        <div class="w-auto my-2 col-4 d-flex align-items-center justify-content-end">
          <p v-text="'R$ ' + menu.price" class="mb-0"></p>
        </div>
        <div class="w-auto my-2 col-2 d-flex align-items-center justify-content-end">
          <button class="btn btn-beige">Adicionar</button>
        </div>
        <hr style="color: black; border-bottom: 1px solid black;">
      </div>
    </div>
  </template>
  

<style scoped>
.menu-bg {
    background-color: var(--opaque-white);
}

.container-full {
  width: 100%;
  height: 100%;
}

.btn-beige {
  background-color: #d4ad6f;
  color: black;
}
</style>