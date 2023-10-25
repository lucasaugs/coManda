import colecaoDeUsuarios from "../model/colecaoDeUsuarios.ts";
import usuario from "../model/usuario.ts";

export default class colecaoDeUsuariosMemoria implements colecaoDeUsuarios {
    static readonly usuarios: usuario[] = [];

    async adicionar(usuario: usuario):Promise<void> {
        colecaoDeUsuariosMemoria.usuarios.push(usuario);
    }

    async obterPorEmail(email: string):Promise<usuario | undefined> {
        return colecaoDeUsuariosMemoria.usuarios.find(usuario => usuario.email === email);
    }
}