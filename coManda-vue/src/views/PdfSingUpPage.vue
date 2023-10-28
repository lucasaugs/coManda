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

    <p style="font-size: 50px; color: #e0e1dd; margin-top: 25px;">CADASTRE SEU ESTABELECIMENTO</p>
    <p style="font-size: 35px; color: #e0e1dd; margin-top: 25px;">Envie um PDF contendo o cardápio do seu estabelecimento
    </p>

    <div class="mx-auto custom-file">
      <BoxInput :customClass="'my-4 w-auto mx-auto custom-file-input'" :customStyle="'font-size:24px'" type="file" />
    </div>
    <p style="font-size: 35px; color: #e0e1dd; margin-top: 25px;">Observação: o PDF deve conter os preços e imagens de
      cada produto. Nossos colaboradores se certificarão que tudo aparecerá como enviado!
      <br> Caso seu cadastro esteja correto, a resposta será em 4 dias úteis.
    </p>

    <Btnlogin :msg="'Cadastrar'" :customClass="'mb-4 w-25 mx-auto'" :customStyle="'height: 80px; font-size:36px'"
      type="submit" />
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
    