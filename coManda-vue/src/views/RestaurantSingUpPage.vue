<script setup lang="ts">
import BoxInput from "../components/BoxInput.vue"
import Btnlogin from "../components/BtnLogin.vue"
defineProps<{ msg: string }>();
</script>
    
<template>
  <div class="container">
    <router-link to="/login">
      <div class="w-50 mx-auto">
        <img src="../assets/logo-no-background.png" alt="coManda Logo" class="w-75 logo" />
      </div>
    </router-link>

    <p style="font-size: 34px; color: #e0e1dd; margin-top: 25px;">CADASTRE SEU ESTABELECIMENTO</p>

    <div class="w-50 mx-auto">
      <div class="row justify-content-center">
        <div class="my-2 p-0 mx-2 col-5">
          <BoxInput :msg="'Email'" :customStyle="'height: 80px;font-size:24px'" type="email" />
        </div>
        <div class="my-2 p-0 mx-2 col-5">
          <BoxInput :msg="'Nome do Estabelecimento'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-0 mx-2 col-5">
          <BoxInput :msg="'CNPJ'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-0 mx-2 col-5">
          <BoxInput :msg="'CEP'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-0 mx-2 col-5">
          <BoxInput :msg="'Endereço'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-0 mx-2 col-5">
          <BoxInput :msg="'Cidade'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-0 mx-2 col-5">
          <BoxInput :msg="'Número'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
      </div>
      <div class="row justify-content-evenly p-0">
        <div class="my-2 p-0 col mx-2">
          <BoxInput :msg="'Senha'" :customStyle="'height: 80px;font-size:24px'" type="password" />
        </div>
        <div class="my-2 p-0 col mx-2">
          <BoxInput :msg="'Confirmar senha'" :customStyle="'height: 80px;font-size:24px'" type="password" />
        </div>
      </div>
      <router-link to="/restaurant-signUp/menu">
        <Btnlogin :msg="'Próximo'" :customClass="'mb-4 w-100 mx-auto'" :customStyle="'height: 80px; font-size:36px'"
          type="submit" />
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
    