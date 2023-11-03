import { restaurant } from "@prisma/client";
import { db } from "../../utils/db.server";
import {Users } from "./typesUsers"


export const listUsers = async (): Promise<Users[]> => {

    return db.user.findMany({
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
    await db.user.create({
        data: {
            name: userI.name,
            cpf: userI.cpf,
            password: userI.password,
            email: userI.email,
        }
    })
}

export const getUser = async (userI: Users) =>{
    const retorno = await db.user.findFirst({
        where : {
            OR: [
                {
                    cpf: userI.cpf,
                },
                {
                    email: userI.email,
                },
            ]
            
        }
    })

    return retorno as Users | null;
}

export const getUserByName = async (userName: string) =>{
    const retorno = await db.user.findFirst({
        where : {
            name: userName,
        }
    })

    return retorno as Users;
}

export const loginUser = async(email: string, password: string) => {
    const retorno = await db.user.findFirst({
        where: {
            email: email,
            password: password,
        }
    })

    return retorno as Users | null;
}