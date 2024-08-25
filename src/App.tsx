import './App.css';
import LoadingEffect from "./component/loadingEffect/LoadingEffect";
import {useCallback, useEffect, useState} from "react";

function App() {

    const [processOn, setProcessOn] = useState<boolean>(false);
    const [process, setProcess] = useState<number>(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (processOn) {
            timeout = setTimeout(() => {
                setProcess(current => current + 1);
            }, 1000);

            if (process > 100) {
                setProcessOn(false);
                clearTimeout(timeout);
            }
        }

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        }
    }, [processOn, process]);

    const handleClick = useCallback(() => {
        setProcess(0);
        setProcessOn(true);
    }, []);

    return (
        <div className="App">
            <LoadingEffect on={processOn} process={process}/>
            <button onClick={handleClick}>로딩 시작</button>
        </div>
    );
}

export default App;
