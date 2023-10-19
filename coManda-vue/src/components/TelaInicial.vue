<script setup lang="ts">

defineProps<{ msg: string }>()

</script>

<template>
    <div class="tela">
        <img src="../assets/logo-no-background.png" alt="Logo coManda">
        <p class="input-text">
            {{ msg }}
        </p>
        <p class="input-text">
            {{ msg }}
        </p>
        <button class="btn-input">
            {{ msg }}
        </button>
        <p class="options">
            Esqueci minha senha
        </p>
        <p class="options">
            Não possuí uma conta? <br class="cadastro">Cadastre-se<br>
        </p>
        <hr> ________________________________________________________
        <p class="options">
            Deseja cadastrar seu restaurante no nosso App? <br class="cadastro">Cadastre-se<br>
        </p>
    </div>
</template>

<style scoped>
.tela {
    background: #516AA0;
    width: 1440px;
    height: 1024px;
}

.input-text {
    width: 414px;
    height: 82px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #E0E1DD;
    background: #E0E1DD;
}

.btn-input {
    width: 414px;
    height: 82px;
    flex-shrink: 0;
    border-radius: 8px;
    border: 1px solid #D4AD6F;
    background: #D4AD6F;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.options {
    display: flex;
    width: 211px;
    height: 39px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #E0E1DD;
    text-align: center;
    font-family: Alumni Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
</style>