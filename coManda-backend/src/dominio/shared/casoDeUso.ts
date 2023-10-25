export default interface casoDeUso<IN,OUT> {
    executa(input: IN): Promise<OUT>;
}