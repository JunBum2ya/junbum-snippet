import {Todo} from "./TodoTemplate";
import {produce} from "immer";

export const todoReducer = (todos: Todo[], action: TodoAction): Todo[] => {
    return produce(todos, draft => {
       switch (action.type) {
           case "INSERT":
               if(!action.todo) throw Error("Not Data");
               return draft.concat(action.todo);
           case "REMOVE":
               return draft.filter(todo => todo.id !== action.id);
           case "TOGGLE":
               const todo = draft.find(todo => todo.id === action.id);
               if(todo) {
                   todo.checked = !todo.checked;
               }
               return draft;
           default:
               return draft;
       }
    });
};

type TodoAction = {
    type: 'INSERT' | 'REMOVE' | 'TOGGLE';
    id?: number;
    todo?: Todo;
}