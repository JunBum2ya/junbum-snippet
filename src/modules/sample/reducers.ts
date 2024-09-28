import {GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS, GET_USERS, GET_USERS_FAILURE, GET_USERS_SUCCESS} from "./actions";
import {Post, SampleAction, SampleState, User} from "./types";
import {createReducer} from "typesafe-actions";

const initialState: SampleState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sample = createReducer<SampleState, SampleAction>(initialState, {
    [GET_POST]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: true
        }
    }),
    [GET_POST_SUCCESS]: (state, action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false
        },
        post: action.payload as Post
    }),
    [GET_POST_FAILURE]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false
        }
    }),
    [GET_USERS]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: true
        }
    }),
    [GET_USERS_SUCCESS]: (state,action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        },
        users: action.payload as User[]
    }),
    [GET_USERS_FAILURE]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        }
    })
});

export default sample;