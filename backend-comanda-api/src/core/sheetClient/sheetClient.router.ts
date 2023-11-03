import express from "express"
import type { Request, Response } from "express"
import {body, validationResult} from "express-validator"

import * as sheetClientServices from "./sheetClient.service"

export const sheetClientRouter = express.Router();

// GET: list all sheets
sheetClientRouter.get("/", async (req: Request, res: Response) => {
    try {
        const users = await sheetClientServices.listSheets();
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});