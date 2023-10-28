<script setup lang="ts">
import BoxInput from "../components/BoxInput.vue"
import Btnlogin from "../components/BtnLogin.vue"
defineProps<{ msg: string }>();
</script>
    
<template>
  <div class="tela container">
    <router-link to="/login">
      <div class="w-50 mx-auto">
        <img src="../assets/logo-no-background.png" alt="coManda Logo" class="w-75 logo" />
      </div>
    </router-link>

    <p style="font-size: 34px; color: #e0e1dd; margin-top: 25px;">CADASTRE SEU ESTABELECIMENTO</p>

    <div class="w-50 mx-auto row">
      <BoxInput :msg="'Email'" :customClass="'my-4 w-75 mx-auto col'" :customStyle="'height: 80px;font-size:24px'"
        type="email" />
      <BoxInput :msg="'CEP'" :customClass="'my-4 w-75 mx-auto col'" :customStyle="'height: 80px;font-size:24px'"
        type="text" />
    </div>

    <div class="w-50 mx-auto row">
      <BoxInput :msg="'Nome do Estabelecimento'" :customClass="'my-4 w-75 mx-auto col'"
        :customStyle="'height: 80px;font-size:24px'" type="text" />
      <BoxInput :msg="'Endereço'" :customClass="'my-4 w-75 mx-auto col'" :customStyle="'height: 80px;font-size:24px'"
        type="text" />
    </div>

    <div class="w-50 mx-auto row">
      <BoxInput :msg="'CNPJ'" :customClass="'my-4 w-75 mx-auto col-2'" :customStyle="'height: 80px;font-size:24px'"
        type="text" />
      <BoxInput :msg="'Cidade'" :customClass="'my-4 w-75 mx-auto col'" :customStyle="'height: 80px;font-size:24px'"
        type="text" />
      <BoxInput :msg="'Número'" :customClass="'my-4 w-75 mx-auto col'" :customStyle="'height: 80px;font-size:24px'"
        type="text" />
    </div>

    <div class="w-50 mx-auto row">
      <BoxInput :msg="'Senha'" :customClass="'my-4 w-75 mx-auto col'" :customStyle="'height: 80px;font-size:24px'"
        type="password" />
      <BoxInput :msg="'Confirmar senha'" :customClass="'my-4 w-75 mx-auto col'"
        :customStyle="'height: 80px;font-size:24px'" type="password" />
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
    