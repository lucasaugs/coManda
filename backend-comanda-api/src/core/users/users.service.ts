import { restaurants } from "@prisma/client";
import { db } from "../../utils/db.server";
import { Item, Restaurant, Users } from "./typesUsers"


export const listUsers = async (): Promise<Users[]> => {

    return db.users.findMany({
        select: {
            id: true,
            name: true,
            cpf: true,
            password: true,
            email: true,
            //createdAt: true,
            //updatedAt: true,
        },
    });

}

export const insertUser = async(userI: Users) => {
    await db.users.create({
        data: {
            name: userI.name,
            cpf: userI.cpf,
            password: userI.password,
            email: userI.email,
        }
    })
}

export const getUser = async (userI: Users) =>{
    const retorno = await db.users.findFirst({
        where : {
            OR: [
                {
                    cpf: userI.cpf,
                },
                {
                    email: userI.email,
                }
            ]
            
        }
    })

    return retorno as Users | null;
}

export const insertRestaurant = async(restInput: Restaurant) => {
    await db.restaurants.create({
        data: {
            name: restInput.name,
            cpf: restInput.cpf,
            password: restInput.password,
            email: restInput.email,
            cep: restInput.cep,
            street: restInput.street,
            neighborhood: restInput.neighborhood
        }
    })
}

export const getRestaurant = async (RestaurantInput: Restaurant) =>{
    const retorno = await db.restaurants.findFirst({
        where : {
            OR: [
                {
                    cpf: RestaurantInput.cpf,
                },
                {
                    email: RestaurantInput.email,
                }
            ]
            
        }
    })

    return retorno as Restaurant | null;
}

export const inserirItem = async(novoItem: Item) => {
    await db.item.create({
        data: {
            name: novoItem.name,
            price: novoItem.price,
            picture: novoItem.picture,
            restaurantId: novoItem.restaurantId,
        }
    })
}