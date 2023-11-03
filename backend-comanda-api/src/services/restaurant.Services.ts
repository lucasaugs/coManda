import { db } from "../utils/db.server";
import { restauranteRepositorio} from "../core/restaurants/restaurantInterfaces"
import { Restaurante } from "../core/restaurants/restaurantType";
import { Item } from "../core/Item/itemType";

export class restauranteDB implements restauranteRepositorio{
    async inserirRestaurante(restInput: Restaurante){
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

    async getRestaurante(restCPF: string, restEmail?:string){
        const retorno = await db.restaurants.findFirst({
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

        return retorno as Restaurante | null;
    }

    async listarRestaurantes(): Promise<Restaurante[]>{
        return db.restaurants.findMany({
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

    async inserirItem(adicionarItem: Item){
        await db.item.create({
            data: {
                name: adicionarItem.name,
                price: adicionarItem.price,
                picture: adicionarItem.picture,
                restaurantId: adicionarItem.restaurantId,
            }
        })
    }
}
