import express from "express"
import type { Request, Response } from "express"

import { sheetClientDB } from "../services/sheetClient.services"

export const sheetClientRouter = express.Router();

// GET: get sheet
sheetClientRouter.get("/:id", async (req: Request, res: Response) => {
    const id:number = parseInt(req.params.id);
    try {
        const searchSheets = new sheetClientDB();
        const sheet = await searchSheets.getSheetById(id);
        return res.status(200).json(sheet);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});


// GET: list all sheets
sheetClientRouter.get("/", async (req: Request, res: Response) => {
    try {
        const searchSheets = new sheetClientDB();
        const users = await searchSheets.listSheets();
        return res.status(200).json(users);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

sheetClientRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const addSheet = new sheetClientDB();
        const sheets = await addSheet.insertSheet(req.body);
        return res.status(200).json(sheets);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

sheetClientRouter.put("/edit", async (req: Request, res: Response) => {
    try {
        const edit = new sheetClientDB();
        const sheets = await edit.editSheet(req.body);
        return res.status(200).json(sheets);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});

sheetClientRouter.put("/addItem", async (req: Request, res: Response) => {
    try {
        const addItem = new sheetClientDB()
        const sheets = await addItem.addSheetItem(req.body);
        return res.status(200).json(sheets);
    } catch (e: any) {
        return res.status(500).json(e.message);
    }
});