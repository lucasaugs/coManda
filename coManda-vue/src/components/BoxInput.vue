<script setup lang="ts">

defineProps<{ msg?: string, customClass?: string, customStyle?: string, type?: string }>()

</script>

<template>
    <input :type="type || 'text'" class="form-control input-text" :placeholder="msg" :class="customClass"
        :style="customStyle" />
</template>

<style scoped>
.input-text {
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--opaque-white);
    background: var(--opaque-white);
}
</style>