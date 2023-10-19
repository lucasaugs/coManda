<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
    <p class="input-text">
        {{ msg }}
    </p>
</template>

<style scoped>
.input-text {
    width: 414px;
    height: 82px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #E0E1DD;
    background: #E0E1DD;
}
</style>