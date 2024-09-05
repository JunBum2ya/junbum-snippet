import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import TodoPage from "./pages/TodoPage";
import SelectBoxPage from "./pages/SelectBoxPage";

const App = () => {
    return (
        <Routes>
            <Route path={`/`} element={<Main/>}/>
            <Route path={`/todo`} element={<TodoPage/>}/>
            <Route path={'/select'} element={<SelectBoxPage/>}/>
        </Routes>
    );
}

export default App;
