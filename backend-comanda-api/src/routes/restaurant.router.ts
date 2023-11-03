import express from "express";
import type { Request, Response } from "express"
import { restaurant } from "@prisma/client";

import * as rService from "../services/restaurant.Services"

export const restaurantRouter = express.Router();

restaurantRouter.post("/restaurant-signUp", async (req: Request, res: Response) => {
    try {
        const addRest = req.body;
        const restaurante = new rService.restauranteDB()

        if(!restaurante.getRestaurante(addRest.cpf, addRest.email)){
            return res.status(500).json("CPF ou e-mail ja utilizado");
        }

        return res.status(200).json(await restaurante.inserirRestaurante(addRest));
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})

//OBS: verificar como sera para adicionar
restaurantRouter.post("/adicionarItem", async (req: Request, res: Response) => {
    try {
        const adicionaItem = req.body;
        const item = new rService.restauranteDB();
        return res.status(200).json(await item.inserirItem(adicionaItem));
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})

restaurantRouter.get("/", async (req: Request, res: Response) => {
    try {
        const restaurantes = new rService.restauranteDB();
        return res.status(200).json(await restaurantes.listarRestaurantes());
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});