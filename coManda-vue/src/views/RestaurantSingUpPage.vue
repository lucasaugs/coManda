<script setup lang="ts">
import BoxInput from "../components/BoxInput.vue"
import Btnlogin from "../components/BtnLogin.vue"
import axios from "axios";
import { router } from "../router/index.js";
import { ref } from "vue"

const registerRestaurant = ref({
  email: "",
  cnpj: "",
  name: "",
  cep: "",
  street: "",
  neighborhood: "",
  password: "",
  confirmPassword: "",
})

const signupRestaurant = () => {
  if (registerRestaurant.value.password != registerRestaurant.value.confirmPassword) {
    alert("As senhas não coincidem")
    return
  }

  axios.post("http://localhost:3030/api/restaurants/restaurant-signUp",
    {
      email: registerRestaurant.value.email,
      cpf: registerRestaurant.value.cnpj,
      name: registerRestaurant.value.name,
      cep: registerRestaurant.value.cep,
      street: registerRestaurant.value.street,
      neighborhood: registerRestaurant.value.neighborhood,
      password: registerRestaurant.value.password,
    })
    .then((res) => {
      alert("Estabelecimento cadastrado com sucesso!")
    }).catch((err) => {
      alert("Erro ao cadastrar estabelecimento")
    })
}
</script>
    
<template>
  <div class="container">
    <router-link to="/login">
      <div class="w-50 mx-auto">
        <img src="../assets/logo-no-background.png" alt="coManda Logo" class="w-75 logo" />
      </div>
    </router-link>

    <p style="font-size: 34px; color: #e0e1dd; margin-top: 25px;">CADASTRE SEU ESTABELECIMENTO</p>

    <div class="w-20 mx-auto">
      <div class="row justify-content-center">
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Email'" :customStyle="'height: 80px;font-size:24px'" type="email"
            v-model:value="registerRestaurant.email" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'CNPJ'" :customStyle="'height: 80px;font-size:24px'" type="text" pattern="\d{14}"
            v-model:value="registerRestaurant.cnpj" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Nome completo'" :customStyle="'height: 80px;font-size:24px'" type="text"
            v-model:value="registerRestaurant.name" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'CEP'" :customStyle="'height: 80px;font-size:24px'" type="text" pattern="\d{8}"
            v-model:value="registerRestaurant.cep" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Rua do estabelecimento'" :customStyle="'height: 80px;font-size:24px'" type="text"
            v-model:value="registerRestaurant.street" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Bairro do estabelecimento'" :customStyle="'height: 80px;font-size:24px'" type="text"
            v-model:value="registerRestaurant.neighborhood" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Senha'" :customStyle="'height: 80px;font-size:24px'" type="password"
            v-model:value="registerRestaurant.password" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Confirmar senha'" :customStyle="'height: 80px;font-size:24px'" type="password"
            v-model:value="registerRestaurant.confirmPassword" />
        </div>
      </div>
      <router-link to="/restaurant-signUp/menu">
        <Btnlogin :msg="'Próximo'" :customClass="'mb-4 w-50 mx-auto'" :customStyle="'height: 80px; font-size:36px'"
          type="submit" @click="signupRestaurant" />
      </router-link>
    </div>
  </div>
</template>
    
<style scoped>
.logo {
  flex-shrink: 0;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #d4ad6f);
}
</style>
    