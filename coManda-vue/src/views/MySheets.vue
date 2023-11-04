<script setup>
import { AppStore } from "../common/AppStore.js"
import Sheets from "../components/Sheets.vue";
</script>

<template>
    <div class="restaurant-bg w-100 h-100 p-4  ">
        <h1 class="row text-start title mb-3 w-100">
            Minhas comandas
        </h1>
        <div class="col-6">
            <Sheets :addFriends="true" />
        </div>
    </div>
</template>