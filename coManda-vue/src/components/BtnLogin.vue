<script setup lang="ts">

defineProps<{ msg?: string, customClass?: string, customStyle?: string }>()

</script>

<template>
    <button class="btn fw-semibold btn-input text-center align-items-center " :class="customClass" :style="customStyle">
        {{ msg }}
    </button>
</template>

<style scoped>
.btn-input {
    border: 1px solid var(--bg-beige);
    background: var(--bg-beige);
    font-size: 18px;
}

.btn-input:hover {
    border: 1px solid var(--bg-beige-hover);
    background: var(--bg-beige-hover);
    color: var(--opaque-white);
}
</style>