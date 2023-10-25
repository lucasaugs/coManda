import casoDeUso from "../../shared/casoDeUso.ts";
import colecaoDeUsuarios from "../model/colecaoDeUsuarios.ts";
import provedorCripto from "../model/provedorCripto.ts";
import usuario from "../model/usuario.ts";

export default class registrarUsuario implements casoDeUso<Required<usuario>,void> {
    
    constructor(private colecao: colecaoDeUsuarios,private provedorCripto: provedorCripto) {

    }
    
    
    async executa(usuario: Required<usuario>): Promise<void> {
        
        const senhaCriptografada = await this.provedorCripto.criptografar(usuario.senha!);
        const usuarioCriado = { ...usuario, senha: senhaCriptografada };
        await this.colecao.adicionar(usuarioCriado);
        
    }
}