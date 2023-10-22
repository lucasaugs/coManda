<script setup lang="ts">
</script>

<template>
  <html>
    <div>
      <router-link to="/"> HOME </router-link>
      <router-link to="/login"> LOGIN </router-link>
    </div>
    <div class="tela">
      <router-view></router-view>
      <a href="#" target="_blank">
        <img src="./assets/logo-no-background.png" class="logo" alt="coManda logo" />
      </a>
      <BoxInput msg="Email" />
      <BoxInput msg="Senha" />
      <p class="options">
        Esqueci minha senha
      </p>
      <p class="options">
        Não possuí uma conta? <br class="cadastro">Cadastre-se<br>
      </p>
      <hr>
      <p class="options">
        Deseja cadastrar seu restaurante no nosso App? <br class="cadastro">Cadastre-se<br>
      </p>
    </div>
  </html>
</template>

<style scoped>
html {
  background-color: #516AA0;
  width: max-content;
  height: max-content;
}

.logo {
  width: 413px;
  height: 128px;
  flex-shrink: 0;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #D4AD6F);
}

.cadastro {
  color: #0D1B2A;
}
</style>
