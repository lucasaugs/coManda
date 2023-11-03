import express from "express"
import type { Request, Response } from "express"
import {body, validationResult} from "express-validator"

import * as usersService from "./users.service"

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

        const users = await usersService.insertUser(addUser);
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

usersRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const usuarioLogin = req.body
        const users = await usersService.loginUser(usuarioLogin.email, usuarioLogin.password);
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});
