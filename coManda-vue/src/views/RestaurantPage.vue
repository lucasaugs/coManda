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

const restaurantData = ref({
    name: "Restaurante Sabor da Casa",
    imgUrl: "../assets/restaurante.jpg",
})
</script>

<template>
    <div class="restaurant-bg w-100 h-100 p-4">
        <h1 v-text="restaurantData.name" class="text-start title mb-3">
        </h1>
        <div class="w-50 mx-auto my-2">
            <img src="../assets/restaurante.jpg" alt="Restaurante" style="height: 450px;" class="my-3" />
        </div>
        <div class="mx-auto my-2 row flex-column col-4 ">
            <router-link to="/newComanda">
                <Btnlogin :msg="'Criar nova comanda'" :customClass="'mb-3 w-100 mx-auto'"
                    :customStyle="`font-size:25px;`" />
            </router-link>
            <router-link to="/myComandas">
                <Btnlogin :msg="'Minhas comandas'" :customClass="'mb-3 w-100 mx-auto'" :customStyle="`font-size:25px;`" />
            </router-link>
            <router-link to="/restaurantMenu">
                <Btnlogin :msg="'Abrir cardápio'" :customClass="'mb-3 w-100 mx-auto'" :customStyle="`font-size:25px;`" />
            </router-link>
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
}
</style>