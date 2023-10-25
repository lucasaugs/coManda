import provedorCripto from "../usuario/model/provedorCripto.ts";

export default class inverterCripto implements provedorCripto {
    async criptografar(senha: string): Promise<string> {
        return senha.split('').reverse().join('');
    }
    async comparar(senha: string, senhaCriptografada: string): Promise<boolean> {
        return senha.split('').reverse().join('') === senhaCriptografada;
    }
}