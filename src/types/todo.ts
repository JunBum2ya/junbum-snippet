export type TodoTemplateProps = {
    input: string;
    todos: Todo[];
    onChangeInput: OnChangeInputType;
    onInsert: OnInsertType;
    onRemove: OnRemoveType;
    onToggle: OnToggleType;
};

export type TodoListProps = {
    todos: Todo[];
    onRemove: OnRemoveType;
    onToggle: OnToggleType;
};

export type TodoItemProps = {
    id: number;
    text: string;
    checked: boolean;
    onRemove: OnRemoveType;
    onToggle: OnToggleType;
};

export type TodoInsertProps = {
    input: string;
    onChangeInput: OnChangeInputType;
    onInsert: OnInsertType;
};

export type TodosStateType = {
    input: string,
    todos: Todo[]
};

export type TodosActionType = {
    type: string,
    input?: string,
    todo?: Todo,
    id?: number
};

export type OnChangeInputType = (input: string) => void;
export type OnInsertType = (e: string) => void;
export type OnRemoveType = (e: number) => void;
export type OnToggleType = (e: number) => void;

export interface Todo {
    id: number;
    text: string;
    checked: boolean;
}