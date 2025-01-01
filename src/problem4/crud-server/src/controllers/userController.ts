import { Request, Response } from "express";
import { generateId, users } from "../utils/data";

// TODO: a. create a resource
export const createUser = (req: Request, res: Response) => {
    let { name, email, phone, address, avatar } = req.body;
    let newUser = {
        id: generateId(),
        name,
        email,
        phone,
        address,
        avatar,
    }

    users.push(newUser);
    res.status(201).json({
        "message": "User created",
        "data": newUser
    });

};


// TODO: b. list resources with basic filtering and pagination
export const getUsers = (req: Request, res: Response) => {
    let page = parseInt(req.query.page as string) || 1;
    let limit = parseInt(req.query.limit as string) || 10;
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;
    
    let resultUsers = users.slice(startIndex, endIndex);

    res.status(200).json({
        "message": "Users retrieved",
        "data": resultUsers
    });
};

// TODO: c. get a resource
export const getUser = (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    
    let user = users.find((user) => user.id === id);

    if (user) {
        res.status(200).json({
            "message": "User found",
            "data": user
        });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

// TODO: d. update a resource
export const updateUser = (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    if (users.find((user) => user.id === id)) {
        let { name, email, phone, address, avatar } = req.body;
        let index = users.findIndex((user) => user.id === id);
        users[index] = {
            id,
            name,
            email,
            phone,
            address,
            avatar,
        };
        res.status(200).json({
            "message": "User updated",
            "data": users[index]
        });
    } 
    else {
        res.status(404).json({ message: "User not found" });
    }
};

// TODO: e. delete a resource
export const deleteUser = (req: Request, res: Response) => {
    let id = parseInt(req.params.id);
    let user = users.find((user) => user.id === id);

    if (user) {
        users.splice(users.indexOf(user), 1);
        res.status(200).json({ message: "User deleted", data: user });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};


