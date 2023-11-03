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

const restaurants = ref([{
    id: 1,
    name: "Restaurante Sabor da Casa",
    street: "Rua dos Bobos",
    neighborhood: "Bairro dos Bobos",
}])
</script>

<template>
    <div class="restaurant-bg w-100 h-100 p-4">
        <h1 class="row text-start title mb-3">
            Restaurantes cadastrados
        </h1>
        <div v-for="restaurant in restaurants" class="row w-50 mx-auto my-2 rounded bg-beige">
        </div>
    </div>
</template>

<style scoped>
.restaurant-bg {
    background-color: var(--opaque-white);
}

.title {
    border-bottom: 1px solid var(--bg-dark-blue);
    font-size: 2.3rem;
    height: fit-content;
}

.bg-beige {
    background-color: var(--bg-beige);
}
</style>