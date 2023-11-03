<script setup>
import { ref, toRef } from "vue";
import { useRoute } from 'vue-router';
import { AppStore } from "../common/AppStore.js"

const route = useRoute();
const restaurantId = toRef(() => route.params.restaurantId);

const restaurants = toRef(AppStore.restaurantData)
</script>

<template>
    <div class="restaurant-bg w-100 h-100 p-4">
        <h1 class="row text-start title mb-3">
            Restaurantes próximos
        </h1>
        <div class="d-flex flex-column" v-for="restaurant in restaurants">
            <router-link :to="`/restaurant/${restaurant.id}`">
                <button class="d-flex flex-column btn w-50 mx-left my-2 rounded bg-beige">
                    <span style="color: black; font-size: 25px;" class="row ms-3 me-auto">{{ restaurant.name }}</span>
                    <span style="color: black;" class="row ms-3 me-auto ">
                        {{ restaurant.street }}, {{ restaurant.neighborhood }}
                    </span>
                </button>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.title {
    border-bottom: 1px solid var(--bg-dark-blue);
    font-size: 2.3rem;
    height: fit-content;
}

.bg-beige {
    border: 1px solid var(--bg-beige);
    background: var(--bg-beige);
    font-size: 18px;
}

.bg-beige:hover {
    border: 1px solid var(--bg-beige-hover);
    background: var(--bg-beige-hover);
}
</style>