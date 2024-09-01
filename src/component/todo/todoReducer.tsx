import {Todo} from "./TodoTemplate";

export const todoReducer = (todos: Todo[], action: TodoAction): Todo[] => {
    switch (action.type) {
        case "INSERT":
            if(!action.todo) throw Error("Not Data");
            return todos.concat(action.todo);
        case "REMOVE":
            return todos.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return todos.map(todo => todo.id === action.id ? {...todo, checked: !todo.checked} : todo);
        default:
            return todos;
    }
};

type TodoAction = {
    type: 'INSERT' | 'REMOVE' | 'TOGGLE';
    id?: number;
    todo?: Todo;
}