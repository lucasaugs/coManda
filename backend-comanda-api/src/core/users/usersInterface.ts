import { Users } from "./usersType";


export interface userRepository {
    listUsers(): Promise<Users[]>;
    insertUser(userI: Users);
    getUser(userI: Users);
    getUserByName(userName: string);
    loginUser(email: string, password: string);
    getActiveSheet(userId: number);
}