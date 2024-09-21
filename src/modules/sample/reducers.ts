import {createReducer} from "typesafe-actions";
import {GET_POST, GET_POST_FAILURE, GET_POST_SUCCESS, GET_USERS} from "./actions";
import {SampleAction, SampleState} from "./types";

const initialState = {
    loading: {
        GET_POST: false,
        GET_USERS: false
    },
    post: null,
    users: null
};

const sample = createReducer<SampleState, any>(initialState, {
    [GET_POST]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: true
        }
    }),
    [GET_POST_SUCCESS]: (state,action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_POST: false
        },
        post: action.payload
    }),
    [GET_POST_FAILURE]: (state,action) => ({
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
    [GET_POST_SUCCESS]: (state,action) => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        },
        users: action.paload
    }),
    [GET_POST_FAILURE]: state => ({
        ...state,
        loading: {
            ...state.loading,
            GET_USERS: false
        }
    })
});

export default sample;