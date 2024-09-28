import {actions} from "./actions";

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
};

export type User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: number,
            lng: number
        },
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
};

export type SampleState = {
    loading: {
        GET_POST: boolean,
        GET_USERS: boolean
    },
    post: Post | null,
    users: User[] | null
};

export type SampleAction = any;