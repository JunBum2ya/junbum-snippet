import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import TodoPage from "./pages/TodoPage";
import SelectBoxPage from "./pages/SelectBoxPage";
import HtmlCapturePage from "./pages/HtmlCapturePage";
import ColorPage from "./pages/ColorPage";
import ClockPage from "./pages/ClockPage";
import SamplePage from "./pages/SamplePage";

const App = () => {
    return (
        <Routes>
            <Route path={`/`} element={<Main/>}/>
            <Route path={`/todo`} element={<TodoPage/>}/>
            <Route path={'/select'} element={<SelectBoxPage/>}/>
            <Route path={'/capture'} element={<HtmlCapturePage/>}/>
            <Route path={'/color'} element={<ColorPage/>}/>
            <Route path={`/clock`} element={<ClockPage/>}/>
            <Route path={`/sample`} element={<SamplePage/>}/>
        </Routes>
    );
}

export default App;
