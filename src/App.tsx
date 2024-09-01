import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import TodoPage from "./pages/TodoPage";

const App = () => {
    return (
        <Routes>
            <Route path={`/`} element={<Main/>}/>
            <Route path={`/todo`} element={<TodoPage/>}/>
        </Routes>
    );
}

export default App;
