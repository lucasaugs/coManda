import { Item } from "../Item/itemType";
import { Restaurant } from "./restaurantType";

export interface restauranteRepository {
    getRestaurant(buscaCPF: string): Promise<Restaurant | null>;
    insertRestaurant(adicionarRest: Restaurant);
    listRestaurants(): Promise<Restaurant[]>;
    loginRestaurant(emailRest: string, senhaRest: string);

    insertItem(adicionarItem: Item);
    editItem(itemId:number, itemEdit: Item);
    listItemsRest(restId: number);
    deleteItem(itemId: number);
    getItemRest(itemId: number);
}