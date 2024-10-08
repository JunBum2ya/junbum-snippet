import {requestPost, requestUsers} from "../../lib/api";
import {Post, User} from "./types";
import {createAction} from "typesafe-actions";
import axios, {AxiosError} from "axios";

const moduleName = `sample` as const;

export const GET_POST = `${moduleName}/GET_POST` as const;
export const GET_POST_SUCCESS = `${moduleName}/GET_POST_SUCCESS` as const;
export const GET_POST_FAILURE = `${moduleName}/GET_POST_FAILURE` as const;

const getPostAction = createAction(GET_POST);
const getPostSuccessAction = createAction(GET_POST_SUCCESS)<Post>();
const getPostFailureAction = createAction(GET_POST_FAILURE)<AxiosError>();

export const GET_USERS = `${moduleName}/GET_USERS` as const;
export const GET_USERS_SUCCESS = `${moduleName}/GET_USERS_SUCCESS` as const;
export const GET_USERS_FAILURE = `${moduleName}/GET_USERS_FAILURE` as const;

const getUsersAction = createAction(GET_USERS);
const getUsersSuccessAction = createAction(GET_USERS_SUCCESS)<Post>();
const getUsersFailureAction = createAction(GET_USERS_FAILURE)<AxiosError>();

export const getPost = (id: number) => async (dispatch: any) => {
    dispatch({type: GET_POST});
    try {
        const response = await requestPost<Post>(id);
        dispatch({type: GET_POST_SUCCESS, payload: response.data});
    } catch (e) {
        if(axios.isAxiosError(e)) {
            dispatch({
                type: GET_POST_FAILURE,
                payload: e,
                error: true
            });
        }
        throw e;
    }
};

export const getUsers = (id: number) => async (dispatch: any) => {
    dispatch({type: GET_USERS});
    try {
        const response = await requestUsers<User[]>(id);
        dispatch({type: GET_USERS_SUCCESS, payload: response.data});
    } catch (e) {
        if(axios.isAxiosError(e)) {
            dispatch({
                type: GET_USERS_FAILURE,
                payload: e,
                error: true
            });
        }
        throw e;
    }
};

export const actions = {
    getPostAction,
    getPostSuccessAction,
    getPostFailureAction,
    getUsersAction,
    getUsersSuccessAction,
    getUsersFailureAction
}


