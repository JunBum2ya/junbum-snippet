import {TodosAction, TodosState} from "./types";
import {createReducer} from "typesafe-actions";
import {CHANGE_INPUT, INSERT, REMOVE, TOGGLE} from "./actions";
import {produce} from "immer";

const initialState: TodosState = {
    input: '',
    todos: []
};

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [CHANGE_INPUT]: (state, {payload: input}) => produce(state, draft => {
        draft.input = input;
    }),
    [INSERT]: (state, {payload: todo}) => produce(state, draft => {
        draft.todos.push(todo);
    }),
    [TOGGLE]: (state, {payload: id}) => produce(state, draft => {
        const todo = draft.todos.find(todo => todo.id === id);
        if(todo) {
            todo.checked = !todo.checked;
        }
    }),
    [REMOVE]: (state, {payload: id}) => produce(state, draft => {
        const index = draft.todos.findIndex(todo => todo.id === id);
        draft.todos.splice(index, 1);
    })
});

export default todos;