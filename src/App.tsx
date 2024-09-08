import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import TodoPage from "./pages/TodoPage";
import SelectBoxPage from "./pages/SelectBoxPage";
import HtmlCapturePage from "./pages/HtmlCapturePage";

const App = () => {
    return (
        <Routes>
            <Route path={`/`} element={<Main/>}/>
            <Route path={`/todo`} element={<TodoPage/>}/>
            <Route path={'/select'} element={<SelectBoxPage/>}/>
            <Route path={'/capture'} element={<HtmlCapturePage/>}/>
        </Routes>
    );
}

export default App;
