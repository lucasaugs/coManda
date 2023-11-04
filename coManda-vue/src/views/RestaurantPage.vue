<script setup>
import { ref, toRef, watch } from "vue";
import Btnlogin from "../components/BtnLogin.vue"
import { useRoute } from 'vue-router';
import axios from "axios";
import { AppStore } from "../common/AppStore.js"


const route = useRoute();
const restaurantId = toRef(() => route.params.restaurantId);

const restaurantData = ref(AppStore.restaurantData.find((restaurant) => restaurant.id == parseInt(restaurantId.value)))


const createComanda = () => {
    var user_id = AppStore.userId;
    var restaurant_id = restaurantId.value;

    if (!user_id) {
        alert("Você precisa estar logado para criar uma comanda!");
        return;
    }

    if (!restaurant_id) {
        alert("Erro ao criar comanda!");
        return;
    }

    if (confirm("Deseja criar uma nova comanda nesse restaurante?") == false) {
        return;
    }
    axios.post("http://localhost:3030/api/sheetClient/create",
        {
            total: 0,
            restaurantId: parseInt(restaurant_id),
            isOpen: true,
            userId: user_id
        }).then((response) => {
            console.log(response);
            alert("Comanda criada com sucesso!");
        }).catch((error) => {
            console.log(error);
            alert("Erro ao criar comanda!");
        });
}

watch(() => route.params.restaurantId, () => {
    restaurantData.value = AppStore.restaurantData.find((restaurant) => restaurant.id == parseInt(restaurantId.value))
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
            <Btnlogin :msg="'Criar nova comanda'" :customClass="'mb-3 w-100 mx-auto'" :customStyle="`font-size:25px;`"
                @click="createComanda" />
            <router-link :to="`/restaurant/${restaurantId}/menu`">
                <Btnlogin :msg="'Abrir cardápio'" :customClass="'mb-3 w-100 mx-auto'" :customStyle="`font-size:25px;`" />
            </router-link>
        </div>
    </div>
</template>

<style scoped></style>