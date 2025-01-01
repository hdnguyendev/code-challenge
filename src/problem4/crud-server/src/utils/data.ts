import { User } from "../models/user";

export let users: User[] = [
  {
    id: 1,
    name: "Kyo Ho",
    email: "hdnguyen.dev@gmail.com",
    phone: "0123456789",
    address: "DA NANG",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
];

export const generateId = (): number => {
  return users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1;
};