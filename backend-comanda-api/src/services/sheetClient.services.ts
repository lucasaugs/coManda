import { db } from "../utils/db.server";
import { sheetClient } from "../core/sheetClient/sheetClientType";

import { UserDB } from "./users.services";
import { sheetClientRepository } from "../core/sheetClient/sheetClientInterface";

export class sheetClientDB implements sheetClientRepository{    
    async getSheetById(sheetId:number): Promise<sheetClient | null>{

        const sheetInfo = await db.sheetClient.findFirst({
            where : {
                id: sheetId,
            },
            include: {
                users: true,
                items: true
            }
        });
        if(sheetInfo === null || sheetInfo === undefined){
            return null;
        }
        
        const  dividers = sheetInfo?.dividers.split(",");

        if( dividers === undefined){
            return null;
        }

        for (let i = 0; i < dividers?.length - 1; i++) {
            const divider = parseInt(dividers[i])
            sheetInfo.items[i].price = (sheetInfo.items[i].price/divider)
            sheetInfo.total = sheetInfo.total + sheetInfo.items[i].price
        }

        return sheetInfo
    }

    async listSheets(): Promise<sheetClient[]>{

        return db.sheetClient.findMany({
            include:{
                users: true,
                restaurant: true,
            },
        });

    }

    async insertSheet(sheetInput: any){
        const {total, restaurantId,isOpen,userId} = sheetInput;
        
        return await db.sheetClient.create({
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

    async editSheet(sheetInput: any){
        const {sheetId,userNames} = sheetInput;
        let listUsers : {id: number}[] = [];

        for (let i = 0; i < userNames.length; i++) {
            const searchName = new UserDB();
            const user = await searchName.getUserByName(userNames[i]);
            if(user.id !== undefined){
                listUsers.push({id: user.id});
            }
        }

        return await db.sheetClient.update({
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

    async addSheetItem(sheetInput: any){
        const {itemId,sheetId,dividers} = sheetInput;

        const sheet = await this.getSheetById(sheetId);
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
}