<script setup>
import { AppStore } from "../common/AppStore.js"
import { toRef } from "vue";

const restaurantData = toRef(AppStore.restaurantData)

const props = defineProps({
    addFriends: Boolean,
    addProducts: Boolean,
    sheet: Object,
})

const emit = defineEmits(["addProduct"])

const addProduct = () => {
    emit("addProduct", props.sheet.id)
}
</script>

<template>
    <template v-if="props.addProducts">
        <div v-if="props.sheet.isOpen"
            class="rounded bg-light-beige my-2 row d-flex rounded align-items-center px-3 py-2 bodyPointer"
            @click.self="addProduct">
            <div class="rounded p-1 sheetOpen col-1" @click="addProduct">
                <i class="fa-solid fa-lock-open"></i>
            </div>
            <img src="../assets/only-logo-no-background.png" alt="Logo" class="col-1 " style="width:55px"
                @click="addProduct">
            <span style="color: black; font-size: 1.5rem;" class="col "
                v-text="restaurantData.find((restaurant) => restaurant.id == props.sheet.restaurantId).name"
                @click="addProduct"></span>
            <router-link :to="`/addFriends/${props.sheet.id}`" v-if="props.addFriends" style="width: fit-content;"
                class="ms-auto">
                <button class=" btn bg-blue rounded ">
                    <i class="fa-solid fa-user-plus"></i>
                </button>
            </router-link>
        </div>
        <div v-else
            class="rounded bg-light-gray my-2 row d-flex rounded align-items-center px-3 py-2 justify-content-around ">
            <div class="rounded p-1 sheetClosed col-1 ">
                <i class="fa-solid fa-lock"></i>
            </div>
            <img src="../assets/only-logo-no-background.png" alt="Logo" class="col-1 " style="width:55px">
            <span style="color: black; font-size: 1.5rem;" class="col "
                v-text="restaurantData.find((restaurant) => restaurant.id == props.sheet.restaurantId).name"></span>
            <div v-if="props.addFriends" style="width: fit-content;" class="ms-auto p-0">
                <button class=" btn bg-blue rounded " disabled>
                    <i class="fa-solid fa-user-plus"></i>
                </button>
            </div>
        </div>
    </template>
    <template v-else>
        <div v-if="props.sheet.isOpen"
            class="rounded bg-light-beige my-2 row d-flex rounded align-items-center px-3 py-2 justify-content-around ">
            <div class="rounded p-1 sheetOpen col-1 ">
                <i class="fa-solid fa-lock-open"></i>
            </div>
            <img src="../assets/only-logo-no-background.png" alt="Logo" class="col-1 " style="width:55px">
            <span style="color: black; font-size: 1.5rem;" class="col-3 "
                v-text="restaurantData.find((restaurant) => restaurant.id == props.sheet.restaurantId).name"></span>
            <router-link :to="`/addFriends/${props.sheet.id}`" v-if="props.addFriends" style="width: fit-content;"
                class="ms-auto">
                <button class=" btn bg-blue rounded ">
                    <i class="fa-solid fa-user-plus"></i>
                </button>
            </router-link>
        </div>
        <div v-else
            class="rounded bg-light-gray my-2 row d-flex rounded align-items-center px-3 py-2 justify-content-around ">
            <div class="rounded p-1 sheetClosed col-1 ">
                <i class="fa-solid fa-lock"></i>
            </div>
            <img src="../assets/only-logo-no-background.png" alt="Logo" class="col-1 " style="width:55px">
            <span style="color: black; font-size: 1.5rem;" class="col-3 "
                v-text="restaurantData.find((restaurant) => restaurant.id == props.sheet.restaurantId).name"></span>
            <div v-if="props.addFriends" style="width: fit-content;" class="ms-auto p-0">
                <button class=" btn bg-blue rounded " disabled>
                    <i class="fa-solid fa-user-plus"></i>
                </button>
            </div>
        </div>
    </template>
</template>

<style scoped>
.bg-blue {
    border: 1px solid var(--bg-blue);
    background: var(--bg-blue);
    color: #fff;
}

.bg-blue:hover {
    border: 1px solid var(--bg-dark-blue);
    background: var(--bg-dark-blue);
    color: #fff;
}

.bg-light-beige {
    background-color: var(--bg-light-beige);
}

.bg-light-beige:hover {
    background-color: var(--bg-light-beige-hover);
}

.sheetOpen {
    background-color: #35cb76;
    color: white;
    font-size: 12px;
    width: fit-content;
    height: fit-content
}

.bg-light-gray {
    background-color: var(--bg-light-gray);
}

.bg-light-gray:hover {
    background-color: var(--bg-light-gray-hover);
}

.sheetClosed {
    background-color: #cb3535;
    color: white;
    font-size: 12px;
    width: fit-content;
    height: fit-content
}

.bodyPointer {
    cursor: pointer;
}
</style>