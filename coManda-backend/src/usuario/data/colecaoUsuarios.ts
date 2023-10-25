import usuario from "../model/usuario.ts";

export default class colecaoDeUsuarios {
    static readonly usuarios: usuario[] = [];

    async adicionar(usuario: usuario):Promise<void> {
        colecaoDeUsuarios.usuarios.push(usuario);
    }

    async obterTodos():Promise<usuario[]> {
        return colecaoDeUsuarios.usuarios;
    }

    async obterPorEmail(email: string):Promise<usuario | undefined> {
        return colecaoDeUsuarios.usuarios.find(usuario => usuario.email === email);
    }
}