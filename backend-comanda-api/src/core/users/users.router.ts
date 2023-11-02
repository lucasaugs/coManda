import express from "express"
import type { Request, Response } from "express"
import {body, validationResult} from "express-validator"

import * as usersService from "./users.service"
import { error } from "console";

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
        const check = usersService.getUser(addUser)

        if(check != null){
            return res.status(500).json("CPF ja utilizado");
        }

        const users = usersService.insertUser(addUser);
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

