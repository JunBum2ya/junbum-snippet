import {ActionType} from "typesafe-actions";
import {actions} from "./actions";

export type TodosAction = ActionType<typeof actions>;

export type TodosState = {
    input: string;
    todos: Todo[];
};

export type Todo = {
    id: number;
    text: string;
    checked: boolean;
};