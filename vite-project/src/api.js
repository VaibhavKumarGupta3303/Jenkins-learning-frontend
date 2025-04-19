import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_URL

export const fetchItems = () => axios.get(BASE_URL);
export const deleteItem = (id) => axios.delete(`${BASE_URL}/${id}`);
export const addItem = (item) => axios.post(BASE_URL, item);
