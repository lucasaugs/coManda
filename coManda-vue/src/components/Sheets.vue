<script setup>
import { AppStore } from "../common/AppStore.js"
import { toRef, watch } from "vue";
import Sheet from "../components/Sheet.vue";

const sheetData = toRef(AppStore.sheetData)

const props = defineProps({
    addFriends: Boolean,
    addProducts: Boolean,
})

const emit = defineEmits(["addProduct"])

const addProduct = (sheetId) => {
    if (props.addProducts)
        emit("addProduct", sheetId, sheetData.value.length)
}

watch(() => AppStore.sheetData, () => {
    sheetData.value = AppStore.sheetData
})
</script>

<template>
    <template v-for="sheet in sheetData">
        <router-link :to="`/mySheets/${sheet.id}`" v-if="props.addFriends">
            <Sheet :sheet="sheet" :addFriends="true" />
        </router-link>
        <Sheet :sheet="sheet" :addProducts="true" v-if="props.addProducts" @addProduct="addProduct" />
    </template>
</template>