import {TodoTemplate} from "../component/todo/TodoTemplate";
import React from "react";
import {connect} from "react-redux";
import {changeInput, insert, remove, toggle} from "../modules/todos";
import {OnChangeInputType, OnInsertType, OnRemoveType, OnToggleType, Todo} from "../types/todo";

const TodosContainer: React.FC<TodosContainerProps> = ({input, todos, changeInput, insert, toggle, remove}) => {
    return (
        <TodoTemplate input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onRemove={remove} onToggle={toggle}/>
    );
};

type TodosContainerProps = {
  input: string;
  todos: Todo[];
  changeInput: OnChangeInputType;
  insert: OnInsertType;
  toggle: OnToggleType;
  remove: OnRemoveType;
};

type StateType = {
    rootReducer: {
        todos: {
            input: string;
            todos: Todo[];
        }
    }
}

export default connect((state: StateType) => ({
    input: state.rootReducer.todos.input,
    todos: state.rootReducer.todos.todos
}),{changeInput, insert, toggle, remove})(TodosContainer);

