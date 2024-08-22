import React, {useState} from 'react';
import './App.css';
import SelectBox from "./component/SelectBox";

function App() {

  const [text, setText] = useState("");
  const [data, setData]
      = useState<{label: string, value: string}[]>([
      {label: "red", value: "C001"},
      {label: "blue", value: "C002"},
      {label: "yellow", value: "C003"}
  ]);

  const handleChangeSelectBox = (value: string) => {
    alert(value);
  };

  const handleClickButton = () => {
    data.push({value: text, label: text});
    setText(() => "");
  };

  return (
    <div className="App">
      <div style={{width: '100px'}}>
        <SelectBox data={data} onChange={handleChangeSelectBox}/>
        <input value={text} onChange={(event) => setText(event.target.value)}/>
        <button onClick={handleClickButton}>셀렉트 박스 추가</button>
      </div>
    </div>
  );
}

export default App;
