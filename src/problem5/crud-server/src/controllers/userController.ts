import { Request, Response } from "express";
import { generateId, users } from "../utils/data";
import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export const uploadAvatar = upload.single('avatar');

const defaultAvatarUrl = "https://i.pravatar.cc/150?img=1";

// TODO: a. create a resource
export const createUser = (req: Request, res: Response) => {
    const { name, email, phone, address } = req.body;

    const avatar = req.file
        ? `${req.protocol}://${req.get("host")}/${req.file.path}`
        : defaultAvatarUrl;

    const newUser = {
        id: generateId(),
        name,
        email,
        phone,
        address,
        avatar,
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created",
        data: newUser,
    });
};

// TODO: b. list resources with basic filtering and pagination
export const getUsers = (req: Request, res: Response) => {
    let page = parseInt(req.query.page as string) || 1;
    let limit = parseInt(req.query.limit as string) || 10;
    let startIndex = (page - 1) * limit;
    let endIndex = page * limit;

    let search = req.query.search as string;

    let filteredUsers = [...users];

    if (search) {
        filteredUsers = users.filter((user) => {
            return (
                user.name.toLowerCase().includes(search.toLowerCase()) ||
                user.email.toLowerCase().includes(search.toLowerCase()) ||
                user.phone.toLowerCase().includes(search.toLowerCase()) ||
                user.address.toLowerCase().includes(search.toLowerCase())
            );
        });
    }

    const meta = {
        total: filteredUsers.length,
        page,
        limit,
        totalPages: Math.ceil(filteredUsers.length / limit),
    };

    let resultUsers = filteredUsers.slice(startIndex, endIndex);

    res.status(200).json({
        "message": "Users retrieved",
        "data": resultUsers,
        "meta": meta,
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
    const id = parseInt(req.params.id);

    let user = users.find((user) => user.id === id);

    if (!user) {
        res.status(404).json({ message: "User not found" });
        return
    }

    const { name, email, phone, address } = req.body;

    const avatar = req.file
        ? `${req.protocol}://${req.get("host")}/${req.file.path}`
        : user.avatar;

    user = {
        ...user,
        name: name || user.name,
        email: email || user.email,
        phone: phone || user.phone,
        address: address || user.address,
        avatar: avatar || defaultAvatarUrl,
    };

    const index = users.findIndex((u) => u.id === id);
    users[index] = user;

    res.status(200).json({
        message: "User updated",
        data: user,
    });

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
