import {createAction} from "typesafe-actions";

const moduleName = `counter` as const;

export const INCREASE = `${moduleName}/INCREASE` as const;
export const DECREASE = `${moduleName}/DECREASE` as const;

export const increase = createAction(INCREASE)<number>();
export const decrease = createAction(DECREASE)<number>();

export const actions = {
    increase,
    decrease
};