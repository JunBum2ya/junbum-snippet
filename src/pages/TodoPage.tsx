import {Todo, TodoTemplate} from "../component/todo/TodoTemplate";
import {useCallback, useReducer, useRef} from "react";
import {todoReducer} from "../component/todo/todoReducer";

const createBulkTodos = () => {
    const array: Todo[] = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({id: i, text: `할 일 ${i}`, checked: false});
    }
    return array;
};

const TodoPage = () => {

    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

    const nextId = useRef(2501);

    const onInsert = useCallback((text: string) => {
        if (text) {
            const todo = {id: nextId.current, text: text, checked: false};
            dispatch({type: 'INSERT', todo});
            nextId.current += 1;
        }
    }, []);

    const onRemove = useCallback((id: number) => {
        dispatch({type: 'REMOVE', id});
    }, []);

    const onToggle = useCallback((id: number) => {
        dispatch({type: 'TOGGLE', id})
    }, []);

    return (
        <div className="App">
            <TodoTemplate todos={todos} onInsert={onInsert} onRemove={onRemove} onToggle={onToggle}/>
        </div>
    );

};

export default TodoPage;