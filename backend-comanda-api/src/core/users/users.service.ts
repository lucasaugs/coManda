import { restaurants } from "@prisma/client";
import { db } from "../../utils/db.server";
import { Restaurant, Users } from "./typesUsers"


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
            cpf: userI.cpf
        }
    })

    return retorno as Users | null;
}

export const insertRestaurant = async(restInput: Restaurant) => {
    await db.restaurants.create({
        data: restInput,
    })
}