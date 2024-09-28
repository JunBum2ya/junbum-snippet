import {TodoTemplate} from "../component/todo/TodoTemplate";
import React from "react";
import {useSelector} from "react-redux";
import {changeInput, insert, remove, Todo, toggle} from "../modules/todos";
import useActions from "../lib/useActions";

const TodosContainer = () => {

    const {input, todos} = useSelector((state: StateType) => state.todos);

    const [onChangeInput, onInsert, onToggle, onRemove] = useActions([changeInput, insert, toggle, remove], []);

    return (
        <TodoTemplate input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onRemove={onRemove}
                      onToggle={onToggle}/>
    );
};

type StateType = {
    todos: {
        input: string;
        todos: Todo[];
    };
}

export default TodosContainer;

