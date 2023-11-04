import { db } from "../utils/db.server";
import { restauranteRepository} from "../core/restaurants/restaurantInterfaces"
import { Restaurant } from "../core/restaurants/restaurantType";
import { Item } from "../core/Item/itemType";

export class restaurantDB implements restauranteRepository{
    async insertRestaurant(restInput: Restaurant){
        await db.restaurant.create({
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

    async getRestaurant(restCPF: string, restEmail?:string){
        const retorno = await db.restaurant.findFirst({
            where : {
                OR: [
                    {
                        cpf: restCPF,
                    },
                    {
                        email: restEmail,
                    }
                ]
            }
        })

        return retorno as Restaurant | null;
    }

    async listRestaurants(): Promise<Restaurant[]>{
        return db.restaurant.findMany({
            select: {
                id: true,
                name: true,
                cpf: true,
                password: true,
                email: true,
                cep: true,
                street: true,
                neighborhood: true,
            },
        });

    }

    async insertItem(adicionarItem: Item){
        await db.item.create({
            data: {
                name: adicionarItem.name,
                price: adicionarItem.price,
                picture: adicionarItem.picture,
                restaurantId: adicionarItem.restaurantId,
            }
        })
    }

    async editItem(itemEdit: Item) {
        const newItem = await db.item.update({
            where: {
                id: itemEdit.id,
            },
            data: {
                name: itemEdit.name,
                price: itemEdit.price,
                picture: itemEdit.picture,
                restaurantId: itemEdit.restaurantId
            }
        })
    }

    async listItemsRest(restId: number) {
        return await db.item.findMany({
            where: {
                restaurantId: restId,
            },
            select: {
                id: true,
                name: true,
                price: true,
                picture: true,
                restaurantId: true
            }
        })
    }

    async deleteItem(itemId: number) {
        await db.item.delete({
            where: {
                id: itemId,
            }
        })
    }

    async loginRestaurant(emailRest: string, senhaRest: string) {
        const login = await db.restaurant.findFirst({
            where: {
                email: emailRest,
                password: senhaRest,
            }
        }
        )

        return login as Restaurant | null;
    }
}
