<script setup lang="ts">

defineProps<{ msg?: string, customClass?:string, customStyle?:string }>()

</script>

<template>
    <button class="btn fw-semibold btn-input" :class="customClass" :style="customStyle">
      {{ msg }}
    </button>
</template>

<style scoped>
.btn-input {
    border: 1px solid #D4AD6F;
    background: #D4AD6F;
    font-size: 18px;
}
.btn-input:hover {
    border: 1px solid #c6a267;
    background: #c6a267;
}

</style>