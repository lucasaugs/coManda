import express from "express";
import type { Request, Response } from "express";

import { UserDB } from "../services/users.services";
import { restaurantDB } from "../services/restaurant.services";

export const usersRouter = express.Router();

// GET: list all users
usersRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = new UserDB();

        const listUsers = await users.listUsers();
        return res.status(200).json(listUsers);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

// GET: activeSheet
usersRouter.get("/activeSheet/:id", async (req: Request, res: Response) => {
    const id:number = parseInt(req.params.id);
    try {
        const users = new UserDB();
        const activeSheet = await users.getActiveSheet(id);
        return res.status(200).json(activeSheet);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

usersRouter.post("/client-signUp", async (req: Request, res: Response) =>{
    try {
        const addUser = req.body;
        const checkUser = new UserDB;

        if(!checkUser.getUser(addUser)){
            return res.status(500).json("CPF ou e-mail ja utilizado");
        }

        const users = await checkUser.insertUser(addUser);
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

usersRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const usuarioLogin = req.body
        const users = new UserDB();
        const usuario = await users.loginUser(usuarioLogin.email, usuarioLogin.password);
        
        if(!usuario){
            const restauranteLogin = new restaurantDB();
            const restaurante = await restauranteLogin.loginRestaurant(usuarioLogin.email, usuarioLogin.password);
            return res.status(200).json([2, restaurante]);
        }

        return res.status(200).json([1, usuario]);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});
