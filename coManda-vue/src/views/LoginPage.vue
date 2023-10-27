<script setup lang="ts">
import BoxInput from "../components/BoxInput.vue"
import Btnlogin from "../components/BtnLogin.vue"
defineProps<{ msg: string }>();
</script>

<template>
  <div class="tela container">
    <div class="w-50 mx-auto">
      <img src="../assets/logo-no-background.png" alt="coManda Logo" class="w-75 logo" />
    </div>
    <div class="w-50 mx-auto">
      <BoxInput :msg="'Email'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
        type="email" />
      <BoxInput :msg="'Senha'" :customClass="'my-4 w-75 mx-auto'" :customStyle="'height: 80px;font-size:24px'"
        type="password" />
      <Btnlogin :msg="'Login'" :customClass="'mb-4 w-75 mx-auto'" :customStyle="'height: 80px; font-size:36px'" />
    </div>
    <div class="d-flex justify-content-center flex-column">
      <div class="row justify-content-center">
        <span class="options">
          Esqueci minha senha
          <router-link to="/recover" class="signup">
            Recuperar
          </router-link>
        </span>
      </div>
      <div class="row justify-content-center">
        <span class="options">
          Não possuí uma conta?
          <router-link to="/client-signUp" class="signup">
            <span>Cadastre-se</span>
          </router-link>
        </span>
      </div>
      <hr style="color:#E0E1DD; border-bottom: 1px solid #E0E1DD;">
      <div class="row justify-content-center">
        <span class="options">
          Deseja cadastrar seu restaurante no nosso App?
          <router-link to="/restaurant-signUp" class="signup">
            <span>Cadastre-se</span>
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.options {
  flex-shrink: 0;
  color: #e0e1dd;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.logo {
  flex-shrink: 0;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #d4ad6f);
}

.signup {
  color: #0D1B2A;
  text-decoration: none;
}
</style>
