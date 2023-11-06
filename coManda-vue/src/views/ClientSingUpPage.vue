<script setup lang="ts">
import { ref } from "vue";
import BoxInput from "../components/BoxInput.vue"
import Btnlogin from "../components/BtnLogin.vue"
import axios from "axios";
import { AppStore } from "../common/AppStore.js";
import { router } from "../router/index.js";

const registerUser = ref({
  email: "",
  name: "",
  cpf: "",
  password: "",
  confirmPassword: "",
})

const signupUser = () => {
  if (registerUser.value.password != registerUser.value.confirmPassword) {
    alert("As senhas não coincidem")
    return
  }
  axios.post("http://localhost:3030/api/users/client-signUp",
    {
      email: registerUser.value.email,
      name: registerUser.value.name,
      cpf: registerUser.value.cpf,
      password: registerUser.value.password,
    })
    .then((res) => {
      alert("Usuário cadastrado com sucesso!")
      router.push("/login")
    })
    .catch((err) => {
      alert("Erro ao cadastrar usuário")
    })
}
</script>
    
<template>
  <div class="tela container">
    <router-link to="/login">
      <div class="w-50 mx-auto">
        <img src="../assets/logo-no-background.png" alt="coManda Logo" class="w-75 logo" />
      </div>
    </router-link>
    <p style="font-size: 34px; color: #e0e1dd;">CADASTRE-SE</p>
    <div class="w-50 mx-auto">
      <BoxInput :placeholder="'Email'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
        type="email" v-model:value="registerUser.email" />
      <BoxInput :placeholder="'Nome Completo'" :customClass="'my-4 w-75 mx-auto'"
        :customStyle="'height: 80px;font-size:24px'" type="text" v-model:value="registerUser.name" />
      <BoxInput :placeholder="'CPF'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
        type="text" pattern="\d{11}" v-model:value="registerUser.cpf" />
      <BoxInput :placeholder="'Senha'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
        type="password" v-model:value="registerUser.password" />
      <BoxInput :placeholder="'Confirmar senha'" :customClass="'my-4 w-75 mx-auto'"
        :customStyle="'height: 80px;font-size:24px'" type="password" v-model:value="registerUser.confirmPassword" />
      <Btnlogin :msg="'Cadastrar'" :customClass="'mb-4 w-75 mx-auto'" :customStyle="'height: 80px; font-size:36px'"
        type="submit" @click="signupUser" />
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
  filter: drop-shadow(0 0 2em var(--bg-beige));
}
</style>
    