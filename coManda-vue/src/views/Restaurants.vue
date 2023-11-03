<script setup>
import { AppStore } from "../common/AppStore.js"
import { onBeforeMount, onBeforeUnmount, ref } from "vue";

onBeforeMount(() => {
    AppStore.showSidebar = true;
});
onBeforeUnmount(() => {
    AppStore.showSidebar = false;
});

const restaurants = ref([
    {
        id: 1,
        name: "Tatu Bola Bar",
        street: "Av. do Contorno, 6557",
        neighborhood: "Savassi",
    },
    {
        id: 1,
        name: "Tatu Bola Bar",
        street: "Av. do Contorno, 6557",
        neighborhood: "Savassi",
    },
    {
        id: 1,
        name: "Tatu Bola Bar",
        street: "Av. do Contorno, 6557",
        neighborhood: "Savassi",
    }
])
</script>

<template>
    <div class="restaurant-bg w-100 h-100 p-4">
        <h1 class="row text-start title mb-3">
            Restaurantes próximos
        </h1>
        <router-link to="/">
            <button v-for="restaurant in restaurants" class="row w-50 mx-left my-2 rounded bg-beige">
                <span style="color: black;">{{ restaurant.name }}</span>
                <span style="color: black;">{{ restaurant.street }}, {{ restaurant.neighborhood }}</span>
            </button>
        </router-link>
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