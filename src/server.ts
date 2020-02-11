import express, {NextFunction, Request, Response} from "express";
import {createConnection, getCustomRepository} from "typeorm";
import {UserRepository} from "./repository/UserRepository";

const server = express();

server.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.json({message: "hello world"})
});

server.get('/users', async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();
    res.json(users);
});

async function bootstrap () {
    try {
        await createConnection();
        server.listen(3000, function () {
            console.log('app listening on port 3000!')
        });
    } catch (error) {
        console.error(error);
    }
}

bootstrap();

export default server;
