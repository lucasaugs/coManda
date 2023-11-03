
import { db } from "../../utils/db.server";
import { getUser, getUserByName } from "../users/users.service";
import {sheetClient} from "./sheetClientType"

export const listSheets = async (): Promise<sheetClient[]> => {

    return db.sheetClient.findMany({
        include:{
            users: true,
            restaurant: true,
        },
    });

}

export const insertSheet = async(sheetInput: any) => {
    const {total, restaurantId,isOpen,userId} = sheetInput;
    await db.sheetClient.create({
        data: {
            total: total,
            restaurantId: restaurantId,
            isOpen: isOpen,
            users: {
                connect: {
                    id: userId,
                }
            }
        }
    })
}

export const editSheet = async(sheetInput: any) => {
    const {userId,sheetId,userNames} = sheetInput;
    let listUsers = [];

    for (let i = 0; i < userNames.length; i++) {
        const user = await getUserByName(userNames[i]);
        listUsers.push(user?.id);
    }


    await db.sheetClient.update({
        where: {
            id: sheetId,
        },
        data: {
            total: total,
            restaurantId: restaurantId,
            isOpen: isOpen,
        }
    })
}