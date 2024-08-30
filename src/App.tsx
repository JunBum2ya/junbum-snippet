import './App.css';

import {Todo, TodoTemplate} from "./component/todo/TodoTemplate";
import {useCallback, useRef, useState} from "react";


const App = () => {

    const createBulkTodos = () => {
      const array: Todo[] = [];
      for(let i = 1; i <= 2500; i++) {
          array.push({id: i, text: `할 일 ${i}`, checked: false});
      }
      return array;
    };

    const [todos, setTodos] = useState<Todo[]>(createBulkTodos);

    const nextId = useRef(2501);

    const onInsert = useCallback((text: string) => {
        if(text) {
            const todo = {id: nextId.current, text: text, checked: false};
            setTodos(todos.concat(todo));
            nextId.current += 1;
        }
    },[todos]);

    const onRemove = useCallback((id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    },[todos]);

    const onToggle = useCallback((id: number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo));
    },[todos]);

    return (
        <div className="App">
            <TodoTemplate todos={todos} onInsert={onInsert} onRemove={onRemove} onToggle={onToggle}/>
        </div>
    );
}

export default App;
