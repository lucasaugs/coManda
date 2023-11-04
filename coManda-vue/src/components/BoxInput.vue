<script setup lang="ts">
import { watch, ref } from 'vue'
// defineProps<{ placeholder?: string, customClass?: string, customStyle?: string, type?: string, value?: string }>()
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    customClass: {
        type: String,
        default: ''
    },
    customStyle: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: ''
    },
    value: {
        type: String,
        default: ''
    }

})
const emit = defineEmits(['update:value'])

const inputValue = ref(props.value)

watch(() => props.value, () => {
    inputValue.value = props.value
})

watch(() => inputValue.value, () => {
    emit('update:value', inputValue.value)
})


</script>

<template>
    <input :type="type || 'text'" class="form-control input-text" :placeholder="placeholder" :class="customClass"
        :style="customStyle" v-model="inputValue" />
</template>

<style scoped>
.input-text {
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid var(--opaque-white);
    background: var(--opaque-white);
}
</style>