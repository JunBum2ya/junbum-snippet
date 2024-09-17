import React, {ChangeEvent, FormEvent, useCallback, useState} from "react";
import cn from 'classnames';
import './Todo.scss';
import {MdAdd, MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline} from "react-icons/md";

export const TodoTemplate: React.FC<TodoTemplateProps>
    = ({input, todos, onChangeInput, onInsert, onRemove, onToggle}) => {
    return (
        <div className={`TodoTemplate`}>
            <div className={`app-title`}>일정 관리</div>
            <div className={`content`}>
                <TodoInsert onInsert={onInsert}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            </div>
        </div>
    );
};

const TodoInsert: React.FC<TodoInsertProps> = ({onInsert}) => {

    const [value, setValue] = useState("");

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onInsert(value);
        setValue('');
    }, [onInsert, value]);

    return (
        <form className={`TodoInsert`} onSubmit={onSubmit}>
            <input placeholder={`할 일을 입력하세요.`} value={value} onChange={onChange}/>
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

type TodoTemplateProps = {
    input: string;
    todos: Todo[];
    onChangeInput: OnChangeInputType;
    onInsert: OnInsertType;
    onRemove: OnRemoveType;
    onToggle: OnToggleType;
};

type TodoListProps = {
    todos: Todo[];
    onRemove: OnRemoveType;
    onToggle: OnToggleType;
};

type TodoItemProps = {
    id: number;
    text: string;
    checked: boolean;
    onRemove: OnRemoveType;
    onToggle: OnToggleType;
};

type TodoInsertProps = {
    onInsert: OnInsertType;
};

type OnChangeInputType = (e: string) => void;
type OnInsertType = (e: string) => void;
type OnRemoveType = (e: number) => void;
type OnToggleType = (e: number) => void;

export interface Todo {
    id: number;
    text: string;
    checked: boolean;
}