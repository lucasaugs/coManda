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
    <p style="font-size: 34px; color: #e0e1dd;">CADASTRE SEU ESTABELECIMENTO</p>
    <div class="w-50 mx-auto">
      <div class="row">
        <form class="was-validated">
          <BoxInput :msg="'Email'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
            type="email" />
        </form>
        <BoxInput :msg="'Nome Completo'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
          type="text" />
      </div>
      <form class="was-validated">
        <BoxInput :msg="'CPF'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'" type="text"
          pattern="\d{11}" />
      </form>
      <BoxInput :msg="'Senha'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
        type="password" />
      <Btnlogin :msg="'Cadastrar'" :customClass="'mb-4 w-75 mx-auto'" :customStyle="'height: 80px; font-size:36px'"
        type="submit" />
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
    