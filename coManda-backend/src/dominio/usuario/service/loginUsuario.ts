import casoDeUso from "../../shared/casoDeUso.ts";
import colecaoDeUsuarios from "../model/colecaoDeUsuarios.ts";
import provedorCripto from "../model/provedorCripto.ts";
import usuario from "../model/usuario.ts";

export type loginUsuarioEntrada = {
    email: string;
    senha: string;
}


export default class loginUsuario implements casoDeUso<loginUsuarioEntrada,usuario | null>{

    constructor(private colecao: colecaoDeUsuarios,private provedorCripto: provedorCripto) {

    }


    async executa(entrada: loginUsuarioEntrada): Promise<usuario> {
        const usuario = await this.colecao.obterPorEmail(entrada.email);

        if(!usuario) {
            throw new Error('Usuário não encontrado');
        }

        const iguais = await this.provedorCripto.comparar(entrada.senha, usuario.senha!);

        if(!iguais) {
            throw new Error('Senha incorreta');
        }

        return {
            nome: usuario.nome,
            email: usuario.email
        };
    }

}