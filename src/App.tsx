import './App.css';

import {useCallback, useEffect, useReducer} from "react";
import {LoadingEffect, LoadingEffectState, loadingBarReducer} from "./component/loadingEffect/LoadingEffect";

const initialState: LoadingEffectState = { on: false, process: 0 };

function App() {

    const [state, dispatch] = useReducer(loadingBarReducer, initialState);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (state.on) {
            timeout = setTimeout(() => dispatch({ type: 'PROCESS' }), 1000);

            if (state.process > 100) {
                dispatch({ type: 'RESET' });
                clearTimeout(timeout);
            }
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [state]);

    const handleClick = useCallback(() => dispatch({ type: 'START' }), []);

    return (
        <div className="App">
            <LoadingEffect on={state.on} process={state.process}/>
            <button onClick={handleClick}>로딩 시작</button>
        </div>
    );
}

export default App;
