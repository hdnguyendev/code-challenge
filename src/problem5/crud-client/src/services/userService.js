import axios from "axios";

const API_URL = "http://localhost:9999/api/users";

export const getUsers = async (page = 1, limit = 10, searchQuery = '') => axios.get(`${API_URL}?page=${page}&limit=${limit}&search=${searchQuery}`);
export const getUser = async (id) => axios.get(`${API_URL}/${id}`);
export const createUser = async (user) => axios.post(API_URL, user);
export const updateUser = async (id, user) => axios.put(`${API_URL}/${id}`, user);
export const deleteUser = async (id) => axios.delete(`${API_URL}/${id}`);