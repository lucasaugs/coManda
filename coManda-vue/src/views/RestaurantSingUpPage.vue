<script setup lang="ts">
import BoxInput from "../components/BoxInput.vue"
import Btnlogin from "../components/BtnLogin.vue"
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
          <BoxInput :placeholder="'Email'" :customStyle="'height: 80px;font-size:24px'" type="email" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'CNPJ'" :customStyle="'height: 80px;font-size:24px'" type="text" pattern="\d{14}" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Nome completo'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'CEP'" :customStyle="'height: 80px;font-size:24px'" type="text" pattern="\d{8}" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Rua do estabelecimento'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Bairro do estabelecimento'" :customStyle="'height: 80px;font-size:24px'" type="text" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Senha'" :customStyle="'height: 80px;font-size:24px'" type="password" />
        </div>
        <div class="my-2 p-2 mx-4 col-5">
          <BoxInput :placeholder="'Confirmar senha'" :customStyle="'height: 80px;font-size:24px'" type="password" />
        </div>
      </div>
      <router-link to="/restaurant-signUp/menu">
        <Btnlogin :placeholder="'Próximo'" :customClass="'mb-4 w-50 mx-auto'"
          :customStyle="'height: 80px; font-size:36px'" type="submit" />
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
    