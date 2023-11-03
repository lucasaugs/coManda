import express from "express"
import type { Request, Response } from "express"
import {body, validationResult} from "express-validator"

import * as usersService from "./users.service"
import { error } from "console";
import { restaurants } from "@prisma/client";

export const usersRouter = express.Router();

// GET: list all users
usersRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await usersService.listUsers();
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

usersRouter.post("/client-signUp", async (req: Request, res: Response) =>{
    try {
        const addUser = req.body;
        const check = await usersService.getUser(addUser)

        if(check != null){
            return res.status(500).json("CPF ou e-mail ja utilizado");
        }

        const users = usersService.insertUser(addUser);
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

usersRouter.post("/restaurant-signUp", async (req: Request, res: Response) => {
    try {
        const addRest = req.body;
        const check = await usersService.getRestaurant(addRest)

        if(check != null){
            return res.status(500).json("CPF ou e-mail ja utilizado");
        }

        const restaurant = usersService.insertRestaurant(addRest);
        return res.status(200).json(restaurant);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})

//OBS: verificar como sera para adicionar
usersRouter.post("/restaurant", async (req: Request, res: Response) => {
    try {
        const adicionaItem = req.body;

        const item = usersService.inserirItem(adicionaItem);
        return res.status(200).json(item);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
})