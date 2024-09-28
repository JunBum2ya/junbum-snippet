import {createReducer} from "typesafe-actions";
import {CounterAction} from "./types";
import {DECREASE, INCREASE} from "./actions";

const initialState: number = 0;

const counter = createReducer<number, CounterAction>(initialState, {
    [INCREASE]: (state, action) => {
        return state + 1;
    },
    [DECREASE]: (state, action) => {
        return state - 1;
    }
});

export default counter;