import { Item } from "../Item/itemType";
import { Restaurante } from "./restaurantType";

export interface restauranteRepositorio {
    getRestaurante(buscaCPF: string): Promise<Restaurante | null>;
    inserirRestaurante(adicionarRest: Restaurante);
    inserirItem(adicionarItem: Item);
    listarRestaurantes(): Promise<Restaurante[]>;
}