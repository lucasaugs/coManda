export type Users = {
    
    id?: number;
    name: string;
    password: string;
    cpf: string;
    email: string;
    //createdAt?: Date;
    //updatedAt?: Date;    
}

export type Restaurant = {
    id?: number;
    name: string;
    email: string;
    cpf: string;
    password: string;
    cep: string;
    street: string;
    neighborhood: string;
}

export type Item = {
    id?: number;
    name: string;
    price: number;
    picture: string;
    restaurantId: number;
}