<script setup lang="ts">

defineProps<{ msg?: string, customClass?:string, customStyle?:string, type?:string }>()

</script>

<template>
    <input :type="type || 'text'" class="form-control input-text" :placeholder="msg" :class="customClass" :style="customStyle"/>
</template>

<style scoped>
.input-text {
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #E0E1DD;
    background: #E0E1DD;
}
</style>