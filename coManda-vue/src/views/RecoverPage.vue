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

    <p style="font-size: 50px; color: #e0e1dd; margin-top: 25px;">Ah não você esqueceu sua senha, mas não se preocupe!</p>
    <p style="font-size: 35px; color: #e0e1dd; margin-top: 25px;">Insira seu email para recuperarmos a sua conta.</p>

    <div class="w-50 mx-auto">
      <BoxInput :msg="'Email'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
        type="email" />
      <Btnlogin :msg="'Enviar'" :customClass="'mb-4 w-75 mx-auto'" :customStyle="'height: 80px; font-size:36px'"
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
    