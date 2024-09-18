import {TodoTemplate} from "../component/todo/TodoTemplate";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import {Todo} from "../types/todo";
import useActions from "../lib/useActions";

const TodosContainer = () => {

    const {input, todos} = useSelector((state: StateType) => state.rootReducer.todos);

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], []);

    return (
        <TodoTemplate input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onRemove={onRemove}
                      onToggle={onToggle}/>
    );
};

type StateType = {
    rootReducer: {
        todos: {
            input: string;
            todos: Todo[];
        }
    }
}

export default TodosContainer;

