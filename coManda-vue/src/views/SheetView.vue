<script setup>
import { AppStore } from "../common/AppStore.js"
import { toRef, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const sheetId = toRef(() => route.params.sheetId);

const sheetData = toRef(AppStore.sheetData.find((sheet) => sheet.id == sheetId.value))
const restaurantData = toRef(AppStore.restaurantData.find((restaurant) => restaurant.id == sheetData.value.restaurantId))

const sheetItems = ref([
    {
        name: "Coca-cola",
        price: 5.00,
        picture: "../assets/coca-cola.jpg",
    },
    {
        name: "Batata frita",
        price: 10.00,
        picture: "../assets/batata-frita.jpg",
    },
    {
        name: "Hamburguer",
        price: 15.00,
        picture: "../assets/hamburguer.jpg",
    },
])
</script>

<template>
    <div class="restaurant-bg w-100 h-100 p-4  ">
        <h1 class="row text-start title mb-3 w-100">
            Minhas comandas
        </h1>
        <div class="itemList pe-5 ">
            <div class="row itemListTitle justify-content-around pe-5">
                <div class="my-2 col-2">
                    Item
                </div>
                <div class="my-2 col-4 d-flex align-items-center">
                    Nome
                </div>
                <div class="my-2 col-4 d-flex align-items-center justify-content-end">
                    Preço
                </div>
            </div>
            <div v-for="item in sheetItems"
                class=" my-2 row d-flex align-items-center px-3 py-2 justify-content-around pe-5">
                <div class="my-2 col-2">
                    <img src="../assets/batata.jpg" alt="Imagem do produto" style="height: 100px;" class="my-3" />
                </div>
                <div class="my-2 col-4 d-flex align-items-center">
                    <p v-text="item.name" class="mb-0"></p>
                </div>
                <div class="my-2 col-4 d-flex align-items-center justify-content-end">
                    <p v-text="'R$ ' + item.price.toFixed(2)" class="mb-0"></p>
                </div>
            </div>
            <div class="row itemListTitle justify-content-around pe-5 border-top ">
                <div class="my-2 col-2">
                </div>
                <div class="my-2 col-4 d-flex align-items-center">
                </div>
                <div class="my-2 col-4 d-flex align-items-center justify-content-end border-bottom ">
                    Total
                </div>
            </div>
            <div class="row itemListTitle justify-content-around pe-5 ">
                <div class="my-2 col-2">
                </div>
                <div class="my-2 col-4 d-flex align-items-center">
                </div>
                <div class="my-2 col-4 d-flex align-items-center justify-content-end ">
                    R$ {{ sheetItems.reduce((acc, item) => acc + item.price, 0).toFixed(2) }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.itemList {
    font-size: 1.5rem;
}

.itemListTitle {
    font-weight: 600;
    font-size: 1.7rem;
}

.border-top {
    border-top: 1px solid black !important;
}

.border-bottom {
    border-bottom: 1px solid black !important;
}
</style>