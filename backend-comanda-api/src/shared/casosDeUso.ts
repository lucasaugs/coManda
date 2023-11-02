import {Request, Response} from 'express';

export default interface casosDeUso<IN, OUT>{
    executar(entrada: IN): Promise<OUT>
}