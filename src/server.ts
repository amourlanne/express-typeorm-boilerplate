import express, {NextFunction, Request, Response} from "express";
import {getCustomRepository} from "typeorm";
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

export default server;
