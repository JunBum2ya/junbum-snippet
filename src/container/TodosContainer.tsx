import {Todo, TodoTemplate} from "../component/todo/TodoTemplate";
import React from "react";
import {connect} from "react-redux";
import todos, {changeInput, insert, remove, toggle} from "../modules/todos";

const TodosContainer: React.FC<TodosContainerProps> = ({input, todos, changeInput, insert, toggle, remove}) => {
    return (
        <TodoTemplate input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onRemove={remove} onToggle={toggle}/>
    );
};

type TodosContainerProps = {
  input: string;
  todos: Todo[];
  changeInput: any;
  insert: any;
  toggle: any;
  remove: any;
};

export default connect((state: any) => ({
    input: state.rootReducer.todos.input,
    todos: state.rootReducer.todos.todos
}),{changeInput, insert, toggle, remove})(TodosContainer)