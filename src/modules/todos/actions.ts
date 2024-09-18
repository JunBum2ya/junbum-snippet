import {createAction} from "typesafe-actions";
import {Todo} from "./types";

const moduleName = `todos` as const;

export const CHANGE_INPUT = `${moduleName}/CHANGE_INPUT` as const;
export const INSERT = `${moduleName}/INSERT` as const;
export const TOGGLE = `${moduleName}/TOGGLE` as const;
export const REMOVE = `${moduleName}/REMOVE` as const;

let id = 0;

export const changeInput = createAction(CHANGE_INPUT)<string>();

export const insert = createAction(INSERT, (text: string) => ({
    id: id++,
    text,
    checked: false
}))<Todo>();

export const toggle = createAction(TOGGLE)<number>();

export const remove = createAction(REMOVE)<number>();

export const actions = {
    changeInput,
    insert,
    toggle,
    remove
};