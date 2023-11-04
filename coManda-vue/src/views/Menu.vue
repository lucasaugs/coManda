<script setup>
import { AppStore } from "../common/AppStore.js"
import { ref, toRef } from "vue";
import Dialog from 'primevue/dialog';
import Sheets from "../components/Sheets.vue";
import axios from "axios";

const menuData = toRef(AppStore.menudata)
const dialogVisible = ref({ itemName: "", restaurantId: "", itemPrice: 0, itemId: -1, visible: false })

const createDialog = (itemId, itemName, restaurantId, itemPrice) => {
  dialogVisible.value.itemName = itemName;
  dialogVisible.value.restaurantId = restaurantId;
  dialogVisible.value.itemPrice = itemPrice;
  dialogVisible.value.itemId = itemId;
  dialogVisible.value.visible = true;
}

const addProduct = (sheetId, sheetLen) => {
  if (!sheetId || !sheetLen || !dialogVisible.value.itemId) {
    alert("Erro ao adicionar produto!");
    return;
  }

  if (confirm("Deseja adicionar esse produto à comanda?") == false) {
    return;
  }

  // axios.put("localhost:3000/api/sheetClient/addItem",
  //   {
  //     sheetId: sheetId,
  //     itemId: dialogVisible.value.itemId,
  //     dividers: sheetLen.toString(),
  //   }).then((response) => {
  //     console.log(response);
  //     alert("Produto adicionado com sucesso!");
  //   }).catch((error) => {
  //     console.log(error);
  //     alert("Erro ao adicionar produto!");
  //   });
}
</script>

<template>
  <div class="container-full restaurant-bg justify px-5">
    <div v-for="menu in menuData" class="row w-auto mx-left my-4 rounded">
      <div class="w-auto my-2 col-2">
        <img src="../assets/batata.jpg" alt="Imagem do produto" style="height: 100px;" class="my-3" />
      </div>
      <div class="w-auto my-2 col-4 d-flex align-items-center">
        <p v-text="menu.name" class="mb-0"></p>
      </div>
      <div class="w-auto my-2 col-4 d-flex align-items-center justify-content-end">
        <p v-text="'R$ ' + menu.price" class="mb-0"></p>
      </div>
      <div class="w-auto my-2 col-2 d-flex align-items-center justify-content-end">
        <button class="btn btn-beige"
          @click="createDialog(menu.id, menu.name, menu.restaurantId, menu.price)">Adicionar</button>
      </div>
      <hr style="color: black; border-bottom: 1px solid black;">
    </div>
    <Dialog v-model:visible="dialogVisible.visible">
      <template #header>
        <div class="d-flex justify-content-center">
          <h3 class="text-center">Adicionar item "{{ dialogVisible.itemName }}" à comanda</h3>
        </div>
      </template>
      <Sheets :addProducts="true" @addProduct="addProduct" />
    </Dialog>

  </div>
</template>
  

<style scoped>
.container-full {
  width: 100%;
  height: 100%;
}

.btn-beige {
  background-color: #d4ad6f;
  color: black;
}

.btn-beige:hover {
  border: 1px solid var(--bg-beige-hover);
  background-color: var(--bg-beige-hover);
}
</style>