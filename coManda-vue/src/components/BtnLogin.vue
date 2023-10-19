<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
    <button class="btn-input">
      {{ msg }}
    </button>
</template>

<style scoped>
.btn-input {
    width: 414px;
    height: 82px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #D4AD6F;
    background: #D4AD6F;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

</style>