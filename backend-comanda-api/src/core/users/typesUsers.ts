import { sheetClient } from "../sheetClient/sheetClientType";

export type Users = {
    
    id?: number;
    name: string;
    password: string;
    cpf: string;
    email: string;
}