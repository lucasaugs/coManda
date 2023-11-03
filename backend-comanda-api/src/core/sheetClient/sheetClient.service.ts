
import { db } from "../../utils/db.server";
import {sheetClient} from "./sheetClientType"

import * as usersService from "../users/users.service";

export const getSheetById = async (sheetId:number): Promise<sheetClient | null> => {

    return db.sheetClient.findFirst({
        where : {
            id: sheetId,
        }
    });

}

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
    let listUsers : {id: number}[] = [];

    for (let i = 0; i < userNames.length; i++) {
        const user = await usersService.getUserByName(userNames[i]);
        if(user.id !== undefined){
            listUsers.push({id: user.id});
        }
    }


    await db.sheetClient.update({
        where: {
            id: sheetId,
        },
        data: {
            users: {
                connect: listUsers,
            }
        }
    })
}

export const addSheetItem = async(sheetInput: any) => {
    const {itemId,sheetId,dividers} = sheetInput;

    const sheet = await getSheetById(sheetId);
    let newDividers= "";
    
    if(sheet === null){
        return;
    }

    if(sheet){
        newDividers = sheet.dividers + dividers + ",";
    }

    return await db.sheetClient.update({
        where: {
            id: sheetId,
        },
        data: {
            dividers: newDividers,
            items: {
                connect: { 
                    id: itemId,
                }
            }
        }
    })
}