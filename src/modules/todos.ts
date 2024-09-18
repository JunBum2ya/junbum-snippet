import {action, ActionType, createAction, createReducer} from "typesafe-actions";

const moduleName = `todos` as const;

const CHANGE_INPUT = `${moduleName}/CHANGE_INPUT` as const;
const INSERT = `${moduleName}/INSERT` as const;
const TOGGLE = `${moduleName}/TOGGLE` as const;
const REMOVE = `${moduleName}/REMOVE` as const;

let id = 0;

export const changeInput = createAction(CHANGE_INPUT)<string>();

export const insert = createAction(INSERT, (text: string) => ({
    id: id++,
    text,
    checked: false
}))<Todo>();

export const toggle = createAction(TOGGLE)<number>();

export const remove = createAction(REMOVE)<number>();

const actions = {
  changeInput,
  insert,
  toggle,
  remove
};

type TodosAction = ActionType<typeof actions>;

export type TodosState = {
    input: string;
    todos: Todo[];
};

export type Todo = {
    id: number;
    text: string;
    checked: boolean;
};

const initialState: TodosState = {
    input: '',
    todos: []
};

const todos = createReducer<TodosState, TodosAction>(initialState, {
    [CHANGE_INPUT]: (state, action) => ({
        ...state,
        input: action.payload
    }),
    [INSERT]: (state, {payload}) => ({
        ...state,
        todos: state.todos.concat(payload)
    }),
    [TOGGLE]: (state, {payload}) => ({
       ...state,
       todos: state.todos.map(todo => todo.id === payload ? {...todo, checked: !todo.checked} : todo)
    }),
    [REMOVE]: (state, {payload}) => ({
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload)
    })
});

export default todos;