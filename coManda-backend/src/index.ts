import inverterCripto from "./adaptadores/inverterCripto.ts";
import colecaoDeUsuariosMemoria from "./dominio/usuario/data/colecaoUsuariosMemoria.ts";
import loginUsuario from "./dominio/usuario/service/loginUsuario.ts";
import registrarUsuario from "./dominio/usuario/service/registrarUsuario.ts";

const provedorCripto = new inverterCripto();
const colecao = new colecaoDeUsuariosMemoria();
const registrar = new registrarUsuario(colecao,provedorCripto);

await registrar.executa({
    nome: 'joao',
    email: 'joaogameplay@gmail.com',
    senha: '123456',
});


const login = new loginUsuario(colecao,provedorCripto);
const usuario = await login.executa({
    email: 'joaogameplay@gmail.com',
    senha: '123456',
});


console.log(usuario);