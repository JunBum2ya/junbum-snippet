import {Todo} from "../types/todo";

const moduleName = `todos`;

const CHANGE_INPUT = `${moduleName}/CHANGE_INPUT`;
const INSERT = `${moduleName}/INSERT`;
const TOGGLE = `${moduleName}/TOGGLE`;
const REMOVE = `${moduleName}/REMOVE`;

let id = 0;

export const changeInput = (input: string) => ({
    type: CHANGE_INPUT,
    input
});

export const insert = (text: string): {type: string, todo: Todo} => ({
   type: INSERT,
   todo: {
       id: id++,
       text,
       checked: false
   }
});

export const toggle = (id: number) => ({
   type: TOGGLE,
   id
});

export const remove = (id: number) => ({
   type: REMOVE,
   id
});

type TodosStateType = {
    input: string,
    todos: Todo[]
};

type TodosActionType = {
    type: string,
    input?: string,
    todo?: Todo,
    id?: number
};

const initialState: TodosStateType = {
    input: '',
    todos: []
};

const todos = (state = initialState, action: TodosActionType): TodosStateType => {
    switch (action.type) {
        case CHANGE_INPUT:
            return {
                ...state,
                input: action.input ?? ''
            };
        case INSERT:
            if(!action.todo) throw new Error("Fail Insert todo");
            return {
                ...state,
                todos: state.todos.concat(action.todo)
            }
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo)
            }
        case REMOVE:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        default:
            return state;
    }
};

export default todos;