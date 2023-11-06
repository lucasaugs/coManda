import express from "express";
import type { Request, Response } from "express"

import * as rService from "../services/restaurant.services"
import { Item } from "../core/Item/itemType";

export const restaurantRouter = express.Router();

restaurantRouter.post("/restaurant-signUp", async (req: Request, res: Response) => {
    try {
        const addRest = req.body;
        const restaurant = new rService.restaurantDB()

        if(!restaurant.getRestaurant(addRest.cpf, addRest.email)){
            return res.status(500).json("CPF ou e-mail ja utilizado");
        }

        return res.status(200).json(await restaurant.insertRestaurant(addRest));
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})

restaurantRouter.get("/", async (req: Request, res: Response) => {
    try {
        const restaurants = new rService.restaurantDB();
        return res.status(200).json(await restaurants.listRestaurants());
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

//OBS: verificar como sera para adicionar
restaurantRouter.post("/:id/user/additem", async (req: Request, res: Response) => {
    try {
        const addItem = req.body;
        const item = new rService.restaurantDB();
        return res.status(200).json(await item.insertItem(addItem));
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})

restaurantRouter.get("/:id/user/items/:itemId", async (req: Request, res: Response) => {
    const itemId:number = parseInt(req.params.itemId);
    try {
        const editItem = new rService.restaurantDB();
        const item = await editItem.getItemRest(itemId);
        return res.status(200).json(item);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

//PUT: Edit items - RESTAURANT/USER -> Quando o restaurante faz login
//Pode modificar para bater com o front
restaurantRouter.put("/:id/user/items/:itemId", async (req: Request, res: Response) => {
    const itemId:number = parseInt(req.params.itemId);
    const newItem: Item = req.body;
    try {
        const editItem = new rService.restaurantDB();
        const item = await editItem.editItem(itemId, newItem);
        return res.status(200).json(item);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

restaurantRouter.get("/:id/menu", async (req: Request, res: Response) => {
    const id:number = parseInt(req.params.id);
    try {
        const menuRestaurant = new rService.restaurantDB();
        return res.status(200).json(await menuRestaurant.listItemsRest(id));
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})

restaurantRouter.delete("/:id/user/items", async (req: Request, res: Response) => {
    try {
        const item = req.body;
        const delItem = new rService.restaurantDB();
        return res.status(200).json(await delItem.deleteItem(item.id));
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})