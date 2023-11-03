<script setup>
import { AppStore } from "../common/AppStore.js"
</script>

<template>
    <div v-if="AppStore.showSidebar" class="d-flex flex-column flex-shrink-0 p-3 text-black col sidebar"
        style="width: 280px !important;">
        <router-link to="/">
            <div class="w-75 mx-auto">
                <img src="../assets/logo-no-background.png" alt="coManda Logo" class="w-100 logo" />
            </div>
        </router-link>
        <hr style="color: black; border-bottom: 1px solid black;">
        <ul class="nav nav-pills flex-column mb-auto">
            <router-link to="/">
                <li class="nav-link text-black rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-house mx-2"></i>
                    Página Inicial
                </li>
            </router-link>
        </ul>
        <ul class="nav nav-pills flex-column mb-auto">
            <router-link to="/">
                <li class="nav-link text-black rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid mx-2"></i>
                    Acessar comanda
                </li>
            </router-link>
        </ul>
        <ul class="nav nav-pills flex-column mb-auto">
            <router-link to="/">
                <li class="nav-link text-black rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid mx-2"></i>
                    Adicionar amigos
                </li>
            </router-link>
        </ul>
        <ul class="nav nav-pills flex-column">
            <router-link to="/login">
                <li class="nav-link text-black rounded d-flex justify-content-center align-items-center">
                    <i class="fa-solid fa-arrow-right-from-bracket mx-2"></i>
                    Sair
                </li>
            </router-link>
        </ul>
    </div>
</template>

<style scoped>
.sidebar {
    background-color: var(--bg-blue);
    border-radius: 8px;
}

.nav-link {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.nav-link:hover {
    background-color: var(--bg-light-gray-transparent);
}

.nav-link i {
    font-size: 18px;
    color: black;
}
</style>
