//porta
export default interface provedorCripto {
    criptografar(senha: string): Promise<string>;
    comparar(senha: string, senhaCriptografada: string): Promise<boolean>;
}