import './App.css';

import {BlockingModal} from "./component/blockingModal/BlockingModal";
import {useCallback, useState} from "react";
import SelectBox from "./component/selectBox/SelectBox";


function App() {

    const [block, setBlock] = useState(false);

    const handleClick = useCallback(() => setBlock(!block), []);

    return (
        <div className="App">
            <BlockingModal on={block}>
                <div className={`modal-content`} style={{width: '500px', height: '500px', backgroundColor: '#f4f'}}>test</div>
            </BlockingModal>
            <div style={{width: '200px'}}>
                <SelectBox data={[
                    {label: 'blue', value: 'C01'},
                    {label: 'red', value: 'C02'},
                    {label: 'yellow', value: 'C03'},
                ]} placeHolder={'값을 선택하세요.'}/>
            </div>
            <button onClick={handleClick}>로딩 시작</button>
        </div>
    );
}

export default App;
