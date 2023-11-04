import { sheetClient } from "./sheetClientType";

export interface sheetClientRepository {
    getSheetById(sheetId: number);
    listSheets(): Promise<sheetClient[]>;
    insertSheet(sheetInput: any);
    editSheet(sheetInput: any);
    addSheetItem(sheetInput: any);
}