import { Router } from "express";
import { getUsers, createUser, getUser, updateUser, deleteUser } from "../controllers/userController";

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/users', getUsers);
router.post('/users', createUser);
router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;