import inverterCripto from "./temp/inverterCripto.ts";
import loginUsuario from "./usuario/service/loginUsuario.ts";
import registrarUsuario from "./usuario/service/registrarUsuario.ts";

const provedorCripto = new inverterCripto();
const registrar = new registrarUsuario(provedorCripto);

await registrar.executa({
    nome: 'joao',
    email: 'joaogameplay@gmail.com',
    senha: '123456',
});


const login = new loginUsuario();
const usuario = await login.executa({
    email: 'joaogameplay@gmail.com',
    senha: '123456',
});


console.log(usuario);