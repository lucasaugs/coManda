import { Users } from "../core/users/usersType";
import { userRepository } from "../core/users/usersInterface";
import { db } from "../utils/db.server";

export class UserDB implements userRepository{
    async listUsers(): Promise<Users[]>{

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

    async insertUser(userI: Users){
        await db.user.create({
            data: {
                name: userI.name,
                cpf: userI.cpf,
                password: userI.password,
                email: userI.email,
            }
        })
    }

    async getUser(userI: Users){
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

    async getUserByName(userName: string){
        const retorno = await db.user.findFirst({
            where : {
                name: userName,
            }
        })

        return retorno as Users;
    }

    async loginUser(email: string, password: string){
        const retorno = await db.user.findFirst({
            where: {
                email: email,
                password: password,
            }
        })

        return retorno as Users | null;
    }

    async getActiveSheet(userId:number){
        const user = await db.user.findFirst({
            where: {
                id: userId,
            },
            include: {
                sheetClient: true,
            }
        })

        const sheetClientId = user?.sheetClient[0].id;

        let activeSheet = await db.sheetClient.findFirst({
            where: {
                id: sheetClientId,
            },
            include: {
                items: true,
            }
        })

        if(activeSheet === null || activeSheet === undefined){
            return;
        }

        const  dividers = activeSheet?.dividers.split(",");

        if( dividers === undefined){
            return;
        }

        for (let i = 0; i < dividers?.length - 1; i++) {
            const divider = parseInt(dividers[i])
            activeSheet.items[i].price = (activeSheet?.items[i].price/divider);
        }

        return activeSheet as any;
    }
}