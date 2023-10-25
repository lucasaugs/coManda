import usuario from "./usuario.ts";


export default interface colecaoDeUsuarios {
    adicionar(usuario: usuario):Promise<void>;

    //obterTodos():Promise<usuario[]>;

    obterPorEmail(email: string):Promise<usuario | undefined>;
}