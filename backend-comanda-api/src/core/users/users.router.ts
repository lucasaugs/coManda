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