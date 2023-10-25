import casoDeUso from "../../shared/casoDeUso.ts";
import inverterCripto from "../../temp/inverterCripto.ts";
import colecaoDeUsuarios from "../data/colecaoUsuarios.ts";
import usuario from "../model/usuario.ts";

export type loginUsuarioEntrada = {
    email: string;
    senha: string;
}


export default class loginUsuario implements casoDeUso<loginUsuarioEntrada,usuario | null>{

    async executa(entrada: loginUsuarioEntrada): Promise<usuario> {
        const colecao = new colecaoDeUsuarios();
        const usuario = await colecao.obterPorEmail(entrada.email);

        if(!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const provedorCripto = new inverterCripto();
        const iguais = await provedorCripto.comparar(entrada.senha, usuario.senha!);

        if(!iguais) {
            throw new Error('Senha incorreta');
        }

        return {
            nome: usuario.nome,
            email: usuario.email
        };
    }

}