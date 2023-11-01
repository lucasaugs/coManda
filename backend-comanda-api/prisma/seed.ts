import { db } from "../src/utils/db.server";

type users = {
    name: string;
    email: string;
    password: string;
    cpf: string;
};

async function seed() {
    await Promise.all(
        getUsers().map((user) => {
            return db.users.create({
                data: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    cpf: user.cpf,
                }
            });
        })
    );
}

seed();

function getUsers(): Array<users>{
    return [
        {
            name: "caio",
            email: "caioteles@gmail.com",
            password: "123456",
            cpf: "12345678910",
        },
        {
            name: "alvaro",
            email: "alvaroteles@gmail.com",
            password: "123456",
            cpf: "22345678910",
        },
        {
            name: "lorena",
            email: "lorenateles@gmail.com",
            password: "123456",
            cpf: "32345678910",
        },
    ];
}

