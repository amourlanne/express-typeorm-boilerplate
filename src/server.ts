import express from "express";
import {createConnection, getCustomRepository} from "typeorm";
import {UserRepository} from "./repository/UserRepository";

const server = express();

server.get('/', function (req, res) {
    res.send('Hello World!')
});

server.get('/users', async function (req, res) {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();
    res.json(users);
});

createConnection().then(async connection => {
    server.listen(3000, function () {
        console.log('Example app listening on port 3000!')
    });
}).catch(error => console.log("Error: ", error));


