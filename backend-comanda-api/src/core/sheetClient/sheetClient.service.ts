
import { db } from "../../utils/db.server";
import {sheetClient} from "./sheetClientType"


export const listSheets = async (): Promise<sheetClient[]> => {

    return db.sheetClient.findMany({
        select: {
            id: true,
            restaurantId: true,
            total:true,
            isOpen:true,
        },
    });

}