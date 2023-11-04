<script setup>
import SlimSelect from '@slim-select/vue'
import { ref, toRef, watch } from "vue";
import { useRoute } from 'vue-router';
import axios from "axios";
import { AppStore } from "../common/AppStore.js"
import Btnlogin from "../components/BtnLogin.vue"


const route = useRoute();
const sheetId = toRef(() => route.params.sheetId);

const insertedUsers = ref([]);

const slimSelectSettings = {
    closeOnSelect: false,
    allowDeselect: true,
    maxValuesShown: 9999,
};

const userData = toRef(AppStore.usersData)

const insertInSheet = () => {
    var sheet_id = sheetId.value;

    if (!sheet_id) {
        alert("Erro ao adicionar amigos!");
        return;
    }
    var users = insertedUsers.value;

    if (users.length == 0) {
        alert("Selecione ao menos um amigo!");
        return;
    }

    if (confirm("Deseja adicionar esses amigos à comanda?") == false) {
        return;
    }

    axios.put("http://localhost:3030/api/sheetClient/edit",
        {
            userNames: users,
            sheetId: parseInt(sheet_id)
        }).then((response) => {
            console.log(response);
            alert("Amigos adicionados com sucesso!");
        }).catch((error) => {
            console.log(error);
            alert("Erro ao adicionar amigos!");
        });
}

watch(() => AppStore.usersData, () => {
    userData.value = AppStore.usersData
})

</script>

<template>
    <div class="restaurant-bg w-100 h-100 p-4  ">
        <h1 class="row text-start title mb-3 w-100">
            Adicionar amigos
        </h1>
        <div class="w-50 justify-content-center d-flex mx-auto" style="height: fit-content;">
            <img src="../assets/only-logo-no-background.png" alt="Logo" class="my-3" style="width: 250px;" />
        </div>
        <div class="text-center w-auto calling ">
            Adicionando pessoass à comanda
        </div>
        <div class="text-center w-auto calling ">
            Com quem você deseja dividir a conta?
        </div>
        <div class="d-flex justify-content-center my-2">
            <div class="col-5">
                <SlimSelect multiple :settings="slimSelectSettings" :style="'font-size:1.3rem'" v-model="insertedUsers">
                    <option v-for="user in userData" v-text="user.name" :value="user.name"></option>
                </SlimSelect>
            </div>
        </div>
        <div class="d-flex flex-column my-4 mx-auto w-50 ">
            <div class="row col-6 mx-auto ">
                <button class="btn my-2 rounded bg-beige w-100 " style="font-size:25px;" @click="insertInSheet">
                    Confirmar
                </button>
            </div>
            <div class="row col-6 mx-auto ">
                <router-link to="/mySheets">
                    <button class="btn my-2 rounded bg-beige w-100 text-center" style="font-size:25px;">
                        <i class="fa-solid fa-arrow-left mx-2" style="font-size: 18px;"></i>
                        Retornar
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.calling {
    font-size: 1.5rem;
    color: var(--bg-dark-blue);
}

.bg-beige {
    border: 1px solid var(--bg-beige);
    background: var(--bg-beige);
    font-size: 18px;
    color: #000;
}

.bg-beige:hover {
    border: 1px solid var(--bg-beige-hover);
    background: var(--bg-beige-hover);
    color: #000;
}
</style>

<style>
@import '/node_modules/slim-select/dist/slimselect.css';

.ss-value,
.ss-selected,
.ss-option:hover {
    background-color: var(--bg-blue) !important;
}

.ss-value-text {
    font-size: 1rem !important;
}
</style>