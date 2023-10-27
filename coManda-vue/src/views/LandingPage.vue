<script setup lang="ts">
</script>

<template>
    <div class="tela container">
        <router-link to="/login">
            <div class="w-50 mx-auto">
                <img src="../assets/logo-no-background.png" alt="coManda Logo" class="w-75 logo" />
            </div>
        </router-link>
    </div>
</template>

<style>
.logo {
    flex-shrink: 0;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #d4ad6f);
}
</style>