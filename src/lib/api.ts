import axios from "axios";

export const requestPost = <T>(id: number) => axios.get<T>(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const requestUsers = <T>(id: number) => axios.get<T>("https://jsonplaceholder.typicode.com/users");