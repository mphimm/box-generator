import React, { useState } from 'react';
import './App.css';
import Box from "./Components/Box";
import InputBox from "./Components/InputBox";


function App() {
  const [color, setColors] = useState<string[]>(["hotpink", "pink", "yellow"]);
  return (
    <div className="App">
      <InputBox setColors={setColors} color = {color}/>
      {color.map(color => (
        <Box color={color} height={200} width={200}/>
      ))}
    </div>
  );
}

export default App;
