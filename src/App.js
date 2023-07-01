import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ChildArea } from './components/ChildArea';

function App() {
  console.log("App");
  const [inputText, setInputText] = useState("");
  const [isShowing, setIsShowing] = useState(false);

  const changeIsShowingFlag = () => {
    return setIsShowing(!isShowing)
  }
  
  return (
    <div className="App">
      <input
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      <br></br>
      inputされた文字列：{inputText}
      <br></br>
      <button onClick={changeIsShowingFlag}>表示</button>
      <br></br>
      <ChildArea open={isShowing}></ChildArea>
    </div>
  );
}

export default App;
