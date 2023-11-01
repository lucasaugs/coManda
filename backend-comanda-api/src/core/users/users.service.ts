import { db } from "../../utils/db.server";
import { Users } from "./typesUsers"


export const listUsers = async (): Promise<Users[]> => {

    return db.users.findMany({
        select: {
            id: true,
            name: true,
            cpf: true,
            password: true,
            createdAt: true,
            updatedAt: true,
        },
    });

};