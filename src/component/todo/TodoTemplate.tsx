import React, {ChangeEvent, FormEvent, useCallback} from "react";
import cn from 'classnames';
import './Todo.scss';
import {MdAdd, MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";
import {TodoInsertProps, TodoItemProps, TodoListProps, TodoTemplateProps} from "../../types/todo";

export const TodoTemplate: React.FC<TodoTemplateProps>
    = ({input, todos, onChangeInput, onInsert, onRemove, onToggle}) => {
    return (
        <div className={`TodoTemplate`}>
            <div className={`app-title`}>일정 관리</div>
            <div className={`content`}>
                <TodoInsert input={input} onChangeInput={onChangeInput} onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            </div>
        </div>
    );
};

const TodoInsert: React.FC<TodoInsertProps> = ({input, onChangeInput, onInsert}) => {

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        onChangeInput(e.target.value);
    }, [onChangeInput]);

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInsert(input);
        onChangeInput('');
    }, [onInsert, input, onChangeInput]);

    return (
        <form className={`TodoInsert`} onSubmit={onSubmit}>
            <input placeholder={`할 일을 입력하세요.`} value={input} onChange={onChange}/>
            <button type={`submit`}>
                <MdAdd/>
            </button>
        </form>
    );
};

const TodoList: React.FC<TodoListProps> = React.memo(({todos, onRemove, onToggle}) => {
    return (
        <div className={`TodoList`}>
            {todos.map(((todo, index) => (
                <TodoItem key={index} id={todo.id} text={todo.text} checked={todo.checked} onRemove={onRemove}
                          onToggle={onToggle}/>
            )))}
        </div>
    );
});

const TodoItem: React.FC<TodoItemProps> = React.memo(({id, text, checked, onRemove, onToggle}) => {
    return (
        <div className={`TodoItem`}>
            <div className={cn(`checkbox`, {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                <div className={`text`}>{text}</div>
            </div>
            <div className={`remove`} onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
});